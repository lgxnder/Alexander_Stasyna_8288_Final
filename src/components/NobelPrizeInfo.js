import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import '../App.css';


const NobelPrizeInfo = () =>{
    const { year } = useParams();
    const [loading, setLoading] = useState(true);
    const [prizeInfo, setPrizeInfo] = useState([]);

    const fetchNobelPrizeInfo = () => {
        try{
            let apiURL = `https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}`;

            axios.get(apiURL)
            .then(response => {
                console.log(`response from API : ${JSON.stringify(response.data)}`);
                if (response.data !== undefined){
                    setPrizeInfo(response.data);
                    setLoading(false);
                }else{
                    console.log(`No data provided from API`);
                }
                
            })
            .catch(err => {
                console.error(`Cannot access the data from API : ${err}`);
            })

        }catch(error){
            console.error(`Error while fetching data from API : ${error}`);
        }
    }

    useEffect( () => {fetchNobelPrizeInfo()}, [])

    return(
        <div>
            <h1>NobelPrizeInfo for  {year}</h1>
            <div>
                {loading ? (
                    <Spinner animation="border" />
                ) : prizeInfo.length ? (
                    prizeInfo.map((prizeInfo, index) => (
                        <div key={index} className="card">
                            <div className="card-body">
                            <h5 className="card-title">{prizeInfo.category}</h5>
                            <p className="card-text">Date Awarded: {prizeInfo.awardDate}</p>
                            <p className="card-text">Prize Amount: {prizeInfo.prizeAmount}</p>
                            <Link to="/" className="btn btn-primary">
                                Back to Home
                            </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <h4>No prizes were awarded during this year.</h4>
                        <Link to="/" className="btn btn-primary">
                        Back to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NobelPrizeInfo;