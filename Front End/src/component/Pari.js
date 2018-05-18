import React, { Component } from 'react';
import Parii   from './../image/Pari.jpg';
import Zoom from 'react-reveal/Zoom';

class Pari extends Component {
    render() {
        return (
            <Zoom cascade>
            <div>
               <img className="Image" alt="x" src={Parii}></img>
               <div className="penjelasan">     
                  <b>" IKAN PARI "</b><br/> 
                  Nama Latin/Ilmiah : <b><i>Manta birostris</i></b><br/>
                  Dalam Bahasa Inggris : <b><i>Giant Manta Ray</i></b>
                </div>
            </div>
            </Zoom>
        )
    }
};

export default Pari ;