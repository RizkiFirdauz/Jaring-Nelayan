import React, { Component } from 'react';
import './../style/Database.css';
import axios from 'axios';
import swal  from 'sweetalert';
import Zoom  from 'react-reveal';
import {Link} from 'react-router-dom';

class Database extends Component {
  constructor(){
    super();
    this.state={nama:'',detail:'',kategori:'',harga:'',gambar:'',tpi:'',alamat:'',kota:'',jaringnelayan:[]}
  }
  
  input(){
    this.setState({
      nama     : this.refs.nama.value,
      detail   : this.refs.detail.value,
      kategori : this.refs.kategori.value,
      harga    : this.refs.harga.value,
      gambar   : this.refs.gambar.value,
      tpi      : this.refs.tpi.value,
      alamat   : this.refs.alamat.value,
      kota     : this.refs.kota.value
    });
  }

  save(){
    var a = this.state.nama;
    var b = this.state.detail;
    var c = this.state.kategori;
    var d = this.state.harga;
    var e = this.state.gambar;
    var f = this.state.tpi;
    var g = this.state.alamat;
    var h = this.state.kota;
    axios.post('https://agile-retreat-35889.herokuapp.com/data',{
      nama      : a,
      detail    : b,
      kategori  : c,
      harga     : d,
      gambar    : e,
      tpi       : f,
      alamat    : g,
      kota      : h
    })
    swal({
      title: "Done",
      text: "Your data has been SAVED!",
      icon: "success",
      button: "Close",
    })
  }

  find(){
    axios.get('https://agile-retreat-35889.herokuapp.com/data')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        jaringnelayan: ambilData.data,
      })
    })
    swal({
      title: "Please wait!",
      button: "Close",
    })
  }

  delete(){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        var a = this.state.nama;
        axios.delete('https://agile-retreat-35889.herokuapp.com/data/'+a);
        console.log(a);
        swal("Poof! Your data has been DELETED!", {
          icon: "success",
        });
      } else {
        swal("Your data is safe!");
      }
    });
  }

  update(){
    var a = this.state.nama;
    var c = this.state.kategori;
    var d = this.state.harga;
    axios.put('https://agile-retreat-35889.herokuapp.com/data/'+a,{
      kategori  : c,
      harga     : d
    });
    console.log(a);
    swal({
      title: "Done",
      text: "Your data has been UPDATED!",
      icon: "success",
      button: "Close",
    })
  }
  
  render() {
    const data      = this.state.jaringnelayan.map((item, index)=>{
      var nama      = [item.nama]
      var detail    = [item.detail]
      var kategori  = [item.kategori]
      var harga     = [item.harga]
      var gambar    = [item.gambar]
      var tpi       = [item.tpi]
      var alamat    = [item.alamat]
      var kota      = [item.city]
      return <div className="row3" style={{padding:0,margin:0}}>
              <div className="col-lg-3 card">
                <img className="card-img-top" src={gambar} style={{borderRadius:10,width:250,height:200}} alt="ok"/>
                  <div className="card-body" style={{textAlign:"center"}}>
                    <h6 className="card-title"><b>"{nama}"</b></h6>
                    <p1 className="card-text" ><b>KATEGORI</b><br/>{kategori}</p1><br/>
                    <p1 className="card-text" ><b>TPI     </b><br/>{tpi}</p1><br/>
                    <p1 className="card-text" ><b><u>KETERANGAN</u></b><br/>{detail}</p1><br/>
                    <i className="fas fa-map-marker-alt" style={{color:"white"}}></i><p1 style={{paddingRight:20,color:"white"}}>  {alamat}, {kota}.</p1><br/>
                    <i className="far fa-money-bill-alt" style={{color:"white"}}></i><p1 style={{color:"white"}}>  Rp {harga}/Kg</p1>
                  </div>
              </div>
             </div>
    })
    return (
      <div className="Database">
        <center>
          <Zoom top cascade>
          <h1 style={{paddingTop:40}}>DATABASE JARING NELAYAN</h1>
          </Zoom>
            <div className="form">
            <Zoom bottom cascade>
              <form>
                <input className="form-control" ref="nama"     type="text"   placeholder="Nama"                   onInput={()=>{this.input();}} required />
                <input className="form-control" ref="detail"   type="text"   placeholder="Detail"                 onInput={()=>{this.input();}} required />
                <input className="form-control" ref="kategori" type="text"   placeholder="Termasuk Kategori"      onInput={()=>{this.input();}} required />
                <input className="form-control" ref="harga"    type="number" placeholder="Harga"                  onInput={()=>{this.input();}} required />
                <input className="form-control" ref="gambar"   type="text"   placeholder="Link Gambar"            onInput={()=>{this.input();}} required />
                <input className="form-control" ref="tpi"      type="text"   placeholder="Nama Tempat Pelelangan" onInput={()=>{this.input();}} required />
                <input className="form-control" ref="alamat"   type="text"   placeholder="Alamat"                 onInput={()=>{this.input();}} required />
                <input className="form-control" ref="kota"     type="text"   placeholder="Wilayah"                onInput={()=>{this.input();}} required/><br/>
              </form>
              </Zoom>
              <button type="submit" className="btn btn-info" onClick={()=>{this.save();}}> ADD-SAVE</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn btn-info" onClick={()=>{this.find();}}>  CHECK   </button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn btn-info" onClick={()=>{this.delete();}}>DELETE  </button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn btn-info" onClick={()=>{this.update();}}>UPDATE  </button>
            </div>
            <br/>
            {data}    
        </center>
        <Link to ="/Front/daus" className="up">
              <i className="fas fa-chevron-circle-left" style={{textAlign:"right",fontSize:30,paddingBottom:7,paddingTop:10,paddingLeft:"95%"}} 
                data-toggle="tooltip" data-placement="down" title="Back">
              </i>
            </Link>
      </div>
    );
  }
}

export default Database;

