async function getRandomFact(){
    let baseURL = "http://numbersapi.com"
    let data= await axios.get(`${baseURL}/21?json`)
    console.log(data)
}

let favNums =[3,31,13];
async function getMultipleNums(){
    let baseURL = "http://numbersapi.com"
    let facts = await axios.get(`${baseURL}/${favNums}/json`)
    console.log(facts)
}

async function getFourFacts(){
    let baseURL = "http://numbersapi.com"
    let fact1 = await axios.get(`${baseURL}/3?json`)
    let fact2 = await axios.get(`${baseURL}/3?json`)
    let fact3 = await axios.get(`${baseURL}/3?json`)
    let fact4 = await axios.get(`${baseURL}/3?json`)

    console.log(`${fact1}, ${fact2}, ${fact3}, ${fact4}`)

}
