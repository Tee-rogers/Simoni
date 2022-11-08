//ALARM JAVASCRIPT
let overlay = document.querySelector(".overlay")
overlay.style.display = "none"


for(let i = 0; i<=59; i++){
    let tempOption = document.createElement('option'); 
    tempOption.value = i; 
    tempOption.innerText = i;
    document.querySelector("#minutes-number").appendChild(tempOption);
}

let mainDisplay = document.querySelector(".main-display")
let addAlarmButton = document.querySelector(".action-button img")
let headerTitle = document.querySelector(".header2")
let deleteAlarmButton = document.querySelector(".delete-button")
addAlarmButton.addEventListener("click", (e) => {
    mainDisplay.style.display = "none";
    headerTitle.textContent = "New Alarm"
    overlay.style.display = "block"
    deleteAlarmButton.style.display = "none"
})

let backButton = document.querySelector(".back-button")
backButton.addEventListener("click", (e) => {
    mainDisplay.style.display = "block";
    overlay.style.display = "none"
    
})

function resetInputs(){
    document.querySelector("#repeat").selectedIndex = 0; 
    document.querySelector("#alarm-name").value = ""
    document.querySelector("#sound").selectedIndex = 0; 
    document.querySelector("#hours-number").selectedIndex = 0
    document.querySelector("#minutes-number").selectedIndex = 0
    document.querySelector("#seconds-number").selectedIndex = 0
}

function createNewAlarmBlock(){
    let contentList = document.querySelector(".content-list")
    let contentContainer = document.createElement("div")
    contentContainer.classList.add("content-container")
    let topAndBottom = document.createElement("div")
    topAndBottom.classList.add("topl-and-buttoml")
    let topLabel = document.createElement("div")
    topLabel.classList.add("top-label")
    let bottomLabel = document.createElement("div")
    bottomLabel.classList.add("bottom-label")
    let switchLabel = document.createElement("label")
    switchLabel.classList.add("switch")
    let checkBox = document.createElement("input")
    checkBox.classList.add("checkbox")
    let slider = document.createElement("span")
    slider.classList.add("slider")
    slider.classList.add("round")
    let hr = document.createElement("hr")

    contentList.appendChild(contentContainer)
    contentContainer.appendChild(topAndBottom)
    topAndBottom.appendChild(topLabel)
    topAndBottom.appendChild(bottomLabel)
    contentContainer.appendChild(switchLabel)
    switchLabel.appendChild(checkBox)
    switchLabel.appendChild(slider)
    contentList.appendChild(hr)
}

let alarmName = ""
let hours, minutes, ampm; 
let createNewAlarmButton = document.querySelector(".overlay").querySelector(".action-button img")
createNewAlarmButton.addEventListener("click", (e) => {
    alarmName = document.querySelector("#alarm-name").value
    hours = document.querySelector("#hours-number").value
    minutes = parseInt(document.querySelector("#minutes-number").value)
    ampm = document.querySelector("#seconds-number").value
    resetInputs()
    mainDisplay.style.display = "block";
    overlay.style.display = "none"

    createNewAlarmBlock()
    lastAlarm = Array.from(document.querySelectorAll(".content-container")).pop()
    console.log(minutes)
    console.log(typeof(minutes))
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    lastAlarm.querySelector(".top-label").textContent = `${hours}:${minutes}${ampm}`
    lastAlarm.querySelector(".bottom-label").textContent = alarmName
})

