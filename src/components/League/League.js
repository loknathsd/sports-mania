import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';



const League = (props) => {
    const {strLeague,strSport,idLeague,strLogo} = props.league;
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
                    <Button onClick={()=>handleClick(idLeague)} variant="primary">Explore</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;