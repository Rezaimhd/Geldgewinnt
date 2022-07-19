let konto = 100;
document.querySelector("#konto").innerHTML = konto + "Euro";
function run() {
  const zahl = Math.round(Math.random() * 5 + 1);
//   document.querySelector("#zahl").innerHTML = zahl;
  if (zahl == 6) {
      konto += 5;
      document.querySelector(".fa-solid").classList = "fa-solid fa-dice-six";
    } else if (zahl == 1) {
        konto = konto - 1;
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-one";
    } else if (zahl == 2) {
        konto = konto - 1;
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-two";
    } else if (zahl == 3) {
        konto = konto - 1;
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-three";
    } else if (zahl == 4) {
        konto = konto - 1;
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-four";
    } else if (zahl == 5) {
        konto = konto - 1;
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-five";
    }
    document.querySelector("#konto").innerHTML="Dein aktueller Kontostand " +  konto + "Euro";}
    function revert() {
       konto = 100;
     document.querySelector("#konto").innerHTML = konto + "Euro";
   }