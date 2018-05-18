import React, { Component } from 'react';
import './../style/Hasil.css';
import axios  from 'axios';
import {Link} from 'react-router-dom';

class Hasil extends Component {
    constructor(){
      super();
      this.state={jaringnelayan:[]}
    }

    componentDidMount(){
      axios.get('https://agile-retreat-35889.herokuapp.com/data/'+this.props.match.params.id)
      .then((ambilData)=>{
        console.log(ambilData.data);
        this.setState({
          jaringnelayan: ambilData.data,
        })
      })
    }
    
    render() {
        const data = this.state.jaringnelayan.map((item, index)=>{
            var nama     = [item.nama]
            var detail   = [item.detail]
            var harga    = [item.harga]
            //var kategori = [item.kategori]
            var gambar   = [item.gambar]
            var alamat   = [item.alamat]
            var kota     = [item.city]
            return <div className="row3">
                    <div className="col-lg-4 card">
                      <img className="card-img-top" src={gambar} style={{borderRadius:20}} alt="ok"/>
                        <div className="card-body">
                          <h6 className="card-title"><b>{nama}</b></h6>
                          <p1 className="card-text">{detail}</p1>
                        <div className="card-footer">
                          <small className="text-muted">
                            <i className="fas fa-map-marker-alt" style={{color:"white"}}></i><p1 style={{paddingRight:20,color:"white"}}>  {alamat}, {kota}.</p1>
                            <i className="far fa-money-bill-alt" style={{color:"white"}}></i><p1 style={{color:"white"}}>  Rp {harga}/Kg</p1>
                          </small>
                        </div>
                        </div>
                    </div>
                   </div>
          }
        )
        return (
          <section id="cari">
            <div className="Hasil">
            <h1>Hasil Pencarian</h1><br/>
            <center>
              {data}
            </center>
            <Link to ="/Front" className="up">
              <i className="fas fa-chevron-circle-left" style={{fontSize:30,paddingBottom:0,paddingTop:0,paddingLeft:"95%"}} 
                data-toggle="tooltip" data-placement="down" title="Back">
              </i>
            </Link>
            </div>
          </section>
        );
    }
}
export default Hasil ;