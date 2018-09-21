import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from 'actions/app';
import CircleSvg from 'svg/circle.svg';
import SquareSvg from 'svg/square.svg';
import TriangleSvg from 'svg/triangle.svg';
import bookImg from 'img/book2.jpg';
import ourImpactBg from 'img/index/foto-nuestro-impacto.jpg';
import infografia from 'img/index/infografia.png';
import awardAndHonours from 'img/index/foto-premios-reconocimientos.jpg';
import linked from 'img/index/foto-vinculate.jpg';


@connect(state => ({
  counter: state.app.get('counter'),
}))
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  }

  render() {
    const {
      counter,
    } = this.props;

    return (
      <div className='home'>
        <div className='noty-a-miss'>
          <div className='row reverse'>
            <div className='col-xs-12 col-sm-4'>
              <p className='text-uppercase family-ash'>noticias</p>
            </div>
            <div className='row middle-xs col-xs-12 col-sm-8'>
              <div className="col-xs-12 row center-xs">
                  <div className="col-xs-9 row end-xs">
                    <p className='sample-text text-right'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  </div>
              </div>            
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-4'>
                  <div className="col-xs-12 row end-xs">
              <p className='text-uppercase family-ash'>mision</p>
            </div>
            </div>
            <div className='row middle-xs col-xs-12 col-sm-8'>
              <div className="col-xs-12 row center-xs">
                  <div className="col-xs-9 row start">
                    <p className='sample-text text-left'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
              </div>            
            </div>
          </div>
        </div>
        <div className='our-impact row'>
          <div className='col-sm-12 centered'>
            <p className='text-uppercase family-ash middel-tittle'>nuestro impacto
            </p>
            <div className="col-xs-8 infografia">
            <img src={ infografia } alt='' className='ImgExample ' />
              <div className="col-xs-12 text-box">
                <p className='sample-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
            <img src={ ourImpactBg } alt='' className='ImgExample' />
          </div>
        </div>
         <div className='award-a-honours row'>
          <div className='col-sm-12 centered'>
            <p className='text-uppercase family-ash middel-tittle'>premios y reconocimientos
            </p>
            <div className="col-xs-8 infografia box-down">
              <div className="col-xs-12 text-box">
                <p className='sample-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
            <img src={ awardAndHonours } alt='' className='ImgExample' />
          </div>
        </div>
        <div className='noty-a-miss'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
                  <div className="col-xs-12 row end-xs">
              <p className='text-uppercase family-ash'>conectados<br/> con el mundo</p>
            </div>
            </div>
            <div className='row middle-xs col-xs-12 col-sm-6'>
              <div className="col-xs-12 row center-xs">
                  <div className="col-xs-12 row start">
                    <p className='sample-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                  </div>
              </div>            
            </div>
          </div>
        </div>
        <div className='our-impact row'>
          <div className='col-sm-12 centered'>
            <p className='text-uppercase family-ash middel-tittle'>vinculate
            </p>
            <div className="col-xs-8 infografia box-down">
              <div className="col-xs-12 text-box">
                <p className='sample-text text-justify text-left'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
            <img src={ linked } alt='' className='ImgExample' />
          </div>
        </div>

      </div>
    );
  }
}
