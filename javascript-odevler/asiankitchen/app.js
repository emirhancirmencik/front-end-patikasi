const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let categories = ["All"]; // Kategoriler'e tümünü seçeneğini ekler.
categories.push(...[...new Set(menu.map((item) => item.category))]); // Category isimlerini toplar ve aynılarını siler.
const BTNLIST = document.querySelector("div.btn-container"); // Butonlar elemente eklenecek.
const ITEMLIST = document.querySelector("div.section-center"); // Ürünler bu elemente eklenecek.

const KOREA = menu.filter((item) => item.category == "Korea"); // Kategorisi Kore olanları ayırır.
const CHINA = menu.filter((item) => item.category == "China"); // Kategorisi Çin olanları ayırır.
const JAPAN = menu.filter((item) => item.category == "Japan"); // Kategorisi Japonya olanları ayırır.

const MENUS = [menu, KOREA, JAPAN, CHINA]; // Tüm kategorilere daha rahat erişim sağlamak için Array altında toplandı.

for (let i = 0; i < categories.length; i++) { // Kategori butonlarını oluşturur.
  const BTN = document.createElement("BUTTON");
  BTN.classList.add("btn", "btn-item", "btn-outline-dark"); 
  BTN.innerHTML = categories[i];
  BTN.onclick = () => { // Butonlara basıldığında ilgili kategoriye göre ürünleri listelemesi için fonksiyon çağırır.
    createItem(MENUS[i]);
  };
  BTNLIST.appendChild(BTN); // Butonları ekler.
}

function createItem(itemList) {
  ITEMLIST.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    const ITEM = document.createElement("div"); // İlgili elemanları oluşturur..
    const IMG = document.createElement("img");
    const MENUINFO = document.createElement("div");
    const MENUTITLE = document.createElement("div");
    const HEADER = document.createElement("h4");
    const HEADER_TEXT = document.createTextNode(itemList[i].title);
    const PRICE = document.createElement("h4");
    const PRICE_TEXT = document.createTextNode(itemList[i].price);
    const MENUTEXT = document.createElement("div");
    const DESC = document.createTextNode(itemList[i].desc);

    ITEM.classList.add("menu-items", "col-lg-6", "col-sm-12");
    ITEM.appendChild(IMG);
    ITEM.appendChild(MENUINFO);
    IMG.classList.add("photo");
    IMG.alt = itemList[i].title;
    IMG.src = itemList[i].img;
    MENUINFO.classList.add("menu-info");
    MENUINFO.appendChild(MENUTITLE);
    MENUINFO.appendChild(MENUTEXT);
    MENUTITLE.classList.add("menu-title");
    MENUTITLE.appendChild(HEADER);
    MENUTITLE.appendChild(PRICE);
    HEADER.appendChild(HEADER_TEXT);
    PRICE.classList.add("price");
    PRICE.appendChild(PRICE_TEXT);
    MENUTEXT.classList.add("menu-text");
    MENUTEXT.appendChild(DESC);

    ITEMLIST.appendChild(ITEM);
  }

  const DIV = document.createElement("div");
}
createItem(menu); // Body load olduğunda bütün ürünleri göstermek için çağırılır.
