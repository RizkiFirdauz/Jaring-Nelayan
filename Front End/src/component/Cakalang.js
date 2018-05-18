import React, { Component } from 'react';
import Cakalangg   from './../image/Cakalang.jpg';
import Zoom from 'react-reveal/Zoom';

class Cakalang extends Component {
    render() {
        return (
            <Zoom cascade>
            <div>
               <img className="Image" alt="x" src={Cakalangg}></img>
               <div className="penjelasan">     
                  <b>" IKAN CAKALANG "</b><br/> 
                  Nama Latin/Ilmiah : <b><i>Katsuwonus pelamis</i></b><br/>
                  Dalam Bahasa Inggris : <b><i>Skipjack Tuna</i></b>
                </div>
            </div>
            </Zoom>
        )
    }
};

export default Cakalang ;