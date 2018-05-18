import React, { Component } from 'react';
import Baronangg   from './../image/Baronang.jpg';
import Zoom from 'react-reveal/Zoom';

class Baronang extends Component {
    render() {
        return (
            <Zoom cascade>
            <div>
               <img className="Image" alt="x" src={Baronangg}></img>
               <div className="penjelasan">     
                  <b>" IKAN BARONANG "</b><br/> 
                  Nama Latin/Ilmiah : <b><i>Siganus javus</i></b><br/>
                  Dalam Bahasa Inggris : <b><i>Streaked spinefoot</i></b>
                </div>
            </div>
            </Zoom>
        )
    }
};

export default Baronang ;