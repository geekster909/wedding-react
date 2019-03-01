import React, { Component } from 'react';

const nsBase = 'component'
const ns = `hero-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class Hero extends Component {
  render() {
    return (
      <div className={rootClassnames}>
        <div className={`${ns}__wrapper`}>
          <div className={`${ns}__text`}>
            <div className={`${ns}__text--wrapper`}>
              <div className={`${ns}__name`}>
                <div className={`${ns}__name--text`}>
                  aileen<br />justin
                </div>
                <div className={`${ns}__name--image`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="280.167" height="245.35" viewBox="0 0 280.167 245.35"><path id="Path_16" data-name="Path 16" d="M185.667-211.524q-17.168,13.91-50.355,20.908l-6.184,2.115a47.065,47.065,0,0,1,23.023,21.232q8.055,14.726,8.053,33.924a66.753,66.753,0,0,1-14.4,41.893q-14.4,18.634-40.515,29.2T45.338-51.671q-36.61,0-64.429-10.087T-62.127-90.636q-15.212-18.793-15.211-44.011,0-22.615,11.958-38.073t27.17-23.51A131.332,131.332,0,0,1-9.654-207.7Q-47.4-222.664-47.4-249.675a32.929,32.929,0,0,1,9.354-23.51q9.354-9.847,24.57-14.807a104.034,104.034,0,0,1,32.457-4.966,99.866,99.866,0,0,1,20.338,1.711,50.587,50.587,0,0,1,14.317,5.287q20.336,10.092,20.338,27.009a19.405,19.405,0,0,1-3.5,11.469,23.3,23.3,0,0,1-9.439,7.731,29.885,29.885,0,0,1-12.77,2.766q-10.578,0-17.409-5.29t-6.834-15.372a22.433,22.433,0,0,1,5.94-15.216,25.6,25.6,0,0,1,15.374-8.379q-2.931-2.6-8.949-4.31a48.2,48.2,0,0,0-13.179-1.711A45.35,45.35,0,0,0,2.061-282.38a35.885,35.885,0,0,0-14.97,14.724q-5.532,9.848-5.531,24A49.988,49.988,0,0,0-5.424-209.652q12.2-2.6,18.71-2.6,5.855,0,9.113,2.444a7.731,7.731,0,0,1,3.253,6.508,5.969,5.969,0,0,1-2.685,5.041,11.187,11.187,0,0,1-6.752,1.952A22.981,22.981,0,0,1,7.1-198.345a64.617,64.617,0,0,1-8.053-4.069q-3.336-2.033-4.149-2.522-16.923,8.627-26.112,21.4t-9.193,32.457q0,32.217,25.788,48.484T56.89-86.326a144.632,144.632,0,0,0,44.254-6.752q21.149-6.753,34.328-19.931t13.179-31.4q0-30.261-25.381-42.464-9.6,2.927-22.209,6.425t-17.816,5.124a233.636,233.636,0,0,0-30.181,8.379q-11.632,4.315-17.733,10.09a18.457,18.457,0,0,0-6.1,13.91,20.85,20.85,0,0,0,5.287,14.073,34.591,34.591,0,0,0,13.669,9.437A46,46,0,0,0,65.349-116.1a34.165,34.165,0,0,0,7.646-.974q4.23-.976,5.533-2.276-8.137-2.768-12.365-8.459a22,22,0,0,1-4.23-13.506q0-10.252,7.482-16.108t19.2-5.857q11.877,0,18.793,6.181t6.912,16.434q0,14.971-13.34,22.613t-34,7.648a64.037,64.037,0,0,1-25.055-4.717,40.26,40.26,0,0,1-17.9-14.32q-6.671-9.6-6.671-23.59,0-24.9,19.037-39.537t55.482-21.8q6.181-1.625,22.289-5.533t27.5-7.812q25.705-6.345,37.99-13.827t12.282-19.037a24.794,24.794,0,0,0-5.451-15.618,36.553,36.553,0,0,0-14.154-10.9,43.832,43.832,0,0,0-18.142-3.9q-6.345,0-9.6,1.625a25.933,25.933,0,0,1,11.958,8.786,20.321,20.321,0,0,1,4.31,12.2q0,9.929-7.482,15.7t-19.2,5.777q-11.554,0-18.71-5.94T108.3-269.035q0-13.016,11.308-20.5t30.342-7.482q15.621,0,27.579,5.614a42.946,42.946,0,0,1,18.627,16.266q6.671,10.66,6.671,25.14Q202.83-225.431,185.667-211.524Z" transform="translate(77.338 297.021)" fill="#dee0dc"/></svg>
                </div>
              </div>
              <div className={`${ns}__name--button`}>
                <button className="btn--primary-white">RSVP</button>
              </div>
            </div>
          </div>

          <div className={`${ns}__image`}>
            <img src="http://dummyimage.com/913x1080/4d494d/686a82.gif&text=913x1080" alt="Aileen & Justin" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
