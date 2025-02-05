let birthday = new Date("Aug 1, 2002")
let now = new Date()

let nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());

if (now > nextBirthday) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
}

console.log("Próximo aniversário em: " + nextBirthday);

let interval = setInterval(function() {
    let nowDate = new Date().getTime();
    let distance = nextBirthday.getTime() - nowDate;

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