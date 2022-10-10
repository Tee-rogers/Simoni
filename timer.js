function setTimerOptions(id){
    let n; 
    switch(id){
        case 'hours-number': 
            n = 23;
            break;
        case 'minutes-number':
        case 'seconds-number':
            n = 59;
            break;
    }
    for(let i = 0; i<=n; i++){
        let tempOption = document.createElement('option'); 
        tempOption.value = i; 
        tempOption.innerText = i;
        tempOption.id = `${id}-${i}`
        document.querySelector(`#${id}`).appendChild(tempOption);
    }

    document.querySelector(`#${id}`).style.backgroundColor = 'transparent';
    document.querySelector(`#${id}`).style.border = 'none';
    document.querySelector(`#${id}`).style.color = 'white';
    document.querySelector(`#${id}`).style.fontSize = '1em';
}
setTimerOptions('hours-number')
setTimerOptions('minutes-number')
setTimerOptions('seconds-number')

let startHours; 
let startMinutes; 
let startSeconds
let startButton = document.querySelector('.start-button')
function updateClock(unit){
    current = document.querySelector(`#${unit}-number`).selectedIndex - 1;
    document.querySelector(`#${unit}-number`).selectedIndex = current;
    return current
}

function startTimer(){
    currentHours = document.querySelector('#hours-number').selectedIndex; 
    currentSeconds = document.querySelector('#seconds-number').selectedIndex; 
    currentMinutes = document.querySelector('#minutes-number').selectedIndex; 
    updateClock("seconds")
    if(currentSeconds == 0){
        if(currentMinutes!=0){
            updateClock("minutes")
            document.querySelector('#seconds-number').selectedIndex = 59;
        } 
        else{
            if(currentHours !=0){
                updateClock("hours")
                document.querySelector('#minutes-number').selectedIndex = 59;
                document.querySelector('#seconds-number').selectedIndex = 59;
            } else {
                // END OF TIMER
                document.querySelector('#seconds-number').selectedIndex = 0;
                clearInterval(secondsInterval);
            }
        }
    }
};

startButton.addEventListener("click", (e) => {
    secondsInterval = setInterval(startTimer, 10)
    
    function toggleStartPause(state){
        e.target.innerText = `${state}`.toUpperCase(); 
        e.target.classList.remove("start")
        e.target.classList.remove("pause")
        e.target.classList.add(state)
    }
    
    if(e.target.classList.contains("start")){
        toggleStartPause("pause")
        clearInterval(secondsInterval);
    } else if(e.target.classList.contains("pause")){
        toggleStartPause("start")
    } else{
        toggleStartPause("pause")
        console.log("First timer")
    }


})
