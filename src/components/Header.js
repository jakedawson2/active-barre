import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span><img src={logo} alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Active Barre Studio</h1>
                <h4>BARRE | PILATES | CARDIO</h4>
                <h3>5/23 Pulteney Street Taree NSW</h3>
                <p>Taree's first boutique studio offering a fusion of Barre, Pilates and fitness.</p>
                <h3>During this time we will only offering Private coaching sessions. Check timetable for availability</h3>
                <h3>We will also be offering free classes from the <a href="https://www.facebook.com/groups/648282489270557/">Active Barre Group</a></h3>
                
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('studio') }}>Studio</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Classes</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>Timetable</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
