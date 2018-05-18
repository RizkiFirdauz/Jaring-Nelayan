import React, { Component } from 'react';
import './../style/Part1.css';
import { Link } from 'react-router-dom';
import Zoom  from 'react-reveal/Zoom';

class Part1 extends Component {
    render() {
        return (
          <Zoom cascade>
            <div className="container-fluidPart1">
                <h2>Jaring Nelayan</h2>
                <p style={{color:"white",paddingTop:20,fontSize:20,fontFamily:"Gaegu"}}>
                    “di sini baru aku mengerti
                    mengapa nelayan membelah perahunya
                    menjadi kayu api
                    dan mengiris pukatnya
                    untuk sarapan pagi.”
                </p>
            </div>
          </Zoom>
        )
    }
};

export default Part1 ;