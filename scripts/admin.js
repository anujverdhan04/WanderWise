
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
const mainDiv = document.querySelector('.mainDiv')
const sideNav = document.querySelector('.sideNav')
const containingDta = document.querySelector('.containingData')
const middleSection = document.querySelector('.middleSection')


// const title = creatingElements('h2', { id: 'title', class: "fa-solid fa-laptop-code"}, "WanderWise", sideNav)
const title = creatingElements('h2', { id: 'title', class: 'fa-solid fa-laptop-code' }, "WanderWise", sideNav)

title.addEventListener('click', (e) => {
    console.log("hello")
    window.location.href = "../pages/index.html"
})


const divContainingSideNav = creatingElements('div', { class: 'divContainingSideNav' }, null, sideNav)
const listContainingInfo = creatingElements('ol', { class: 'listContainingInfo' }, null, divContainingSideNav)

// console.log(title)

const lists = [
    {
        // class: 'fa-solid fa-chart-line',
        class: "fa-solid fa-chart-line fa-beat-fade",
        info: 'Dashboard',
        href: '#aboutus'


    },
    {
        class: "fa-solid fa-plane-departure fa-beat-fade",
        info: 'Location Info',
        href: '#hotel'

    },
    {
        class: "fa-solid fa-hotel fa-beat-fade",
        info: 'Hotel Info',
        href: '#hotelListed'
    },
    {
        class: "fa-solid fa-utensils fa-beat-fade",
        info: 'Restaurant Info',
        href: '#restroListed'

    },
    {
        class: "fa-solid fa-person-hiking fa-beat-fade",
        info: 'Activity Info',
        href: '#'
    },
    {
        class: "fa-solid fa-plane-up fa-beat-fade",
        info: 'Flights Info',
        href: '#Flights'
    },



]

lists.forEach(list => {

    const listContainingInfoDiv = creatingElements('div', { class: 'listContainingInfoDiv', }, null, listContainingInfo)
    const link = creatingElements('a', { href: list.href }, null, listContainingInfoDiv)
    const sym = creatingElements('i', { id: 'displaySymbol', class: `${list.class}`, }, null, link)
    const listing = creatingElements('li', { class: 'lists' }, `${list.info}`, link)

})


// const divTop = creatingElements('div', { class: 'divTop' }, null, middleSection)

// const dashboard = creatingElements('div', { class: 'dashboard' }, null, divTop)
// const dashboardData = creatingElements('h2', { class: 'dashboardClass' }, 'Dashboard', dashboard)

const admin = creatingElements('div', { class: 'adminDiv' }, null, middleSection)
const photoDiv = creatingElements('div', { class: 'photoDiv' }, null, admin)
const photoTag = creatingElements('img', { class: 'adminImage', src: '../assets/fligths/travel_required(delhi).jpg' }, null, photoDiv)
const textDiv = creatingElements('div', { class: 'textDiv' }, null, admin)
const adminName = creatingElements('h4', { class: 'adminName' }, "Anuj", textDiv)
const adminRole = creatingElements('p', { class: 'adminRole' }, "admin", textDiv)


const containingInfo = document.querySelector('.containingInfo')

const aboutUserInfo = creatingElements('div', { class: 'aboutUserInfo' }, null, containingInfo)

const users = JSON.parse(localStorage.getItem('users')) || []
const userNumbers = users.length



const totalUser = creatingElements('div', { class: 'totalUser' }, null, aboutUserInfo)
const numberOfUsersText = creatingElements('h4', { id: 'numberOfUsersText', class: "fa-solid fa-users" }, " Total Users ", totalUser)
const noOfUsers = creatingElements('p', { class: 'noOfUsers' }, userNumbers, totalUser)


const totalBooking = creatingElements('div', { class: 'totalBooking' }, null, aboutUserInfo)
const numberOfBookingsText = creatingElements('h4', { id: 'numberOfBookingsText', class: "fa-solid fa-clipboard-check" }, " Total Bookings ", totalBooking)
const noOfBookings = creatingElements('p', { class: 'noOfBookings' }, "20", totalBooking)




