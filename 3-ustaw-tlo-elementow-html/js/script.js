const setBackground = () => {
  let p1 = document.querySelector(".first");
  let p2 = document.querySelector(".last");

  p1.classList.toggle("bg-red");
  p2.classList.toggle("bg-yellow");

  // p1.classList.add("bg-red");
  // p2.classList.add("bg-yellow");
};

let btnSetBg = document.getElementById("set-bg");

btnSetBg.addEventListener("click", setBackground);
