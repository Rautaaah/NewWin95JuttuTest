// desktop-config.js RENAMED defaultpage.js
// Centralized configuration for H.H.Roses Windows 98 Desktop
// THIS CODE IS FRAKENSTEIN ITS LIKE A COMBO OF WIN98.JS AND MY OWN CODE
// i couldnt figure out the open source code shit cuz im stupid so honestly
// i redid it and might have messed a bunch of shit up
// tbh im really bad at javascript and have no idea what i'm doing. 
// well i kind of know what im doing actually but 
// i dont know IM LEARNING.
// ============================================================

function playError() {
  const sound = new Audio('audio/Windows98ErrorSoundEffect.mp3');
  sound.play().catch(e => console.log("Audio playback failed:", e));
}
function playShutDownSound() {
  const sound = new Audio('audio/sound-effects/win98OS/Win98LogoffShutdown.mp3');
  sound.play().catch(e => console.log("Audio playback failed:", e));
}
// ============================================================
// shared taskbar
// ============================================================

function injectTaskbar() {
  if (document.getElementById("taskbar")) return; // already injected
  var placeholder = document.getElementById("taskbar-placeholder");
  if (!placeholder) return;

  placeholder.outerHTML = `
    <!-- taskbar -->
    <div id="taskbar" class="window tasbarr">
      <button id="startBtn">
        <img src="../win98icons.alexmeub.com/icons/png/windows-4.png" />
        <text style="margin-bottom: 4px; font-weight: bold">Start</text>
      </button>
      <!-- Start Menu -->
      <div id="startMenu" class="window tasbarr" style="position: absolute; bottom: 28px; width: 202px; display: none;">
        <img style="position: absolute; bottom: 3px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAABpBAMAAAAn2XUfAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAD1BMVEUAAHsAAP97fXu9vr3///++vaitAAAB7klEQVQ4y31TgZGjMAyUCAVYhAKw4wISTAFgq/+abiXDX/7vc54B1stqJbBE5Ovx7M9Rn6Nqx43qtoz+YthprHTbLwzwhocfmJT00lPWOsZtcTyUcNMW6FrTcoFSnid9U6yznrzm5dHr4cZUw7hDxcjCmaYrL83Eh7scTDkOOxMFblbGzXnaaq68LeCZBtVIqycLgaPdTE/2cqt08g3/QVxP9zar7lCAH4Hz4f40H3ObrR5sckWKA5oQAtTH5nUy42Oq7mKhgZEYqS1TuKdFVvMPwqOuQSAwHrEaoTWeH9hYLviwbKghuP9dT95jVV9ssUFmCxUOhGuCvC2eV1iy6cELT9liTc+ey4LNB7iJQC9BxhYl9BpkmjbsBLEwMs+Lt9jovLiPeUI3N0Qc4pr58OvUxKiO5dRbrncfrM2L6Bgb6TilR0pr16j22N9werSULs/vGixvnP6p4Qd2pz81lBIvnEspr47vH2L/xm7Q9e0N/1fPn3xY5IzFqX/zb/gjL6mH4nx50vbyRrBcEPiRgpeifWd9Jb6zPkFv+GH3s/OW8X6j/p9Xr8dOrpiN6YFrRJeaT+ka54Vhc/Y/eVPuzhvqPUPeAdqePlOGXl6z8cmePkcp+CcF3+CyaaI+bZheplNnjM9sp01qA0w+o/QFntuBDzkP6qsAAAAASUVORK5CYII=" />
        <ul class="menu" style="border-left: 21px solid #000080">
          <li onclick="playError()" > <img src="../win98icons.alexmeub.com/icons/png/windows_update_large-4.png" />Windows Update </li>
          <hr />
          <li class="arrow">
            <img src="../win98icons.alexmeub.com/icons/png/file_program_group-0.png" /> <u>P</u>rograms <div class="window">
              <ul class="menu">
                <li class="arrow">
                  <img src="../win98icons.alexmeub.com/icons/png/directory_closed-1.png" /> Accessories <div class="window">
                    <ul class="menu applist">
                      <li onclick="openApp('Calculator')"><img src="images/icons/calculator-16x16.png" />Calculator</li>
                      <li onclick="openApp('notepad')"><img src="images/icons/notepad-16x16.png" />Notepad</li>
                      <li onclick="openApp('MSPaint')"><img src="images/icons/paint-16x16.png" />MS Paint</li>
                      <li onclick="openApp('SoundRecorder')"><img src="images/icons/speaker-32x32.png" />Sound Recorder</li>
                    </ul>
                  </div>
                </li>
                <li class="arrow">
                  <img src="../win98icons.alexmeub.com/icons/png/directory_closed-1.png" /> Games <div class="window">
                    <ul class="menu applist">
                      <li onclick="openApp('Solitaire')"><img src="images/icons/solitaire-16x16.png" />Solitaire</li>
                      <li onclick="openApp('minesweeper')"><img src="images/icons/minesweeper-16x16.png" />Minesweeper</li>
                      <li onclick="openApp('pixiejump')"><img src="https://hhroses.neocities.org/programs/PIXIE-JUMP/pixiejumpa.png" style="width:auto;height:16px;" />Pixie Jump</li>
                      <li onclick="openApp('pixieportal')"><img src="images/navbar-icons/star.png" />Pixie Path</li>
                      <li onclick="openApp('egg')"><img src="images/egg.png" />Egg</li>
                      <li onclick="openApp('FirstDressUp')"><img src="images/icons/dressupgameicon.gif" />1st Dressup Game</li>
                      <li onclick="openApp('MiniPiano')"><img src="images/icons/piano-icon.png" />Mini Piano</li>
                      <li onclick="openApp('TicTacToe')"><img src="images/icons/tictactoeicon.png" />Tic Tac Toe</li>
                      <li onclick="openApp('ConnectFour')"><img src="images/icons/connect4icon.png" />Connect Four</li>
                      <li onclick="openApp('FrogSoccer')"><img src="images/icons/frogicon.png" />Frog Soccer</li>
                      <li onclick="openApp('SimplePuzzle')"><img src="images/icons/squarepuzzle-32.png" />Simple Puzzle</li>
                      <li onclick="openApp('SlidingPuzzle')"><img src="images/icons/sliding-puzzle-32.png" />Sliding Puzzle</li>
                      <li onclick="openApp('MatchEmUp')"><img src="images/icons/matchemup-16.png" />Match 'Em Up</li>
                      <li onclick="openApp('GoblinPrison')"><img src="https://hhroses.art/images/icons/goblinPrison16x16.png" />Goblin Prison</li>
                      <li onclick="openApp('GameBoy')"><img src="https://hhroses.art/images/icons/gameby16x16.png" />Game Boy?</li>
                      <li onclick="openApp('Magic8Ball')"><img src="https://hhroses.art/images/icons/Magic8Ball-16x16.png" /> Magic 8 Ball</li>
                      <a href="https://hhroses.art/programs/the-backrooms/" target="_blank"><li><img src="https://hhroses.art/images/icons/thebackrooms-16.jpg">The Backrooms</li></a>
                      <li onclick="openApp('SplashCursor')"><img src="https://hhroses.art/images/icons/splash-cursor-16x16.jpg" />SplashCursor</li>
                    </ul>
                  </div>
                </li>
                <li class="arrow">
                  <img src="https://win98icons.alexmeub.com/icons/png/directory_closed-1.png" /> StartUp <div class="window">
                    <ul class="menu applist disabledtext">
                       (none)
                    </ul>
                  </div>
                </li>
                <li><img src="https://win98icons.alexmeub.com/icons/png/ms_dos-1.png" style="height: 16px" />MS-DOS Prompt</li>
                <li onclick="openApp('explorer')"><img src="https://hhroses.art/images/icons/internet-explorer-16x16.png">Explorer</li>
                <li onclick="openApp('chat')"><img src="https://hhroses.art/images/icons/outlook-express-16x16.png">Chat</li>
              </ul>
            </div>
          </li>
          <li class="arrow">
            <img src="https://win98icons.alexmeub.com/icons/png/directory_favorites_small-2.png" /> <u>F</u>avorites <div class="window">
              <ul class="menu applist">
                <li onclick="openApp('explorer')"><img src="https://win98icons.alexmeub.com/icons/png/html2-4.png" />Google</li>
                <li onclick="openApp('homepage')"><img src="https://win98icons.alexmeub.com/icons/png/html2-4.png" />Homepage</li>
                <li onclick="openApp('gamespage')"><img src="https://win98icons.alexmeub.com/icons/png/html2-4.png" />Games</li>
                <li onclick="openApp('aboutme')"><img src="https://win98icons.alexmeub.com/icons/png/html2-4.png" />About the Webmaster</li>
              </ul>
            </div>
          </li>
          <li class="arrow">
            <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs_small-3.png" /> <u>D</u>ocuments <div class="window">
              <ul class="menu applist">
                <li onclick="openApp('credits')"><img src="https://hhroses.art/images/icons/document-16x16.png">Credits</li>
              </ul>
            </div>
          </li>
          <li class="arrow">
            <img src="https://win98icons.alexmeub.com/icons/png/settings_gear-3.png" /> <u>S</u>ettings <div class="window">
              <ul class="menu applist">
                <li onclick="openApp('Themes')"><img src="https://hhroses.neocities.org/images/icons/themes-16x16.png" />Desktop Themes</li>
                <li onclick="playError()" ><img src="https://win98icons.alexmeub.com/icons/png/directory_control_panel-1.png" />Control Panel</li>
                <li onclick="playError()" ><img src="https://win98icons.alexmeub.com/icons/png/directory_business_calendar-5.png" />Printers</li>
                <li onclick="playError()" ><img src="https://win98icons.alexmeub.com/icons/png/windows_button-1.png" />Taskbar &amp; Start Menu</li>
                <li onclick="playError()" ><img src="https://win98icons.alexmeub.com/icons/png/directory_explorer-3.png">Folder Options</li>
                <li onclick="playError()" ><img src="https://win98icons.alexmeub.com/icons/png/desktop_old-4.png" />Active Desktop</li>
                <hr />
                <li onclick="playError()" ><img src="https://win98icons.alexmeub.com/icons/png/windows_update_large-3.png" />Windows Update</li>
              </ul>
            </div>
          </li>
          <li class="arrow"><img src="https://win98icons.alexmeub.com/icons/png/search_file_2-3.png" /> <u>F</u>ind 
            <div class="window">
              <ul class="menu applist disabledtext">
                 (none)
              </ul>
            </div>
          </li> 
          <li onclick="playError()" ><img src="https://win98icons.alexmeub.com/icons/png/help_book_small-3.png" /> <u>H</u>elp </li>
          <li onclick="openApp('run')"><img src="https://win98icons.alexmeub.com/icons/png/application_hourglass_small-3.png" /> <u>R</u>un </li>
          <hr />
          <li onclick="openApp('LogOff')"><img src="https://win98icons.alexmeub.com/icons/png/key_win-3.png" /> Log Off.. </li>
          <li onclick="shutdownSequence();"><img src="https://win98icons.alexmeub.com/icons/png/shut_down_with_computer-0.png" /> Sh<u>u</u>t Down </li>
        </ul>
      </div>
      <div id="taskBtnZone">
        <div id="taskBtnList"></div>
      </div>
      <div class="taskbar-divider tasbarr" style="bottom: 4px; left: 60px"></div>
      <div class="taskbar-divider2 tasbarr" style="bottom: 7px; left: 65px"></div>
      <span style="position: absolute; left: 73px; bottom: 6px">
        <img alt="desktop icon" style="margin-right: 4px; cursor: url('https://hhroses.neocities.org/cursors/pointer.png'), pointer;" src="https://hhroses.neocities.org/images/icons/desktop-16x16.png" class="tasbarr taskbaricon taskbaricon1" onclick="document.getElementById('errorsound').currentTime=0;document.getElementById('errorsound').play()"/>
        <img alt="internet explorer icon" style="margin-right: 4px; cursor: url('cursors/pointer.png'), pointer;" src="https://hhroses.neocities.org/images/icons/internet-explorer-16x16.png" class="tasbarr taskbaricon taskbaricon2" onclick="togglePushed(this); openApp('explorer')" />
        <img alt="mail icon" style="margin-right: 4px; cursor: url('cursors/pointer.png'), pointer;" src="https://hhroses.neocities.org/images/navbar-icons/mail.png" class="tasbarr taskbaricon taskbaricon3" onclick="togglePushed(this); openApp('chat')" />
      </span>
      <div class="taskbar-divider" style="bottom: 4px; left: 139px;"></div>
      <div class="taskbar-divider2" style="bottom: 7px; left: 144px;"></div>
      <div class="taskbar-divider" style="bottom: 4px; right: 88px;"></div>
      <span id="notificationArea" style="background-color: #c3c3c3; border-left: 4px solid #c3c3c3; position: absolute; bottom: 4px; right: 2px; width: 85px; height: 23px;">
        <div style="float: left; margin-left: 2px; margin-top: 1px">
          <img src="https://hhroses.neocities.org/images/icons/task-scheduler-16x16.png" title="Task Scheduler is not ready." onclick="document.getElementById('errorsound').currentTime=0;document.getElementById('errorsound').play()"/>
          <img src="https://hhroses.neocities.org/images/icons/audio-okay-16x16.png" title="Volume" id="volumeIcon" style="cursor: url('cursors/pointer.png'), pointer;" />
          <div id="taskbarvolume" class="volumebutton">
            <audio id="volumesound">
              <source src="https://hhroses.neocities.org/audio/Windows98DingSoundEffect.mp3">
            </audio>
            <div class="field-row">
              <div class="is-vertical" onclick="playvolumesound();">
                <input id="volume-slider" style="cursor: url('cursors/pointer.png'), pointer;" class="has-box-indicator" height="10px" type="range" min="1" max="8" step="1" value="2" />
              </div>
            </div>
          </div>
          <span id="clock" style="position: absolute; bottom: 4px; right: 4px; margin: 2px"></span>
        </div>
      </span>
    </div>
    <!-- window menu -->
    <div class="window" style="position: absolute; display: none">
      <ul class="menu">
        <li><img />Restore</li>
        <li><img />Move</li>
        <li><img />Size</li>
        <li><img />Minimize</li>
        <li><img />Maximize</li>
        <hr />
        <li><img />Close</li>
      </ul>
    </div>
  `;
}

