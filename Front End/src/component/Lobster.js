import React, { Component } from 'react';
import Lobsterr   from './../image/Lobster.jpeg';
import Zoom from 'react-reveal/Zoom';

class Lobster extends Component {
    render() {
        return (
            <Zoom cascade>
            <div>
               <img className="Image" alt="x" src={Lobsterr}></img>
               <div className="penjelasan">     
                  <b>" UDANG LOBSTER "</b><br/> 
                  Nama Latin/Ilmiah : <b><i>Cherax boesemani</i></b><br/>
                  Dalam Bahasa Inggris : <b><i>Cray Fish</i></b>
                </div>
            </div>
            </Zoom>
        )
    }
};

export default Lobster ;