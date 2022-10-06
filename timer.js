function setTimerOptions(id){
    let n; 
    switch(id){
        case 'hours-number': 
            n = 24;
            break;
        case 'minutes-number':
        case 'seconds-number':
            n = 60;
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


let startButton = document.querySelector('#start-button')
startButton.addEventListener("click", (e) => {
    let hOp = document.querySelector('#hours-number'); 
    let mOp = document.querySelector('#minutes-number'); 
    let sOp = document.querySelector('#seconds-number'); 
    let hours = hOp.options[hOp.selectedIndex].text;
    let minutes = mOp.options[mOp.selectedIndex].text;
    let seconds = sOp.options[sOp.selectedIndex].text;
    setInterval(() => {
        document.querySelector
    }, 1000)
    console.log(hours, minutes, seconds)
})
