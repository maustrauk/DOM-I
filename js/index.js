const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "My staff",
    "nav-item-8": "Personal",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street",
    "address-state" : "  Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Append
let nav = document.querySelector("nav");
let new_a = document.createElement("a");
let new_aa = document.createElement("a");
let p_adressState = document.createElement("p");
nav.appendChild(new_a);
nav.prepend(new_aa);

//Selectors
let nav_a = document.querySelectorAll("nav a");

let logo = document.querySelector("#logo-img");

let cta_h1 = document.querySelector(".cta h1");
let cta_button = document.querySelector(".cta button");
let cta_img = document.querySelector("#cta-img");

let top_content = document.querySelectorAll(".top-content .text-content");
let features = top_content[0];
let features_h4 = features.querySelector("h4");
let features_content = features.querySelector("p");
let about = top_content[1];
let about_h4 = about.querySelector("h4");
let about_content = about.querySelector("p");

let middle_img = document.querySelector("#middle-img");

let bottom_content = document.querySelectorAll(".bottom-content .text-content");
let services = bottom_content[0];
let services_h4 = services.querySelector("h4");
let services_content = services.querySelector("p");
let product = bottom_content[1];
let product_h4 = product.querySelector("h4");
let product_content = product.querySelector("p");
let vision = bottom_content[2];
let vision_h4 = vision.querySelector("h4");
let vision_content = vision.querySelector("p");

let contact_h4 = document.querySelector(".contact h4");
let contact_p = document.querySelectorAll(".contact p");
let address = contact_p[0];
let phone = contact_p[1];
let email = contact_p[2];

let footer = document.querySelector("footer p");

//Content

nav_a.forEach((element, i) => element.textContent = siteContent["nav"][`nav-item-${i+1}`]);
logo.src = siteContent["nav"]["img-src"];

cta_h1.textContent = siteContent["cta"]["h1"];
cta_button.textContent = siteContent["cta"]["button"];
cta_img.src = siteContent["cta"]["img-src"];

features_h4.textContent = siteContent["main-content"]["features-h4"];
features_content.textContent = siteContent["main-content"]["features-content"]
about_h4.textContent = siteContent["main-content"]["about-h4"];
about_content.textContent = siteContent["main-content"]["about-content"];

middle_img.src = siteContent["main-content"]["middle-img-src"];

services_h4.textContent = siteContent["main-content"]["services-h4"];
services_content.textContent = siteContent["main-content"]["services-content"]
product_h4.textContent = siteContent["main-content"]["product-h4"];
product_content.textContent = siteContent["main-content"]["product-content"];
vision_h4.textContent = siteContent["main-content"]["vision-h4"];
vision_content.textContent = siteContent["main-content"]["vision-content"];

contact_h4.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
p_adressState.textContent =siteContent["contact"]["address-state"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

footer.textContent = siteContent["footer"]["copyright"];

//New content
nav_a.forEach(element => element.style.color = "green");
footer.style.background = "#cff2fa";
document.querySelector("header").style.background = "#f0c7f2";
address.appendChild(p_adressState);
cta_h1.style.textAlign = "center";
cta_h1.style.fontSize = "72px";