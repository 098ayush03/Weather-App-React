//import TextField
import TextField from '@mui/material/TextField';

//import button
import Button from '@mui/material/Button';

//import SearchBox.css
import "./SearchBox.css"
import { useState } from 'react';


// Export search box to app.jss
export default function SearchBox() {

    // use api cll (openweatherMap.org/current)

    //assicoate react variable to Form
    let [city, setCity]  = useState("")

    //API URL
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"

    //API KEY
    const API_KEY = "547c1e5759cfdd8cb2e3d9f8fac09bc2"

    //make finction to agte weather information
    let getWeatherInfo =  async() => {
        let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
        let jsonResponse = await response.json();
        console.log(jsonResponse)
   
       }



//handle change
let handleChange = (event) => {
    setCity(event.target.value);
}


//on submit funcation
let  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city)
    setCity("")
    getWeatherInfo()
}



    return(
        <div className='SearchBox'>
            <h3>Search for the weather</h3>

            <form onSubmit={handleSubmit}>
{/* use TextField */}
        <TextField 
        id="city" 
        label="City Name" 
        variant="outlined"
        // required value={city}
         />
            <br></br>
            <br></br>
{/* use Button */}
            <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}

