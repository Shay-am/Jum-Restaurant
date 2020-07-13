const dinnerDay = document.getElementById('day');

export const changeDinnerDay = () => {
    const time = new Date();
    let weekday = new Array(7);
    weekday[0] = "Niedziela";
    weekday[1] = "Poniedzialek";
    weekday[2] = "Wtorek";
    weekday[3] = "Sroda";
    weekday[4] = "Czwartek";
    weekday[5] = "Piatek";
    weekday[6] = "Sobota";
    const day = weekday[time.getDay()];
    dinnerDay.innerHTML = `Mamy ${day}`
}
console.log(dinnerDay);