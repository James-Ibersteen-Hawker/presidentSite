let quotes = [
  "The nation which forgets its defenders will itself be forgotten",
  "We cannot do everything at once, but we can do something at once",
  "I have never been hurt by what I have not said.",
  "Collecting more taxes than is absolutely necessary is legalized robbery.",
  "No person was ever honored for what he received. Honor has been the reward for what he gave.",
  "If you see ten troubles coming down the road...nine will run into the ditch before they reach you.",
  "Nothing in the world can take the place of persistence. ",
  "It takes a great man to be a good listener.",
  "Don’t expect to build up the weak by pulling down the strong.",
];
let ulContent;
window.addEventListener("scroll", videoTrigger);
window.onload = function startup() {
  insertNav();
  footerAdd();
  insertOffcanvas();
  videoTrigger();
  let menu = document.getElementById("mega-menu");
  let nav = document.getElementById("navbar");
  menu.setAttribute("style", `top: -${menu.offsetHeight + nav.offsetHeight}px`);
  let anims = `@keyframes menuUp {
  from {
    top: 0;
  }
    to {
    top: -${menu.offsetHeight + nav.offsetHeight}px
    }
  }
  @keyframes menuDown {
  from {
  top: -${menu.offsetHeight + nav.offsetHeight}px}
    to {
    top: 0;}
  }  
  `;
  let classes = `
  .menuUp {
  animation-name: menuUp;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  }
  .menuDown {
  animation-name: menuDown;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  }
  `;
  document.getElementsByTagName("STYLE")[0].append(anims);
  document.getElementsByTagName("STYLE")[0].append(classes);
  ulContent = document.getElementById("ul").innerHTML;
  //quote
  document.getElementById("quote").innerHTML = `&#8220;${
    quotes[Math.floor(Math.random() * quotes.length)]
  }&#8221;`;
  menuUp();
};
window.addEventListener("resize", function () {
  menuUp();
});
function menuDown() {
  document.getElementById("mega-menu").classList.remove("menuUp");
  document.getElementById("mega-menu").classList.add("menuDown");
  ulContent = document.getElementById("ul").innerHTML;
  document.getElementById("ul").innerHTML = "";
}
function menuUp() {
  document.getElementById("mega-menu").classList.remove("menuDown");
  document.getElementById("mega-menu").classList.add("menuUp");
  document.getElementById("ul").innerHTML = ulContent;
}
function linker(url) {
  window.location = url;
}
function videoTrigger() {
  let video1 = {
    elem: document.getElementById("video1"),
    get pos() {
      let objOffset = this.elem.getBoundingClientRect().top;
      let scrollPos = Math.round(
        window.visualViewport.pageTop + objOffset - 80
      );
      return scrollPos;
    },
  };
  video1.elem.muted = true;
  video1.elem.loop = true;
  let video2 = {
    elem: document.getElementById("video2"),
    get pos() {
      let objOffset = this.elem.getBoundingClientRect().top;
      let scrollPos = Math.round(
        window.visualViewport.pageTop + objOffset - 80
      );
      return scrollPos;
    },
  };
  video2.elem.muted = true;
  video2.elem.loop = true;
  let video3 = {
    elem: document.getElementById("video3"),
    get pos() {
      let objOffset = this.elem.getBoundingClientRect().top;
      let scrollPos = Math.round(
        window.visualViewport.pageTop + objOffset - 80
      );
      return scrollPos;
    },
  };
  video3.elem.muted = true;
  video3.elem.loop = true;
  //if in range
  if (
    window.scrollY > video1.pos - 300 &&
    window.scrollY < video1.pos + video1.elem.offsetHeight - 300
  )
    video1.elem.play();
  else video1.elem.pause();
  if (
    window.scrollY > video2.pos - 300 &&
    window.scrollY < video2.pos + video2.elem.offsetHeight - 300
  )
    video2.elem.play();
  else video2.elem.pause();
  if (
    window.scrollY > video3.pos - 300 &&
    window.scrollY < video3.pos + video3.elem.offsetHeight - 300
  )
    video3.elem.play();
  else video3.elem.pause();
}
function footerAdd() {
  let footer = `<footer class="container-fluid">
      <div class="row">
        <div class="col-3" onclick="linker('early-life.html')">Early Life</div>
        <div class="col-3" onclick="linker('govt.html')">In Government</div>
        <div class="col-3" onclick="linker('legacy.html')">Legacy</div>
        <div class="col-3" onclick="linker('index.html#timeline')">Timeline</div>
      </div>
      <hr />
      <p><a href="index.html">Copyright &copy; Remy Serbinenko, 2025</a></p>
    </footer>`;
  document.body.insertAdjacentHTML("beforeend", footer);
}
function insertNav() {
  let nav = `<div
          class="d-none d-md-block"
          onmouseenter="menuDown()"
          onmouseleave="menuUp()"
        >
          <div class="navBar" id="navbar">
            <img class="picture" src="data-files/coolidge-portrait.jpg" onclick="linker('index.html')"/>
            <ul id="ul">
              <li>Early Life</li>
              <li>In Government</li>
              <li>Legacy</li>
              <li>Timeline</li>
            </ul>
          </div>
          <div class="mega-menu row" id="mega-menu">
            <div class="col-4">
              <h2 onclick="linker('early-life.html')">Early Life</h2>
              <hr />
              <ul>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
              </ul>
            </div>
            <div class="col-4">
              <h2 onclick="linker('govt.html')">In Government</h2>
              <hr />
              <ul>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
              </ul>
            </div>
            <div class="col-4">
              <h2 onclick="linker('legacy.html')">Legacy</h2>
              <hr />
              <ul>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
                <li>
                  <p>Section</p>
                </li>
              </ul>
            </div>
            <div class="col-12">
              <hr />
              <h2 onclick="linker('index.html#timeline')" id="timelineNav">Timeline</h2>
            </div>
          </div>
        </div>
        <div class="d-block d-md-none">
          <div class="navBar2">
            <img class="picture" src="data-files/coolidge-portrait.jpg" onclick="linker('index.html')"/>
            <div
              class="hamburger"
              data-bs-toggle="offcanvas"
              data-bs-target="#presNav"
              aria-controls="presNav"
            >
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </div>`;
  let header = document.getElementsByTagName("HEADER")[0];
  header.insertAdjacentHTML("afterbegin", nav);
}
function insertOffcanvas() {
  let offcanvas = `
    <div
      class="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabindex="-1"
      id="presNav"
      aria-labelledby="presNavLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="presNavLabel">Menu</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
      <h2 onclick="linker('index.html')">Home</h2>
      <hr>
        <ul>
        <li onclick="linker('early-life.html')"><span>Early Life</span>
        <ul>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        </ul>
        </li>
        <li onclick="linker('govt.html')"><span>In Government</span>
        <ul>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        </ul>
        </li>
        <li onclick="linker('legacy.html')"><span>Legacy</span>
        <ul>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        </ul>
        </li>
        <li onclick="linker('index.html#timeline')"><span>Timeline</span>
        <ul>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        </ul>
        </li>
        </ul>
        <hr>
        <p><a href="index.html">Copyright © Remy Serbinenko, 2025</a></p>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", offcanvas);
}
