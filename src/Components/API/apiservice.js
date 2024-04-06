import response from "./Api";

const lista = []

response.then((data) =>{
    data.map((item) =>{
        console.log(item)
    })
})

