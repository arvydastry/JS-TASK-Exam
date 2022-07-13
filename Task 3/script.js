/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const renderCard = (users) => {
  const { login, avatar_url } = users;

  const card = document.createElement("div");

  const output = document.getElementById("output");

  const loginEl = document.createElement("h3");

  const avatarEl = document.createElement("h5");

  card.className = "card";

  loginEl.textContent = login;

  avatarEl.textContent = avatar_url;

  card.append(loginEl, avatarEl);

  card.style.backgroundColor = "lightblue";

  output.append(card);
};

const messageGone = document.getElementById("message");

btn.addEventListener("click", function handleClick() {
  if (messageGone.style.display === "none") {
    messageGone.style.display = "block";

    btn.textContent = "Hide element";
  } else {
    messageGone.style.display = "none";

    btn.textContent = "Show element";
  }
});

fetch("https://api.github.com/users")
  .then((resp) => resp.json())

  .then((response) => {
    response.forEach((users) => renderCard(users));
  })

  .catch((error) => {
    console.error(error, ": failed to load");
  });
