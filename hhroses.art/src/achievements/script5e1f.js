function getTrophies() {
  let trophies = [];
  try {
      trophies = JSON.parse(localStorage.getItem('my_site_trophies')) || [];
      if (!Array.isArray(trophies)) trophies = [];
  } catch (error) {
      console.error("Corrupted trophy data found! Wiping clean...", error);
      localStorage.removeItem('my_site_trophies');
  }
  return trophies;
} 
function unlockAchievement(id, name, icon, description, category = 'general', soundUrl = null) {
  let trophies = getTrophies();
  let alreadyUnlocked = trophies.some(trophy => trophy.id === id); 
  if (!alreadyUnlocked) { 
    trophies.push({ 
        id: id, 
        name: name, 
        icon: icon, 
        description: description, 
        category: category,
        soundUrl: soundUrl
    }); 
    localStorage.setItem('my_site_trophies', JSON.stringify(trophies));
    showNotification(name, icon, soundUrl);
    renderTrophyCase();
  }
}
function formatIcon(iconStr) {
  if (!iconStr) return '';
  if (iconStr.startsWith('http') || iconStr.match(/\.(png|jpe?g|gif|svg|webp)$/i)) {
    //force the 40x40 size regardless of the page's stylesheet
    return `<img src="${iconStr}" alt="Achievement Icon" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; border-radius: 5px;">`;
  }
  return iconStr; // It's likely an emoji or raw text
}
function getToastDoc() {
  try {
    // same-origin iframe? target the top window so the toast isn't trapped in the iframe box
    if (window.top && window.top !== window && window.top.document) {
      return window.top.document;
    }
  } catch (e) {
    // cross-origin iframe, can't reach window.top — fall back to rendering locally
  }
  return document;
}
function ensureToastStyles(doc) {
  if (doc.getElementById('achievement-toast-styles')) return;
  const style = doc.createElement('style');
  style.id = 'achievement-toast-styles';
  style.textContent = `
/* The hidden notification box */
@font-face{
  font-family: 'basiic'; /* font by cinni.net !!! */
  src: local(''), url('https://cinni.net/fonts/basiic.ttf') format('truetype');
  font-display: swap;
}    
.achievement-toast {
  position: fixed; top: -100px; left: 20px;
  background: #4f4f51; color: #fff; padding: 5px; border-radius: 5px;
  display: flex; align-items: center; gap: 15px;
  box-shadow: 0 3px 1px #393044, 0 1px 3px rgba(0,0,0,0.9);
  transition: top 0.5s ease-in-out; z-index: 99999999999 !important;
  font-family: 'basiic', sans-serif; border: 1px solid #393044;
  width: 250px !important; height: 50px !important;
  min-width: 250px !important; min-height: 50px !important;
  max-width: 250px !important; max-height: 50px !important;
  overflow:hidden;
}
.achievement-toast.show { top: 20px; }
.achievement-toast .icon {
  min-width: 50px; min-height: 25px; max-width: 50px; max-height: 40px !important;
  font-size: 30px; margin:0;margin-right:-5px !important;
  border: none !important; box-shadow: none !important; outline:none !important;
  filter: none; text-shadow:none !important; object-fit: cover !important;
  -webkit-box-reflect: below -8px linear-gradient(to bottom, transparent 50%, rgba(255,255,255,1)) !important;
}
.achievement-toast .icon img {
  min-width: 50px; min-height: 25px; max-width: 50px; max-height: 40px !important;
  border: none !important;
  object-fit: cover !important; vertical-align: middle; border: none;
}
.achievement-toast p { margin: 0 auto; text-align: center;
  text-shadow: 1px 1px #393044, -1px 1px #393044, 1px -1px #393044, -1px -1px #393044; 
  font-size:11px !important; font-family:'basiic',Times;
  line-height:11px;
}
.achievement-toast p strong {
  margin-top: 2px; display: block; width: 100%; color: #FFD700;
  text-shadow: 1px 1px #393044, -1px 1px #393044, 1px -1px #393044, -1px -1px #393044;
  text-align: center;
  font-size:12px !important; font-family:'basiic',Times;
  line-height:12px;
}
  `;
  doc.head.appendChild(style);
}
function showNotification(name, icon, soundUrl) {
  const defaultSound = 'audio/notifications/xbox-360-achievement-sound.mp3';
  const ding = new Audio(defaultSound);
  ding.play().catch(error => console.log("Browser blocked auto-play"));

  const formattedIcon = formatIcon(icon);
  const targetDoc = getToastDoc();
  ensureToastStyles(targetDoc);

  const toast = targetDoc.createElement('div');
  toast.className = 'achievement-toast';
  toast.innerHTML = `
    <span class="icon">${formattedIcon}</span> 
    <p>Achievement Unlocked!<br><strong>${name}</strong></p>
  `;
  targetDoc.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}