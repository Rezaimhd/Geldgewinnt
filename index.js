let aktuellkonto = 100;
document.querySelector("#aktuellkonto").innerHTML = aktuellkonto + "€";

function run() {
    const price = Math.round(Math.random() * 5 + 1);
    document.querySelector("#price").innerHTML = price;

    if(price == 6){
        aktuellkonto += 5;

    }else{
        aktuellkonto -= 1;
    }
    document.querySelector("#aktuellkonto").innerHTML = aktuellkonto + "€";
}

function back() {
    aktuellkonto = 100;
    document.querySelector("#aktuellkonto").innerHTML = aktuellkonto + "€";
}