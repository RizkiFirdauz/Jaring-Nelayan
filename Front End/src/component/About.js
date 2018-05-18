import React, { Component } from 'react';
import './../style/About.css';
import {Link} from 'react-router-dom';
import nelayan1 from './../image/nelayan1.jpg';
import nelayan2 from './../image/nelayan2.jpg';
import nelayan3 from './../image/nelayan3.jpg';
import nelayan4 from './../image/nelayan4.jpg';
import nelayan5 from './../image/nelayan5.jpg';
import nelayan6 from './../image/nelayan6.jpg';
import Zoom from 'react-reveal/Zoom';

class About extends Component {
    render() {
        return (
            <section id="About">
            <div className="About">
                <div className="container-fluid">
                  <Zoom cascade>
                    <center><h5><b>Nelayan</b></h5>
                        <div className="sejarah">
                            <p4>
                                    Nelayan adalah orang yang mata pencahariannya melakukan penangkapan ikan. 
                                Dalam perstatistikan perikanan perairan umum, nelayan adalah orang yang 
                                secara aktif melakukanoperasi penangkapan ikan di perairan umum. Orang yang 
                                melakukan pekerjaan sepertimembuat jaring, mengangkut alat-alat penangkapan 
                                ikan ke dalam perahu atau kapal motor,mengangkut ikan dari perahu atau kapal 
                                motor, tidak dikategorikan sebagai nelayan (Departemen Kelautan dan Perikanan,2002).<br/> 
                                    Nelayan dibedakan menjadi tiga kelompok, yaitu nelayan buruh, nelayan juragan dan 
                                nelayan perorangan. Nelayan buruh adalah nelayan yang bekerja dengan alat tangkap 
                                milik orang lain. Sebaliknya nelayan juragan adalah nelayan yang memiliki alat tangkap 
                                yangdioperasikan oleh orang lain. Sedangkan nelayan perorangan adalah nelayan yang 
                                memiliki peralatan tangkap sendiri, dan dalam pengoperasiannya tidak melibatkan orang 
                                lain (Subri,2005).<br/>
                                    Sumberdaya nelayan dicirikan oleh pendidikan dan keterampilan yang 
                                rendah,kemampuan manajemen yang terbatas. Taraf hidup penduduk desa pantai yang sebagian 
                                besar nelayan sampai saat ini masih rendah, pendapatan tidak menentu (sangat tergantung 
                                pada musim ikan), kebanyakan masih memakai peralatan tradisional dan masih sukar menjauhkan 
                                diri dari prilaku boros (Sitorus, 1994).<br/>
                                    Nelayan adalah orang yang hidup dari mata pencaharian hasil laut. Di Indonesia 
                                paranelayan biasanya bermukin di daerah pinggir pantai atau pesisir laut. Komunitas 
                                nelayanadalah kelompok orang yang bermata pencaharian hasil laut dan tinggal didesa-desa atau pesisir (Sastrawidjaya. 2002).
                            </p4>
                        </div>
                    </center><br/>
                    </Zoom>
                    <div className="row">
                        <Zoom cascade>
                            <div className="col-lg-2">
                                <center>
                                    <img className="Image2" alt="x" src={nelayan1}>
                                    </img>
                                </center>
                            </div>
                            
                            <div className="col-lg-2">
                                <center>
                                    <img className="Image2" alt="x" src={nelayan2}>
                                    </img>
                                </center>
                            </div>
                            <div className="col-lg-2">
                                <center>
                                    <img className="Image2" alt="x" src={nelayan3}>
                                    </img>
                                </center>
                            </div>
                            <div className="col-lg-2">
                                <center>
                                    <img className="Image2" alt="x" src={nelayan4}>
                                    </img>
                                </center>
                            </div>
                            <div className="col-lg-2">
                                <center>
                                    <img className="Image2" alt="x" src={nelayan5}>
                                    </img>
                                </center>
                            </div>
                            <div className="col-lg-2">
                                <center>
                                    <img className="Image2" alt="x" src={nelayan6}>
                                    </img>
                                </center>
                            </div> 
                        </Zoom>     
                    </div>
                        <Link to ="/Front/daus" className="up">
                            <i className="fas fa-chevron-circle-left" style={{textAlign:"right",fontSize:30,paddingBottom:7,paddingTop:10,paddingLeft:"95%"}} 
                               data-toggle="tooltip" data-placement="down" title="Back">
                            </i>
                        </Link>
                </div>
            </div>
            </section>
        );
    }
}
export default About ;