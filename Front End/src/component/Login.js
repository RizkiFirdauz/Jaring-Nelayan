import React, { Component } from 'react';
import './../style/Login.css';
import { providergoogle, providerfacebook, auth } from '../fire';
import Zoom     from 'react-reveal/Zoom';
import Rotate   from 'react-reveal/Rotate';
import {Link}   from 'react-router-dom';
import avatar   from './../image/avatar2.png';
import axios    from 'axios';
import swal     from 'sweetalert';

class Login extends Component {
  constructor(props){
    super(props);
    this.state= {user:null, username:'', email:'', password:'', message:'', name:'',pass:''}
  }

  async logingoogle() {
    const result = await auth().signInWithPopup(providergoogle);
    this.setState({user: result.user});
  }
  async loginfacebook() {
    const result = await auth().signInWithPopup(providerfacebook);
    this.setState({user: result.user});
  }
  async logout(){
    await auth().signOut()
    this.setState({user: null})
  }

  input(){
    this.setState({
      username  : this.refs.username.value,
      email     : this.refs.email.value,
      password  : this.refs.password.value
    });
  }

  input2(){
    this.setState({
      name  : this.refs.name.value,
      pass  : this.refs.pass.value
    });
  }

  save(){
    var a = this.state.username;
    var b = this.state.email;
    var c = this.state.password;
    axios.post('https://agile-retreat-35889.herokuapp.com/register',{
      username  : a,
      email     : b,
      password  : c
    }).then((result)=>{
      console.log(result);
      window.location.reload()
    })
    swal({
      title: "Done",
      text: "Your data has been SAVED!",
      icon: "success",
      button: "Close",
    })
  }

  find(){
    const{ name }=this.state
    axios.post('https://agile-retreat-35889.herokuapp.com/login/masuk',
      { name },
      {headers:{'Access-Control-Allow-Origin': '*'}})
    .then((result)=>{
      console.log(result);
    })
  }

  render() {
    const {message}=this.state;
    return (
      <div className="Login">
        <center>
        <div className="row" style={{paddingLeft:200,paddingTop:40}}>
          <div className="box"><br/>
            <p style={{color:"white",fontSize:30,fontFamily:"Kaushan Script"}}><b>WELCOME</b></p>
            <Rotate>
            <img src={avatar} className="avatar" alt="Avatar" />
            </Rotate>
              <p style={{color:"white",paddingTop:10,fontFamily:"Dosis",fontWeight:"bold"}}>
                {this.state.user ? `Hello,
                ${this.state.user.displayName}.` : 'Please Login !'}
              </p>
              <form onSubmit={this.onSubmit}>
                <input className="Input" style={{fontSize:15,width:200,marginBottom:10,fontFamily:"Dosis"}} ref="name" type="text" placeholder="Username" 
                  onInput={()=>{this.input2();}} required /><br/>
                <input className="Input" style={{fontSize:15,width:200,marginBottom:10,fontFamily:"Dosis"}} ref="pass" type="password" placeholder="Password" 
                  onInput={()=>{this.input2();}} required /><br/>
                <Link to={`/Front/${this.state.name}`}>
                  <div className="btn btn-danger" onClick={()=>{this.find();}} type="submit" style={{width:100,textAlign:"center",fontFamily:"Dosis"}}>
                    <b>Login</b>
                  </div>
                </Link>
              </form>
              <p style={{color:"white",fontSize:16,fontFamily:"Dosis",paddingTop:10}}>- or Login with -</p>
            <div className="row2" style={{fontFamily:"Dosis"}}>
              <Link to="/Front">
              <div class="btn-group" role="group" aria-label="Basic example">
              <button className="btn-danger" style={{width:40}} onClick={this.logingoogle.bind(this)}>
                <i className="fab fa-google"></i> 
              </button>
              <button className="btn-secondary" style={{width:70,textAlign:"left"}} onClick={this.logingoogle.bind(this)}>
                <b>Google</b>
              </button>&nbsp;&nbsp;&nbsp;
              </div>
              <div class="btn-group" role="group" aria-label="Basic example">
              <button className="btn-primary" style={{width:40}} onClick={this.loginfacebook.bind(this)}>
                <i className="fab fa-facebook"></i>
              </button>
              <button className="btn-secondary" style={{width:70,textAlign:"left"}} onClick={this.loginfacebook.bind(this)}>
                <b>Facebook</b>
              </button>
              </div>
              </Link>
            </div>
              {/* <Zoom> */}
              {/* <button onClick={this.logout.bind(this)}>
              <i className="fas fa-sign-out-alt"></i> Logout
              </button> */}
            {/* </Zoom> */}
          </div>
          <div className="box2">
            <p style={{color:"white",fontSize:30,fontFamily:"Kaushan Script"}}><b>REGISTER</b></p>
              <form>
                <input className="Input" style={{fontSize:15,width:200,marginBottom:10,fontFamily:"Dosis"}} ref="username" type="text"     placeholder="Username" 
                  onInput={()=>{this.input();}} required /><br/>
                <input className="Input" style={{fontSize:15,width:200,marginBottom:10,fontFamily:"Dosis"}} ref="email"    type="email"    placeholder="Email" 
                  onInput={()=>{this.input();}} required /><br/>
                <input className="Input" style={{fontSize:15,width:200,marginBottom:10,fontFamily:"Dosis"}} ref="password" type="password" placeholder="Password" 
                  onInput={()=>{this.input();}} required /><br/>
                <div className="btn btn-danger" type="submit" onClick={()=>{this.save();}}
                  style={{width:100,textAlign:"center",fontFamily:"Dosis"}}>
                  <b>Register</b>
                </div>
              </form>
              {message !=='' &&
               <div className="alert alert-warning alert-dismissible" style={{color:"white",border:"none",background:"transparent",fontFamily:"Gaegu"}}>
               {message}
               </div>
            }
            <p style={{color:"white",paddingTop:10,fontFamily:"Gaegu"}}>
              "Knowledge is nothing, applying what you know is everything."
            </p>
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default Login;
