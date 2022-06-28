const btnOpen = document.getElementById("open");
const btnAggio = document.getElementById("aggio");
const btnWithdraw = document.getElementById("withdraw");

btnOpen.addEventListener("click", function(e){
    e.preventDefault();
    location.href = 'open.html';
})
btnAggio.addEventListener("click", function(e){
    e.preventDefault();
    location.href = 'agios.html';
})
btnWithdraw.addEventListener("click", function(e){
    e.preventDefault();
    location.href = 'withdraw.html';
} )

const calcAgio = document.getElementById("calc")

calcAgio.addEventListener("click", getDay)

function getDay(e) {
    e.preventDefault();

    let day = document.getElementById("day").value;
    sessionStorage.setItem("day", day)
    console.log(day)
}

