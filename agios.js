const btnOpen = document.getElementById("open");
const btnAggio = document.getElementById("aggio");
const btnWithdraw = document.getElementById("withdraw");

btnOpen.addEventListener("click", function (e) {
    e.preventDefault();
    location.href = 'open.html';
})
btnAggio.addEventListener("click", function (e) {
    e.preventDefault();
    location.href = 'agios.html';
})
btnWithdraw.addEventListener("click", function (e) {
    e.preventDefault();
    location.href = 'withdraw.html';
})



const calcAgio = document.getElementById("calc")

calcAgio.addEventListener("click", getDay)
calcAgio.addEventListener("click", aggio)

function getDay(e) {
    e.preventDefault();
    let day = document.getElementById("day").value;
    sessionStorage.setItem("day", day)
    console.log(day)
}


function aggio() {

    agios = (parseInt(sessionStorage.getItem("overdraft")) * parseInt(sessionStorage.getItem("day")) * 0.1) / 365;
    agios = agios.toFixed(2);

    console.log(agios)

    const signAggio = document.getElementById("signAggio");
    signAggio.innerHTML = "le montant de vos agios est de : " + agios;
}
