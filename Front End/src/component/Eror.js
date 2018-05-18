import React, { Component } from 'react';
import './../style/Eror.css';
import {Link} from 'react-router-dom';
import Zoom  from 'react-reveal/Zoom';

class Eror extends Component {
    render() {
        return (
            <div className="Eror">
                  <Zoom cascade>
                    <Zoom left cascade>
                    <center><br/>
                        <h5 style={{fontSize:100,paddingTop:100}}><b>404</b></h5>
                        <h5 style={{fontSize:60}}><b>Page not Found !</b></h5><br/>
                        <p6>It will be mine. Oh yes. It will be mine.</p6>
                    </center><br/><br/><br/><br/>
                    </Zoom>
                        <Link to ="/Front" className="up">
                            <i className="fas fa-chevron-circle-left" style={{fontSize:30,paddingLeft:"95%"}} 
                               data-toggle="tooltip" data-placement="down" title="Back"></i>
                        </Link>
                  </Zoom> 
            </div>
        );
    }
}
export default Eror ;