
function suggestions(keywords) {


    // document.getElementsByClassName('input_field').
    const mountains = ['Mussoorie', 'Shimla', 'Kashmir', 'Gangtok']
    const beaches = ['Goa', 'Maldives', 'Thailand']
    const snowfall = ['Jammu', 'Manali', 'Uttarakhand', 'Kazakhstan']
    const technology = ['UAE', 'USA', 'Banglore']

    if (keywords === "mount") {
        console.log(...mountains)
    }

    else if (keywords === "beac") {
        console.log(...beaches)
    }

    else if (keywords === "snow") {
        console.log(...snowfall)
    }

    else if (keywords === "tech") {
        console.log(...technology)
    }


    // keywords_for_mountain =['Mussoorie', 'Shimla' ,'Kashmir','Gangtok']
    // keywords_for_beaches =['Goa', 'Maldives' ,'Thailand',]
    // keywords_for_snowfall =['Jammu', 'Manali' ,'Uttarakhand','Kazakhstan']
    // keywords_for_technology =['UAE', 'USA' ,'Banglore']

};

let suggest = document.getElementsByClassName('input_field')[0];

suggest.addEventListener("input", (e) => {
    const inputValue = e.target.value
    suggestions(inputValue)
})



//  Background color of  Header
const background_header = document.querySelector(".top")
background_header.style.backgroundColor = "#d2d1d1";
// 

// Bg color of the body
const body = document.querySelector(".main-content")
body.style.background = "linear-gradient(55deg, rgba(47, 47, 47, 1) 0%, rgba(214, 214, 214, 1) 12%, rgba(227, 227, 227, 1) 46%, rgba(242, 242, 242, 1) 74%, rgba(245, 245, 245, 1) 83%)"



const image_about_wonders = document.querySelectorAll(".photos")




// Ttile using javascript

const para_grapgh = document.createElement("div");
para_grapgh.className = "website_name"
const data_in_para = document.createTextNode("WANDERWISE");
para_grapgh.appendChild(data_in_para);
const where_to_enter = document.querySelector(".website_name")
where_to_enter.appendChild(para_grapgh)


//  About other pages link

// const pages_link = document.createElement("div");
// const div_at_page= document.querySelector(".top")
// div_at_page.append(pages_link)


// pages_link.className = "nav2"

// const hotel_h3 = document.createElement("h3") 
// pages_link.append(hotel_h3)
// const data_in_hotel_h3 = document.createTextNode("Hotel")
// hotel_h3.appendChild(data_in_hotel_h3)


// const restaurant_h3 = document.createElement("h3")
// pages_link.append(restaurant_h3)
// const data_in_restaurant_h3 = document.createTextNode("Restaurant")
// restaurant_h3.appendChild(data_in_restaurant_h3)


// const things_h3 = document.createElement("h3")
// pages_link.append(things_h3)
// const data_in_things_h3 = document.createTextNode("Things To Do")
// things_h3.appendChild(data_in_things_h3)


// const flights_h3 = document.createElement("h3")
// pages_link.append(flights_h3)
// const data_in_flights_h3 = document.createTextNode("Flights")
// flights_h3.appendChild(data_in_flights_h3)


// const nav_containg_nav2 = document.querySelector(".nav")
// nav_containg_nav2.appendChild(pages_link)


