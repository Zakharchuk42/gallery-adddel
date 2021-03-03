let dateImg = function () {
    let date = new Date().toLocaleString().slice(0, -3);
    let howImg = document.querySelectorAll(".image").length;
    let time = document.querySelector(".dateimg");
    time.innerHTML = `Сегодня: ${date} <br>`;
};

dateImg();

let openPopup = document.querySelectorAll(".image");
for (let i = 0; i < openPopup.length; i++) {
    openPopup[i].onclick = function () {
        let popup = document.querySelector(".popup");
        popup.classList.add("open");
        let innPop = document.querySelector(".popcont");
        innPop.innerHTML = `<img src="${openPopup[i].src}">`;
    };
}

let closePopup = document.querySelector(".popup-close");
closePopup.onclick = function () {
    let removeClass = document.querySelector(".popup");
    removeClass.classList.remove("open");
};

let deleteImg = document.querySelectorAll(".delete");
for (let i = 0; i < deleteImg.length; i++) {
    deleteImg[i].onclick = function () {
        openPopup[i].classList.add("deletediv");
        deleteImg[i].classList.add("deletediv");
        localStorage.setItem(i, i);
    };
}

let refreshButt = document.querySelector(".refresh");
refreshButt.onclick = function () {
    for (let i = 0; i < deleteImg.length; i++) {
        openPopup[i].classList.remove("deletediv");
        deleteImg[i].classList.remove("deletediv");
        localStorage.clear();
    }
};
let localAdd = function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        for (let i = 0; i < openPopup.length; i++) {
            if (i == key) {
                openPopup[i].classList.add("deletediv");
                deleteImg[i].classList.add("deletediv");
            }
        }
    }
};

localAdd();
