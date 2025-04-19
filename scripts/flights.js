// Nav area for links 
const home = document.querySelector('.title')
const hotels = document.querySelector('.hotels')
const restaurant = document.querySelector('.restaurant')
const things = document.querySelector('.things')
const flights = document.querySelector('.flights')
const register = document.querySelector('.register')
const loginSpace = document.querySelector('.loginSpace')


function creatingElements(tagName, attributes, textContent, parentElement) {
    const element = document.createElement(tagName)

    if (attributes) {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key])
        }
    }

    if (textContent) {
        element.textContent = textContent
    }

    if (parentElement) {
        parentElement.prepend(element)
    }
    return element
}


// Creating Nav



const homePage = creatingElements('a', { class: 'homePage', href: '../pages/index.html' }, 'WanderWise', home);
const hotelPage = creatingElements('a', { class: 'pagelink', href: '../pages/hotels.html' }, 'Hotels', hotels);
const restaurantsPage = creatingElements('a', { class: 'pagelink', href: '../pages/restaurants.html' }, 'Restaurants', restaurant);
const thingPage = creatingElements('a', { class: 'pagelink', href: '../pages/things.html' }, 'Things to Do', things);
const flightPage = creatingElements('a', { class: 'pagelink', href: '../pages/flights.html' }, 'Flights', flights);
const registerPage = creatingElements('a', { class: 'pagelink', href: '../pages/login.html' }, 'Already a Member? / New Here?', register);
const admin = creatingElements('a' ,{ class:'fa-duotone fa-solid fa-user fa-bounce'} ," admin", loginSpace) 

const user = creatingElements('a' ,{class:"fa-duotone fa-solid fa-users fa-bounce"} ," user", loginSpace) 

const flag = JSON.parse(localStorage.getItem('Flag'))|| []


function aboutUserAdmin(){

    if(flag[0] === false){
        user.style.display="block"
        admin.style.display ="none"
        loginSpace.addEventListener('click',(e)=>{
            window.location.href = "../pages/login.html"
            flag.pop()
            localStorage.setItem('Flag' , JSON.stringify(flag))
        
     
            
        })
    
    }
    else if(flag[0] === true){
        admin.style.display = "block"
        user.style.display = "none"
        loginSpace.addEventListener('click',(e)=>{
            window.location.href = "../pages/admin.html"
    
            flag.pop()
            localStorage.setItem('Flag' , JSON.stringify(flag))
           
        })
    
    }
    else{
        admin.style.display="none"
        user.style.display="none" 
    }
    localStorage.setItem('Flag' , JSON.stringify(flag))
    }
    
    aboutUserAdmin()


// Setting Minimum Date for Booking
const today = new Date().toISOString().split('T')[0];
document.getElementById("when").setAttribute("min", today);



// Retrieving Flight Booking Data
const userData = JSON.parse(localStorage.getItem("Flight Booking Info")) || [];



// Flight Booking Form Submission
const form = document.querySelector('.form')
const searchButton = document.querySelector('.flight_button');
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = true;

    const flightFrom = document.querySelector('#from').value.trim();
    const flightFromValue = document.querySelector('#from');
   

    const flightTo = document.querySelector('#to').value.trim();
    const flightToValue = document.querySelector('#to');

    const flightWhen = document.querySelector('#when').value.trim();
    
    const noOfPassengersValue = document.querySelector('#noOfPassengers');
    let noOfPassengers = noOfPassengersValue.value;

    const bookingForm = document.getElementById('form');

    const locationRegex = /^[A-Za-z\s]+$/;

    // Location Validation
    if (!flightFrom || !flightTo) {
        flightFromValue.placeholder = 'Enter From Location';
        flightToValue.placeholder = 'Enter To Location';

        flightFromValue.style.border = "2px solid red";
        flightToValue.style.border = "2px solid red";
        isValid = false;
    } else {
        flightFromValue.style.border = "1px solid black";
        flightToValue.style.border = "1px solid black";
    }

    if (!locationRegex.test(flightFrom)) {
        flightFromValue.style.border = '2px solid red';
        isValid = false;
    } else {
        flightFromValue.style.border = '1px solid black';
    }

    if (!locationRegex.test(flightTo)) {
        flightToValue.style.border = '2px solid red';
        isValid = false;
    } else {
        flightToValue.style.border = '1px solid black';
    }

    if (!flightWhen) {
        alert("Please select a flight date.");
        isValid = false;
    }

    // Convert to integer for validation
    noOfPassengers = parseInt(noOfPassengers);

    // Passenger Validation
    if (!noOfPassengersValue.value || isNaN(noOfPassengers) || noOfPassengers <= 0) {
        noOfPassengersValue.style.border = '2px solid red';
        alert("Please enter a valid number of passengers.");
        isValid = false;
    } else if (noOfPassengers > 6) {
        noOfPassengersValue.style.border = '2px solid red';
        alert("Maximum allowed passengers: 6");
        isValid = false;
    } else {
        noOfPassengersValue.style.border = '1px solid black';
    }

    if (isValid) {
        const bookingInfo = { flightFrom, flightTo, flightWhen, noOfPassengers };
        userData.push(bookingInfo);
        localStorage.setItem('Flight Booking Info', JSON.stringify(userData));
        
    }
   form.reset()
});
