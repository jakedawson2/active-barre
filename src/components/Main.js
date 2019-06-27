import React from 'react'
import PropTypes from 'prop-types'

import Pics from './Gallery.js'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'


import Gallery from './Gallery'

class Main extends React.Component {
  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image maincircle"><img src={pic01} alt="" /></span>
          <p>Hi, my name is Wendie Dawson.</p>
          <p>It has been a dream of mine for a very long time to open a beautiful Barre/Fitness studio in the Manning, and I'm so excited that it is finally here!</p>
          <p>I studied ballet and gymnastics, became a qualified and registered (Fitness Australia) Fitness Professional in my early 20's.</p>
          <p>I love working in the fitness industry and have always had a passion to see people improve their health and total wellbeing through excercise.</p>
          <p>I have been teaching Barre Attack now for 3 years and find the combination of Barre, Pilates and fitness is fantastic for getting results!</p>
          <p>People leave happy and energised and feel improvements in strength, posture and flexibility within the first couple of lessons.</p>
          <p>Come and try a class, its addictive</p>
          <h4>See you at the Barre</h4>
          <h4>Wendie Dawson</h4>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Classes</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
        <p>At Active Barre studio we offer the following classes:</p>
        <h3>Activate - 45 mins - Suitable for all fitness levels</h3>
        <p>Is a great intro to the combination of barre and pilates mat work. With a flowing and fun format, it is great for strengthening the whole body, improving posture, balance and flexability.</p>
        <h3>Barre attack - 45 mins - Suitable for all fitness levels</h3>
        <p>Is an energising and fast paced total body workout that fuses pilates and ballet barre exercises with short cardio intervals.</p>
        <p>This class is excellent for overall fitness, torching calories and increasing energy levels.</p>
        <h3>Power Barre - 30 mins - Suitable for all fitness levels</h3>
        <p>Quick hit of activity to get you through the rest of your workday and leave you feeling amazing, refreshed ready to tackle any challenges ahead.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Timetable</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <h2>Monday</h2>
          <p>9:15 - 10:00 AM | Activate</p>
          <p>10:30 - 1:00 pm | (30 min private tuition $15 SPECIAL MUST BOOK)</p>
          <h2>Tuesday</h2>
          <p>4:45 - 5:30 PM | Barre Attack</p>
          <p>5:45 - 6:30 PM | Barre Attack</p>
          <h2>Wednesday</h2>
          <p>9:15 - 10:00 AM | Activate</p>
          <h2>Thursday</h2>
          <p>4:45 - 5:30 PM | Barre Attack</p>
          <h2>Friday</h2>
          <p>More Classes coming soon</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'studio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Studio</h2>
          {/* <span className="image main"><img src={gallery1} alt="" /></span>
          <span className="image main"><img src={gallery2} alt="" /></span>
          <span className="image main"><img src={gallery3} alt="" /></span> */}
          <Pics />
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Not A Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main