import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const League = (props) => {
    const {strLeague,strSport,idLeague} = props.league;
    let history = useHistory()
    const handleClick=(id)=>{
        history.push(`/league/${id}`)
    }
    return (
        <div className='container'>
            <Card style={{ width: '20rem' ,backgroundColor:'white',}}>
                <Card.Img src='' alt='IMAGE' />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                       Sports typed : {strSport}
                    </Card.Text>
                    <Button onClick={()=>handleClick(idLeague)} variant="primary">Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;