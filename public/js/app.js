console.log('Client side javascript file is loaded!');

const messageOne = document.querySelector('#message_1');
const messageTwo = document.querySelector('#message_2');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';


    fetch('/weather?address=' + location).then((response) =>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error;
            } else{
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
})