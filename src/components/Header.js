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
                <p>Taree's first boutique studio offering a fusion of Barre, Pilates and fitness.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Classes</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Time Table</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header