function tryInjectTaskbar() {
  if (window.innerWidth < 780) return; // Skip taskbar on small viewports
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectTaskbar);
  } else {
    injectTaskbar();
  }
}
tryInjectTaskbar();
if (window.innerWidth >= 780) { // pcs will load taskbars
  window.addEventListener("load", injectTaskbar);
}
      
// ============================================================
// DESKTOP ICONS
// ============================================================

const desktopIcons = [
  {
    id: "Computer",
    icon: "/images/icons/My_Computer.png",
    label: "My Computer"
  },
  {
    id: "Documents",
    icon: "/images/icons/My_Documents.png",
    label: "My Documents"
  },
  {
    id: "explorer",
    icon: "https://hhroses.neocities.org/images/icons/internet-explorer-32x32.png",
    label: "Internet Explorer"
  },
  {
    id: "Network",
    icon: "/images/icons/Network.png",
    label: "Network Neighborhood"
  },
  {
    id: "Recycle",
    icon: "/images/icons/Recycle_Bin.png",
    label: "Recycle Bin"
  },
  {
    id: "Themes",
    icon: "https://hhroses.neocities.org/images/icons/themes-32x32-higher-color.png",
    label: "Desktop Themes"
  },  
  {
    id: "chat",
    icon: "https://hhroses.neocities.org/images/icons/outlook-express-32x32.png",
    label: "Chat"
  },
  {
    id: "Calculator",
    icon: "/images/icons/calculator-32x32.png",
    label: "Calculator"
  },
  {
    id: "notepad",
    icon: "/images/icons/Notepad.png",
    label: "Notepad"
  },  
  {
    id: "MSPaint",
    icon: "https://hhroses.neocities.org/images/icons/paint-32x32.png",
    label: "MS Paint"
  },  
  {
    id: "SoundRecorder",
    icon: "https://hhroses.neocities.org/images/icons/speaker-32x32.png",
    label: "Sound Recorder"
  },  
  {
  id: "homepage",
    icon: "/images/icons/html-32x32-higher-color.png",
    label: "Homepage"
  },  
  {
  id: "aboutme",
    icon: "https://hhroses.neocities.org/images/icons/info-32x32-8bpp.png",
    label: "About Me"
  },
  {
    id: "credits",
    icon: "https://hhroses.neocities.org/images/icons/notepad-file-32x32.png",
    label: "CREDITS.txt"
  },  
  {
    id: "bookpoll",
    icon: "https://hhroses.neocities.org/images/icons/chm-32x32.png",
    label: "Book Poll"
  },  
  {
    id: "Solitaire",
    icon: "/images/icons/solitaire-32x32.png",
    label: "Solitaire"
  },
  {
    id: "minesweeper",
    icon: "https://hhroses.neocities.org/images/icons/minesweeper-32x32.png",
    label: "Minesweeper"
  },
  {
    id: "pixiejump",
    icon: "https://hhroses.neocities.org/images/icons/0_desktop_icon_pixiejump.png",
    label: "Pixie Jump"
  },
  {
    id: "pixieportal",
    icon: "https://hhroses.neocities.org/images/icons/o_pixiepieportal.png",
    label: "Pixie Path"
  },
  {
    id: "egg",
    icon: "https://hhroses.neocities.org/images/icons/0_desktop_icon_egg.png",
    label: "egg"
  },
  {
    id: "FirstDressUp",
    icon: "https://hhroses.neocities.org/images/icons/dressupgameicon.gif",
    label: "1st Dressup Game"
  },
  {
    id: "MiniPiano",
    icon: "https://hhroses.neocities.org/images/icons/piano-icon.png",
    label: "Mini Piano"
  },
  {
    id: "TicTacToe",
    icon: "https://hhroses.neocities.org/images/icons/tictactoeicon.png",
    label: "Tic Tac Toe"
  },
  {
    id: "ConnectFour",
    icon: "https://hhroses.neocities.org/images/icons/connect4icon.png",
    label: "Connect Four"
  },
  {
    id: "FrogSoccer",
    icon: "https://hhroses.neocities.org/images/icons/frogicon.png",
    label: "FrogSoccer"
  },
  {
    id: "SimplePuzzle",
    icon: "https://hhroses.neocities.org/images/icons/squarepuzzle-32.png",
    label: "Simple Puzzle"
  },
  {
    id: "SlidingPuzzle",
    icon: "https://hhroses.neocities.org/images/icons/sliding-puzzle-32.png",
    label: "Sliding Puzzle"
  },
  {
    id: "MatchEmUp",
    icon: "https://hhroses.neocities.org/images/icons/matchemup-32.png",
    label: "Match 'Em Up!"
  },
  {
    id: "GoblinPrison",
    icon: "https://hhroses.art/images/icons/goblinPrison32x32.png",
    label: "Goblin Prison"
  },
  {
    id: "GameBoy",
    icon: "https://hhroses.art/images/icons/gameboy32x32.png",
    label: "Game Boy"
  },
  {
    id: "Magic8Ball",
    icon: "https://hhroses.art/images/icons/Magic8Ball-32x32.png",
    label: "Magic 8 Ball"
  },
  {
    id: "TheBackrooms",
    icon: "https://hhroses.art/images/icons/thebackrooms-32.jpg",
    label: "The Backrooms",
    url: "https://hhroses.art/programs/the-backrooms/"
  },
  {
    id: "SplashCursor",
    icon: "https://hhroses.art/images/icons/splash-cursor-32x32.jpg",
    label: "Splash Cursor"
  },
  {
    id: "Angelpoo",
    icon: "https://hhroses.art/images/icons/angelpoo-32x32.gif",
    label: "Angelpoo"
  }
];

