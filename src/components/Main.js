import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image maincircle"><img src={pic01} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Classes</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>At Active Barre studio we offer the following classes:</p>
          <h4>Activate - 45 mins</h4>
          <p>Ullamco occaecat veniam amet minim dolore culpa veniam adipisicing sint velit reprehenderit qui ipsum consequat. Do esse dolor fugiat ipsum. Non nulla labore nulla sint nisi dolore cupidatat nostrud et. Consequat ut et non mollit quis aliquip sit elit sunt. Nostrud reprehenderit id laborum laboris mollit id consequat amet laboris laborum dolore deserunt id eiusmod.</p>
          <h4>Barre attack - 45 mins</h4>
          <p>Nulla do do id eu anim elit commodo. Voluptate ad et minim consequat do pariatur ad aliquip Lorem aliqua sit eu reprehenderit ullamco. Veniam ut minim id fugiat labore ex ad cupidatat pariatur.</p>
          <h4>Power Barre - 30 mins</h4>
          <p>Dolor excepteur amet mollit cupidatat voluptate pariatur consequat incididunt veniam. Sit ea ullamco aliqua officia tempor duis aliqua voluptate tempor. Do aute sint dolor est non adipisicing nisi. Dolore id ipsum anim esse ad esse cillum reprehenderit incididunt.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Time Table</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <h2>Monday</h2>
          <p>9:15 - 10:00 AM | Active</p>
          <p>1:00 - 1:30 PM | Power Barre (lunch break)</p>
          <h2>Tuesday</h2>
          <p>4:45 - 5:30 PM | Barre Attack</p>
          <p>6:00 - 6:45 PM | Barre Attack</p>
          <h2>Wednesday</h2>
          <p>9:15 - 10:00 AM | Active</p>
          <h2>Thursday</h2>
          <p>4:45 - 5:30 PM | Barre Attack</p>
          <p>6:00 - 6:45 PM | Barre Attack</p>
          <h2>Friday</h2>
          <p>More Classes coming soon</p>
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