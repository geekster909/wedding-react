import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import { AmpersandSVG } from '../svgIcons'
import { CameraSVG } from '../svgIcons'

const nsBase = 'component'
const ns = `hero-home-${nsBase}`
const rootClassnames = `${nsBase} ${ns}`

class HeroHome extends Component {
  state = {
    heroImageAnimate: false,
    heroTextAnimate: false,
    heroImageTextAnimate: false,
  }

  componentDidMount() {
    const self = this
    setTimeout(function() {
      self.setState({
        heroImageAnimate: true
      })
    }, 500)
  }

  componentDidUpdate() {
    const self = this

    if (this.state.heroImageAnimate && !this.state.heroTextAnimate) {
      setTimeout(function() {
        self.setState({
          heroTextAnimate: true
        })
      }, 500)
    }

    if (this.state.heroTextAnimate && !this.state.heroImageTextAnimate) {
      setTimeout(function() {
        self.setState({
          heroImageTextAnimate: true
        })
      }, 500)
    }
  }

  scrollTo(anchor, offset) {
    if (document.getElementById(anchor) != null) {
      const anchorPosition = document.getElementById(anchor).getBoundingClientRect()
      scroll.scrollTo((anchorPosition.top + window.scrollY) - (offset ? offset : 0))
    }
  }

  render() {
    return (
      <div className={rootClassnames}>
        <div className={`${ns}__wrapper`}>
          <div className={`${ns}__text`} data-hero-animate={this.state.heroTextAnimate}>
            <div className={`${ns}__text--wrapper`}>
              <div className={`${ns}__name`}>
                <div className={`${ns}__name--text`}>
                  aileen<br />justin
                </div>
                <div className={`${ns}__name--image`}>
                  <AmpersandSVG />
                </div>
              </div>
              {
                this.props.rsvp &&
                <div className={`${ns}__name--button`} onClick={()=>this.scrollTo('rsvp', 75)}>
                  <button className="btn--primary-white">RSVP</button>
                </div>
              }
            </div>
          </div>

          <div className={`${ns}__image`} data-hero-animate={this.state.heroImageAnimate}>
            <img src="/assets/images/aj_wedding_image_hero.jpg" alt="Aileen & Justin" />
            <div className={`${ns}__image--text`} data-hero-animate={this.state.heroImageTextAnimate}>
              <div className={`${ns}__photo-cred`}>
                <a href="http://Klifproductions.com/" target="_blank" rel="noopener noreferrer">
                  <CameraSVG /> KEILI FERNANDO
                </a>
              </div>
              <div className={`${ns}__date`}>
                NOVEMBER 3RD, 2019
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroHome
