import React, { Component } from 'react';
import './../style/Bandeng.css';
//import Flip from 'react-reveal/Flip'; //Fade, Rotate, Zoom, Bounce, Roll,Flip
import Zoom from 'react-reveal/Zoom';
import Bandengg   from './../image/Bandeng.jpg';

class Bandeng extends Component {
    render() {
        return (
            <Zoom cascade>
            <div>
               <img className="Image" alt="x" src={Bandengg}></img>
               
               <div className="penjelasan"> 
                  <b>" IKAN BANDENG "</b><br/> 
                  Nama Latin/Ilmiah : <b><i>Chanos chanos</i></b><br/>
                  Dalam Bahasa Inggris : <b><i>Milkfish</i></b>
                </div> 
            </div>
            </Zoom>
        )
    }
};

export default Bandeng ;