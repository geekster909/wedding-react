import React, { Component } from 'react'

import Hero from './Hero'
import Text3Up from './Text3Up'
import ImageText from './ImageText'
import TextBlock from './TextBlock'
import Rsvp from './Rsvp'

class App extends Component {
  state = {
    rsvp: true
  }
  render() {
    return (
      <div className="App home-page">
        <Hero rsvp={this.state.rsvp}/>
        <Text3Up 
          id='www'
          animateIn='true'
          items={[
            {
              eyebrow: 'WHAT',
              text: 'Aileen & Justin’s\nwedding celebration'
            },
            {
              eyebrow: 'WHERE',
              text: 'VENUE by\n Three Petals in Irvine, CA'
            },
            {
              eyebrow: 'WHEN',
              text: 'November 3rd, 2019\n4pm - 10pm'
            }
          ]}
        />
        <ImageText 
          theme='us-beach'
          animateIn='true'
          image={{
            imageSrc: '/assets/images/aj_wedding_image_1.jpg',
            imageAlt: 'us1'
          }}
          content='“Love is a promise; love is a souvenir, once given never forgotten, never let it disappear.”'
        />
        <ImageText
          theme='us-la'
          animateIn='true'
          reverse='true'
          image={{
            imageSrc: '/assets/images/aj_wedding_image_2.jpg',
            imageAlt: 'us2'
          }}
          title='I love you'
          content='Life is all about living through the good times and and the bad times. We go through each journey, one step at a time. Life shouldn’t be taken too seriously but instead, live in the moment.'
          floatingText='Nov 03'
        />
        {
          this.state.rsvp &&
          <Rsvp />
        }
        <TextBlock 
          id='stayTuned'
          animateIn='true'
          content='Stay tuned for more details.' 
          trailingLine='true'
        />
        <div style={{height: '10px',backgroundColor: '#5D6750'}}></div>
      </div>
    )
  }
}

export default App
