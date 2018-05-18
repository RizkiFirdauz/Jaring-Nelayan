import React, { Component } from 'react';
import './../style/Front.css';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Zoom  from 'react-reveal/Zoom';
import a     from './../image/avatar4.png';

class Front extends Component {
    render() {
        return (
            <section id="Front">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 container-fluid2">
                        <div className="col-lg-12 fluid4">
                        <Zoom left cascade>
                        <div className="id">
                        <img src={a} alt="x" style={{height:"60px",width:"40px"}}/>
                        Welcome, {this.props.match.params.id}.</div>
                        </Zoom>
                        <Part1/>
                        </div>
                        <div className="col-lg-12 fluid5">
                            <Part2/>
                        </div>
                    </div>
                    <div className="col-lg-7 container-fluid3">
                        <Part3/>
                    </div>
                </div>
            </div>
            </section>
        )
    }
};

export default Front ;