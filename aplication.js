const apiLink = 'https://dogapi.dog/api/v2/breeds'

fetch(apiLink)
    .then(res => res.json())
    .then(info => {
        console.log(info);
        console.log(info.data[3].attributes.name)
        info.data.forEach(element => {
            console.log(element.attributes.name)
            console.log(element.attributes.description)
            
        });
        
    })
