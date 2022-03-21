let cities = [
  "Warsaw",
  "Berlin",
  "Paris",
  "London",
  "New York",
  "Tokio",
  "Moscow",
];

// console.log(cities);

const content = document.querySelector("div"); // add/collect div
const list = document.createElement("ol"); // create ol list
console.log(list);

// loop for create li elements in ol
for (let i = 0; i < cities.length; i++) {
  const li = document.createElement("li"); // create li element.

  li.innerHTML = cities[i]; // assigning text to li using array value.
  li.setAttribute("class", "city"); // add class to li elements.

  list.appendChild(li);
}

content.appendChild(list);
