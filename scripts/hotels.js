// Nav area for links 
const home = document.querySelector('.title')
const hotels = document.querySelector('.hotels')
const restaurants = document.querySelector('.restaurants')
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

const homePage = creatingElements('a', { class: 'homePage', href: '../pages/index.html' }, 'WanderWise', home)
const hotelPage = creatingElements('a', { class: 'pagelink', href: '../pages/hotels.html' }, 'Hotels', hotels)
const restaurantsPage = creatingElements('a', { class: 'pagelink', href: '../pages/restaurants.html' }, 'Restaurants', restaurants)
const thingPage = creatingElements('a', { class: 'pagelink', href: '../pages/things.html' }, 'Things to Do', things)
const flightPage = creatingElements('a', { class: 'pagelink', href: '../pages/flights.html' }, 'Flights', flights)
const registerPage = creatingElements('a', { class: 'pagelink', href: '../pages/login.html' }, 'Already a Member? / New Here?', register)
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


// Nav ended here

// function for dates 

function dateValidation() {
    let isValid = true

    const currentDate = new Date();


    const inDates = new Date(document.querySelector('#inDate').value)
    const outDates = new Date(document.querySelector('#outDate').value)
    const inDateError = document.querySelector('.inDateError')
    const outDateError = document.querySelector('.outDateError')

    // const currentDate = `${year}-0${month}-${day}`;

    if (
        inDates <= currentDate ||
        outDates <= currentDate ||
        inDates >= outDates
    ) {
        console.log('Not working properly');
        inDateError.textContent = "Check-IN date must be before Check-OUT, and both should be in the future.";
        outDateError.textContent = "Check both dates once again"
        isValid = false;
    }
    console.log(isValid)
    return isValid

}



// Used to change the background after putting data
// for each loops change the present array to perform the op while the map method creates another datatype

const inputBackground = document.querySelectorAll('.inputtype')
for (let i = 0; i < inputBackground.length; i++) {
    inputBackground[i].addEventListener('keypress', (e) => {
        inputBackground[i].style.backgroundColor = "white"
    });
}



// for storage of data at local storage

const hotelForm = document.querySelector('.hotelForm')
const sumbitButton = document.querySelector('.submit')

const userHotelData = JSON.parse(localStorage.getItem("Hotel Location")) || []


// to get data for destination for backend work
const whichDestinaiton = userHotelData.map(item => item.destination)

for (let i = 0; i < whichDestinaiton.length; i++) {
    let searchedDestination = whichDestinaiton[i]
    // console.log(searchedDestination)

}


//  console.log(searchedDestination)


hotelForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const destination = document.querySelector('#destination').value.trim()
    const inDates = document.querySelector('#inDate').value.trim()
    const outDates = document.querySelector('#outDate').value.trim()
    const noRooms = document.querySelector('#noRoom').value.trim()
    const noAdults = document.querySelector('#noAdult').value.trim()


    let isValid = true

    const inDateError = document.querySelector('.inDateError')
    const outDateError = document.querySelector('.outDateError')
    const noRoomError = document.querySelector('.noRoomError')
    const noAdultError = document.querySelector('.noAdultError')

    inDateError.textContent = "";
    outDateError.textContent = "";
    noRoomError.textContent = "";
    noAdultError.textContent = "";

    const inDateRegex = /^(202[4-9]|20[3-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/
    const outDateRegex = /^(202[4-9]|20[3-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/;


    if (!inDateRegex.test(inDates)) {
        inDateError.textContent = "Date is not valid"
        isValid = false
    }

    if (!outDateRegex.test(outDates)) {
        outDateError.textContent = "Date is not valid"
    }


    if (noRooms >= 6) {
        noRoomError.textContent = "Maximum limit is 5";
        isValid = false;
    }

    if(noRooms > 1 && noAdults > noRooms* 3){
        noAdultError.textContent ="Maximum 3 Adults are allowed in 1 rooms"
        isValid = false
    }
    if(noRooms ==1  && noAdults > 3){
       noAdultError.textContent ="Maximum 3 Adults are allowed in 1 rooms"
        isValid=false
    }

    // if (noAdults >= 4) {
    //     noAdultError.textContent = "Maximum 3 Adults are allowed in 1 rooms"
    //     isValid = false
    // }


    if (dateValidation()) {
        dateValidation()
    }


    if (isValid) {
        const hotelData = { destination, inDates, outDates, noRooms, noAdults }
         userHotelData.push(hotelData)
        localStorage.setItem('Hotel Location', JSON.stringify(userHotelData))
        hotelForm.reset()
    }

})



const famous1 = document.querySelectorAll(".famous1")

famous1.forEach(card => {

        card.addEventListener('click', (e) => {
            e.preventDefault()
    
            const hotelName = e.target.parentElement.children[1].children[0].innerText;
            const hotelPrice = e.target.parentElement.children[1].children[3].innerText;
            console.log(hotelName) 
            console.log(hotelPrice)

            // const hotelClicked =JSON.parse(localStorage.getItem('Hotel Clicked')) || []  
            // not calling data for storing only single value at a time 

            const hotelClicked =[]
            const whichHotelClicked = {hotelName}
            hotelClicked.push(whichHotelClicked)
            localStorage.setItem("Hotel Clicked" , JSON.stringify(hotelClicked))
            window.location.href="../pages/HotelDiscriptionPage.html"

    });
 

});




const testing = document.querySelectorAll('.testing')


// const predata = JSON.parse(localStorage.getItem('PRE DATA')) || []

const preData = JSON.parse(localStorage.getItem('preData')) || []

testing.forEach(hotel => {

    // console.log(hotel.children[0].innerText)
    // console.log(hotel.children[1].innerText)
    // console.log(hotel.children[2].innerText)
    // console.log(hotel.children[3].innerText)

    // for(let i=0;i<4;i++)
    // {
    // console.log(hotel.children[i].innerText);
    // const HotelData = (hotel.children[i].innerText)

   const  HotelImage = (hotel.parentElement.children[0].src)
    const HotelName = (hotel.children[0].innerText)
    const HotelDiscription = (hotel.children[1].innerText)
    const HotelRatings = (hotel.children[2].innerText)
    const HotelPrice = (hotel.children[3].innerText)
    const HotelContact = null
    const HotelAddress = null

    // } 
    const HotelInfo = { HotelImage, HotelName, HotelDiscription, HotelPrice, HotelAddress, HotelContact, HotelRatings }
    preData.push(HotelInfo)
    localStorage.setItem('Hotel Data', JSON.stringify(preData))


})









