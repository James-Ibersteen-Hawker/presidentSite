let quotes = [
  "The nation which forgets its defenders will itself be forgotten",
  "We cannot do everything at once, but we can do something at once",
  "I have never been hurt by what I have not said.",
  "Collecting more taxes than is absolutely necessary is legalized robbery.",
  "No person was ever honored for what he received. Honor has been the reward for what he gave.",
  "If you see ten troubles coming down the road, you can be sure that nine will run into the ditch before they reach you.",
  "Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent.",
  "It takes a great man to be a good listener.",
  "Don’t expect to build up the weak by pulling down the strong.",
];
let ulContent;

window.onload = function startup() {
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
