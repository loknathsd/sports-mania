import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import AllDetail from '../AllDetail/AllDetail';

const LeagueDetail = () => {
     const {id} = useParams();
     const [league,setLeague] = useState([]);
     useEffect(()=>{
         const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
         fetch(url)
         .then(res =>res.json())
         .then(data =>setLeague(data.leagues[0]))
     },[]);
    return (
        <div >
            <div className="header-part">
               <img style={{width:'400px',marginTop:'40px',}} src={league.strLogo} alt="" />
            </div>
            <div className="detail-part">
                <AllDetail league ={league}></AllDetail>
            </div>
        </div>
    );
};

export default LeagueDetail;