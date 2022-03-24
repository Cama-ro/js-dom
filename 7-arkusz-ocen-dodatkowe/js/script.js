let btnOblicz = document.getElementById("oblicz"); //przycisk do obliczania

const suma = () => {
  let uczen = document.getElementsByClassName("uczen");
  let matematyka = document.getElementsByClassName("matematyka");
  let polski = document.getElementsByClassName("polski");
  let biologia = document.getElementsByClassName("biologia");
  let geografia = document.getElementsByClassName("geografia");
  let fizyka = document.getElementsByClassName("fizyka");
  let chemia = document.getElementsByClassName("chemia");
  let informatyka = document.getElementsByClassName("informatyka");

  let zajeciaDodatkowe = document.getElementsByClassName("zajecia-dodatkowe");

  let tytulPrzedmiotu = document.getElementsByClassName("tytul");
  let srednia = document.getElementsByClassName("srednia");

  for (let i = 1; i <= uczen.length; i++) {
    // obliczanie średniej ocen dla każdego ucznia
    srednia[i].value =
      ((zajeciaDodatkowe[i].value.includes("matematyka") &&
      Number(matematyka[i].value) < 6 // jeśli zajęcia dodatk. są z matematyki i ocena jest niższa niż 6 to dodaje do średniej 0.5
        ? Number(matematyka[i].value) + 0.5
        : Number(matematyka[i].value)) +
        (zajeciaDodatkowe[i].value.includes("polski") &&
        Number(polski[i].value) < 6
          ? Number(polski[i].value) + 0.5
          : Number(polski[i].value)) +
        (zajeciaDodatkowe[i].value.includes("biologia") &&
        Number(biologia[i].value) < 6
          ? Number(biologia[i].value) + 0.5
          : Number(biologia[i].value)) +
        (zajeciaDodatkowe[i].value.includes("geografia") &&
        Number(geografia[i].value) < 6
          ? Number(geografia[i].value) + 0.5
          : Number(geografia[i].value)) +
        (zajeciaDodatkowe[i].value.includes("fizyka") &&
        Number(fizyka[i].value) < 6
          ? Number(fizyka[i].value) + 0.5
          : Number(fizyka[i].value)) +
        (zajeciaDodatkowe[i].value.includes("chemia") &&
        Number(chemia[i].value) < 6
          ? Number(chemia[i].value) + 0.5
          : Number(chemia[i].value)) +
        (zajeciaDodatkowe[i].value.includes("informatyka") &&
        Number(informatyka[i].value) < 6
          ? Number(informatyka[i].value) + 0.5
          : Number(informatyka[i].value))) /
      (tytulPrzedmiotu.length - 3); // ilość el z klasą tytuł minus 3 (dane ucznia, zajęcia dodatkowe, średnia ocen)

    srednia[i].innerText = srednia[i].value.toFixed(2); // zaokrąglenie do 2 liczb po przecinku

    // osoba na zielonym tle - jeśli ma co najmniej 4.75 średnią
    if (srednia[i].value >= 4.75) {
      uczen[i - 1].style.background = "yellowgreen";
    }

    // osoba na czerwonym tle - jeśli ma co najmniej jedną ocenę niedostateczną
    if (
      1 === Number(matematyka[i].value) ||
      1 === Number(polski[i].value) ||
      1 === Number(biologia[i].value) ||
      1 === Number(geografia[i].value) ||
      1 === Number(fizyka[i].value) ||
      1 === Number(chemia[i].value) ||
      1 === Number(informatyka[i].value)
    ) {
      uczen[i - 1].style.background = "red";
    }
  }
};

btnOblicz.addEventListener("click", suma);
