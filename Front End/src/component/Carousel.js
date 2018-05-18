import React, { Component } from 'react';
import './../style/Carousel.css';
import c1 from './../image/c1.jpg';
import c2 from './../image/c2.jpg';
// import c3 from './../image/c3.jpg';
import c4 from './../image/c4.jpg';
// import c5 from './../image/c5.jpg';


class Carousel extends Component {
    render() {
      return (
        <div className="Carousel">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                   <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      {/* <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> */}
                    </ol>
                      <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                              <img className="d-block w-100 h-100" src={c1} alt="First slide" />
                                {/* <div className="carousel-caption">
                                    <p3>
                                        Disini aku berdiri tegak Tiada maksud untuk bergalak
                                        Aku hanya ikut bersemarak Riuh tawa nelayan kelak
                                    </p3>
                                </div> */}
                          </div>
                          <div className="carousel-item">
                              <img className="d-block w-100 h-100" src={c2} alt="Second slide"/>
                                {/* <div className="carousel-caption" style={{marginBottom:50}}>
                                    <p3>
                                        Rakit berayun sopan Di iringi perahu papan
                                        Dengan nahkoda yang sigap Membelah lembah menuju harapan
                                    </p3>
                                </div> */}
                          </div>
                          {/* <div className="carousel-item">
                              <img className="d-block w-100 h-100" src={c3} alt="Third slide"/>
                                <div className="carousel-caption" style={{paddingTop:60}}>
                                    <p3>
                                        Hujan dan panas menjadi teman setia Gelombang dan angin menjadi hiburan
                                        Demi harapan yang setumpuk Mendapatkan ikan dan udang Demi anak istri yang menanti
                                    </p3>
                                </div>
                          </div> */}
                          <div className="carousel-item">
                              <img className="d-block w-100 h-100" src={c4} alt="Fourth slide"/>
                                {/* <div className="carousel-caption" style={{marginBottom:100}}>
                                    <p3>
                                        Ikan Cumi-cumi kepiting dan udang Selalu ikut turut mengundang
                                        Di santap saat bersuka dan berdendang Itulah hasil lautku yang segudang
                                    </p3>
                                </div> */}
                          </div>
                          {/* <div className="carousel-item">
                              <img className="d-block w-100 h-100" src={c5} alt="Fifth slide"/>
                              <div className="carousel-caption" style={{marginBottom:70}}>
                                <p3>
                                    Engkau bertarung bersama tentara kecil dan besar
                                    Basah kuyup tertepa laut asin Menyatu dengan peluh dan rintih
                                </p3>
                              </div>
                          </div> */}
                      </div>
                      {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                      </a> */}
              </div>
        </div>
      );
    }
  }
  
  export default Carousel;

// class Carousel extends Component {
//     render() {
//         return (
//             <div className="carousel slide" id="iniCarousel" data-ride="carousel">
//                 <ol className="carousel-indicators">
//                     <li data-target="#iniCarousel" data-slide-to="0" class="active"></li>&nbsp;
//                     <li data-target="#iniCarousel" data-slide-to="1"> </li>&nbsp;
//                     <li data-target="#iniCarousel" data-slide-to="2"> </li>
//                 </ol>
//                 <div className="carousel-inner">
//                     <div className="item active">
//                         <img src={c4} alt="x" className="img-responsive center-block" style={{height:"200px",width:"600px"}}/>
//                         {/* <div className="carousel-caption" style={{height:"auto"}}>
//                         </div> */}
//                     </div>
//                     <div className="item">
//                         <img src={c5} alt="x" className="img-responsive center-block"style={{height:"200px",width:"600px"}}/>
//                         {/* <div className="carousel-caption" style={{height:"auto"}}>
//                         </div> */}
//                     </div>
//                     <div className="item">
//                         <img src={c6} alt="x" className="img-responsive center-block"style={{height:"200px",width:"600px"}}/>
//                         {/* <div className="carousel-caption" style={{height:"auto"}}>
//                         </div> */}
//                     </div>
//                 </div>
//                 <a className="right carousel-control" href="#iniCarousel" data-slide="next" style={{paddingTop:130}}>
//                     <span className="glyphicon glyphicon-menu-right"></span>
//                 </a>
//                 <a className="left carousel-control" href="#iniCarousel" data-slide="prev"  style={{paddingTop:130}}>
//                     <span className="glyphicon glyphicon-menu-left"></span>
//                 </a>
//             </div>
//         );
//     };
// }
// export default Carousel ;