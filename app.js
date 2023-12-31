// *******************          Set Variable       *****************

const body = document.body;

// create our Elements    ******   1 Header

// 1  -- 1  Create our Elements & Class
let navList = ["Home", "About", "Service", "Contact US"];

let header = document.createElement("header");
header.classList.add("header");
let navBar = document.createElement("div");
navBar.classList.add("navBar");
let logo = document.createElement("div");
// let logoText = document.createTextNode('logo')
logo.classList.add("logo");
let list = document.createElement("ul");
list.classList.add("list");

//   1  --  2   append links to list

for (let link = 0; link < navList.length; link++) {
  let linksText = document.createTextNode(navList[link]);
  let links = document.createElement("li");
  links.classList.add("link");
  links.appendChild(linksText);
  list.appendChild(links);
  links.style.cssText = `display: flex;justify-content: space-between;align-items: center;padding: 10px 20px;margin: 0 20px;font-size:22px; `;
}

//  1  -- 3  styling elements

header.style = "height: 100px;background-color:#13c6ed;width:100vw";
navBar.style.cssText =
  "display: flex;justify-content: space-around;align-items: center;flex-direction: row;width:100vw";
logo.style.cssText = `
    background-color: blue;height:100px;width:100px;
    background-image: url(/images/logo.jpeg) ;background-size: cover;
`;
list.style.cssText = `justify-content: space-between;display: flex;align-items: center; `;

//  1  -- 4  append Header to page

navBar.appendChild(logo);
navBar.appendChild(list);
header.appendChild(navBar);
body.append(header);

// create our Elements    ******   2   main-page

// 2  -- 1  Create our Elements & Class



const containerMain = document.createElement("div")
containerMain.classList.add('container-main')
const mainPage = document.createElement("div");
mainPage.classList.add("mainPage");
mainPage.style.cssText = `height: 100%;width: 100vw;background-color: yellowgreen;`;
mainPage.appendChild(containerMain)
body.append(mainPage);
