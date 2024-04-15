import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../App.css';

const Home = () =>{
    
    const [year, setYear] = useState("");
    const navigate = useNavigate();

    const [yearError, setYearError] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault()
        setYear(event.target.value);

        if (!year) {
            setYearError("Please enter a year.")
            return;
        } else if (year.length != 4) {
            setYearError("Please enter a valid 4-digit year.")
            return;

        } else if (year < 1901) {
            setYearError("Please enter a year from 1901 onwards.")
            return;

        } else if (year > 2024) {
            setYearError("Please enter a year before 2025.");
            return;
        } else if (year.length){
            setYearError("");
            navigate(`/nobel/${year}`);
        }
    }
    
    return(
        <div>
            <h1>Home</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Please enter a year:</h3>
                    <input 
                        type="text"
                        value={year}
                        onChange={ (event) => {
                            setYear(event.target.value)
                            setYearError("")
                        }}
                        />
                    <br/>
                    {yearError && <span style = { {color: 'red'} }>{yearError}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Home;