// ============================================================
// APP WINDOWS
// ============================================================

const appWindows = {
  
// ============================================================
// SYSTEM APPS
// ============================================================

LogOff: {
  title: "Log Off of Windows",
  icon16: null,
  className: "LogOff",
  style: "width: 250px; height:110px; top: calc(50vh - 60px) !important; left: calc(50vw - 125px) !important;",
  controls: [ "Close"],
  customBody: `
    <div class="window-body" style="margin: 10px;">
      <div style="float:left;margin-right:15px;">
        <img src="images/icons/logoff-32x32.png">
      </div>
      <div style="padding-top:10px;">
          Are you sure you want to log off?
      </div>
      <div style="display:flex;gap:10px;margin:20px auto 0 auto;align-items: center;justify-content: center;">
        <button onclick="shutdownSequence();"><u>Y</u>es</button>
        <button onclick="closeParentWindow(this);"><u>N</u>o</button>
      </div>
    </div>
  `,
},

Computer: {
  title: "(C:)",
  icon16: "/images/icons/hard-disk-drive-16x16.png",
  className: "Computer resizeablewindow openApp",
  iframe: "/programs/explorer/index.html?address=%2F",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

Documents: {
  title: "My Documents",
  icon16: "https://hhroses.neocities.org/images/icons/my-documents-16x16.png",
  className: "my-documents resizeablewindow openApp",
  iframe: "https://hhroses.art/programs/explorer/index.html?address=/my-documents",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

Network: {
  title: "Network Neighborhood",
  icon16: "https://hhroses.neocities.org/images/icons/network-16x16.png",
  className: "network-neighborhood resizeablewindow openApp",
  iframe: "https://hhroses.art/programs/explorer/index.html?address=/network-neighborhood",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

Recycle: {
  title: "Recycle Bin",
  icon16: "https://hhroses.neocities.org/images/icons/recycle-bin-16x16.png",
  className: "recycle-bin resizeablewindow openApp",
  iframe: "https://hhroses.art/programs/explorer/index.html?address=https://hhroses.art/images/misc/recycle.gif",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},
  
run: {
  title: "Run",
  icon16: null,
  className: "",
  style: "width: 340px; top: 50px; left: 20px;",
  controls: ["Help", "Close"],
  customBody: `
    <div class="window-body">
      <p>
        <img src="https://win98icons.alexmeub.com/icons/png/application_hourglass-0.png" loading="lazy" style="margin-right: 10px; float: left" /> 
        Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.
      </p>
      <div> Open:<select style="width: 270px; margin-left: 10px"></select></div>
      <div style="margin: 10px; text-align: right">
        <button>OK</button>
        <button>Cancel</button>
        <button>Browse</button>
      </div>
    </div>
  `,
},

ErrorMessage: {
  title: "Error",
  icon16: "https://hhroses.art/images/icons/warning-16x16-8bpp.png",
  className: "ErrorMessage",
  controls: ["Close"],
  customBody: `
    <div class="window-body" style="padding: 12px;">
      <div style="display: flex; align-items: flex-start; gap: 10px;">
        <img src="https://hhroses.art/images/icons/warning-32x32-8bpp.png" style="flex-shrink: 0;" loading="lazy"/>
        <p class="error-message-text" style="margin: 0; padding-top: 4px; word-wrap: break-word;">Error: Code Not Found<br>Action cannot be completed</p>
      </div>
      <div style="text-align: center; margin-top: 12px;">
        <button class="error-ok-btn" style="min-width: 75px; height: 23px;">OK</button>
      </div>
    </div>
  `,
},

Themes: {
  title: "Desktop Themes",
  icon16: "/images/icons/display-properties-16x16.png",
  className: "Themes openApp",
  style: "width: 610px; height: 460px;",
  iframe: "https://hhroses.art/programs/Themes/themes",
  iframeAttrs: { style: "height: 425px; width: calc(100% - 6px); margin:auto;border: none; overflow:hidden;" },
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

// ============================================================
// ACCESSORIES
// ============================================================

Calculator: {
  title: "Calculator",
  icon16: "/images/icons/calculator-16x16.png",
  className: "os-window Calculator resizeablewindow openApp",
  iframe: "/programs/calculator/",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

MSPaint: {
  title: "MS Paint",
  icon16: "/images/icons/paint-16x16.png",
  className: "os-window focused MSPaintwindow resizeablewindow openApp",
  iframe: "https://hhroses.art/programs/jspaint/#local:f259ee8c119b5",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},
  
notepad: {
  title: "Notepad",
  icon16: "https://win98icons.alexmeub.com/icons/png/notepad-3.png",
  className: "notepad resizeablewindow openApp",
  controls: ["Minimize", "Maximize", "Close"],
  customBody: `
    <ul class="menu bar">
      <li> File <div class="window" style="width: 120px">
          <ul class="menu">
            <li><img />New<span class="keyshortcut">Ctrl+N</span></li>
            <li><img />Open...<span class="keyshortcut">Ctrl+O</span></li>
            <li><img />Save<span class="keyshortcut">Ctrl+S</span></li>
            <li><img />Save As...</li>
            <hr />
            <li><img />Print...<span class="keyshortcut">Ctrl+P</span></li>
            <hr />
            <li><img />Exit</li>
          </ul>
        </div>
      </li>
      <li> Help <div class="window" style="width: 100px">
          <ul class="menu">
            <li><img />Contents<span class="keyshortcut">F1</span></li>
            <li><img />About Notepad</li>
          </ul>
        </div>
      </li>
    </ul>
    <textarea></textarea>
  `,
},

SoundRecorder: {
  title: "Sound Recorder",
  icon16: "https://hhroses.neocities.org/images/icons/speaker-16x16.png",
  className: "os-window SoundRecorder resizeablewindow openApp",
  controls: ["Minimize", "Maximize", "Close"],
  lazyIframe: {
    id: "sr-frame",
    dataSrc: "https://hhroses.art/programs/sound-recorder/",
    allow: "microphone"
  },
  loading: "lazy"
},

credits: {
  title: "Credits",
  icon16: "https://win98icons.alexmeub.com/icons/png/notepad-3.png",
  className: "notepad resizeablewindow credits openApp",
  style: "padding-bottom: 20px; padding-right: 4px;",
  controls: ["Minimize", "Maximize", "Close"],
  customBody: `
    <ul class="menu bar">
      <li> File <div class="window" style="width: 120px">
          <ul class="menu">
            <li><img />New<span class="keyshortcut">Ctrl+N</span></li>
            <li><img />Open...<span class="keyshortcut">Ctrl+O</span></li>
            <li><img />Save<span class="keyshortcut">Ctrl+S</span></li>
            <li><img />Save As...</li>
            <hr />
            <li><img />Print...<span class="keyshortcut">Ctrl+P</span></li>
            <hr />
            <li><img />Exit</li>
          </ul>
        </div>
      </li>
      <li> Help <div class="window" style="width: 100px">
          <ul class="menu">
            <li><img />Contents<span class="keyshortcut">F1</span></li>
            <li><img />About Notepad</li>
          </ul>
        </div>
      </li>
    </ul>
    <iframe src="credits" style="width: 100%; height: calc(100% - 18px) !important;" loading="lazy"></iframe>
  `,
},

// ============================================================
// INTERNET
// ============================================================

explorer: {
  title: "Internet Explorer",
  icon16: "/images/icons/internet-explorer-16x16.png",
  className: "internet-explorer resizeablewindow openApp",
  iframe: "/programs/explorer/index.html?address=https://web.archive.org/web/1998/https://google.com",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

chat: {
  title: "Chat Window",
  icon16: "/images/icons/outlook-express-16x16.png",
  className: "chat resizeablewindow openApp",
  iframe: "/programs/chat/chat",
  controls: ["Minimize", "Maximize", "Close"]
},

// ============================================================
// GAMES
// ============================================================

Solitaire: {
  title: "Solitaire",
  icon16: "/images/icons/solitaire-16x16.png",
  className: "os-window Solitaire resizeablewindow openApp",
  iframe: "/programs/js-solitaire/",
  controls: ["Minimize", "Maximize", "Close"]
},

minesweeper: {
  title: "Minesweeper",
  icon16: "/images/icons/minesweeper-16x16.png",
  className: "minesweeper resizeablewindow openApp",
  iframe: "https://hhroses.art/programs/minesweeper/",
  iframeAttrs: { scrolling: "no", loading: "lazy" },
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

pixiejump: {
  title: "Pixie Jump",
  icon16: "/images/navbar-icons/star.png",
  className: "pixiejump mygame openApp",
  iframe: "https://hhroses.art/programs/PIXIE-JUMP/PIXIE-JUMP-GAME",
  iframeAttrs: { scrolling: "no", loading: "lazy" },
  controls: ["Minimize", "Close"],
  loading: "lazy"
},

egg: {
  title: "egg",
  icon16: "https://hhroses.art/images/egg.png",
  className: "egg resizeablewindow mygame openApp",
  iframe: "https://hhroses.art/programs/egg/egg",
  controls: ["Minimize", "Close"],
  loading: "lazy"
},

pixieportal: {
  title: "Pixie Path",
  icon16: "/images/navbar-icons/star.png",
  className: "pixieportal openApp",
  controls: ["Close"],
  customBody: `
    <div class="window-body" style="text-align: center; font-family: 'CelticBitThin';">
      <img src="/programs/PIXIE-PATH/images/pixie_path.gif" width="290" style="border-radius: 10px" loading="lazy"/>
      <p style="margin-top: 3px"> Do you dare stroll down the pixie path? </p>
      <p>
        <a href="/programs/PIXIE-PATH/1_pixie_path">
          <button style="font-family: 'CelticBitThin'; height: 40px">
            <img src="/images/misc/littlesparkle.gif" width="20px" loading="lazy"/>&ensp;I dare&ensp; 
            <img src="/images/misc/littlesparkle.gif" width="15px" loading="lazy"/>
          </button>
        </a>
      </p>
    </div>
  `,
},

FirstDressUp: {
  title: "First Dressup Game",
  icon16: "/images/icons/dressupgameiconTINY.gif",
  className: "firstdressup resizeablewindow mygame openApp",
  iframe: "https://hhroses.art/programs/1st_Dressup_Game/1st_Dressup_Game",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

MiniPiano: {
  title: "Mini Piano",
  icon16: "/images/icons/piano-icon-tiny.png",
  className: "minipiano resizeablewindow mygame openApp",
  iframe: "https://hhroses.art/programs/small-piano/game",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

TicTacToe: {
  title: "Tic Tac Toe",
  icon16: "/images/icons/tictactoeiconmini.png",
  className: "tictactoe resizeablewindow mygame openApp",
  iframe: "https://hhroses.art/programs/tictactoe/",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

ConnectFour: {
  title: "Connect Four",
  icon16: "/images/icons/connect4iconmini.png",
  className: "connect4 resizeablewindow mygame openApp",
  iframe: "https://hhroses.art/programs/connect4/",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

FrogSoccer: {
  title: "Frog Soccer",
  icon16: "/images/icons/frog-emoij.png",
  className: "frogsoccer resizeablewindow mygame openApp",
  iframe: "https://hhroses.art/programs/frogbattle/frogsoccer",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

SimplePuzzle : {
  title: "Simple Puzzle",
  icon16: "/images/icons/squarepuzzle-16.png",
  className: "simplepuzzle resizeablewindow mygame openApp",
  iframe: "https://hhroses.art/programs/Puzzle-Simple/",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},
  
SlidingPuzzle: {
  title: "Sliding Puzzle",
  icon16: "/images/icons/sliding-puzzle-16.png",
  className: "slidingpuzzle resizeablewindow mygame openApp",
  iframe: "/programs/Puzzle-Sliding-Tile/sliding-puzzle",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

MatchEmUp: {
  title: "Match 'Em Up!",
  icon16: "/images/icons/matchemup-16.png",
  className: "matchemup resizeablewindow mygame openApp",
  lazyIframe: {
    id: "matchemup-frame",
    dataSrc: "/programs/Match-Em-Up/pressplayscreen"
  },
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

GoblinPrison: {
  title: "Goblin Prison",
  icon16: "/images/icons/goblinPrison16x16.png",
  className: "GoblinPrison resizeablewindow mygame openApp",
  iframe: "/programs/goblin-prison/",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

GameBoy: {
  title: "Game Boy",
  icon16: "/images/icons/gameby16x16.png",
  className: "GameBoy resizeablewindow mygame openApp",
  iframe: "/programs/GameBoy/",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

Magic8Ball: {
  title: "Magic 8 Ball",
  icon16: "/images/icons/Magic8Ball-16x16.png",
  className: "Magic8Ball resizeablewindow mygame openApp",
  iframe: "/programs/Magic8Ball/",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

SplashCursor: {
  title: "Splash Cursor",
  icon16: "/images/icons/splash-cursor-16x16.jpg",
  className: "splashcursor resizeablewindow mygame openApp",
  iframe: "/programs/Splash-Cursor/splash-cursor",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},
Angelpoo: {
  title: "Angelpoo",
  icon16: "https://hhroses.art/images/icons/angelpoo-16x16.gif",
  className: "angelpoo resizeablewindow mygame openApp",
  iframe: "https://hhroses.art/programs/angelpoo/",
  controls: ["Minimize", "Close"],
  iframeAttrs: { scrolling: "no", loading: "lazy" },
},

// ============================================================
// PAGE-SPECIFIC WINDOWS
// ============================================================

// ============================================================
// HOME 
// ============================================================

WelcomeWindow: {
  title: "Welcome to Hailee Town!",
  icon16: "/images/navbar-icons/star.png",
  className: "mydiv WelcomeWindow",
  controls: ["Close"],
  customBody: `
    <div class="window-body" style="margin: 10px; text-align: center; color: black">
      <b style="font-size: 20px">DRAG ME!</b>
      <br>
      <strong style="font-size: 14px">This is a draggable window!</strong>
      <br><br><button onclick="closeParentWindow(this);">Okay</button>
    </div>
  `,
},

homepage: {
  title: "Welcome to my website!",
  icon16: "https://hhroses.neocities.org/images/icons/news-16x16.png",
  className: "homepage resizeablewindow openApp",
  iframe: "https://hhroses.art/programs/explorer/index.html?address=https://hhroses.art/homewindow2",
  iframeAttrs: { class: "homepagewindowstuff" },
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},



// ============================================================
// BOOKS PAGE 
// ============================================================

bookpoll: {
  title: "book poll",
  icon16: "https://hhroses.neocities.org/images/icons/chm-16x16.png",
  className: "mydiv poll openApp",
  controls: ["Close"],
  customBody: `
    <div class="window-body" style="margin: 8px">
      <center>
        <form method="post" action="https://poll.pollcode.com/45332742">
          <div style="background-color: var(--ButtonFace, #c0c0c0) !important; padding: 2px; width: 135px; font-family: Arial; font-size: small; color: var(--ButtonText, #000000) !important;">
            <div style="margin-bottom:5px;">
              <strong>Do you like to read?</strong>
            </div>
              <input type="radio" name="answer" value="1" id="answer453327421" style="float: left" />
              <label for="answer453327421" style="float: left; width: 150px">YES!! I'm a bookworm:)</label>
            <div style="clear: both; height: 2px"></div>
              <input type="radio" name="answer" value="2" id="answer453327422" style="float: left" />
              <label for="answer453327422" style="float: left; width: 150px">Sometimes...</label>
            <div style="clear: both; height: 2px"></div>
              <input type="radio" name="answer" value="3" id="answer453327423" style="float: left" />
              <label for="answer453327423" style="float: left; width: 150px">I HATE READING</label>
            <div style="clear: both; height: 2px"></div>
            <div align="center" style="margin-top:5px;">
              <input type="submit" value=" Vote "/>
              <!-- <br><input type="submit" name="view" value=" View " /> -->
            </div>
          </div>
        </form>
      </center>
    </div>
  `,
},

// ============================================================
// ABOUT page 
// ============================================================

aboutme: {
  title: "About Me",
  icon16: "https://hhroses.neocities.org/images/icons/info-16x16-8bpp.png",
  className: "mydiv aboutmewindow resizeablewindow openApp",
  iframe: "https://hhroses.neocities.org/programs/explorer/index.html?address=https://hhroses.art/aboutme",
  controls: ["Minimize", "Maximize", "Close"],
  loading: "lazy"
},

selfportrait: {
  title: "Self Portrait",
  icon16: "https://hhroses.neocities.org/images/icons/image-jpeg-16x16.png",
  className: "mydiv artwindow resizeablewindow openApp",
  controls: ["Minimize", "Maximize", "Close"],
  customBody: `
    <img class="self_portraitthing" src="https://hhroses.art/my-pictures/2d-art-gallery/2025-Art/self_portrait-by-hhroses.jpg" alt="self portrait" loading="lazy"/>
  `,
}

}; // closing bracket for apps
if (window.innerWidth < 780) { // mobile version will not load these apps
  ["Computer", "Documents", "explorer", "Network", "Recycle", "Themes", "Calculator", "notepad", "SoundRecorder", "credits"].forEach(function(id) {
    delete appWindows[id];
  });
}
// ============================================================
// GENERATOR FUNCTIONS
// ============================================================

  // ==============================================================
  // selection box on desktop to select deskicons
  // ==============================================================
  window.addEventListener('DOMContentLoaded', () => { 
    let selectionBox = document.getElementById('selection-box');
    if (!selectionBox) {
      selectionBox = document.createElement('div');
      selectionBox.id = 'selection-box';
      selectionBox.hidden = true;
      document.body.appendChild(selectionBox);
    }
    let startX = 0, startY = 0;
    let isSelecting = false;
    document.addEventListener('mousedown', (e) => {
      // Prevent drag from starting if you click an icon, window, taskbar, or navbar
      // future hailee add class names and ids of stuff u dont want the user to be able to select
      // but maybe make a minigame later idk
      if (e.target.closest('.deskicon') || 
          e.target.closest('.window') ||       // Ignores standard app windows
          e.target.closest('.decoration') || // ignores decoration elements
          e.target.closest('.mydiv') ||        // Ignores your custom draggable divs
          e.target.closest('#taskbar') ||      // Ignores the loaded taskbar
          e.target.closest('#taskbar-placeholder') || 
          e.target.closest('#navbar') ||       // Ignores the loaded navbar
          e.target.closest('#navbar-placeholder')) {
        return;
      }
      
      isSelecting = true;
      startX = e.clientX;
      startY = e.clientY;
      
      // Unselect all icons
      const currentIcons = document.querySelectorAll('.deskicon');
      currentIcons.forEach(icon => icon.classList.remove('selected'));
      selectionBox.hidden = false;
      selectionBox.style.left = `${startX}px`;
      selectionBox.style.top = `${startY}px`;
      selectionBox.style.width = '0px';
      selectionBox.style.height = '0px';
    });
    // Update the box size n check for overlapping icons
    window.addEventListener('mousemove', (e) => {
      if (!isSelecting) return;
      const currentX = e.clientX;
      const currentY = e.clientY;
      const left = Math.min(startX, currentX);
      const top = Math.min(startY, currentY);
      const width = Math.abs(currentX - startX);
      const height = Math.abs(currentY - startY);
      selectionBox.style.left = `${left}px`;
      selectionBox.style.top = `${top}px`;
      selectionBox.style.width = `${width}px`;
      selectionBox.style.height = `${height}px`;
      const boxRect = selectionBox.getBoundingClientRect();
      const currentIcons = document.querySelectorAll('.deskicon');
      currentIcons.forEach(icon => {
        const iconRect = icon.getBoundingClientRect();
        const isIntersecting = !(
          boxRect.right < iconRect.left || 
          boxRect.left > iconRect.right || 
          boxRect.bottom < iconRect.top || 
          boxRect.top > iconRect.bottom
        );
        if (isIntersecting) {
          icon.classList.add('selected');
        } else {
          icon.classList.remove('selected');
        }
      });
    });
    window.addEventListener('mouseup', () => {
      if (isSelecting) {
        isSelecting = false;
        selectionBox.hidden = true;
      }
    });
  });

// theres a script error MAYBE??? in this but idk it went away just now while testing 
// but idk what it is because this code is like a frakenstein mess of stuff 
// from win98.js or whaatever plus a bunch of shit i added onto it and to be honest i have no idea what im doing
/**
 * Generate desktop icons and append to container 
 * (Multi-Drag Support, Absolute Layout, 5px Grid, Free-Roaming, Orthogonal)
 * @param {string} containerId - ID of the container element
 * @param {array} iconList - Optional filtered list of icons (defaults to all)
 */
function generateDesktopIcons(containerId, iconList) {
  const icons = iconList || desktopIcons;
  const container = document.getElementById(containerId);
  if (!container) {
    console.error("Desktop icons container '" + containerId + "' not found");
    return;
  }
  container.style.position = 'relative';
  document.addEventListener('dragover', (e) => {
    if (window.primaryDraggedIcon) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    }
  });
  document.addEventListener('drop', (e) => {
    if (window.primaryDraggedIcon) {
      e.preventDefault();
      const primaryIcon = window.primaryDraggedIcon;
      const containerRect = container.getBoundingClientRect();
      // Calculate raw coordinates for the primary icon you are holding
      let rawX = e.clientX - containerRect.left - parseInt(primaryIcon.dataset.offsetX || 0);
      let rawY = e.clientY - containerRect.top - parseInt(primaryIcon.dataset.offsetY || 0);
      // Snap primary icon to the 5px grid
      const gridSize = 5;
      let snappedX = Math.round(rawX / gridSize) * gridSize;
      let snappedY = Math.round(rawY / gridSize) * gridSize;
      // Orthogonal movement check for the primary icon
      const primaryStartX = parseInt(primaryIcon.dataset.startX || 0);
      const primaryStartY = parseInt(primaryIcon.dataset.startY || 0);
      const changeInX = Math.abs(snappedX - primaryStartX);
      const changeInY = Math.abs(snappedY - primaryStartY);
      if (changeInX > changeInY) {
        snappedY = primaryStartY; // Lock Y
      } else {
        snappedX = primaryStartX; // Lock X
      }
      // Calculate the movement DELTA (how many pixels it moved in total)
      const deltaX = snappedX - primaryStartX;
      const deltaY = snappedY - primaryStartY;
      // Apply that ^ exact delta to ALL dragged icons
      if (window.draggedIconsGroup) {
        window.draggedIconsGroup.forEach(icon => {
          const startX = parseInt(icon.dataset.startX || 0);
          const startY = parseInt(icon.dataset.startY || 0);
          icon.style.position = 'absolute';
          icon.style.left = (startX + deltaX) + 'px';
          icon.style.top = (startY + deltaY) + 'px';
          if (icon.parentNode !== container) {
            container.appendChild(icon);
          }
        });
      }
    }
  });
  icons.forEach(function(icon) {
    var div = document.createElement('div');
    div.className = 'deskicon';
    div.dataset.appId = icon.id;
    div.draggable = true; 
    div.onclick = function(e) {
      togglePushed(this);
      // this.classList.toggle('selected');
      if (icon.url) {
        window.open(icon.url, '_blank');
        return;
      }
      if (!document.getElementById(icon.id) && appWindows[icon.id]) {
        generateAppWindows([icon.id]);
      }
      var appEl = document.getElementById(icon.id);
      if (appEl) openApp(appEl);
    };
    div.addEventListener('dragstart', function(e) {
      // Determine dragging a single icon or a group of selected icons
      if (div.classList.contains('selected')) {
        // Grab all selected icons on the screen
        window.draggedIconsGroup = Array.from(document.querySelectorAll('.deskicon.selected'));
      } else {
        // or Just grab this one
        window.draggedIconsGroup = [div];
      }
      window.primaryDraggedIcon = div; // The specific icon mouse is holding
      const rect = div.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      div.dataset.offsetX = offsetX;
      div.dataset.offsetY = offsetY;
      // Store the starting positions and lower opacity for ALL icons in the group
      window.draggedIconsGroup.forEach(groupIcon => {
        groupIcon.dataset.startX = groupIcon.offsetLeft;
        groupIcon.dataset.startY = groupIcon.offsetTop;
        setTimeout(() => groupIcon.style.opacity = '0.5', 0);
      });
      if (e.dataTransfer) {
         e.dataTransfer.setData('text/plain', ''); 
         e.dataTransfer.setDragImage(div, offsetX, offsetY);
      }
    });
    div.addEventListener('dragend', function(e) {
      // Restore opacity for all icons
      if (window.draggedIconsGroup) {
        window.draggedIconsGroup.forEach(groupIcon => groupIcon.style.opacity = '1');
      }
      window.draggedIconsGroup = null;
      window.primaryDraggedIcon = null;
    });
    div.innerHTML = '<img src="' + icon.icon + '" draggable="false" /><br /><span>' + icon.label + '</span>';
    container.appendChild(div);
  });
  // Layout Freeze Logic
  setTimeout(() => {
    const iconNodes = container.querySelectorAll('.deskicon');
    const positions = Array.from(iconNodes).map(el => ({
      left: el.offsetLeft,
      top: el.offsetTop
    }));
    iconNodes.forEach((el, i) => {
      el.style.position = 'absolute';
      el.style.left = positions[i].left + 'px';
      el.style.top = positions[i].top + 'px';
      el.style.margin = '0'; 
    });
  }, 0);
}
/// ================================================================
 /* Generate app windows and append to body
 /* @param {array} appIds - Optional array of app IDs to generate (defaults to all)
 /*/
function generateAppWindows(appIds) {
  var appsToGenerate;
  if (appIds) {
    appsToGenerate = [];
    appIds.forEach(function(id) {
      if (appWindows[id]) {
        appsToGenerate.push([id, appWindows[id]]);
      }
    });
  } else {
    appsToGenerate = [];
    for (var id in appWindows) {
      if (appWindows.hasOwnProperty(id)) {
        appsToGenerate.push([id, appWindows[id]]);
      }
    }
  }
  appsToGenerate.forEach(function(item) {
    var id = item[0];
    var config = item[1];
    // Skip if already exists
    if (document.getElementById(id)) return;
    var div = document.createElement('div');
    div.id = id;
    div.className = 'toplevel window ' + (config.className || '');
    div.style.cssText = 'display: none; ' + (config.style || '');
    // Build title bar controls
    var controlsHtml = '';
    if (config.controls) {
      config.controls.forEach(function(ctrl) {
        controlsHtml += '<button aria-label="' + ctrl + '"></button>';
      });
    }
    // Build content (iframe or custom body)
    var contentHtml = '';
    // Check if the app config has a loading property, otherwise default to "lazy"
    var loadingAttr = config.loading ? config.loading : 'lazy';
    if (config.iframe) {
      var attrStr = '';
      if (config.iframeAttrs) {
        for (var attr in config.iframeAttrs) {
          if (config.iframeAttrs.hasOwnProperty(attr)) {
            attrStr += ' ' + attr + '="' + config.iframeAttrs[attr] + '"';
          }
        }
      }
      contentHtml = '<iframe src="about:blank" data-src="' + config.iframe + '"'
        + attrStr + ' loading="' + loadingAttr + '" style="height: calc(100% - 18px); width: 100%;"></iframe>';
    }
    else if (config.lazyIframe) {
      var lazy = config.lazyIframe;
      var allowAttr = lazy.allow ? ' allow="' + lazy.allow + '"' : '';
      contentHtml = '<iframe id="' + lazy.id + '" src="about:blank" data-src="' + lazy.dataSrc + '"' + allowAttr + ' loading="' + loadingAttr + '" style="height: calc(100% - 18px); width: 100%;"></iframe>';
    } else if (config.customBody) {
      contentHtml = config.customBody;
    }
    // Build icon
    var iconHtml = config.icon16 ? '<img src="' + config.icon16 + '" />' : '';
    // Build touch-action style for os-window
    var touchStyle = '';
    if (config.className && config.className.indexOf('os-window') !== -1) {
      touchStyle = ' style="touch-action: none"';
    }
    div.innerHTML = 
      '<div class="title-bar"' + touchStyle + '>' +
        iconHtml +
        '<div class="title-bar-text">' + config.title + '</div>' +
        '<div class="title-bar-controls">' + controlsHtml + '</div>' +
      '</div>' +
      contentHtml;
    document.body.appendChild(div);
  });
}

/**
 * Filter desktop icons by ID (include only these)
 * @param {array} ids - Array of icon IDs to include
 * @returns {array} Filtered icon list
 */
function filterIcons(ids) {
  return desktopIcons.filter(function(icon) {
    return ids.indexOf(icon.id) !== -1;
  });
}

/**
 * Filter desktop icons by excluding IDs
 * @param {array} ids - Array of icon IDs to exclude
 * @returns {array} Filtered icon list
 */
function excludeIcons(ids) {
  return desktopIcons.filter(function(icon) {
    return ids.indexOf(icon.id) === -1;
  });
}

/**
 * Add a custom icon (for page-specific icons)
 * @param {object} iconConfig - Icon configuration object
 */
function addIcon(iconConfig) {
  desktopIcons.push(iconConfig);
}

/**
 * Add a custom app window (for page-specific windows)
 * @param {string} id - Window ID
 * @param {object} windowConfig - Window configuration object
 */
function addAppWindow(id, windowConfig) {
  appWindows[id] = windowConfig;
}

// ============================================================
// AUTO-INITIALIZE
// ============================================================

var autoInitDesktop = true; // Set to false before loading script to disable

document.addEventListener('DOMContentLoaded', function() {
  if (autoInitDesktop && document.getElementById('deskicons')) {
    generateDesktopIcons('deskicons');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var volumeIcon = document.getElementById('volumeIcon');
  var volumeDiv = document.getElementById('taskbarvolume');
  if (volumeIcon && volumeDiv) {
    // toggle when the icon is clicked
    volumeIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      var isVisible = getComputedStyle(volumeDiv).visibility === 'visible';
      volumeDiv.style.visibility = isVisible ? 'hidden' : 'visible';
    });
    // clicks inside the slider shouldn't close it
    volumeDiv.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    // any click elsewhere on the page closes it
    document.addEventListener('click', function() {
      volumeDiv.style.visibility = 'hidden';
    });
  }
});

// ============================================================
// volume code 
// ============================================================

// Initial slider value
let globalPageVolume = 2/8;

function playvolumesound() {
  const audio = new Audio("https://hhroses.neocities.org/audio/Windows98DingSoundEffect.mp3");
  audio.volume = globalPageVolume;
  audio.play();
}

function setAllAudioVolumes(volume) {
  globalPageVolume = volume;

  // Apply to main document audio
  document.querySelectorAll("audio").forEach(audio => {
    audio.volume = volume;
  });

  // Send message to each same-origin iframe (they must have the postMessage listener)
  document.querySelectorAll('iframe').forEach(iframe => {
    try {
      // Only works for same-origin!
      iframe.contentWindow.postMessage({
        type: "set-volume",
        volume: volume
      }, "*");
    } catch (e) {
      // If cross-origin, can't access, ignore
    }
  });
}

// ============================================================
/// rest of code
// ============================================================

let zIndex = 1; // Initialize the z-index counter

// Make all elements draggable
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mydiv').forEach(element => {
    dragElement(element);
  });
});

function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
    
  elmnt.onmousedown = function(e) {
    e.preventDefault();
    bringToFront(elmnt);
    elmnt.style.transition = 'none';
    
    // Convert calc() to pixels on first drag
    var computed = window.getComputedStyle(elmnt);
    elmnt.style.left = computed.left;
    elmnt.style.top = computed.top;
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = Math.max(27, elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.transition = '';
  }
}

function bringToFront(elmnt) {
  zIndex += 999;
  elmnt.style.zIndex = zIndex;
}
/* Old IE polyfills */
if (!document.getElementsByClassName) {
  document.getElementsByClassName = function(cl) {
    var retnode = [];
    var elem = this.getElementsByTagName('*');
    for (var i = 0; i < elem.length; i++) {
      if ((' ' + elem[i].className + ' ').indexOf(' ' + cl + ' ') > -1) retnode.push(elem[i]);
    }
    return retnode;
  };
}
if (!Event.prototype.stopPropagation) {
  Event.prototype.stopPropagation = function() {
    this.cancelBubble = true;
  };
}
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
topZ = 999;
var userInteractive = false;
var USER_Z_FLOOR = 10000;
var USER_Z_CEILING = 9999999997; // one below #taskbar's 9999999998
function ensureUserTopZ() { if (topZ < USER_Z_FLOOR || topZ >= USER_Z_CEILING) topZ = USER_Z_FLOOR; }
var cascadeOffset = 0;
var cascadeStep = 30; // pixels to offset each new window
var cascadeMax = 10;  // reset after this many windows

function hasClass(elem, className) {
  if (typeof(elem.className) === "string") {
    var classes = elem.className.split(" ");
    for (var i = 0; i < classes.length; i++)
      if (classes[i] === className) return true;
  }
  return false;
}

function deleteNode(node) {
  node.parentNode.removeChild(node);
}

function showWindowMenu(win, widget) {}
var topLevelWindows = [];
var windowId = 0;

function Window(template) {
  var win = this;
  var elem = template.cloneNode(true);
  elem.id = template.id + windowId++;
  // TODO: make sure child ids are unique.
  document.body.appendChild(elem);
  this.elem = elem;
  // find title bar
  elem.childNodes.forEach(function(n) {
    if (hasClass(n, "title-bar")) this.titleBar = n;
  }, this);
  // find window icon and buttons
  if (this.titleBar) {
    this.titleBar.childNodes.forEach(function(n) {
      if (n.nodeName === "IMG") this.icon = n;
      else if (n.className === "title-bar-controls") n.childNodes.forEach(function(n) {
        if (n.nodeName === "BUTTON") switch (n.getAttribute("aria-label")) {
          case "Maximize":
            this.maxBtn = n;
            break;
          case "Minimize":
            this.minBtn = n;
            break;
          case "Close":
            this.closeBtn = n;
            break;
          case "Help":
            this.helpBtn = n;
            break;
        }
      }, this);
    }, this);
  }

// methods
this.open = function() {
  elem.style.display = "";
  // create task button
this.taskBtn = document.createElement("button");
this.taskBtn.className = "taskbtn";
if (this.icon && this.icon.src) {
    var iconImg = document.createElement("img");
    iconImg.src = this.icon.src;
    iconImg.style.width = "auto";
    iconImg.style.height = "auto";
    iconImg.style.marginRight = "4px";
    this.taskBtn.appendChild(iconImg);
}

var taskBtnList = document.getElementById('taskBtnList');
if (taskBtnList) {
  taskBtnList.appendChild(this.taskBtn);
}

// Add the title
var titleSpan = document.createElement("span");
titleSpan.className = "taskbtn-text";
titleSpan.innerText = this.titleBar.innerText;
this.taskBtn.appendChild(titleSpan);
    this.taskBtn.onclick = function() {
      if (win.isMinimized) {
        win.activate();
        win.restore();
        return;
      }
      if (win.isActive && win.minBtn) win.minimize();
      else win.activate();
    };
    this.activate();
  };
  this.close = function() {
    console.log("closing " + win);
    deleteNode(win.elem);
    deleteNode(win.taskBtn);
    topLevelWindows.splice(topLevelWindows.indexOf(win), 1);
  };
  this.maximize = function() {
    elem.classList.add("maximized");
    if (win.isMinimized) {
      win.isMinimized = false;
      elem.style.display = "";
    }
    win.prevLeft = elem.style.left;
    win.prevTop = elem.style.top;
    win.prevWidth = elem.style.width;
    win.prevHeight = elem.style.height;
    elem.style.top = "0px";
    elem.style.left = "0px";
    elem.style.width = "100%";
    elem.style.height = "100%";
    elem.style.zIndex = 999;
    win.activate();
    win.maxBtn.setAttribute("aria-label", "Restore");
    win.isMaximized = true;
  };
  this.restore = function() {
    elem.classList.remove("maximized");
    if (win.isMinimized) {
      win.isMinimized = false;
      elem.style.display = "";
      return;
    }
    elem.style.left = win.prevLeft;
    elem.style.top = win.prevTop;
    elem.style.width = win.prevWidth;
    elem.style.height = win.prevHeight;
    win.maxBtn.setAttribute("aria-label", "Maximize");
    win.isMaximized = false;
  };
  this.minimize = function() {
    elem.style.display = "none";
    win.deactivate();
    win.isMinimized = true;
  };
  this.activate = function() {
    topLevelWindows.forEach(function(w) {
      w.deactivate();
    }, this);
    win.titleBar.className = "title-bar";
    win.taskBtn.className = "taskbtn pushed";
    if (!win.isMaximized) {
      if (userInteractive) ensureUserTopZ();
      win.elem.style.zIndex = topZ++;
    }
    if (win.overlay) win.overlay.style.display = 'none';
    win.isActive = true;
  };
  this.deactivate = function() {
    win.titleBar.className = "title-bar inactive";
    win.taskBtn.className = "taskbtn";
    if (win.overlay) win.overlay.style.display = 'block';
    win.isActive = false;
  };
  this.isActive = this.isMaximized = this.isMinimized = false;
  elem.onmousedown = function() { win.activate(); };
  // caption button handlers
  if (this.closeBtn) this.closeBtn.onclick = this.close;
  if (this.maxBtn) this.maxBtn.onclick = this.titleBar.ondblclick = function() {
    (win.isMaximized ? win.restore : win.maximize)();
  };
  if (this.minBtn) this.minBtn.onclick = this.minimize;
  if (this.icon) this.icon.onclick = function() {};
  console.log("created window");
  console.log("window");
  console.log(this.elem);
  console.log("titleBar");
  console.log(this.titleBar);
  addSizeHandleEvents(this, this.titleBar, 0, 0);
  // Create click overlay to bring window to front
  var overlay = document.createElement('div');
  overlay.className = 'window-click-overlay';
  overlay.style.cssText = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 9999; background: transparent;';
  elem.appendChild(overlay);
  
  // Store reference
  this.overlay = overlay;
  
  // Click overlay to activate, then hide it
  overlay.onmousedown = function(e) {
    win.activate();
  };  
  topLevelWindows.push(this);
  // Bring window to front on mousedown (works better than onclick)
  elem.onmousedown = function(e) {
    win.activate();
  };  
}

function openApp(winElem) {
  // Handle string IDs (from start menu onclick etc.)
  if (typeof winElem === 'string') {
    if (!document.getElementById(winElem) && appWindows[winElem]) {
      generateAppWindows([winElem]);
    }
    winElem = document.getElementById(winElem);
  }
  if (!winElem) return;
  
  var iframe = winElem.querySelector('iframe[data-src]');
  if (iframe && (!iframe.getAttribute('src') || iframe.getAttribute('src') === 'about:blank')) {
    iframe.src = iframe.dataset.src;
  }

  if (winElem.id === "SoundRecorder") {
    const iframe = winElem.querySelector('#sr-frame');
    if (iframe && !iframe.dataset.loaded) {
      iframe.src = iframe.dataset.src;
      iframe.dataset.loaded = 'true';
    }
  }
  if (winElem.id === "MatchEmUp") {
    const iframe = winElem.querySelector('#matchemup-frame');
    if (iframe && !iframe.dataset.loaded) {
      iframe.src = iframe.dataset.src;
      iframe.dataset.loaded = 'true';
    }
  }

  const win = new Window(winElem);
  // Apply cascade positioning to all windows (with overrides for specific apps)
  if (winElem.id === "run") {
    // Run dialog: always spawn bottom-left, no cascade
    win.elem.style.left = "10px";
    win.elem.style.bottom = "40px";
    win.elem.style.top = "";
  } else {
    var baseTop = 60;
    var baseLeft = 200;
    win.elem.style.top = (baseTop + (cascadeOffset * cascadeStep)) + 'px';
    win.elem.style.left = (baseLeft + (cascadeOffset * cascadeStep)) + 'px';
    cascadeOffset = (cascadeOffset + 1) % cascadeMax;
  }
  if (userInteractive) ensureUserTopZ();
  win.open();
  
    if (winElem.id === "MatchEmUp") {
      win.maximize();
    }  
  return win;
}

document.addEventListener('DOMContentLoaded', function() {
  var startBtn = document.getElementById('startBtn');
  var startMenu = document.getElementById('startMenu');
  if (startBtn && startMenu) {
    startBtn.onclick = function(event) {
      const isOpen = startMenu.style.display === "block";
      startMenu.style.display = isOpen ? "none" : "block";
      startBtn.classList.toggle("pushed", !isOpen);
    };
  }
});

// ============================================================
// close app button (like for 'OK" buttons and "X" buttons that arent aria label btns)
// ============================================================
function closeParentWindow(el) {
  var win = el.closest('.toplevel');
  if (win) {
    var closeBtn = win.querySelector('[aria-label="Close"]');
    if (closeBtn) closeBtn.click();
  }
}

// ============================================================
// clock
// ============================================================

function updateClock() {
  var clock = document.getElementById('clock');
  if (!clock) return;
  
  var d = new Date();
  var h = d.getHours() % 12;
  var m = d.getMinutes();
  var a = d.getHours() < 12 ? "AM" : "PM";
  if (h == 0) h = 12;
  clock.innerHTML = h + ":" + (m < 10 ? "0" : "") + m + " " + a;
  setTimeout(updateClock, 6000);
}
document.addEventListener('DOMContentLoaded', function() {
  updateClock();
});

// ============================================================
// resizable windows
// ============================================================

function addSizeHandleEvents(winObj, h, resizeX, resizeY) {
  h.onmousedown = h.ontouchstart = function(e) {
    var win = winObj.elem;
    if (winObj.isMaximized) return;
    e = e || window.event;
    var startRect = win.getBoundingClientRect();
    var startX = startRect.left;
    var startY = startRect.top;
    var startWidth = startRect.right - startX;
    var startHeight = startRect.bottom - startY;
    var mouseStartX = e.clientX || e.touches[0].clientX;
    var mouseStartY = e.clientY || e.touches[0].clientY;
    winObj.activate();
    var prevTransition = win.style.transition;
    win.style.transition = 'none';
    document.onmousemove = document.ontouchmove = function(e) {
      e = e || window.event;
      var dx = (e.clientX || e.touches[0].clientX) - mouseStartX;
      var dy = (e.clientY || e.touches[0].clientY) - mouseStartY;
      if (resizeX < 0) {
        win.style.left = startX + dx + "px";
        win.style.width = startWidth - dx + "px";
      }
      if (resizeX > 0) win.style.width = startWidth + dx + "px";
      if (resizeY < 0) {
        win.style.top = startY + dy + "px";
        win.style.height = startHeight - dy + "px";
      }
      if (resizeY > 0) win.style.height = startHeight + dy + "px";
      if (resizeX == 0 && resizeY == 0) {
        win.style.left = startX + dx + "px";
        win.style.top = Math.max(27, startY + dy) + "px";
      }
    };
    document.onmouseup = document.ontouchend = function(e) {
      document.onmousemove = document.ontouchmove = null;
      document.onmouseup = document.ontouchend = null;
      win.style.transition = prevTransition;
    };
  }
}
function makeResizable(win) {
  win.style.boxSizing = "border-box";
  for (var x = -1; x <= 1; x++) {
    for (var y = -1; y <= 1; y++) {
      if ((x | y) == 0) continue;
      var h = document.createElement("div");
      h.style.position = "absolute";
      h.style.width = (x == 0) ? "100%" : "4px";
      h.style.height = (y == 0) ? "100%" : "4px";
      if (x != 1) h.style.left = "0px";
      if (x != -1) h.style.right = "0px";
      if (y != 1) h.style.top = "0px";
      if (y != -1) h.style.bottom = "0px";
      if (y != 0) h.style.cursor = "ns-resize";
      if (x != 0) h.style.cursor = "ew-resize";
      if (x * y == 1) h.style.cursor = "nwse-resize";
      if (x * y == -1) h.style.cursor = "nesw-resize";
      if ((x & y) != 0) h.style.zIndex = 1;
      addSizeHandleEvents(h, x, y);
      win.appendChild(h);
    }
  }
}

// ============================================================
// wait cursor after click
// ============================================================

document.addEventListener('click', function(e) {
  // Only apply wait cursor to desktop icons, not all buttons
  if (e.target.closest('.deskicon')) {
    document.body.classList.add('wait-cursor');
    setTimeout(function() {
      document.body.classList.remove('wait-cursor');
    }, 3000);
  }
});
function togglePushed(element) {
  element.classList.add('pushed');
  // Clear any previous timeout to avoid conflicts
  if (element.timeoutId) clearTimeout(element.timeoutId);
  // Set the timeout to remove the class
  element.timeoutId = setTimeout(() => {
    element.classList.remove('pushed');
    element.timeoutId = null; // Clear the timeout ID
  }, 1000);
}


// ============================================================
// drag and scroll screen 
// ============================================================

/* 
const area = document.querySelector('body');
let isDown = false;d
let startX, startY, scrollLeft, scrollTop;

area.addEventListener('mousedown', (e) => {
  isDown = true;
  area.classList.add('grabbing');
  startX = e.pageX - area.offsetLeft;
  startY = e.pageY - area.offsetTop;
  scrollLeft = area.scrollLeft;
  scrollTop = area.scrollTop;
});

area.addEventListener('mouseleave', () => {
  isDown = false;
  area.classList.remove('grabbing');
});

area.addEventListener('mouseup', () => {
  isDown = false;
  area.classList.remove('grabbing');
});

area.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - area.offsetLeft;
  const y = e.pageY - area.offsetTop;
  area.scrollLeft = scrollLeft - (x - startX);
  area.scrollTop = scrollTop - (y - startY); 
});
*/

// ============================================================
//  Here's example code for auto-matic full screen mode:
// ============================================================

/*
document.onclick = function(e) {
  var isFullScreen = (document.fullScreenElement && document.fullScreenElement !== null)
                  || (document.mozFullScreen || document.webkitIsFullScreen);
  if (!isFullScreen) {
      var docElem = document.documentElement;
      if (docElem.requestFullscreen)
          docElem.requestFullscreen();
  }
  hide(startMenu);
}
*/

function placeDivider() {
  var navbar = document.getElementById("navbar");
  var divider = document.getElementById("pinklacedivider");
  if (navbar && divider) {
    var navbarHeight = navbar.offsetHeight;
    divider.style.top = (navbarHeight + 20) + "px";
  }
}

window.addEventListener('resize', placeDivider);
window.addEventListener('DOMContentLoaded', placeDivider); 

// ============================================================
// screensaver
// ============================================================

// screensaver
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 780) return; // so it won't load on mobile/mini windows
  var idleTime = 0;
  var idleLimit = 10 * 60; // 10 minutes (600 seconds)
  var screensaver = null;
  function createScreensaver() {
    screensaver = document.createElement('div');
    screensaver.id = 'screensaver';
    screensaver.innerHTML = '<iframe src="about:blank" loading="lazy" data-src="https://hhroses.neocities.org/programs/3D-FlowerBox/" style="width: 100%; height: 100%; border: none; pointer-events: none; z-index: 2147483647;"></iframe>';
    screensaver.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: black; z-index: 2147483647; display: none; cursor: none;';
    document.body.appendChild(screensaver);
    screensaver.addEventListener('click', hideScreensaver);
    screensaver.addEventListener('mousemove', hideScreensaver);
  }
  function showScreensaver() {
    if (screensaver) {
      var iframe = screensaver.querySelector('iframe');
      if (iframe && (!iframe.getAttribute('src') || iframe.getAttribute('src') === 'about:blank')) {
        iframe.src = iframe.dataset.src;
      }
      screensaver.style.display = 'block';
    }
  }
  function hideScreensaver() {
    if (screensaver && screensaver.style.display !== 'none') {
      screensaver.style.display = 'none';
      idleTime = 0;
    }
  }
  function resetIdleTimer() {
    idleTime = 0;
  }
  // --- IFRAME HANDLING FIXES --- this will make the screensaver go away if there's movement on same-origin iframes
  // 1. Same-Origin Listener Injection
  function attachIframeListeners(iframe) {
    try {
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDoc) {
        ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'].forEach(function(evt) {
          iframeDoc.addEventListener(evt, resetIdleTimer);
        });
      }
    } catch (e) { /*Prevent CORS errors if frame is cross-origin*/ }
  } 
  function setupIframeTracking() {
    document.querySelectorAll('iframe').forEach(function(iframe) {
      if (iframe.closest('#screensaver')) return; // Ignore screensaver's own iframe
      iframe.addEventListener('load', function() { attachIframeListeners(iframe); });
      attachIframeListeners(iframe);
    });
  } 
  // 2. Cross-Origin postMessage Listener
  window.addEventListener('message', function(e) {
    if (e.data === 'user_activity') {
      resetIdleTimer();
    }
  }); 
  // 3. Focus & Blur Fallback for External / Cross-Origin Iframes
  window.addEventListener('blur', function() {
    if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
      resetIdleTimer();
    }
  }); 
  // Main Idle Check (Updated to 1000ms tick for accurate seconds)
  setInterval(function() {
    // If user is currently focused inside an iframe, consider them active
    if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
      resetIdleTimer();
      return;
    }
    idleTime++;
    if (idleTime >= idleLimit) {
      showScreensaver();
    }
  }, 1800); // screensaver shows after 30 minutes of inactivity
  // Attach standard event listeners
  ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'].forEach(function(evt) {
    document.addEventListener(evt, resetIdleTimer);
  });
  createScreensaver();
  setupIframeTracking();
});

// ============================================================
// theme change stuff
// ============================================================

// Load saved theme on startup
try {
  // Try the CSS properties format first (from desktop-theme key)
  var theme_css = localStorage.getItem("desktop-theme");
  if (theme_css) {
    var cssProperties = JSON.parse(theme_css);
    if (cssProperties['--ActiveTitle']) {
      // It's CSS properties format
      applyTheme(cssProperties);
    }
  }
  // Also check win98-theme format (our theme picker format)
  var theme_json = localStorage.getItem("win98-theme");
  if (theme_json && !theme_css) {
    var theme = JSON.parse(theme_json);
    var cssProperties = {
      '--ActiveTitle': theme.activeTitle,
      '--GradientActiveTitle': theme.activeTitleGradient,
      '--InactiveTitle': theme.inactiveTitle,
      '--GradientInactiveTitle': theme.inactiveTitleGradient,
      '--TitleText': theme.titleText,
      '--InactiveTitleText': theme.inactiveTitleText,
      '--Background': theme.desktop,
      '--Window': theme.window,
      '--WindowText': theme.windowText,
      '--ButtonFace': theme.btnface,
      '--ButtonHilight': theme.btnhighlight,
      '--ButtonShadow': theme.btnshadow,
      '--ButtonDkShadow': theme.btndkshadow,
      '--ButtonText': theme.btntext,
      '--Hilight': theme.highlight,
      '--HilightText': theme.highlightText,
      '--GrayText': theme.grayText
    };
    applyTheme(cssProperties);
  }
} catch (error) {
  console.error('Error loading saved theme:', error);
}

// Theme message listener
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'apply-theme') {
    const theme = event.data.theme;
    const root = document.documentElement;
    root.style.setProperty('--ActiveTitle', theme.activeTitle);
    root.style.setProperty('--GradientActiveTitle', theme.activeTitleGradient);
    root.style.setProperty('--InactiveTitle', theme.inactiveTitle);
    root.style.setProperty('--GradientInactiveTitle', theme.inactiveTitleGradient);
    root.style.setProperty('--TitleText', theme.titleText);
    root.style.setProperty('--InactiveTitleText', theme.inactiveTitleText);
    root.style.setProperty('--Background', theme.desktop);
    root.style.setProperty('--Window', theme.window);
    root.style.setProperty('--WindowText', theme.windowText);
    root.style.setProperty('--ButtonFace', theme.btnface);
    root.style.setProperty('--ButtonHilight', theme.btnhighlight);
    root.style.setProperty('--ButtonShadow', theme.btnshadow);
    root.style.setProperty('--ButtonDkShadow', theme.btndkshadow);
    root.style.setProperty('--ButtonText', theme.btntext);
    root.style.setProperty('--Hilight', theme.highlight);
    root.style.setProperty('--HilightText', theme.highlightText);
    root.style.setProperty('--GrayText', theme.grayText);
    localStorage.setItem('win98-theme', JSON.stringify(theme));
    console.log('Theme applied:', theme.name);
    // Broadcast to all iframes
    document.querySelectorAll('iframe').forEach(iframe => {
      try {
        iframe.contentWindow.postMessage({
          type: 'apply-theme',
          theme: theme
        }, '*');
      } catch (e) {}
    });
  }
});

