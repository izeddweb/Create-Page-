// *******************          Set Variable       *****************

const body = document.body; 
const container = document.querySelector(".container"); 

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
  links.style.cssText = `display: flex;justify-content: space-between;align-items: center;padding: 10px 20px;margin: 0 20px; `;
}

//  1  -- 3  styling elements

header.style = "height: 100px;background-color:#13c6ed;";
navBar.style.cssText =
  "display: flex;justify-content: space-between;align-items: center;flex-direction: row;";
logo.style.cssText = `
    background-color: blue;height:100px;width:100px;
    background-image: url(/images/logo.jpeg) ;background-size: cover;
`;
list.style.cssText = `justify-content: space-between;display: flex;align-items: center; `;

//  1  -- 4  append Header to page

navBar.appendChild(logo);
navBar.appendChild(list);
header.appendChild(navBar);
container.appendChild(header);
body.prepend(container);

// create our Elements    ******   2   main-page
// 2  -- 1  Create our Elements & Class

const mainPage = document.createElement('div')
mainPage.classList.add('mainPage')
mainPage.style.cssText = `height: 100%;width: 100%;position: relative;background-color: yellowgreen;`


container.appendChild(mainPage)








