let birthday = new Date("Aug 1, 2002")
let now = new Date()

let nextBirthday = new Date(now.GetFullYear(), birthday.getMonth(), birthday.getDate());

if (nowDate > nextBirthday) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
}

let interval = setInterval(function() {
    let nowDate = new Date()

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