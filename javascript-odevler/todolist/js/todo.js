const list = document.querySelector("#list");
var counter = 0;
const defList = [
  "3 Litre Su İç ",
  "Ödevleri Yap",
  "En Az 3 Saat Kodlama Yap",
  "Yemek Yap",
  "50 Sayfa Kitap Oku",
];

let userList = localStorage.getItem("userList")
  ? JSON.parse(localStorage.getItem("userList"))
  : [];

function createLi(
  documentList,
  liValue = document.querySelector("#task").value
) {
  counter++;
  const liDom = document.createElement("li");
  const txt = document.createTextNode(liValue);
  const span = document.createElement("span");
  var txtBtn = document.createTextNode("\u00D7");
  liDom.onclick = function () {
    if (!liDom.classList.contains("checked")) {
      liDom.classList.add("checked");
    } else {
      liDom.classList.remove("checked");
    }
  };
  span.className = "close";
  span.appendChild(txtBtn);
  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    if (userList.includes(liValue)) {
      userList.splice(userList.indexOf(liValue), 1);
      localStorage.setItem("userList", JSON.stringify(userList));
    }
  };
  liDom.appendChild(txt);
  liDom.appendChild(span);
  documentList.append(liDom);
}

function getList() {
  defList.forEach((item) => {
    createLi(list, item);
  });
  if (userList.length) {
    userList.forEach((item) => {
      createLi(list, item);
    });
  }
}

function newElement() {
  if (
    document.querySelector("#task").value &&
    document.querySelector("#task").value.replace(/\s/g, "").length
  ) {
    createLi(list);
    console.log(userList);
    userList.push(document.querySelector("#task").value);
    localStorage.setItem("userList", JSON.stringify(userList));
  }
}

const closeButton = document.getElementsByClassName("close");

function deleteItem() {
  console.log("Silindi.");
}

// TODO: BOOTSTRAP TOAST
