const btn = document.querySelector("button"); // download button

// function to add items to ul list

const addItem = () => {
  const list = document.getElementById("items"); // download items
  const item = document.getElementsByClassName("item"); // download items collection
  const li = document.createElement("li"); //create li element

  let itemCounter = item.length + 1; // add ordered item using length method
  li.innerText = `Item ${itemCounter}`; // add text to item with order number
  list.appendChild(li);
  li.setAttribute("class", "item"); // add class to li elements.
};

btn.addEventListener("click", addItem); // add function to button
