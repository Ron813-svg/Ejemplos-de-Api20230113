const url = 'https://randomfox.ca/floof/';

const fetchImages = Array.from({ length: 10 }, () => fetch(url).then(response => response.json()));

Promise.all(fetchImages)
  .then(dataArray => {
    const cardsContainer = document.getElementById("fox-cards");
    const imageUrls = dataArray.map(data => data.image);

    
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    
    
    document.body.style.backgroundImage = `url(${randomImageUrl})`;
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'

    dataArray.forEach(data => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${data.image}" alt="Fox image">
      `;
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("error").textContent = "Ocurrió un error al obtener las imágenes.";
  });
