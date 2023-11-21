const $handler = document.getElementById("handler");
const $hidden_list = document.getElementById("cu-list");
$handler.addEventListener("click", (e) => {
    e.stopPropagation();
    $hidden_list.classList.toggle("show");
});

$hidden_list.addEventListener("click", (e) => {
    e.stopPropagation();
});

const $R_l_H = document.getElementById("resposive-links-handler");
const $R_l = document.querySelector(".resposive-links");

$R_l_H.addEventListener("click", () => {
    $R_l.classList.toggle("true");
});

let $container_div = Array.from(document.querySelectorAll(".changed-cont"));
let num = 0;

setInterval(() => {
    num++;
    $changeOut();
}, 6000);

function $changeOut() {
    if (num > $container_div.length - 1) {
        num = 0;
    }
    $container_div.forEach(($div) => $div.classList.remove("active"));
    $container_div[num].classList.add("active");
}
$changeOut();

let btn_Handnler = document.querySelectorAll("#ticket-model-handler");
let $tecket_Model = document.querySelector("#tickets-model");
let $tecket_Model_closer = document.getElementById("close-btn");
let $Up_btn = document.querySelector("#up-btn");

btn_Handnler.forEach((btn) => {
    btn.addEventListener("click", function () {
        $tecket_Model.classList.add("open");
    });
});

$tecket_Model_closer.addEventListener("click", () => {
    $tecket_Model.classList.remove("open");
});

window.addEventListener("click", (e) => {
    $hidden_list.classList.remove("show");
});
window.onscroll = function () {
    if (window.scrollY >= 1000) {
        $Up_btn.style.opacity = "1";
    } else {
        $Up_btn.style.opacity = "0";
    }
};
$Up_btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