const hotelData = JSON.parse(localStorage.getItem('Hotel Location')) || []
const hotelListed = JSON.parse(localStorage.getItem('Listed Hotel')) || []
const tableAboutUserSearch = document.querySelector('.infoAboutUser')



// working check?


let i = 1
let j = 1
let k = 1

hotelData.forEach(item => {

    const tr = creatingElements('tr', { class: 'userHotelData' }, null, tableAboutUserSearch)
    const td1 = creatingElements('td', { class: 'userSearchData' }, i, tr)
    const td2 = creatingElements('td', { class: 'userSearchData' }, item.destination, tr)
    const td3 = creatingElements('td', { class: 'userSearchData' }, item.inDates, tr)
    const td4 = creatingElements('td', { class: 'userSearchData' }, item.outDates, tr)
    const td5 = creatingElements('td', { class: 'userSearchData' }, item.noAdults, tr)
    i = i + 1


})




// const users = JSON.parse(localStorage.getItem('users')) || []
const aboutUserData = document.querySelector('.aboutUserData')


users.forEach(item => {


    const tr = creatingElements('tr', { class: 'dataAboutUserInfo' }, null, aboutUserData)
    const td1 = creatingElements('td', { class: 'userData' }, j, tr)
    const td2 = creatingElements('td', { class: 'userData' }, item.fullName, tr)
    const td3 = creatingElements('td', { class: 'userData' }, item.email, tr)
    const td4 = creatingElements('td', { class: 'userData' }, item.contact, tr)
    const td5 = creatingElements('td', { class: 'userData' }, item.altNumber, tr)
    const td6 = creatingElements('td', { class: 'userData' }, item.address, tr)
    const td7 = creatingElements('td', { class: 'userData' }, item.password, tr)
    const td8 = creatingElements('td', { class: 'action' }, null, tr)
    const edit = creatingElements('input', { type: 'button', class: 'editUser', id: 'editAble', value: 'Edit' }, null, td8)
    const deleteButton = creatingElements('input', { type: 'button', class: 'deleteUser', id: 'deleteAble', value: 'Delete' }, null, td8)

    j = j + 1

})
const dataAboutUserInfo = document.querySelectorAll('.dataAboutUserInfo')

const editUser = document.querySelectorAll('.editUser')
const deleteUser = document.querySelectorAll('.deleteUser')

editUser.forEach(item => {
    item.addEventListener('click', (e) => {

        const rowToEdit = e.target.parentElement.parentElement
        window.location.href = "edit.html"

        const userEmailToEdit =rowToEdit.cells[2].textContent
        localStorage.setItem('User To Edit' , JSON.stringify(userEmailToEdit))


    })
})

deleteUser.forEach(item => {
    item.addEventListener('click', (e) => {

        const rowToDelete = e.target.parentElement.parentElement
   
        if(rowToDelete.email == undefined){
            rowToDelete.remove()
        }


        const user = users.filter(user => user.email !== rowToDelete.cells[2].innerText);
        localStorage.setItem("users", JSON.stringify(user));
        // window.location.href = 'admin.html';


    })
})


const Admins = JSON.parse(localStorage.getItem('Admins')) || []
const aboutAdminData = document.querySelector('.aboutAdminData')

p = 1
Admins.forEach(item => {
    const tr = creatingElements('tr', { class: 'dataAboutAdminInfo' }, null, aboutAdminData)
    const td1 = creatingElements('td', { class: 'adminData' }, p, tr)
    const td2 = creatingElements('td', { class: 'adminData' }, item.fullName, tr)
    const td3 = creatingElements('td', { class: 'adminData' }, item.email, tr)
    const td4 = creatingElements('td', { class: 'adminData' }, item.contact, tr)
    const td5 = creatingElements('td', { class: 'adminData' }, item.altNumber, tr)
    const td6 = creatingElements('td', { class: 'adminData' }, item.address, tr)
    const td7 = creatingElements('td', { class: 'adminData' }, item.password, tr)
    const td8 = creatingElements('td', { class: 'action' }, null, tr)
    const edit = creatingElements('input', { type: 'button', class: 'editAdmin', id: 'editAble', value: 'Edit' }, null, td8)
    const deleteButton = creatingElements('input', { type: 'button', class: 'deleteAdmin', id: 'deleteAble', value: 'Delete' }, null, td8)
    p = p + 1

})

