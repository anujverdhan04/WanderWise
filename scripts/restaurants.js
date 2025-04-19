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

const homePage = creatingElements('a', { class: 'homePage', href: '../pages/index.html' }, 'WanderWise', home)
const hotelPage = creatingElements('a', { class: 'pagelink', href: '../pages/hotels.html' }, 'Hotels', hotels)
const restaurantsPage = creatingElements('a', { class: 'pagelink', href: '../pages/restaurants.html' }, 'Restaurants', restaurant)
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

// for form data



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




const suggestions = [
  
    {
        type: "suggestion",
        image: "../assets/restaurant/fine_dining(300w).jpg",
        location: "Location Name",
        country: "Country"
    },
    {
        type: "suggestion",
        image: "../assets/restaurant/fine_dining(300w).jpg",
        location: "Location Name",
        country: "Country"
    },
    {
        type: "suggestion",
        image: "../assets/restaurant/fine_dining(300w).jpg",
        location: "Location Name",
        country: "Country"
    },
    {
        type: "suggestion",
        image: "../assets/restaurant/fine_dining(300w).jpg",
        location: "Location Name",
        country: "Country"
    },
    {
        type: "suggestion",
        image: "../assets/restaurant/fine_dining(300w).jpg",
        location: "Location Name",
        country: "Country"
    }
];


const searchAbout  = document.querySelector(".search_about")
const  searchRestaurant = document.querySelector(".input_activity")
const suggessionDiv = document.querySelector(".suggessionDiv")


 function test(){
    suggessionDiv.style.display="block"
  
    suggestions.map(suggestion=>{
        const suggessionAbout = creatingElements('a' , {class:'suggessionAbout'} , null ,  suggessionDiv )
        const imageContainer = creatingElements('div' ,{class:'imageContainer'}, null , suggessionAbout)
        const imageDest = creatingElements('img' ,{class:'imageDest' , src:`${suggestion.image}`} , null , imageContainer)
        const textContainer = creatingElements('div' ,{class:'textContainer'} ,null,suggessionAbout)
        const aboutLocation = creatingElements('div' , {class:'aboutLocation'} , `${suggestion.location}` , textContainer)
        const country = creatingElements('div' ,{class:'country'} , `${suggestion.country}` , textContainer)
      
    })
}
suggessionDiv.style.display = 'none'



searchRestaurant.addEventListener("click" , test);

const removeSuggestion = document.querySelector('.restro_img')


removeSuggestion.addEventListener("click" , (e) =>{
    suggessionDiv.style.display = "none"


})


const famous1 = document.querySelectorAll(".famous1")


const testing = document.querySelectorAll('.testing')



let i=0;
testing.forEach(restro =>{
    i++;
    const RestroName = (restro.children[0].innerText)
    const RestroFamous = (restro.children[2].innerText)
    const RestroRatings = (restro.children[1].innerText)
  
    const preRestro = JSON.parse(localStorage.getItem('Restaurant Data' )) ||[]

const restroInfo = {id:i,RestroName , RestroFamous , RestroRatings}
let items=preRestro.find(product=>product.id===i);
if(!items)
{
preRestro.push(restroInfo)
localStorage.setItem('Restaurant Data' ,JSON.stringify(preRestro))
 console.log(preRestro)
}

})



famous1.forEach(card =>{

    card.addEventListener('click' , (e)=>{
        e.preventDefault()

        const restroName = e.target.parentElement.children[1].children[0].innerText
        const restroFamous = e.target.parentElement.children[1].children[2].innerText
        const restroImage = e.target.parentElement.children[0].src
        console.log(restroName)
        console.log(restroFamous)
        console.log(restroImage)
    })
})

testing.forEach(restro =>{
    // console.log(restro.children[0].innerText)
    // console.log(restro.children[1].innerText)
    // console.log(restro.children[2].innerText)
})






