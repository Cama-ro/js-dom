let btnOblicz = document.getElementById("oblicz"); //przycisk do obliczania

// funkcja z pętlą obliczająca wypłatę dla każdego pracownika
const suma = () => {
  let pracownik = document.getElementsByClassName("pracownik");
  let czasPracy = document.getElementsByClassName("czas");
  let stawkaPracy = document.getElementsByClassName("stawka");
  let wyplata = document.getElementsByClassName("wyplata");

  for (let i = 0; i < pracownik.length; i++) {
    wyplata[i].value = czasPracy[i].value * stawkaPracy[i].value;
    wyplata[i].innerText = wyplata[i].value; //dodawanie wartości wypłaty do pola span wyplata

    if (czasPracy[i].value < 100) {
      // pracownik z liczbą godzin poniżej 100
      pracownik[i].style.background = "red"; // zmiana tła pracownika na czerwony
    }

    if (czasPracy[i].value > 160) {
      let nadgodziny = czasPracy[i].value - 160; //liczba nadgodzin pracownika
      // console.log(nadgodziny);
      let premia = nadgodziny * (stawkaPracy[i].value * 2); // ilość nadgodzin * podwójna stawka godzinowa
      wyplata[i].innerText = wyplata[i].value + premia; // dodanie premii do wypłaty
    }
  }
};

btnOblicz.addEventListener("click", suma);
