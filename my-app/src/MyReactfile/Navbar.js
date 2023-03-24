import React from 'react'
import propsTypes from 'prop-types';

export default function Navbar(props) {
  // const click=()=>{
  //   alert("this is me")
  //   // props.showalert("my name is rajan ","Success");
  // }

  return (
   <>
   <nav className={`navbar navbar-expand-lg  bg-${props.mode} `}> 
  <div className="container-fluid  ">
    <a className={`navbar-brand text-${props.textmode}`} href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
        <a className={`nav-link active  text-${props.textmode}`}  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  text-${props.textmode}`}  href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className={`nav-link dropdown-toggle text-${props.textmode}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className={`dropdown-menu  bg-${props.mode} text-${props.textmode}`}>
            <li><a className={`dropdown-item  text-${props.textmode} `} href="#">{props.Action}</a></li>
            <li><a className={`dropdown-item  text-${props.textmode}`} href="#">Another action</a></li>
            <li><hr className= {`dropdown-divider`}/></li>
            <li><a className={`dropdown-item  text-${props.textmode}`} href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className={`nav-link disabled  text-${props.textmode}`} >Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">

         <div class="form-check form-switch mx-2 ">
          <input class="form-check-input my-1" type="checkbox" role="switch" onClick={props.togglemode} />
          <label class="form-check-label " for="flexSwitchCheckDefault">{props.btnmode}</label>
        </div> 

        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" id="btn1" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav> 
   </>
  )
}

Navbar.propsTypes={
    title: propsTypes.string.isRequired,
    Action: propsTypes.string
}