const editAdmin = document.querySelectorAll('.editAdmin')
const deleteAdmin = document.querySelectorAll('.deleteAdmin')


editAdmin.forEach(item => {
    item.addEventListener('click', (e) => {

        const rowToEdit = e.target.parentElement.parentElement
        window.location.href = "edit.html"
        

     

    })
})

deleteAdmin.forEach(item => {
    item.addEventListener('click', (e) => {
       const rowToDelete = e.target.parentElement.parentElement
       console.log(rowToDelete)
  
       const adminTable = Admins.filter(adminTable => adminTable.email != rowToDelete.cells[2].innerText);
       localStorage.setItem("Admins", JSON.stringify(adminTable));
    window.location.href="admin.html";
    })
})




const hotelPresent = document.querySelector('.hotelPresent')



// to list a hotel using dynamic js

// const tr = creatingElements('tr', { class: 'dataAboutHotelListed' }, null, hotelPresent)
// const td1 = creatingElements('td', { class: 'userData' }, k, tr)
// const td2 = creatingElements('td', { class: 'userData' }, "Ananda", tr)
// const hotelName = td2.textContent
// const td3 = creatingElements('td', { class: 'userData' }, "Lorem rrest the case to defend", tr)
// const hotelDiscription = td3.textContent
// const td4 = creatingElements('td', { class: 'userData' }, "$8999", tr)
// const hotelPrice = td4.textContent
// const td5 = creatingElements('td', { class: 'userData' }, "Mussoorie , Uttarakhand", tr)
// const hotelDestination = td5.textContent
// const td6 = creatingElements('td', { class: 'userData' }, "7874787478", tr)
// const hotelContact = td6.textContent
// const td7 = creatingElements('td', { id: 'userData' }, '4/5', tr)
// const hotelRating = td7.textContent
// k = k+1;

// const hotelList = { hotelName, hotelDiscription, hotelPrice, hotelDestination, hotelContact, hotelRating }
// const data = hotelListed.push(hotelList)
// localStorage.setItem('Listed Hotel', JSON.stringify(hotelListed))


// })






// const edButton = document.querySelector(".editbutton")
const tableRow = document.querySelectorAll('.userHotelData')

const dataAboutHotelListed = document.querySelectorAll('.dataAboutHotelListed')
// const hotelButton = document.querySelector('.buttonAboutHotel')





let m = 1
function gettingHotelDataFromPage(item) {


    const tr = creatingElements('tr', { class: 'dataAboutHotelListed' }, null, hotelPresent)
    const sNo = creatingElements('td', { class: 'hotelData' }, m, tr)

    const hotelName = creatingElements('td', { class: 'hotelData' }, item.HotelName, tr)
    const hotelDiscription = creatingElements('td', { class: 'hotelData' }, item.HotelDiscription, tr)
    const hotelPrice = creatingElements('td', { class: 'hotelData' }, item.HotelPrice, tr)
    const hotelAddress = creatingElements('td', { class: 'hotelData' }, item.HotelAddress, tr)
    const hotelContact = creatingElements('td', { class: 'hotelData' }, item.HotelContact, tr)
    const hotelRatings = creatingElements('td', { id: 'hotelData' }, item.HotelRatings, tr)
    const td8 = creatingElements('td', { class: 'hotelAction' }, null, tr)
    const edit = creatingElements('input', { type: 'button', class:'editHotel', id: 'editAble', value: 'Edit' }, null, td8)
    const deleteButton = creatingElements('input', { type: 'button', class: 'deleteHotel', id: 'deleteAble', value: 'Delete' }, null, td8)

    m++

}

const preDefineHotels = JSON.parse(localStorage.getItem('Hotel Data')) || []

// connecting Hotel data db with listed hotel table
preDefineHotels.forEach(item => {

    gettingHotelDataFromPage(item)
})



