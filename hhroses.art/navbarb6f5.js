// ============================================================
// shared navbar
// ============================================================

function injectNavbar() {
  var placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) return;

  placeholder.outerHTML = `
    <!--navbar-->
    <div class="navbar" id="navbar" style="">
      <!--menu button--><button class="menu-button">☰</button>
      <div class="menu-btns">
        <!--back button--><button class="backbutton" onclick="history.back()" style="border-radius:25px;"><span><</span></button>
        <!-- Index --><a href="index.html"><button class="nav-btn"><img src="images/navbar-icons/note.png" /><span>hhroses.art</span></button></a>
        <!-- Home --><a href="/home"><button class="nav-btn"><img src="images/navbar-icons/home.png" /><span>Home</span></button></a>
        <!-- Books --><a href="/books"><button class="nav-btn"><img src="images/navbar-icons/books.png" /><span>Books</span></button></a>
        <!-- 2D Art --><a href="/2dart"><button class="nav-btn"><img src="images/navbar-icons/gallery.png" /><span>2D Art</span></button></a>
        <!-- 3D Art --><a href="/3dart"><button class="nav-btn"><img src="images/icons/os-js-16x16.png" /><span>3D Art</span></button></a>
        <!-- Music --><a href="/music"><button class="nav-btn"><img src="images/navbar-icons/music.png" /><span>Music</span></button></a>
        <!-- Videos --><a href="/videos"><button class="nav-btn"><img src="images/navbar-icons/video.png" /><span>Videos</span></button></a>
        <!-- Games --><a href="/games"><button class="nav-btn"><img src="images/navbar-icons/games.png" /><span>Games</span></button></a>
        <!-- Apps --><a href="/apps"><button class="nav-btn"><img src="images/icons/run-16x16.png" /><span>Apps</span></button></a>
        <!-- Travel --><a href="/travel"><button class="nav-btn"><img src="images/icons/zone-internet-16x16.png" /><span>Travel</span></button></a>
        <!-- about --><a href="/about"><button class="nav-btn"><img src="images/navbar-icons/mail.png" /><span>About</span></button></a>
        <!--forward button--><button class="forwardbutton" onclick="history.forward()" style="border-radius:25px;"><span>></span></button>
      </div>
    </div>
    <!--end of navbar-->
  `;

  // re-run anything that depends on the navbar existing
  if (typeof placeDivider === "function") placeDivider();

  //for mobile version navbar
  var btn = document.querySelector(".menu-button");
  if (btn) btn.addEventListener("click", function () {
    this.classList.toggle("is-active");
  });
}

document.addEventListener("DOMContentLoaded", injectNavbar);
  
