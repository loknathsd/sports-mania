import React, { useEffect, useState } from 'react';

import { Row ,Col } from 'react-bootstrap';
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
            <Row className="header-part" >
                <Col>
                  <h1 style={{paddingTop:"100px",color:'FloralWhite', fontSize:'60px'}}>Sports Leagues</h1>
                  </Col>
            </Row>
            

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