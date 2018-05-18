import React, { Component } from 'react';
import Barakudaa   from './../image/Barakuda.jpg';
import Zoom from 'react-reveal/Zoom';

class Barakuda extends Component {
    render() {
        return (
            <Zoom cascade>
            <div>
               <img className="Image" alt="x" src={Barakudaa}></img>
               <div className="penjelasan">     
                  <b>" IKAN BARAKUDA "</b><br/> 
                  Nama Latin/Ilmiah : <b><i>Sphyraena</i></b><br/>
                  Dalam Bahasa Inggris : <b><i>Barracuda</i></b>
                </div>
            </div>
            </Zoom>
        )
    }
};

export default Barakuda ;