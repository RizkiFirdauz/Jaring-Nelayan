import React, { Component } from 'react';
import './../style/Contact.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Zoom  from 'react-reveal/Zoom';

class Contact extends Component {
    render() {
        return (
            <section id="Contact">
            <div className="Contact">
                <div className="container-fluid">
                  <Zoom cascade>
                    <Zoom left cascade>
                    <center><h5><b>Contact</b></h5></center>
                    </Zoom>
                        <div className="row">
                            <div className="col-lg-6">
                                <center>
                                <div className="col-lg-12 container3">
                                    <i className="fas fa-map-marker-alt" style={{fontSize:"50px"}}></i><br/><br/>
                                    <Zoom left cascade>
                                    <p5>Serang-Banten, Indonesia. </p5>
                                    </Zoom>
                                </div>
                                <div className="col-lg-12 container3">
                                    <i className="fas fa-phone" style={{fontSize:"50px"}}></i><br/><br/>
                                    <Zoom left cascade>
                                    <p5>+62896 9802 0118</p5>
                                    </Zoom>
                                </div>
                                <div className="col-lg-12 container3">
                                    <i className="far fa-envelope" style={{fontSize:"50px"}}></i><br/><br/>
                                    <Zoom left cascade>
                                    <p5>jaringnelayan@banten.com</p5>
                                    </Zoom>
                                </div> 
                                </center>
                            </div>
                            <div className="col-lg-6">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63492.009008231245!2d106.03993672530446!3d-5.960180294720575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41922e0f4027f5%3A0x72a091a79d269bb8!2sBojonegara%2C+Serang%2C+Banten!5e0!3m2!1sid!2sid!4v1525707949830" 
                                    title="maps" style={{border:"none",height:380,width:450}} frameborder="0" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                        <Link to ="/Front/daus" className="up">
                            <i className="fas fa-chevron-circle-left" style={{fontSize:30,paddingTop:10,paddingLeft:"95%"}} 
                               data-toggle="tooltip" data-placement="down" title="Back"></i>
                        </Link>
                    <Footer/>
                  </Zoom>  
                </div>
            </div>
            </section>
        );
    }
}
export default Contact ;