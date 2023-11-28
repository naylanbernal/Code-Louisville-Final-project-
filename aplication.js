const ulList = document.querySelector(".ul-list")
const linkList = document.querySelectorAll(".link-list")
console.log(linkList)
const searchInput = document.querySelector(".search-input")



searchInput.addEventListener("mouseover", ()=>{
    linkList.forEach(item =>{
        ulList.style.display = "block"
        item.style.display = "block"
        ulList.style.zIndex = 20
    })
})
ulList.addEventListener("mouseleave", ()=>{
    ulList.style.display = "none"
})



const apiLink = 'https://dogapi.dog/api/v2/breeds'

fetch(apiLink)
    .then(res => res.json())
    .then(info => {
        //console.log(info);
        //console.log(info.data[3].attributes.name)
        info.data.forEach(element => {
            //console.log(element.attributes.name)
            //console.log(element.attributes.description)
            
        });
        
    })

