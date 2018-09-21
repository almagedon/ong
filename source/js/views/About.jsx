import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from 'actions/app';
import CircleSvg from 'svg/circle.svg';
import Angie from 'img/about/team/Angie.jpg';
import Beatriz from 'img/about/team/Beatriz.jpg';
import Diana from 'img/about/team/Diana 2.jpg';
import Diego from 'img/about/team/Diego.jpg';
import Eliana from 'img/about/team/Eliana.jpg';
import Elisa from 'img/about/team/Elisa.jpg';
import Jesus from 'img/about/team/Jesus.jpg';
import Juan from 'img/about/team/Juan Diego.jpg';
import Katerine from 'img/about/team/Katerine.jpg';
import Kristen from 'img/about/team/Kristen.jpg';
import Paola from 'img/about/team/Paola.jpg';
import Rocio from 'img/about/team/Rocio.jpg';
import Yecenia from 'img/about/team/Yecenia.jpg';
import blank from 'img/about/team/fondo foto.jpg';


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
          <div className='row center-xs'>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <p className='text-uppercase family-ash '>quienes somos</p>
            </div>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <div className="col-xs-12 row center-xs">
                    <p className='sample-text text-justify text-left '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>            
            </div>
          </div>
          <div className='row center-xs'>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <p className='text-uppercase family-ash concep-tittle'>mission</p>
            </div>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <div className="col-xs-12 row center-xs">
                    <p className='sample-text text-justify text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>            
            </div>
          </div>
          <div className='row center-xs'>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <p className='text-uppercase family-ash concep-tittle'>objetibos</p>
            </div>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <div className="col-xs-12 row center-xs">
                    <ul className='col-xs-12 sample-text text-justify text-left'>
                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</li>
                      <li> 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</li>
                      <li>t also the leap into electronic typesetting, remaining essentially unchanged.</li>
                    </ul>
              </div>            
            </div>
          </div>
          <div className='row center-xs'>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <p className='text-uppercase family-ash concep-tittle'>nuestro equipo</p>
            </div>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <div className='col-xs-12 row avatar-row center-xs'>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Angie} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Diana} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Diego} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Yecenia} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 row avatar-row center-xs'>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Eliana} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Elisa} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Jesus} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Juan} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 row avatar-row center-xs'>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Katerine} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
                <div className="col-xs-3 row center-xs">
                  <div className="col-xs-12 ">
                    <img src={Paola} alt="..." class="avatar-team rounded-circle"/>
                  </div>
                  <div className="col-xs-12 ">
                    <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row center-xs'>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <p className='text-uppercase family-ash concep-tittle'>organo directo</p>
            </div>
            <div className='col-xs-12 col-sm-11 row start-xs'>
              <div className="col-xs-12 row center-xs">
                <div className='col-xs-12 row avatar-row center-xs'>
                  <div className="col-xs-3 row center-xs">
                    <div className="col-xs-12 ">
                      <img src={Beatriz} alt="..." class="avatar-team rounded-circle"/>
                    </div>
                    <div className="col-xs-12 ">
                      <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    </div>
                  </div>
                  <div className="col-xs-3 row center-xs">
                    <div className="col-xs-12 ">
                      <img src={Kristen} alt="..." class="avatar-team rounded-circle"/>
                    </div>
                    <div className="col-xs-12 ">
                      <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    </div>
                  </div>
                  <div className="col-xs-3 row center-xs">
                    <div className="col-xs-12 ">
                      <img src={blank} alt="..." class="avatar-team rounded-circle"/>
                    </div>
                    <div className="col-xs-12 ">
                      <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    </div>
                  </div>
                  <div className="col-xs-3 row center-xs">
                    <div className="col-xs-12 ">
                      <img src={Rocio} alt="..." class="avatar-team rounded-circle"/>
                    </div>
                    <div className="col-xs-12 ">
                      <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    </div>
                  </div>
                </div>          
              </div>
              <div className="col-xs-12 row center-xs">
                <div className='col-xs-12 row avatar-row center-xs'>
                  <div className="col-xs-3 row center-xs">
                    <div className="col-xs-12 ">
                      <img src={blank} alt="..." class="avatar-team rounded-circle"/>
                    </div>
                    <div className="col-xs-12 ">
                      <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    </div>
                  </div>
                  <div className="col-xs-3 row center-xs">
                    <div className="col-xs-12 ">
                      <img src={blank} alt="..." class="avatar-team rounded-circle"/>
                    </div>
                    <div className="col-xs-12 ">
                      <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    </div>
                  </div>
                  <div className="col-xs-3 row center-xs">
                    <div className="col-xs-12 ">
                      <img src={blank} alt="..." class="avatar-team rounded-circle"/>
                    </div>
                    <div className="col-xs-12 ">
                      <p className='col-xs-12 avatar-text text-center font-weight-bold'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                      <p className='col-xs-12 avatar-text text-center'>Lorem Ipsum.</p>
                    </div>
                  </div>
                </div>          
              </div>            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
