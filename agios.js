const calcAgio = document.getElementById("calc")

calcAgio.addEventListener("click", getDay)

function getDay(e) {
    e.preventDefault();

    let day = document.getElementById("day").value;
    sessionStorage.setItem("day", day)
    console.log(day)
}

const btnOpen = document.getElementById("open");
const btnAggio = document.getElementById("aggio");
const btnWithdraw = document.getElementById("withdraw");

btnOpen.addEventListener("click", function(){
    location.href = 'open.html';
})
btnAggio.addEventListener("click", function(){
    location.href = 'agios.html';
})
btnWithdraw.addEventListener("click", function(){
    location.href = 'withdraw.html';
} )