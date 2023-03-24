console.log('check main');



const filmContainer = document.getElementById("films");

baseDeDonnee.forEach(film => {
    const filmDiv = document.createElement("div");
    const timeToMinutes = parseInt(film.timeToMinutes.split(' ')[0], 10);
    const watchTime = parseInt(film.watchTime.split(' ')[0], 10);
    const watchPercentage = ((watchTime / timeToMinutes) * 100).toFixed(1);

    filmDiv.innerHTML = `
        <h2>${film.title}</h2>
        <p>Réalisateur : ${film.realisator}</p>
        <p>Durée : ${film.timeToMinutes}</p>
        <p>Temps regardé : ${watchPercentage}%</p>
        <p>Description : ${film.description}</p>
        <hr>
    `;
    filmContainer.appendChild(filmDiv);
});

