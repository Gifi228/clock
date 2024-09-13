let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');



for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault()
        for (let x = 0; x < links.length;x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        links[i].classList.add('active');
        tabs[i].classList.add('active');
    })
}




let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');



function clock() {
    let time = new Date(); 
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;


    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;


    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    
    setTimeout(() => clock(), 1000);
    
}   
clock()



let watchSecond = document.querySelector('.stopwatch__seconds'),
    watchMinute = document.querySelector('.stopwatch__minutes'),
    watchHour = document.querySelector('.stopwatch__hours'),
    watchBtn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span');

    

watchBtn.addEventListener('click', function() {
    if(this.innerHTML == 'start') {
        this.innerHTML = 'stop'
        span.classList.add('active');
        let i = 0;
        setTimeout(() => timer(this,i), 1000)
    }else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear';
        span.classList.remove('active');
        span.classList.add('active_clear');
    }else {
        this.innerHTML = 'start';
        span.classList.remove('active_clear');
        watchSecond.innerHTML = 0;
        watchMinute.innerHTML = 0;
        watchHour.innerHTML = 0;
    }
})


function timer(el, i) {
    if(el.innerHTML == 'stop') {
        if(i == 59) {
            i = 0;
            watchSecond.innerHTML = i
            if(watchMinute.innerHTML == 59) {
                watchMinute.innerHTML = 0;
                watchHour.innerHTML++
            }else {
                watchMinute.innerHTML++
            }
        }else {
            i++
            watchSecond.innerHTML = i;
        }
        setTimeout(() => timer(el,i), 1000);
    }
}

























// let button = document.querySelector('.stopwatch__btn'),
//     icon = document.querySelector('.tabsLink__span'),
//     minuts = document.querySelector('.stopwatch__minutes'),
//     hours = document.querySelector('.stopwatch__hours'),
//     second = document.querySelector('.stopwatch__seconds');

// let seconds = 0,
//     minutes = 0,
//     hrs = 0,
//     timer;

// button.addEventListener('click', () => {
//     if (button.innerHTML === 'start') {
//         startStopwatch();
//     } else if (button.innerHTML === 'STOP') {
//         stopStopwatch();
//     } else if (button.innerHTML === 'CLEAR') {
//         resetStopwatch();
//     }
// });

// function startStopwatch() {
//     button.innerHTML = 'STOP';
//     icon.classList.add('active');
//     icon.classList.remove('active_clear'); 
//     timer = setInterval(updateStopwatch, 1000);
// }

// function updateStopwatch() {
//     seconds++;
//     if (seconds === 60) {
//         seconds = 0;
//         minutes++;
//         if (minutes === 60) {
//             minutes = 0;
//             hrs++;
//         }
//     }
//     displayTime();
// }

// function stopStopwatch() {
//     button.innerHTML = 'CLEAR';
//     icon.classList.remove('active'); 
//     icon.classList.add('active_clear'); 
//     clearInterval(timer);
// }

// function resetStopwatch() {
//     seconds = 0;
//     minutes = 0;
//     hrs = 0;
//     displayTime();
//     button.innerHTML = 'start';
//     icon.classList.remove('active_clear'); 
// }

// function displayTime() {
//     second.innerHTML = seconds < 10 ? '0' + seconds : seconds;
//     minuts.innerHTML = minutes < 10 ? '0' + minutes : minutes;
//     hours.innerHTML = hrs < 10 ? '0' + hrs : hrs;
// }















