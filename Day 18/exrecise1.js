// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
/*
const countries = async ()=>{
    try{
       const response = await fetch('https://restcountries.com/v2/all')
    //    console.log(response)
    const countriesData = await response.json();
    //   console.log(countriesData)
     countriesData.forEach(country => { 
        console.log(`country:${country.name} | captial:${country.captial} | population:${country.population.toLocaleString()}`)
        
    });
    }catch(error){
        console.log(error);
    }
}

countries();
*/

const countries = async ()=>{
    try{
        const response = await fetch('https://restcountries.com/v2/all')

        const countriesData = await response.json()
      const countryDetails =  countriesData.map((country)=>
                  `country:${country.name} | captial:${country.capital} | population:${country.population.toLocaleString()}`
      )  
        console.log(countryDetails)
    }catch(error){
        console.log(error);
    }
}
countries();

