let countdownDate = new Date("Aug 1, 2022 06:00:00").getTime()

console.log(countdownDate)

let interval = setInterval(function() {
    let nowDate = new Date().getTime()

    let distance = countdownDate - nowDate

    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

    if(distance < 0) {
        clearInterval(interval)
    }
}, 1000)

subButton.addEventListener('click', () => {
    alert('Data do meu aniversário!')
})