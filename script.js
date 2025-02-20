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
function insertNav() {
  let nav = `<div
          class="d-none d-sm-block"
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
              <h2>In Government</h2>
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
              <h2>Legacy</h2>
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
              <h2>Timeline</h2>
            </div>
          </div>
        </div>
        <div class="d-block d-sm-none">
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
      <hr />
      <div class="offcanvas-body">
      <h2 onclick="linker('index.html')">Home</h2>
        <ul>
        <li onclick="linker('early-life.html')">Early Life
        <ul>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        </ul>
        </li>
        <li>In Government
        <ul>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        </ul>
        </li>
        <li>Legacy
        <ul>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        </ul>
        </li>
        <li>TImeline
        <ul>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        <li>Section</li>
        </ul>
        </li>
        </ul>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", offcanvas);
}
window.onload = function startup() {
  insertNav();
  insertOffcanvas();
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
};
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
// window.addEventListener("scroll", function () {
//   if (scrollY > window.innerHeight + 150 && window.innerWidth > 576) {
//     document.getElementById("navbar").classList.remove("fadeNavOut");
//     document.getElementById("navbar").classList.add("fadeNavIn");
//   } else {
//     document.getElementById("navbar").classList.remove("fadeNavIn");
//     document.getElementById("navbar").classList.add("fadeNavOut");
//   }
// });
function linker(url) {
  window.location = url;
}
