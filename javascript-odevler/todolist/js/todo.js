// TODO: EKLE BUTONU
const list = document.querySelector("#list");
const defList = ["3 Litre Su İç ", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku"]


let userList = localStorage.getItem("userList") ? JSON.parse(localStorage.getItem("userList")) : [];




const CLOSE_BUTTON = `<span class="close">×</span>`

function createLi(documentList, liValue=`${document.querySelector("#task").value}`){
    const liDom = document.createElement("li");
    liDom.innerHTML = liValue + CLOSE_BUTTON;
    documentList.append(liDom);
}

function getList(){
    defList.forEach( item => {
        createLi(list, (item));
    })
    if ( userList.length ){
        userList.forEach( item => {
            createLi(list, (item));
        }) 
}
}

function newElement() {
  if (
    document.querySelector("#task").value &&
    document.querySelector("#task").value.replace(/\s/g, "").length
  ) {
    createLi(list);
    console.log(userList)
    userList.push(document.querySelector("#task").value);
    localStorage.setItem("userList",JSON.stringify(userList));
    
  }
}
// TODO: SİL BUTONU



// TODO: YAPILDI FONKSİYONU

// TODO: BOOTSTRAP TOAST


