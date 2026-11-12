import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../images/logo.png'
import { INTRO_OFFER } from '../config'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span>
        <img src={logo} alt="Active Barre Studio" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Active Barre Studio</h1>
        <h4>BARRE | PILATES | REFORMER</h4>
        <h3>Suite 1 216 Victoria Street Taree NSW</h3>
        <p>
          Taree's first boutique studio offering a fusion of Barre, Pilates and
          Reformer.
        </p>
      </div>
    </div>
    <div className="offer">
      <p className="offer-kicker">New to Active Barre?</p>
      <p className="offer-headline">
        {INTRO_OFFER.classes} classes for {INTRO_OFFER.price}
      </p>
      <p className="offer-detail">Barre, Pilates and Reformer</p>
      <ul className="actions offer-actions">
        <li>
          <Link to="/intro" className="button special">
            Claim intro offer
          </Link>
        </li>
        <li>
          <a
            href="#timetable"
            className="button"
            onClick={e => {
              e.preventDefault()
              props.onOpenArticle('about')
            }}
          >
            Book a class
          </a>
        </li>
      </ul>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('studio')
            }}
          >
            Studio
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Classes
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Timetable
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
