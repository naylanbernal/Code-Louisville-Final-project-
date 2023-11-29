const ulList = document.querySelector(".ul-list")
const linkList = document.querySelectorAll(".link-list")
const list = document.querySelectorAll(".list")
const searchIcon = document.querySelector(".search-icon")
const searchlittleBox = document.querySelector(".search-littleBox")
const divBreed = document.querySelector(".breed")
let breedDescription = document.querySelector(".breed-description")

const objects_array = []





const apiLink = 'https://dogapi.dog/api/v2/breeds'

fetch(apiLink)
    .then(res => res.json())
    .then(info => {
        info.data.forEach(element => {
            let obj = {
                name: element.attributes.name,
                descrip: element.attributes.description
            }
            objects_array.push(obj)
        });
    })





searchlittleBox.addEventListener("mouseover", ()=>{
    linkList.forEach(item =>{
        item.style.display = "block"
        searchIcon.style.width = "30px"
        searchIcon.style.height = "30px"
        ulList.style.display = "block"
        ulList.style.zIndex = "100"
    })
})
ulList.addEventListener("mouseleave", ()=>{
    ulList.style.display = "none"
    searchIcon.style.width = "50px"
    searchIcon.style.height = "50px"
})



    


function linkToDescription(){
    let liName = ""
    setTimeout(()=>{
        
        list.forEach(item =>{
            item.addEventListener("click", ()=>{
                liName = item.textContent;
            })
        
        }, 1000)
        
    })
    console.log(liName);
}
linkToDescription()





