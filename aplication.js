

const ulList = document.querySelector(".ul-list")
const linkList = document.querySelectorAll(".link-list")
const linkCards = document.querySelectorAll(".breedLink")
const liList = document.querySelectorAll(".list")
const searchIcon = document.querySelector(".search-icon")
const searchlittleBox = document.querySelector(".search-littleBox")
const divsCards = document.querySelectorAll(".theCard")
const divBreed = document.querySelector(".breed")
const topOfThePage = document.querySelector(".link-toLittleBox") 
const objects_array = []

let breedName = document.querySelector(".breed-name")
let breedDescription = document.querySelector(".breed-description")



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
    })
})
ulList.addEventListener("mouseleave", ()=>{
    ulList.style.display = "none"
    searchIcon.style.width = "50px"
    searchIcon.style.height = "50px"
})
topOfThePage.addEventListener("click", ()=>{
    divBreed.style.display = "none";
})




function linkCard_ToDescription(link, obj){

    setTimeout(()=>{
        link.forEach(item =>{
            item.addEventListener("click", ()=>{
                //console.log(item.innerText);
                divBreed.style.display = "block";
                obj.forEach(ele =>{
                    if(item.innerText === ele.name){
                        breedName.textContent = ele.name
                        breedDescription.textContent = ele.descrip
                    }
                })
            })
        })
    }, 1000)
}



function li_ToDescription(array, obj){
    
    setTimeout(()=>{
        array.forEach(item =>{
            item.addEventListener("click", ()=>{
                divBreed.style.display = "block";
                obj.forEach(ele =>{
                    if(item.textContent === ele.name){
                        breedName.textContent = ele.name
                        breedDescription.textContent = ele.descrip
                    }
                })
                
            })
        })
    }, 1000)   
}



linkCard_ToDescription(linkCards, objects_array)
li_ToDescription(liList, objects_array)