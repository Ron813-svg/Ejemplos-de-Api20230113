const url = 'https://dog.ceo/api/breeds/image/random/10';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud a la API');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const cardsContainer = document.getElementById("dog-cards");
    if (data.message && data.message.length > 0) {
      const imageUrls = data.message;

     
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const randomImageUrl = imageUrls[randomIndex];
      
      
      document.body.style.backgroundImage = `url(${randomImageUrl})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';

      imageUrls.forEach(imageUrl => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${imageUrl}" alt="Dog image">
        `;
        cardsContainer.appendChild(card);
      });
    } else {
      document.getElementById("error").textContent = "No se encontraron imágenes.";
    }
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("error").textContent = "Ocurrió un error al obtener las imágenes.";
  });
