import React, { Component } from 'react';
import './../style/Part3.css';
import { Link }  from 'react-router-dom';
import Header    from './Header';
import Bandeng   from './../image/Bandeng.jpg';
import Barakuda  from './../image/Barakuda.jpg';
import Baronang  from './../image/Baronang.jpg';
import Cakalang  from './../image/Cakalang.jpg';
import Kakap     from './../image/Kakap.jpg';
import Lobster   from './../image/Lobster.jpeg';
import Pari      from './../image/Pari.jpg';
import Zoom      from 'react-reveal/Zoom';

class Part3 extends Component {
    constructor(){
        super();
        this.state={nama:''}
    }

    input(){
        this.setState(
          {nama: this.refs.cari.value}
        );
    }
    render() {
        return (
            <div className="container-fluidPart3">
                <div className="col-lg-12 Header">
                    <Header/>
                </div>
                <div className="col-lg-12 container-fluidHasil">
                    <Zoom cascade>
                    <center>
                    <h2 style={{paddingTop:100,fontSize:50}}>Apa yang anda cari ?</h2><br/>
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <input className="Input" style={{fontSize:15}} ref="cari" type="text" placeholder="ikan, cumi, kepiting, udang ?" 
                        onInput={()=>{this.input();}} required />
                    <Link to ={`/Pencarian/${this.state.nama}`}>
                    <Zoom>
                    <button className="btn btn-secondary" style={{width:40}}>
                        <i className="fas fa-search"></i>
                    </button>
                    </Zoom>
                    </Link> 
                    </div>
                    </center>
                    </Zoom>
                    <div className="sosmed"> 
                        <Zoom top cascade>             
                        <a href="https://www.facebook.com/groups/876701782409496/?ref=group_header">
                            <i className="fab fa-facebook-square" ></i></a><br/>
                        <a href="https://www.instagram.com/explore/tags/nelayan/">
                            <i className="fab fa-instagram"       ></i></a><br/>
                        <a href="https://twitter.com/hashtag/nelayan">
                            <i className="fab fa-twitter"         ></i></a>
                        </Zoom>
                    </div>
                </div>

                <div className="col-lg-12 container-fluidMarque">
                    <marquee direction="left">
                        {/* <Link to ="/Bandeng" > <img className="ImageButton" data-toggle="modal" 
                            data-target="#Bandeng" alt="x" src={Bandeng}></img></Link>
                        <Link to ="/Barakuda"> <img className="ImageButton" data-toggle="tooltip" data-placement="down" 
                            title="Ikan Barakuda" alt="x" src={Barakuda}></img> </Link>
                        <Link to ="/Baronang"> <img className="ImageButton" data-toggle="tooltip" data-placement="down" 
                            title="Ikan Baronang" alt="x" src={Baronang}></img> </Link>
                        <Link to ="/Cakalang"> <img className="ImageButton" data-toggle="tooltip" data-placement="down" 
                            title="Ikan Cakalang" alt="x" src={Cakalang}></img> </Link>
                        <Link to ="/Kakap">    <img className="ImageButton" data-toggle="tooltip" data-placement="down" 
                            title="Ikan Kakap" alt="x" src={Kakap}></img>    </Link>
                        <Link to ="/Lobster">  <img className="ImageButton" data-toggle="tooltip" data-placement="down" 
                            title="Udang Lobster" alt="x" src={Lobster}></img>  </Link>
                        <Link to ="/Pari">     <img className="ImageButton" data-toggle="tooltip" data-placement="down" 
                            title="Ikan Pari" alt="x" src={Pari}></img>     </Link> */}
                        <img className="ImageButton" data-toggle="modal" title="Click"
                            data-target="#Bandeng" alt="x" src={Bandeng}></img>&nbsp;&nbsp;
                        <img className="ImageButton" data-toggle="modal" title="Click"
                            data-target="#Barakuda" alt="x" src={Barakuda}></img>&nbsp;&nbsp;
                        <img className="ImageButton" data-toggle="modal" title="Click"
                            data-target="#Baronang" alt="x" src={Baronang}></img>&nbsp;&nbsp;
                        <img className="ImageButton" data-toggle="modal" title="Click"
                            data-target="#Cakalang" alt="x" src={Cakalang}></img>&nbsp;&nbsp;
                        <img className="ImageButton" data-toggle="modal" title="Click"
                            data-target="#Kakap" alt="x" src={Kakap}></img>&nbsp;&nbsp;
                        <img className="ImageButton" data-toggle="modal" title="Click"
                            data-target="#Lobster" alt="x" src={Lobster}></img>&nbsp;&nbsp;
                        <img className="ImageButton" data-toggle="modal" title="Click"
                            data-target="#Pari" alt="x" src={Pari}></img>
                    </marquee>
                </div>
                <div className="modal fade" id="Bandeng" tabindex="-1" role="dialog" aria-labelledby="LabelBandeng" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{width:400,borderRadius:10}}>
                            <div className="modal-header" style={{background:"skyblue",textAlign:"center"}}><p className="modal-title" id="LabelBandeng"><b><center>IKAN BANDENG</center></b></p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> 
                                <img src={Bandeng} alt="x" style={{width:350,height:200,borderRadius:10}}/><br/>
                                Nama Latin/Ilmiah : <b><i>Chanos chanos</i></b><br/>
                                Dalam Bahasa Inggris : <b><i>Milkfish</i></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="Barakuda" tabindex="-1" role="dialog" aria-labelledby="LabelBarakuda" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{width:400,borderRadius:10}}>
                            <div className="modal-header" style={{background:"skyblue",textAlign:"center"}}><p className="modal-title" id="LabelBarakuda"><b><center>IKAN BARAKUDA/TUDAK</center></b></p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> 
                                <img src={Barakuda} alt="x" style={{width:350,height:200,borderRadius:10}}/><br/>
                                Nama Latin/Ilmiah : <b><i>Sphyraena</i></b><br/>
                                Dalam Bahasa Inggris : <b><i>Barracuda</i></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="Baronang" tabindex="-1" role="dialog" aria-labelledby="LabelBaronang" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{width:400,borderRadius:10}}>
                            <div className="modal-header" style={{background:"skyblue",textAlign:"center"}}><p className="modal-title" id="LabelBaronang"><b><center>IKAN BARONANG</center></b></p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> 
                                <img src={Baronang} alt="x" style={{width:350,height:200,borderRadius:10}}/><br/>
                                Nama Latin/Ilmiah : <b><i>Siganus javus</i></b><br/>
                                Dalam Bahasa Inggris : <b><i>Streaked spinefoot</i></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="Cakalang" tabindex="-1" role="dialog" aria-labelledby="LabelCakalang" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{width:400,borderRadius:10}}>
                            <div className="modal-header" style={{background:"skyblue",textAlign:"center"}}><p className="modal-title" id="LabelCakalang"><b><center>IKAN CAKALANG</center></b></p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> 
                                <img src={Cakalang} alt="x" style={{width:350,height:200,borderRadius:10}}/><br/>
                                Nama Latin/Ilmiah : <b><i>Katsuwonus pelamis</i></b><br/>
                                Dalam Bahasa Inggris : <b><i>Skipjack Tuna</i></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="Kakap" tabindex="-1" role="dialog" aria-labelledby="LabelKakap" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{width:400,borderRadius:10}}>
                            <div className="modal-header" style={{background:"skyblue",textAlign:"center"}}><p className="modal-title" id="LabelKakap"><b><center>IKAN KAKAP</center></b></p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> 
                                <img src={Kakap} alt="x" style={{width:350,height:200,borderRadius:10}}/><br/>
                                Nama Latin/Ilmiah : <b><i>Lutjanus analis</i></b><br/>
                                Dalam Bahasa Inggris : <b><i>Mutton Snapper</i></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="Lobster" tabindex="-1" role="dialog" aria-labelledby="LabelLobster" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{width:400,borderRadius:10}}>
                            <div className="modal-header" style={{background:"skyblue",textAlign:"center"}}><p className="modal-title" id="LabelLobster"><b><center>UDANG LOBSTER</center></b></p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> 
                                <img src={Lobster} alt="x" style={{width:350,height:200,borderRadius:10}}/><br/>
                                Nama Latin/Ilmiah : <b><i>Cherax boesemani</i></b><br/>
                                Dalam Bahasa Inggris : <b><i>Cray Fish</i></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="Pari" tabindex="-1" role="dialog" aria-labelledby="LabelPari" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{width:400,borderRadius:10}}>
                            <div className="modal-header" style={{background:"skyblue",textAlign:"center"}}><p className="modal-title" id="LabelPari"><b><center>IKAN PARI/MANTA</center></b></p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> 
                                <img src={Pari} alt="x" style={{width:350,height:200,borderRadius:10}}/><br/>
                                Nama Latin/Ilmiah : <b><i>Manta birostris</i></b><br/>
                                Dalam Bahasa Inggris : <b><i>Giant Manta Ray</i></b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Part3 ;