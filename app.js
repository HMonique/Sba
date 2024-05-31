
const mainEl = document.querySelector("main");
mainEl.classList.add('flex-around')
const bodyEl = document.querySelector("body");

window.alert("Sign up for our newletter")

bodyEl.style.backgroundImage = "url('https://d1o2pwfline4gu.cloudfront.net/m/t/31943/31933877/a-01.jpg')";
bodyEl.style.backgroundRepeat = "no-repeat";
bodyEl.style.backgroundSize = "cover";

const formEl = document.querySelector("form")
bodyEl.appendChild(formEl);
formEl.style.position = "absolute"
formEl.style.bottom = "50"

const arr = [
    { name: "Bumblebee", URI:"https://d31l02nbp0owar.cloudfront.net/m/t/32995/32985798/a-01.jpg", hidden: "Bumblebee", hiddenURI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrg5D53WZvP-IS6mHQiFAdHWXSt5KZ-nY4Q&usqp=CAU"},
    { name: "Rabbit", URI:"https://d1o2pwfline4gu.cloudfront.net/m/t/17389/17379353/10625689.jpg", hidden: "Rabbit", hiddenURI: "https://www.motionelements.com/stock-image-27886767-cute-easter-orange-rabbit-on-green-grass-little-rabbit-walking-outdoors-in?query_id=c19e11f1-9864-42d9-958a-2a17f5394209&position=37"},
    { name: "Unicorn", URI:"https://d1o2pwfline4gu.cloudfront.net/m/t/24039/24029467/18466541.jpg", hidden: "Unicorn", hiddenURI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDjGyyY8H0COiUGDkbOBUwt3Vbo1jEO_RBg&usqp=CAU"},
    { name: "Flower", URI: "https://d31l02nbp0owar.cloudfront.net/m/t/27316/27306172/22159551.jpg", hidden: "Flower", hiddenURI: " https://images.pexels.com/photos/20269075/pexels-photo-20269075/free-photo-of-bouquet-of-crochet-flowers.jpeg?auto=compress&cs=tinysrgb&w=600"},                                                                                                          
    ]

function createArticle (){
    const article = document.createElement("article")
    return article
}

function createHeader(str){
    const h1 = document.createElement("h1")
    h1.innerHTML = str
    return h1 
}

arr.forEach(element => {
    const img = document.createElement("img")
    let newArticle = createArticle()
    let h1 = createHeader(element.name)
    img.src = element.URI
    img.style.width = "200px";
    img.style.height = "150px";

    newArticle.appendChild(h1)
    newArticle.appendChild(img)
    mainEl.appendChild(newArticle)
})


const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");
const menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];

  menuLinks.for ((link) => {
    const aElement = document.createElement("a");
    aElement.href = link.href;
    aElement.textContent = link.text;
    topMenuEl.appendChild(aElement);
  });









