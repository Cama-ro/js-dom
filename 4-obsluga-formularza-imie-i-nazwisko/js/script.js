let form = document.getElementById("form");

const submitForm = (event) => {
  event.preventDefault(); // cancel sending form

  let firstName = document.querySelector('[name="fname"]');
  let lastName = document.querySelector('[name="lname"]');
  console.log(`Imię: ${firstName.value}, Nazwisko: ${lastName.value}`);
};

form.addEventListener("submit", submitForm);
