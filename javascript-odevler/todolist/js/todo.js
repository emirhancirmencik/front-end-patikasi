const list = document.querySelector("#list"); // html'den list çekilir.

const defList = [
  // Sürekli listede olması gereken default list tanımlar.
  "3 Litre Su İç ",
  "Ödevleri Yap",
  "En Az 3 Saat Kodlama Yap",
  "Yemek Yap",
  "50 Sayfa Kitap Oku",
];

let userList = localStorage.getItem("userList") // Eğer localstorage'a kaydedilmiş liste varsa getirir, yoksa yeni tanımlar.
  ? JSON.parse(localStorage.getItem("userList"))
  : [];

function createLi( // List item oluşturan fonksiyon.
  documentList, // List item'ın oluşturulacağı liste.
  liValue = document.querySelector("#task").value // Li içinde yazacak değer. Bilgi storage'dan çekilirse belirtilmesi,fonksiyon çağırılırken gönderilmesi gerekir. Eğer bilgi input'dan alınacaksa fonksiyon çağırılırken parametre verilmez böylece default olarak kutu içerisindeki veri alınır.
) {
  const liDom = document.createElement("li"); // List item oluşturur.
  const txt = document.createTextNode(liValue); // List item içerisine yazılacak text oluşturulur.
  const span = document.createElement("span"); // Silme tuşu için span.
  var txtBtn = document.createTextNode("\u00D7"); // Silme tuşundaki çarpı işareti.
  liDom.onclick = function () {
    // List item'a tıklandığında çağırılacak fonksiyon.
    if (!liDom.classList.contains("checked")) {
      // Eğer daha önceden tıklanmadıysa, tıklandığında. checked classı atanır.
      liDom.classList.add("checked");
    } else {
      // Daha önceden tıklandıysa uncheck etmek için check class'ı silinir.
      liDom.classList.remove("checked");
    }
  };
  span.className = "close"; // Silme tuşu için gerekli css eklenir.
  span.appendChild(txtBtn); // Silme tuşundaki çarpı işareti silme tuşuna bağlanır.
  span.onclick = function () {
    // Silme tuşu tıklandığında çalışacak fonksiyonlar.
    var div = this.parentElement; // List item'ın parenti olan list bilgisi alınır.
    div.style.display = "none"; // Liste görünmez hale getirilir.
    if (userList.includes(liValue)) {
      // Default liste dışındaki data'lar silinirse local storage'dan da silinmesi sağlanır.
      userList.splice(userList.indexOf(liValue), 1);
      localStorage.setItem("userList", JSON.stringify(userList));
    }
  };
  liDom.appendChild(txt);
  liDom.appendChild(span);
  documentList.append(liDom); // List item, listeye bağlanır.
}

function getList() {
  // Body load olduğunda hem default listeyi hem de storage'dan getirilen liste ile fonksiyon çağırır.
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
  // Ekle tuşuna basıldığında çalışacak fonksiyon.
  if (
    document.querySelector("#task").value && // Eğer herhangi bir değer girilmediyse çalışmaz ve
    document.querySelector("#task").value.replace(/\s/g, "").length // Sadece whitespace varsa çalışmaz.
  ) {
    createLi(list); // Kullanıcıdan gelen data ile yeni list item oluşturmak için fonksiyon çağırır.
    userList.push(document.querySelector("#task").value); // Kullanıcı listesine ekleme yapar.
    localStorage.setItem("userList", JSON.stringify(userList)); // Local storage'e ekleme yapar.
    $(".success").toast("show"); // Bootstrap toast çalışır.
  } else {
    $(".error").toast("show");
  }
}