const editHotel = document.querySelectorAll('.editHotel')
const deleteHotel = document.querySelectorAll('.deleteHotel')



editHotel.forEach(item => {
    item.addEventListener('click' , (e)=>{
        const rowToEdit = e.target.parentElement.parentElement
        // console.log("Lets Edit hotel")
        // console.log(rowToEdit)
        window.location.href = "edit.html"

    })

})


deleteHotel.forEach(item =>{
    item.addEventListener('click' , (e)=>{
       const rowToDelete = e.target.parentElement.parentElement
       console.log(rowToDelete.cells[1].innerText)

       const hotelRemove = preDefineHotels.filter(hotelRemove => hotelRemove.HotelName != rowToDelete.cells[1].innerText);
       console.log(hotelRemove)
        localStorage.setItem('Hotel Data' , JSON.stringify(hotelRemove));
        window.location.href="admin.html";

    })
})





// for reataurants data

const restroPresent = document.querySelector('.restaurantPresent')

let l = 1

function gettingRestoDataFromPage(item) {
    const tr = creatingElements('tr', { class: 'dataAboutRestroListed' }, null, restroPresent)
    const sNo = creatingElements('td', { class: 'restroID' }, l, tr)

    const restroName = creatingElements('td', { class: 'restroName' }, item.RestroName, tr)
    const restroFamous = creatingElements('td', { class: 'restroFamous' }, item.RestroFamous, tr)
    const restroLocation = creatingElements('td', { class: 'restroLocation' }, "", tr)
    const restroRating = creatingElements('td', { class: 'restroRatings' }, item.RestroRating, tr)
    const td8 = creatingElements('td', { class: 'restroAction' }, null, tr)
    const edit = creatingElements('input', { type: 'button', class: 'editRestro', id: 'editAble', value: 'Edit' }, null, td8)
    const deleteButton = creatingElements('input', { type: 'button', class: 'deleteRestro', id: 'deleteAble', value: 'Delete' }, null, td8)

    l = l + 1

}


const preDefineRestro = JSON.parse(localStorage.getItem('Restaurant Data')) || []

preDefineRestro.forEach(item => {

    gettingRestoDataFromPage(item)

})
const restroList = document.querySelectorAll('.dataAboutRestroListed')

const editRestro = document.querySelectorAll('.editRestro')
const deleteRestro = document.querySelectorAll('.deleteRestro')


editRestro.forEach(item =>{
    item.addEventListener('click' , (e)=>{
        const rowToEdit = e.target.parentElement.parentElement
        // console.log("Lets Edit Restro")
        // console.log(rowToEdit)
        window.location.href = "edit.html"

    })
})

deleteRestro.forEach(item =>{
    item.addEventListener('click',(e) =>{
        const rowToDelete = e.target.parentElement.parentElement
        console.log(rowToDelete.cells[1].innerText)
 
        const restroRemove = preDefineRestro.filter(restroRemove => restroRemove.RestroName != rowToDelete.cells[1].innerText);
        console.log(restroRemove)
         localStorage.setItem('Restaurant Data' , JSON.stringify(restroRemove));
         window.location.href="admin.html";

    })
})


// fligth table

const flightTable = document.querySelector('.flightSearched')
const flightData = JSON.parse(localStorage.getItem('Flight Booking Info')) || []

flightData.forEach(item => {
    tableForFlightData(item)

})


function tableForFlightData(item) {
    let n = 1

    const tr = creatingElements('tr', { class: 'flightSearched' }, null, flightTable)
    const sNo = creatingElements('td', { class: 'restroID' }, n, tr)
    const destinationFrom = creatingElements('td', { class: 'flightFrom' }, item.flightFrom, tr)
    const destinationTo = creatingElements('td', { class: 'flightTo' }, item.flightTo, tr)
    const travelDate = creatingElements('td', { class: 'travelDate' }, item.flightWhen, tr)
    const passengers = creatingElements('td', { class: 'passengers' }, item.noOfPassengers, tr)
    n = n + 1
}


