import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';
import iconInsta from 'img/index/icon-insta.png';
import iconFace from 'img/index/icon-face.png';
import iconTwt from 'img/index/icon-twt.png';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer col-sm-12'>
      <div className='row'>
        <div className="col-sm-6">
        <div className="col-sm-8">
          <div className="row center-xs">
            <div className="social-box text-light">
              <p>encuentranos aqui:</p>
            </div>
          </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row center-xs">
            <div className="social-box text-light">
              <p>encuentranos aqui:</p>
              <img src={ iconTwt } alt='' className='icon-social' />
              <img src={ iconFace } alt='' className='icon-social' />
              <img src={ iconInsta } alt='' className='icon-social' />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