// this makes it so i can refrence apps in the links like #MatchEmUp like hhroses.art/home#matchemup
function openFromHash() {
  var hash = window.location.hash.substring(1);
  if (hash && appWindows[hash]) {
    var win = openApp(hash);
    if (win && win.elem) {
      win.elem.style.zIndex = "2147483647";
    }
  }
}
window.addEventListener('load', openFromHash);
window.addEventListener('hashchange', openFromHash);
window.addEventListener('load', function() {
  // queue this so all the body-onload openApp() calls finish first
  setTimeout(function() { userInteractive = true; }, 0);
});

// makes it so u can open apps from iframes etc
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'open-app' && event.data.appId) {
    var appId = event.data.appId;
    if (appWindows[appId] || document.getElementById(appId)) {
      var win = openApp(appId);
      if (win && win.elem) {
        win.elem.style.zIndex = "2147483647";
      }
    }
  }
  // Handle error messages from iframes (replaces showMessageBox)
  if (event.data && event.data.type === 'show-error') {
    showErrorWindow(event.data.message, event.data.title);
  }
});

window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'close-iframe-window') {
    topLevelWindows.forEach(function(win) {
      if (win.isActive) win.close();
    });
  }
});

// ============================================================
// log off 
// ===============================================================
function shutdownSequence() {
  playShutDownSound();
  // Hide all elements with the class "window", regardless of where they are nested
  // add more classes later if needdeededed
  document.querySelectorAll('.window').forEach(function(win) {
    win.style.setProperty("display", "none", "important"); 
  });
  document.querySelectorAll('.soulart').forEach(function(win) { //UGH this ones stubborn!?!??! halp
    win.style.setProperty("display", "none", "important"); 
  });
  const stubbornWindow = document.getElementById("art0");// im going to have a fucking annyurism fucking close omg
  if (stubbornWindow) {
    stubbornWindow.remove(); 
  } 
  // ok i made it work dont delete this ^
  // Hide all direct children of the body v
  Array.from(document.body.children).forEach(function(el) {
    el.style.display = "none";
  });
  setTimeout(function() {
    document.body.style.backgroundColor = "black";
    window.location.href = "index.html";
  }, 3000);
}

