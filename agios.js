const calcAgio = document.getElementById("calc")

calcAgio.addEventListener("click", getDay)

function getDay(e) {
    e.preventDefault();

    let day = document.getElementById("day").value;
    sessionStorage.setItem("day", day)
    console.log(day)
}