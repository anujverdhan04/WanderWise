
// Nav area for links 

const hotels = document.querySelector('.hotels')
const restaurants = document.querySelector('.restaurants')
const things = document.querySelector('.things')
const flights = document.querySelector('.flights')
const register = document.querySelector('.register') 
const loginSpace = document.querySelector('.loginSpace')



function creatingElements(tagName , attributes , textContent, parentElement){
    const element = document.createElement(tagName)

    if (attributes){
        for(let key in attributes){
            element.setAttribute(key , attributes[key])
        }
    }

    if(textContent){
        element.textContent = textContent
    }

    if(parentElement){
        parentElement.prepend(element)
    }
    return element
}

const hotelPage = creatingElements('a' ,{ class:'pagelink' ,href:'../pages/hotels.html'} ,'Hotels', hotels  ) 
const restaurantsPage= creatingElements('a' ,{ class:'pagelink' ,href:'../pages/restaurants.html'} ,'Restaurants', restaurants  ) 
const thingPage = creatingElements('a' ,{ class:'pagelink' ,href:'../pages/things.html'} ,'Thingss to Do', things  ) 
const flightPage = creatingElements('a' ,{ class:'pagelink' ,href:'../pages/flights.html'} ,'Flights', flights   ) 
const registerPage = creatingElements('a' ,{ class:'pagelink' ,href:'../pages/login.html'} ,'Already a Member? / New Here?', register) 
const admin = creatingElements('a' ,{ class:'fa-duotone fa-solid fa-user fa-bounce'} ," Admin", loginSpace) 

const user = creatingElements('a' ,{class:"fa-duotone fa-solid fa-users fa-bounce"} ," User", loginSpace) 


// admin.style.display="none"
// user.style.display="none"

const flag = JSON.parse(localStorage.getItem('Flag'))|| []


function aboutUserAdmin(){

if(flag[0] == false){
    user.style.display="block"
    admin.style.display ="none"
    loginSpace.addEventListener('click',(e)=>{
        window.location.href = "../pages/login.html"
        flag.pop()
        localStorage.setItem('Flag' , JSON.stringify(flag))
    
 
        
    })

}
else if(flag[0] == true){
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


loginSpace.addEventListener('click' , (e) =>{


})

// Nav ended here


const searchedLocationDestination = document.querySelector('#searchArea')

const searchIcon = document.querySelector('#igm')

const locationSearched = JSON.parse(localStorage.getItem('Location Searched')) || []


searchIcon.addEventListener("click", (e) => {
    const inputValue = searchedLocationDestination.value.trim() 
    e.preventDefault()
    isValid=true
    // recomend.style.display ="block"
        const dataAboutDestination = inputValue

        if(!inputValue){
            isValid=false
        }
        if(isValid){
         
            const length = locationSearched.length

            if(length >= 5 ){
            locationSearched.shift()
            }

        locationSearched.push(dataAboutDestination)
        localStorage.setItem('Location Searched', JSON.stringify(locationSearched))

    }
    

     

    searchedLocationDestination.value=" "
        
})

// body.addEventListener('click', (e)=>{
  
//      recomend.style.display ="none"
// })

const recomend = document.querySelector('.recomend')
recomend.style.display ="none"



 