// ============================================================
// Error Window (replaces showMessageBox from os-gui)
// ============================================================

function showErrorWindow(message, title) {
  message = message || 'An error has occurred.';
  title = title || 'Error';
  // Make sure the template exists
  if (!document.getElementById('ErrorMessage') && appWindows['ErrorMessage']) {
    generateAppWindows(['ErrorMessage']);
  }
  var template = document.getElementById('ErrorMessage');
  if (!template) return;
  // Open a new window from the template (this clones it)
  var win = new Window(template);
  // Update the title and message on the cloned window
  var titleText = win.elem.querySelector('.title-bar-text');
  if (titleText) titleText.textContent = title;
  var msgText = win.elem.querySelector('.error-message-text');
  if (msgText) msgText.innerHTML = message;
  // Update the taskbar button text too
  if (win.taskBtn) {
    var taskSpan = win.taskBtn.querySelector('.taskbtn-text');
    if (taskSpan) taskSpan.textContent = title;
  }
  // Center it on screen
  var w = 340;
  win.elem.style.width = w + 'px';
  win.elem.style.left = Math.max(0, Math.floor((window.innerWidth - w) / 2)) + 'px';
  win.elem.style.top = Math.max(30, Math.floor(window.innerHeight / 3)) + 'px';
  // Force it on top of everything including iframes
  win.elem.style.zIndex = '2147483647';
  // Wire up the OK button to close the window
  var okBtn = win.elem.querySelector('.error-ok-btn');
  if (okBtn) {
    okBtn.onclick = function() {
      win.close();
    };
  }
  win.open();
  return win;
}