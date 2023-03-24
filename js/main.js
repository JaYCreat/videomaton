console.log('check main');



const filmContainer = document.getElementById("films");
const pourcentageGlobale = document.getElementById("pourcentage");


function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
}


baseDeDonnee.forEach(film => {
    const watchTimeInMinutes = parseInt(film.watchTime.slice(0, -4));
    const timeToMinutes = parseInt(film.timeToMinutes.slice(0, -4));

    const watchTimeFormatted = convertToHoursAndMinutes(watchTimeInMinutes);
    const timeToMinutesFormatted = convertToHoursAndMinutes(timeToMinutes);

    const watchedPercentage = ((watchTimeInMinutes / timeToMinutes) * 100).toFixed(1);
    const iconClass = watchedPercentage === 99 ? 'fas fa-check-circle' : 'fas fa-times-circle';

    const filmHTML = `
        <div class="film">
            <h2>${film.title}</h2>
            <p>Réalisateur: ${film.realisator}</p>
            <p>Durée: ${timeToMinutesFormatted}</p>
            <p>
                Temps regardé: ${watchTimeFormatted} (${watchedPercentage}%)
                <i class="${iconClass}"></i>
            </p>
            <p>Description: ${film.description}</p>
        </div>
        <br>
    `;

    document.body.innerHTML += filmHTML;
});

