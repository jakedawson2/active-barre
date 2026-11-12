import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { INTRO_OFFER, INTRO_OFFER_URL } from '../config'
import logo from '../images/logo.png'
import hero from '../images/studio_gallery/activebarre-studio.jpg'
import barre from '../images/studio_gallery/activebarre-ball-work.jpg'
import mat from '../images/studio_gallery/activebarre-floor-stretch.jpg'

const title = `Intro offer: ${INTRO_OFFER.classes} classes for ${INTRO_OFFER.price} | Active Barre Studio, Taree`
const description = `New to Active Barre? Try ${INTRO_OFFER.classes} classes for ${INTRO_OFFER.price}: barre, mat Pilates and reformer at our boutique studio on Victoria Street, Taree.`

const ClaimButton = () => (
  <a href={INTRO_OFFER_URL} className="button special">
    Claim intro offer
  </a>
)

const IntroPage = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
      ]}
    />
    <div id="intro-page">
      <Link to="/" className="intro-logo">
        <img src={logo} alt="Active Barre Studio" />
      </Link>

      <section className="intro-hero">
        <p className="offer-kicker">New to Active Barre?</p>
        <h1>
          {INTRO_OFFER.classes} classes for {INTRO_OFFER.price}
        </h1>
        <p className="intro-lead">
          Barre, Pilates and Reformer at Taree's boutique studio.
        </p>
        <ClaimButton />
        <span className="image main">
          <img src={hero} alt="Inside the Active Barre studio" />
        </span>
      </section>

      <section>
        <h2 className="major">What you get</h2>
        <ul className="intro-list">
          <li>
            {INTRO_OFFER.classes} classes for {INTRO_OFFER.price}: mix and
            match barre, mat Pilates and reformer
          </li>
          <li>Valid {INTRO_OFFER.valid}</li>
          <li>For first-time clients</li>
          <li>Small classes: up to 10 on the mat, 5 on the reformer</li>
        </ul>
      </section>

      <section className="intro-classes">
        <div>
          <span className="image fit">
            <img src={barre} alt="A barre class at Active Barre" />
          </span>
          <h3>Barre</h3>
          <p>
            A flowing, fun mix of ballet-style barre work and Pilates. Builds
            strength, posture, balance and flexibility. All fitness levels.
          </p>
        </div>
        <div>
          <span className="image fit">
            <img src={mat} alt="A mat Pilates class at Active Barre" />
          </span>
          <h3>Mat Pilates and Reformer</h3>
          <p>
            Small-group classes focused on core strength, alignment and muscle
            tone. 45 minutes each.
          </p>
        </div>
      </section>

      <section>
        <h2 className="major">Your first class</h2>
        <ul className="intro-list">
          <li>Classes are 45 minutes.</li>
          <li>Bring grip socks and a water bottle.</li>
          <li>
            Tell your instructor about any injuries or pregnancy before class.
          </li>
          <li>Find us at Suite 1, 216 Victoria Street, Taree.</li>
        </ul>
      </section>

      <section className="intro-cta">
        <ClaimButton />
        <p>
          <Link to="/#timetable">See the timetable</Link>
        </p>
      </section>
    </div>
  </Layout>
)

export default IntroPage
