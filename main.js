const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let inputVal = input.value;

  if (inputVal.length <= 6) {
    alert("Kiritilgan malumot 5ta dan kam bolmasligi kerak!");
  } else {
    addList(inputVal);
  }
  input.value = "";
});

function addList(data) {
  console.log(data, "data");

  const li = document.createElement("li");
  const img = document.createElement("img");

  img.src = "https://www.svgrepo.com/show/246439/error-cancel.svg";
  li.textContent = data;

  li.addEventListener("click", () => {
    li.classList.toggle("line");
  });

  img.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.appendChild(img);
  ul.appendChild(li);
}
