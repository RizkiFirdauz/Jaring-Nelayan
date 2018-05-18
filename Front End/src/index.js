import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
import App       from './App';
import Database   from './component/Database';
import About     from './component/About';
import Contact   from './component/Contact';
import Hasil     from './component/Hasil';
import Eror      from './component/Eror';
import Front     from './component/Front';
import Bandengg  from './component/Bandeng';
import Barakudaa from './component/Barakuda';
import Baronangg from './component/Baronang';
import Cakalangg from './component/Cakalang';
import Kakapp    from './component/Kakap';
import Lobsterr  from './component/Lobster';
import Parii     from './component/Pari';

ReactDOM.render(<BrowserRouter>
<div>
    <Route exact path="/"        component={App}/>
    <Route path="/Database/daus"  component={Database}/>
    {/* <Route path="/Front"         component={Front}/> */}
    <Route path="/Front/:id"     component={Front}/>
    <Route path="/About/daus"         component={About}/>
    <Route path="/Contact/daus"       component={Contact}/>
    <Route path="/Pencarian/:id" component={Hasil}/>
    <Route path="/Eror"          component={Eror}/>
    <Route path="/Bandeng"       component={Bandengg}/>
    <Route path="/Barakuda"      component={Barakudaa}/>
    <Route path="/Baronang"      component={Baronangg}/>
    <Route path="/Cakalang"      component={Cakalangg}/>
    <Route path="/Kakap"         component={Kakapp}/>
    <Route path="/Lobster"       component={Lobsterr}/>
    <Route path="/Pari"          component={Parii}/>
</div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