function about_creating(tag, attributes, textContent, parentElement) {
    const element = document.createElement(tag)
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



function about_creating_before(tag, attributes, textContent, parentElement) {
    const element = document.createElement(tag)
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



// const headerDiv = about_creating("div", { class: "header" }, null, para_grapgh)



const links = [
    { href: "hotels.html", text: "Hotel" },
    { href: "retaurants.html", text: "Restaurants" },
    { href: "things.html", text: "Things To Do " },
    { href: "flights.html", text: "Flights" },

];


//   About pages SSS

const nav = document.querySelector(".nav")

// About nav 1
const nav1 = document.querySelector('.nav1')

const search_symbol = document.querySelector('#igm')


function searchThrough(){

    let count=0;
    // const divReco = document.createElement('div')
    // divReco.className = 'recommendation'
    // const dataDiv = about_creating('h3' , {class:'Reco'} , 'Rishikesh' , nav1)
    
    // search_symbol.style.display = 'none'
    // console.log(dataDiv)



    
    // alert("Trying something")
    const inputForsearch = document.createElement('input')
    inputForsearch.type = 'text'
    search_symbol.appendChild(inputForsearch)
    count +=1
    // if(count == 1)

    
    
    
    // search_symbol.style.display = 'none'
    


    // inputForsearch.addEventListener=(onkeydown)
    // console.log('key press' + event.key)

    // function whenKeypress(){
    //     search_symbol.style.display = 'none'
    //     inputForsearch.style.background='red'
    //     inputForsearch.style.width= ' 15px'
  
    //  }
    // whenKeypress()


}
search_symbol.addEventListener('click', searchThrough)



// nav2 containing different page links
const nav2 = about_creating_before("div", { class: "nav2" }, null, nav)

links.map((link) => {
    const h3 = about_creating_before("h3", { class: "about_pages" }, null, nav2)
    const anchor = about_creating("a", { href: `${link.href}` }, `${link.text}`, h3)
})


const mainContent = document.querySelector(".main-content")


const mainSection = about_creating("div", { class: "main-section" }, null, mainContent)

const image = about_creating("img", { class: "image", src: "../assets/images/mainoriginal.jpg", alt: "" }, null, mainSection)

const imgText = about_creating("b", { class: "img-text" }, "WANDERWISE", mainSection)

const imgText1 = about_creating("b", { class: "img-text1" }, "the ultimate travel guide whiich helps you to travel according to your mood", mainSection)

// console.log(imgText1)





// Seven wonders heading
const aboutSeven = about_creating("h2", { class: "about" }, "Seven Wonders of the World", mainContent)
mainSection.after(aboutSeven)


// Seven Wonders  


// first wonder
const SevenWonders = document.querySelector(".seven-wonders")

const firstWonder = document.querySelector('.first-wonder')
const about_first_image = about_creating('a', { href: "https://en.wikipedia.org/wiki/Great_Wall_of_China" },null, firstWonder)
const photos = about_creating('img', { class: 'photos', src: '../assets/images/greatwall.jpg', alt: 'Image about first' }, null, about_first_image)
const p_tag_containing_info = about_creating('p', {class:'p_location'}, "The Great Wall of China, one of the world’s largest construction projects, is believed to span 5,500 miles(8, 850 km), though some claim it is 13, 170 miles(21, 200 km).Built over two millennia starting in the 7th century BCE, the structure includes parallel walls, watchtowers, and barracks.Despite its purpose to prevent invasions, the wall was largely ineffective and served more as politicalpropaganda" , firstWonder)
const aLocation = about_creating_before('a' , {class:'material-symbols-outlined' ,id:'odd-symbol',href:'https://www.cnto.com.sg/index.aspx?uc=17'} , "pin_drop China" ,p_tag_containing_info)
p_tag_containing_info.before(about_first_image)

// console.log(firstWonder)




// second wonder
// SevenWonders = document.querySelector(".seven-wonders")
const secondWonders = document.querySelector('.second-wonder')
const about_second_p = about_creating('p' ,null, "The Taj Mahal in Agra, India, is a Mughal masterpiece built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Completed in 22 years, it features white marble, a central dome, and a reflecting pool Shah Jahan’s plan for a black marble tomb was never realized." , secondWonders)
const aLocation2 = about_creating('a' , {class:"material-symbols-outlined" , id:"even-symbol" , href:"https://www.incredibleindia.gov.in/en"} , "India pin_drop" , about_second_p)
const about_second_image = about_creating('a', {href:'https://en.wikipedia.org/wiki/Taj_Mahal'} , null , secondWonders)
const photos2 = about_creating('img' , {class:'photos' , src:'../assets/images/tajmahal.jpg' , alt:'Image About India' } , null,about_second_image)
about_second_p.after(about_second_image)

// console.log(secondWonders)




// third wonder

const thirdWonder = document.querySelector(".third-wonder")
const about_third_image = about_creating('a', { href: "https://en.wikipedia.org/wiki/Colosseum" },null, thirdWonder)
const photos3 = about_creating('img', {class:'photos' , src:'../assets/images/colosseum.jpg' ,alt:'Image about third'} , null,about_third_image)
const about_third_p = about_creating('p' ,{class:'p_location'}, "The Colosseum in Rome, built in the 1st century by Emperor Vespasian, held 50,000 spectators for events like gladiator fights and mock naval battles. About 500,000 people died there, along with countless animals, some driven to extinction. The martyrdom of Christians in the arena remains debated." ,thirdWonder)
const aLocation3 = about_creating_before('a' , {class:"material-symbols-outlined" , id:'odd-symbol' , href:'https://www.rome.net/'} , "pin_drop Rome" , about_third_p)
about_third_p.before(about_third_image)




// fourth wonder

const fourthWonder = document.querySelector(".fourth-wonder")
const about_fourth_p = about_creating ('p' , null, "Christ the Redeemer, atop Mount Corcovado in Rio de Janeiro, is a 98-foot-tall Art Deco statue with a 92-foot arm span. Built from 1926–1931, it features reinforced concrete and six million tiles. Often struck by lightning, it suffered thumb damage in 2014. It symbolizes faith amidst modernity." , fourthWonder)
const aLocation4 = about_creating('a' , {class:"material-symbols-outlined" , id:"even-symbol" , href:"https://visitbrasil.com/en/"} , "Brazil pin_drop" , about_fourth_p)
const about_fourth_image = about_creating('a', {href:"https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)"} , null , fourthWonder)
const photos4 = about_creating('img' , {class:'photos' , src:"../assets/images/chriestthedemeer.jpg" , alt:'Christ the Redeemer'} , null,about_fourth_image)
about_fourth_p.after(about_fourth_image)

// console.log(fourthWonder)



// fifth wonder

const fifthWonder = document.querySelector(".fifth-wonder")
const about_fifth_image = about_creating('a', { href: "https://en.wikipedia.org/wiki/Chichen_Itza" },null, fifthWonder)
const photos5 = about_creating('img', {class:'photos' , src:'../assets/images/chichenitza.jpg' ,alt:'Image about Fifth'} , null,about_fifth_image)
const about_fifth_p = about_creating('p' ,{class:'p_location'}, "Chichén Itzá, a Mayan city in Mexico, flourished in the 9th–10th centuries CE. Notable for El Castillo, a 365-step pyramid reflecting Mayan astronomy, it showcases a serpent illusion during equinoxes. The city also features the largest tlachtli, where a ritual ball game was played in Mesoamerica." ,fifthWonder)
const aLocation5 = about_creating_before('a' , {class:"material-symbols-outlined" , id:'odd-symbol' , href:'https://www.visit-mexico.mx/'} , "pin_drop Maxico" , about_fifth_p)
about_fifth_p.before(about_fifth_image)



// sixth wonder

const sixthWonder = document.querySelector(".sixth-wonder")
const about_sixth_p = about_creating ('p' , null, "Machu Picchu, near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham. Its purpose remains debated, ranging from a royal retreat to a pilgrimage site. Remarkably intact, it features terraces, plazas,temples, and residential areas high in the Andes Mountains." , sixthWonder)
const aLocation6 = about_creating('a' , {class:"material-symbols-outlined" , id:"even-symbol" , href:"https://www.peru.travel/en"} , "Peru pin_drop" , about_sixth_p)
const about_sixth_image = about_creating('a', {href:"https://en.wikipedia.org/wiki/Machu_Picchu)"} , null , sixthWonder)
const photos6 = about_creating('img' , {class:'photos' , src:"../assets/images/machupichu.jpg" , alt:'Machu Picchu'} , null,about_sixth_image)
about_sixth_p.after(about_sixth_image)

// console.log(sixthWonder)



// seventh wonder

const seventhWonder = document.querySelector(".seventh-wonder")
const about_seventh_image = about_creating('a', { href: "https://en.wikipedia.org/wiki/Petra" },null, seventhWonder)
const photos7 = about_creating('img', {class:'photos' , src:'../assets/images/petra.jpg' ,alt:'Image about Seventh'} , null,about_seventh_image)
const about_seventh_p = about_creating('p' ,{class:'p_location'}, " Petra, Jordan, nestled in sandstone cliffs, was the Nabataean capital and a thriving trade center.Known for its carved temples, tombs, and water systems, it flourished with 30,000 residents. Decline followed trade shifts and earthquakes in 363 and 551 CE. Rediscovered in 1912, it remained largely unexplored until the 20th century." ,seventhWonder)
const aLocation7 = about_creating_before('a' , {class:"material-symbols-outlined" , id:'odd-symbol' , href:'https://visitjordan.com/'} , "pin_drop Jordan" , about_seventh_p)
about_seventh_p.before(about_seventh_image)



// About Promotion
// const promotion = document.createElement('div')
// promotion.className = 'promotion_div'
// mainContent.append(promotion)
// seventhWonder.after(promotion)


// promotion_image = about_creating('img' , {class:'promotion_img' , src:"../assets/images/promotion.jpg"} , null , promotion)
// console.log(promotion)



// Famous for tourism


const aboutTourism = about_creating_before("h2", { class: "about" }, "Famous for Tourism", mainContent)

const recentFamous = document.querySelector(".recently-famous")
recentFm()

aboutTourism.after(recentFamous)

const recentlyFamousHide = document.querySelector('recently-famous-hide')
recentFm()





function recentFm(){
    


// First Famous

const firstFamous = document.querySelectorAll(".first-famous")
const about_first_famous_image = about_creating('a', { href: "https://en.wikipedia.org/wiki/Dubai" },null, firstFamous[0])
const famousPhoto1 = about_creating('img', {class:'photos' , src:'../assets/images/dubai.jpg' ,alt:'Image about first famous'} , null,about_first_famous_image)
const about_first_famous_p = about_creating('p' ,{class:'p_location'}, "Dubai, United Arab Emirates - Dubai and the UAE are renowned for their modern architecture, luxuryshopping, and vibrant culture. Dubai's Burj Khalifa, the tallest building globally,and Palm Jumeirah,an iconic man-made island, attract millions. The UAE is famous for its rich heritage, desert safaris, world-class hospitality, and thriving business hub. ." ,firstFamous[0])
const bLocation1 = about_creating_before('a' , {class:"material-symbols-outlined" , id:'odd-symbol' , href:'https://visitabudhabi.ae/en'} , "pin_drop UAE" , about_first_famous_p)

about_first_famous_p.before(about_first_famous_image)




// Second Famous

const secondFamous  = document.querySelectorAll(".second-famous")
const about_second_famous_p = about_creating('p' , {class:'p_location',id:"even-p"} ,"Bangkok, Thailand - Bangkok is a vibrant capital,which is renowned for its bustling street markets, ornate temples like Wat Arun and Wat Phra Kaew, and vibrant nightlife. The city offers a mix of modern malls, cultural landmarks, and iconic floating markets. Its rich cuisine, friendly locals, and river cruises attract tourists worldwide." , secondFamous[0])
const blocation2 = about_creating('a', {class:'material-symbols-outlined' , id:'even-symbol' , target:"_blank" , href:"https://www.tourismthailand.org/home"} , "Bangkok pin_drop" ,about_second_famous_p)
const about_second_famous_image = about_creating('a' , {href:'https://en.wikipedia.org/wiki/Bangkok'} , null,secondFamous[0])
const famousPhoto2 = about_creating('img' ,{class:'photos', src:'../assets/images/bangkok.jpg', alt:'db'} , null, about_second_famous_image)
about_second_famous_p.after(about_second_famous_image)

// console.log(secondFamous)


// third famous

const about_third_famous_image = about_creating('a' , {href:'https://en.wikipedia.org/wiki/Paris'} ,null , firstFamous[1] )
const famousPhoto3 = about_creating('img' ,{class:'photos' , src:'../assets/images/paris.jpg', alt:'Paris' } , null, about_third_famous_image)
const about_third_famous_p = about_creating('p' , {class:'p_location'} , "The Paris, France-Paris, is renowned for its romantic charm, iconic landmarks like the Eiffel Tower,Notre-Dame, and the Louvre Museum. Known as the' City of Light,' it offers exquisite cuisine,vibrant art scenes, and charming streets. Its rich history, fashion, and culture make it one of the world's top tourist destinations." , firstFamous[1])
const bLocation3 = about_creating_before('a' , {class:"material-symbols-outlined" , id:'odd-symbol' , href:'https://www.france.fr/en/'} , " pin_dropFrance" , about_third_famous_p )
about_third_famous_p.before(about_third_famous_image)


// fourth famous

const about_fourth_famous_p = about_creating('p' , {class:'p_location',id:"even-p"} , "The Maldives, a tropical paradise in the Indian Ocean, is renowned for its white-sand beaches,turquoise waters, and luxury resorts. Famous for vibrant coral reefs, rich marine life, and water activities like snorkeling and diving, it offers unmatched serenity, making it a dream destination for honeymooners and nature lovers alike." , secondFamous[1])
const blocation4 = about_creating('a', {class:'material-symbols-outlined' , id:'even-symbol' , target:"_blank" , href:"https://visitmaldives.com/en"} , "Maldivespin_drop" ,about_fourth_famous_p)
const about_fourth_famous_image = about_creating('a' , {href:'https://en.wikipedia.org/wiki/Maldives'} , null,secondFamous[1])
const famousPhoto4 = about_creating('img' ,{class:'photos', src:'../assets/images/maldives.jpg', alt:'db'} , null, about_fourth_famous_image)
about_fourth_famous_p.after(about_fourth_famous_image)

} 


// // First Famous

// const firstFamous = document.querySelectorAll(".first-famous")
// const about_first_famous_image = about_creating('a', { href: "https://en.wikipedia.org/wiki/Dubai" },null, firstFamous[0])
// const famousPhoto1 = about_creating('img', {class:'photos' , src:'../assets/images/dubai.jpg' ,alt:'Image about first famous'} , null,about_first_famous_image)
// const about_first_famous_p = about_creating('p' ,{class:'p_location'}, "Dubai, United Arab Emirates - Dubai and the UAE are renowned for their modern architecture, luxuryshopping, and vibrant culture. Dubai's Burj Khalifa, the tallest building globally,and Palm Jumeirah,an iconic man-made island, attract millions. The UAE is famous for its rich heritage, desert safaris, world-class hospitality, and thriving business hub. ." ,firstFamous[0])
// const bLocation1 = about_creating_before('a' , {class:"material-symbols-outlined" , id:'odd-symbol' , href:'https://visitabudhabi.ae/en'} , "pin_drop UAE" , about_first_famous_p)

// about_first_famous_p.before(about_first_famous_image)


// // Second Famous

// const secondFamous  = document.querySelectorAll(".second-famous")
// const about_second_famous_p = about_creating('p' , {class:'p_location',id:"even-p"} ,"Bangkok, Thailand - Bangkok is a vibrant capital,which is renowned for its bustling street markets, ornate temples like Wat Arun and Wat Phra Kaew, and vibrant nightlife. The city offers a mix of modern malls, cultural landmarks, and iconic floating markets. Its rich cuisine, friendly locals, and river cruises attract tourists worldwide." , secondFamous[0])
// const blocation2 = about_creating('a', {class:'material-symbols-outlined' , id:'even-symbol' , target:"_blank" , href:"https://www.tourismthailand.org/home"} , "Bangkok pin_drop" ,about_second_famous_p)
// const about_second_famous_image = about_creating('a' , {href:'https://en.wikipedia.org/wiki/Bangkok'} , null,secondFamous[0])
// const famousPhoto2 = about_creating('img' ,{class:'photos', src:'../assets/images/bangkok.jpg', alt:'db'} , null, about_second_famous_image)
// about_second_famous_p.after(about_second_famous_image)

// // console.log(secondFamous)


// // third famous

// const about_third_famous_image = about_creating('a' , {href:'https://en.wikipedia.org/wiki/Paris'} ,null , firstFamous[1] )
// const famousPhoto3 = about_creating('img' ,{class:'photos' , src:'../assets/images/paris.jpg', alt:'Paris' } , null, about_third_famous_image)
// const about_third_famous_p = about_creating('p' , {class:'p_location'} , "The Paris, France-Paris, is renowned for its romantic charm, iconic landmarks like the Eiffel Tower,Notre-Dame, and the Louvre Museum. Known as the' City of Light,' it offers exquisite cuisine,vibrant art scenes, and charming streets. Its rich history, fashion, and culture make it one of the world's top tourist destinations." , firstFamous[1])
// const bLocation3 = about_creating_before('a' , {class:"material-symbols-outlined" , id:'odd-symbol' , href:'https://www.france.fr/en/'} , " pin_dropFrance" , about_third_famous_p )
// about_third_famous_p.before(about_third_famous_image)


// // fourth famous

// const about_fourth_famous_p = about_creating('p' , {class:'p_location',id:"even-p"} , "The Maldives, a tropical paradise in the Indian Ocean, is renowned for its white-sand beaches,turquoise waters, and luxury resorts. Famous for vibrant coral reefs, rich marine life, and water activities like snorkeling and diving, it offers unmatched serenity, making it a dream destination for honeymooners and nature lovers alike." , secondFamous[1])
// const blocation4 = about_creating('a', {class:'material-symbols-outlined' , id:'even-symbol' , target:"_blank" , href:"https://visitmaldives.com/en"} , "Maldivespin_drop" ,about_fourth_famous_p)
// const about_fourth_famous_image = about_creating('a' , {href:'https://en.wikipedia.org/wiki/Maldives'} , null,secondFamous[1])
// const famousPhoto4 = about_creating('img' ,{class:'photos', src:'../assets/images/maldives.jpg', alt:'db'} , null, about_fourth_famous_image)
// about_fourth_famous_p.after(about_fourth_famous_image)

// console.log(mainContent)



const hr = document.querySelector(".hr")
recentFamous.after(hr)



// working on footer section


const footer = document.querySelector(".footer")
const footerLink = document.querySelectorAll(".footer_link")
const footElement0 = document.querySelector(".foot_element")





const p_containing_homepage = about_creating('p' , null, null, footElement0)
const  a_containing_homepage = about_creating('a' , {class:'.home_button' , href:'../pages/index.html'} , "Home" , p_containing_homepage)
const i_containing_homepage = about_creating('i' , {class:'fa-solid fa-house'} , null,a_containing_homepage)

const p_containing_backToTop  = about_creating_before('p' , {class:'back_to_top'} , "Back to top" , footElement0)
const i_containing_backtotop = about_creating('i' , {class:'fa-solid fa-arrow-up'} , null , p_containing_backToTop)




const footElement2 = document.querySelectorAll(".foot_element")[1]
const h3_containing_Helpful = about_creating_before('h3' , {class:'column'} , "Helpful Link" , footElement2 )
 const p_1  = about_creating_before('p' , null , "Support" , footElement2) 
 const p_2  = about_creating_before('p' , null , "Privacy Policy" , footElement2) 
 const p_3  = about_creating_before('p' , null , "Term and Condition" , footElement2) 

 


const footElement1 = document.querySelectorAll(".foot_element")[2]
const h3_containing_Info = about_creating_before('h3' , {class:'column'} , "Information" , footElement1 )
 const p1_info  = about_creating_before('p' , null , "About" , footElement1) 
 const p2_info  = about_creating_before('p' , null , "More Search" , footElement1) 




const footElement3 = document.querySelectorAll(".foot_element")[3]
const h3_containing_Contact = about_creating_before('h3' , {class:'column'} , "Contact Us" , footElement3)
 const p1_contact  = about_creating_before('p' , null , "Phone-9898744733" , footElement3) 
 const p2_contact  = about_creating_before('p' , null , "Email-xyz@gmail.com" , footElement3) 
 const p3_contact  = about_creating_before('p' , {class:'icons_'} , "" , footElement3) 

 const i_social1 = about_creating_before('i' , {class:'fa-brands fa-linkedin'} , null, p3_contact)
 const i_social2 = about_creating_before('i' , {class:'fa-brands fa-facebook'} , null, p3_contact)
 const i_social3 = about_creating_before('i' , {class:'fa-brands fa-twitter'} , null, p3_contact)
 const i_social4 = about_creating_before('i' , {class:'fa-brands fa-instagram'} , null, p3_contact)









// footer positining
recentFamous.after(hr)
recentFamous.after(footer)
hr.after(footer)




// const data_in_page_link = document.createTextNode("Hotel Restaurant Things Flights ");




// function trying(tagName , attributes , textcontent , parentElement){
//     const element = document.querySelector(tagName)

//     if(attributes){
//         for(let key in attributes){
//             element.setAttribute(key , attributes[key])
//         }

//     if(textcontent){
//         element.textContent = textcontent
//     }
//     if(parentElement){
//         parentElement.appendChild(element)
//     }    
//     return element
//     }
// }













