
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
        parentElement.append(element)

    }
    return element

}


const home = document.querySelector('.title')
const hotels = document.querySelector('.hotels')
const restaurants = document.querySelector('.restaurant')
const things = document.querySelector('.things')
const flights = document.querySelector('.flights')
const register = document.querySelector('.register')


const homePage = creatingElements('a', { class: 'homePage', href: '../pages/index.html' }, 'WanderWise', home)
const hotelPage = creatingElements('a', { class: 'pagelink', href: '../pages/hotels.html' }, 'Hotels', hotels)
const restaurantsPage = creatingElements('a', { class: 'pagelink', href: '../pages/restaurants.html' }, 'Restaurants', restaurants)
const thingPage = creatingElements('a', { class: 'pagelink', href: '../pages/things.html' }, 'Things to Do', things)
const flightPage = creatingElements('a', { class: 'pagelink', href: '../pages/flights.html' }, 'Flights', flights)
const registerPage = creatingElements('a', { class: 'pagelink', href: '../pages/login.html' }, 'Register', register)


const hr = document.createElement('hr')
const topSec = document.querySelector('.top')

let br = document.createElement('br')
hr.appendChild(br)

const discription = document.querySelector('.discription')
discription.prepend(hr)


const containingImgAndText = document.querySelector('.containingImgAndText')
const image = document.querySelector('.image')


// const image1 = creatingElements('img', { src: '../assets/hotels/hotel(300w).jpg', alt: 'Image About Hotel' }, null, image)
// const image2 = creatingElements('img', { src: '../assets/hotels/hotel(245w).jpg', alt: 'Image About Hotel2' }, null, image)
// const image3 = creatingElements('img', { src: '../assets/hotels/hotels(263w).jpg', alt: 'Image About Hotel3' }, null, image)


const text = document.querySelector('.text')

const hotelData = JSON.parse(localStorage.getItem('Hotel Data')) || []
const hotelClicked = JSON.parse(localStorage.getItem('Hotel Clicked')) || []

// console.log(hotelClicked[0].hotelName)
const clickedHotelName = hotelClicked[0].hotelName



const wrokingOnData = hotelData.map(data => {
    if (clickedHotelName === data.HotelName) {

        const image1 = creatingElements('img', { src: data.HotelImage, alt: 'Image About Hotel' }, null, image)
        const image2 = creatingElements('img', { src: '../assets/hotels/hotel(245w).jpg', alt: 'Image About Hotel2' }, null, image)
        const image3 = creatingElements('img', { src: '../assets/hotels/hotels(263w).jpg', alt: 'Image About Hotel3' }, null, image)
        const text1 = creatingElements('p', { class: 'text1' }, data.HotelName, text)
        const discriptionAboutProp = creatingElements('p', null, data.HotelDiscription, text)
        const rating = creatingElements('p', null, data.HotelRatings, text)
        const price = creatingElements('p', { class: 'price' }, data.HotelPrice, text)

    }

})


const buttons = document.querySelector('.buttons')
text.appendChild(buttons)



const booknow = creatingElements('input', { class: 'bookingButton', type: 'button', value: 'Book Now' }, null, buttons)
const wishlist = creatingElements('input', { class: 'wishlistButton', type: 'button', value: 'Wishlist' }, null, buttons)



const brr = document.createElement('br')
discription.append(brr)
const brr1 = document.createElement('br')
discription.append(brr1)
const brr2 = document.createElement('br')
discription.append(brr2)
const brr3 = document.createElement('br')
discription.append(brr3)

const containingSimilar = document.querySelector('.containingSimilar')

const similar = document.createElement('h2')
similar.textContent = 'Similar Destination'
similar.className = 'relatedDestination'

containingSimilar.prepend(similar)



const flag = JSON.parse(localStorage.getItem('Flag')) || []
const userBookings = JSON.parse(localStorage.getItem('User Booking')) || []
// console.log(userBookings)


const similarLocation = document.querySelector('.similarLocation')
const famous1 = document.querySelectorAll('.famous1')
const testing = document.querySelectorAll('.testing')


const similarSuggestions = [

    {
        name: "Hotel Name",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-1000",
        rating: "*****"

    },
    {
        name: "Paradise",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }
    ,
    {
        name: "Snow Paradise",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }
    ,
    {
        name: "Beach Diving",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }
    ,
    {
        name: "Paradise Panctual",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }
    ,
    {
        name: "Mount Panctual",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }
    ,
    {
        name: "Paradise Mountain",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }
    ,
    {
        name: "River Queen",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }
    ,
    {
        name: "Mount View",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }
    ,
    {
        name: "Forest View",
        discrip: "Discription: Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa",
        price: "Price-10000",
        rating: "*****"

    }


]

let i = 0
testing.forEach(item => {

    function simillarHotelCard() {

        const hotelName = similarSuggestions[i].name
        const hotelPrices = similarSuggestions[i].price
        const hotelRating = similarSuggestions[i].rating

        const hotelname = creatingElements('p', { class: 'text1' }, hotelName, item)
        const hotelprice = creatingElements('p', { class: 'price' }, hotelPrices, item)
        const hotelrating = creatingElements('p', { class: 'rating' }, hotelRating, item)

    }

    simillarHotelCard()
    i++


})



let flagValue = flag[0]
// console.log(flagValue)
const booked = JSON.parse(localStorage.getItem('booked')) || []


booknow.addEventListener('click', (e) => {


    if (flagValue == undefined ) {

        window.location.href = '../pages/login.html'
    }


    else if (flagValue == false) {

   
        let users = JSON.parse(localStorage.getItem("users")) || []
        let currentUser = JSON.parse(localStorage.getItem('Current User'))
   

        users.forEach(user => {
        //   console.log(user.email)
        if(user.email == currentUser.userEmail){

            alert("Booking Confirm")
            user.booking = hotelClicked[0]
            // console.log(user.booking)
            localStorage.setItem('users' , JSON.stringify(users))

        }
   
      })
        // currentUser.find(email => email == users.email)
        // let userBookings=JSON.parse(localStorage.getItem("User Booking")) ||[]
        // userBookings.forEach(eachUser => {

        //     console.log(eachUser.userEmail)
        //     const variables = userBookings.find(user => user.email == eachUser.userEmail)
            // if(eachUser.userEmail){
                
            // }
            
            // const userName = eachUser.userFullName
            // const userContact = eachUser.userContact
            // const userEmail = eachUser.userEmail
            // const userHotel = eachUser.userHotel
            // const hotelPrice = eachUser.hotelPrice

            // const bookingData = { userName, userContact, userEmail, userHotel, hotelPrice }
            // // ,  hotelName , hotelContact}


            // userBookings.push(bookingData)
            // localStorage.setItem('User Booking' , JSON.stringify(userBookings))
            // // localStorage.setItem('booked', JSON.stringify(booked))
            // alert("Hotel Booked")


        // })

    }

    else if (flagValue == true) {
        alert("Admin cannot book through admin credentials")


    }

})







