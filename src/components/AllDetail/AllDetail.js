import React from 'react';
import './AllDetail.css';
import Male from '../../images/male.png';
import Female from '../../images/female.png'

const AllDetail = (props) => {
    const {strLeague,strCountry,dateFirstEvent,strSport,strGender} = props.league;
    return (
        <div className="card-bg pt-4 pb-5">
            <div className="information container ">
               <div className="info">
                   <h3>{strLeague}</h3>
                   <h5>Founded : {dateFirstEvent}</h5>
                   <h5> Country : {strCountry}</h5>
                   <h5>Sports Type : {strSport}</h5>
                   <h5>Gender : {strGender}</h5>
                   

               </div>
                <div >
                    {
                        strGender === "Male" ? <img src={Male} alt="" /> 
                        : <img src={Female} alt="" />
                    }
                </div>
            </div>
            <div className="description container">
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit labore saepe eligendi pariatur nesciunt fugit nam, minima doloribus temporibus ullam est accusamus voluptate praesentium illo ipsum eaque dolorum tempora iusto nisi amet voluptates adipisci quae necessitatibus explicabo? Repudiandae unde veniam officia at repellendus, voluptatem, exercitationem nulla, ratione nam blanditiis aut!</p>
               <br />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis quo ea veritatis consectetur autem vitae, nihil voluptate culpa magnam molestias odit non. Voluptates ipsa incidunt eos, saepe quae ut?</p>
               

            </div>

        </div>
    );
};

export default AllDetail;