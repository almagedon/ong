import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';
import navimg from 'img/index/foto-encabezado.jpg';
import logo from 'img/index/logo-gip.png';

export default class Menu extends Component {
  render() {
    return (
      <div className='appBar col-sm-12'>
      <div className='logo infografia'>
         <img src={ logo } alt='' className='ImgExample' />
      </div>
      <div className='col-xs-4 bar-dialogo infografia'>
         <div className="col-xs-12 text-box ">
                <p className='sample-text text-justify '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              </div>
      </div>

        <img src={ navimg } alt='' className='ImgExample' />
        <nav className="navbar navbar-expand-sm navbar-dark bg-nav">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  centered" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-text">
              <a className="nav-item nav-link active" href="#">INICIO<span className="sr-only">(current)</span></a>
              <NavLink className='nav-item nav-link active' to={ routeCodes.ABOUT }>SOBRE NOSOTROS</NavLink>
              <a className="nav-item nav-link active" href="#">NUESTRO TRABAJO</a>
              <a className="nav-item nav-link active" href="#">VINCÚLATE</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
