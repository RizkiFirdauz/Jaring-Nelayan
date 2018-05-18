import React, { Component } from 'react';
import Kakapp   from './../image/Kakap.jpg';
import Zoom from 'react-reveal/Zoom';

class Kakap extends Component {
    render() {
        return (
            <Zoom cascade>
            <div>
               <img className="Image" alt="x" src={Kakapp}></img>
               <div className="penjelasan">     
                  <b>" IKAN KAKAP "</b><br/> 
                  Nama Latin/Ilmiah : <b><i>Lutjanus analis</i></b><br/>
                  Dalam Bahasa Inggris : <b><i>Mutton Snapper</i></b>
                </div>
            </div>
            </Zoom>
        )
    }
};

export default Kakap ;