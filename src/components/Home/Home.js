import React, { useEffect, useState } from 'react';

// import { Card } from 'react-bootstrap';
import League from '../League/League';
import './Home.css'


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => {
                const newLeagues = data.leagues.slice(0 , 12)
                setLeagues(newLeagues);
            })
    }, [])
    return (
        <div >
            <div className="header-part">
            <h1 style={{paddingTop:"100px",color:'yellow'}}>Sports Leagues</h1>
            </div>
            

            <div className="card-bg">
                <div className='card-area container'>

                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;