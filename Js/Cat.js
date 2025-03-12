const httpStatuses = [200, 404, 500]; 
const cardsContainer = document.getElementById("cat-cards");
const errorContainer = document.getElementById("error");

httpStatuses.forEach(status => {
  const imageUrl = `https://http.cat/${status}`;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${imageUrl}" alt="HTTP ${status} image">
    <h2>HTTP ${status}</h2>
  `;
  cardsContainer.appendChild(card);
});
