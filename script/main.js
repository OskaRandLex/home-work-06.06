

const alarmOff = document.getElementById('alarm-off');
const alarmOn = document.getElementById('alarm-on');

const imgAlarmOn = document.querySelector('.alarm-on-img');
const imgAlarmOff = document.querySelector('.alarm-off-img');


const doorOpen = document.getElementById('open-door');
const doorClose = document.getElementById('close-door');

const imgOpenDoor = document.querySelector('.open_door');
const imgCloseDoor = document.querySelector('.close_door');

alarmOff.addEventListener('change', () => {
    if (alarmOff.checked == true) {
        let checkboxes = document.getElementsByClassName('alarm');
        for (let i=0; i<checkboxes.length; i++) { 
            checkboxes[i].checked = false; 
            imgAlarmOff.style.display = ('none');
            imgAlarmOn.style.display = ('none');
        }
        alarmOff.checked = true;
        imgAlarmOff.style.display = ('block');
    } else {
        alarmOff.checked = false;
        imgAlarmOff.style.display = ('none');
    }
})
alarmOn.addEventListener('change', () => {
    if (alarmOn.checked == true) {
        let checkboxes = document.getElementsByClassName('alarm');
        for (let i=0; i<checkboxes.length; i++) { 
            checkboxes[i].checked = false; 
            imgAlarmOff.style.display = ('none');
            imgAlarmOn.style.display = ('none');
        }
        alarmOn.checked = true;
        imgAlarmOn.style.display = ('block');
    } else {
        alarmOn.checked = false;
        imgAlarmOn.style.display = ('none');
    }
})


doorOpen.addEventListener('change', () => {
    if (doorOpen.checked == true) {
        let checkboxes = document.getElementsByClassName('door');
        for (let i=0; i<checkboxes.length; i++) { 
            checkboxes[i].checked = false; 
            imgCloseDoor.style.display = ('none');
            imgOpenDoor.style.display = ('none');
        }
        doorOpen.checked = true;
        imgOpenDoor.style.display = ('block');
    } else {
        doorOpen.checked = false;
        imgOpenDoor.style.display = ('none');
    }
})
doorClose.addEventListener('change', () => {
    if (doorClose.checked == true) {
        let checkboxes = document.getElementsByClassName('door');
        for (let i=0; i<checkboxes.length; i++) { 
            checkboxes[i].checked = false;
            imgCloseDoor.style.display = ('none');
            imgOpenDoor.style.display = ('none'); 
        }
        doorClose.checked = true;
        imgCloseDoor.style.display = ('block');
    } else {
        doorClose.checked = false;
        imgCloseDoor.style.display = ('none');
    }
})

document.getElementById('button_enter').addEventListener("click", () => {
    if (doorOpen.checked && alarmOn.checked) {
        document.getElementById('message').innerText = 'ALARM!!!!! Run away🥵🥵🥵';
        document.getElementById('message').style.color = 'red';
    } else if (doorClose.checked && alarmOn.checked) {
        document.getElementById('message').innerText = "Closed! Don't push your luck🤦‍♂️";
        document.getElementById('message').style.color = 'green';
    } else if (doorOpen.checked && alarmOff.checked) {
        document.getElementById('message').innerText = "You're in luck! Come quickly!😀";
        document.getElementById('message').style.color = 'blue';
    } else if (doorClose.checked && alarmOff.checked) {
        document.getElementById('message').innerText = "Closed! But it is possible to knock out😁👌";
        document.getElementById('message').style.color = 'silver';
    } else {
        document.getElementById('message').innerText = 'Select Actions';
        document.getElementById('message').style.color = 'black';
    }
}) 




