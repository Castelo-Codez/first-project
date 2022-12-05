const $handler = document.getElementById("handler");
const $hidden_list = document.getElementById("cu-list");
$handler.addEventListener("click", () => {
    $hidden_list.classList.toggle("show");
});

const $R_l_H = document.getElementById("resposive-links-handler");
const $R_l = document.querySelector(".resposive-links");

$R_l_H.addEventListener("click", () => {
    $R_l.classList.toggle("true");
});

let $container_div = document.querySelectorAll(".changed-cont");
let $div_Num = 0;
function $change_Div() {
    for (let i = 0; i < $container_div.length; i++) {
        $container_div[i].style.display = "none";
    }
    $div_Num++;
    $div_Num > $container_div.length ? ($div_Num = 1) : "";
    $container_div[$div_Num - 1].style.display = "block";
    setTimeout($change_Div, 4000);
}
$change_Div();

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
    if (e.target !== $handler && e.target !== $hidden_list) {
        if ($hidden_list.classList.contains("show")) {
            $hidden_list.classList.remove("show");
        }
    }
    if (e.target == $tecket_Model) {
        $tecket_Model.classList.remove("open");
    }
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
