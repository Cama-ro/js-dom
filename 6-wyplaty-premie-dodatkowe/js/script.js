// sortowanie bąbelkowe do sortowania przepracowanych godzin
const bubbleSort = (objArr) => {
  const lenghtArray = objArr.length;

  for (let i = 0; i < lenghtArray; i++) {
    for (let j = 0; j < lenghtArray; j++) {
      //
      // Check if current number is greater than the next number
      if (objArr[j].time < objArr[j + 1]?.time) {
        let currentNumber = objArr[j];
        objArr[j] = objArr[j + 1];
        objArr[j + 1] = currentNumber;
      }
    }
  }

  return objArr;
};

////////////////////////////////////////////////////////////////////////////

let btnOblicz = document.getElementById("oblicz"); //przycisk do obliczania

// funkcja z pętlą obliczająca: wypłatę dla każdego pracownika, premię, przepracowane godziny i 3 najlepszych pracowników
const suma = () => {
  let pracownik = document.getElementsByClassName("pracownik");
  let czasPracy = document.getElementsByClassName("czas");
  let stawkaPracy = document.getElementsByClassName("stawka");
  let wyplata = document.getElementsByClassName("wyplata");

  let najlepsiPracownicy = []; // trzech pracowników z największą liczbą godzin

  for (let i = 0; i < pracownik.length; i++) {
    najlepsiPracownicy.push({
      // umieszczanie do tablicy obiektów - pracowników
      name: pracownik[i].innerText,
      time: Number(czasPracy[i].value),
    });

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

  let najlepsiWybrani = bubbleSort(najlepsiPracownicy);
  document.getElementById("najlepsi-pracownicy").innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const newP = document.createElement("p");
    newP.innerText = najlepsiWybrani[i].name;
    document.getElementById("najlepsi-pracownicy").appendChild(newP); // wypisanie 3 najlepszych pracowników
  }
};

btnOblicz.addEventListener("click", suma);
