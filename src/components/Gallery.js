import React, { Component } from 'react';
import image1 from '../images/studio_gallery/IMG_1105.png'
import image2 from '../images/studio_gallery/IMG_1103.jpg'
import image3 from '../images/studio_gallery/IMG_1104.jpg'

import '../assets/scss/gallery.scss'

class App extends Component {
    render() {
        return (
    <div class="container">
	<div class="top">
    	<ul>
        	<li><a href="#img_1"><img src={image1} /></a></li>
            <li><a href="#img_2"><img src={image2} /></a></li>
            <li><a href="#img_3"><img src={image3} /></a></li>
            <li><a href="#img_4"><img src="https://picjumbo.imgix.net/HNCK3991.jpg?q=40&w=1650&sharp=30" /></a></li>
            <li><a href="#img_5"><img src="https://image.freepik.com/free-photo/sunlight-in-the-forest_1004-9.jpg" /></a></li>
            <li><a href="#img_6"><img src="https://image.freepik.com/free-photo/road-curve-landscape_426-19324358.jpg" /></a></li>
            <li><a href="#img_7"><img src="https://image.freepik.com/free-photo/shiny-lights_385-19321244.jpg" /></a></li>
            <li><a href="#img_8"><img src="https://image.freepik.com/free-photo/skyscraper-with-clouds-reflection_23-10.jpg" /></a></li>
            <li><a href="#img_9"><img src="https://image.freepik.com/free-photo/skyscraper-with-clouds-reflection_23-10.jpg" /></a></li>
        </ul>
        <a href="#_1" class="lightbox trans" id="img_1"><img src={image1}/></a>
        <a href="#_2" class="lightbox trans" id="img_2"><img src={image2}/></a>
        <a href="#_3" class="lightbox trans" id="img_3"><img src={image3}/></a>
        <a href="#_4" class="lightbox trans" id="img_4"><img src="https://picjumbo.imgix.net/HNCK3991.jpg?q=40&w=1650&sharp=30"/></a>
        <a href="#_5" class="lightbox trans" id="img_5"><img src="https://image.freepik.com/free-photo/sunlight-in-the-forest_1004-9.jpg"/></a>
        <a href="#_6" class="lightbox trans" id="img_6"><img src="https://image.freepik.com/free-photo/road-curve-landscape_426-19324358.jpg"/></a>
        <a href="#_7" class="lightbox trans" id="img_7"><img src="https://image.freepik.com/free-photo/shiny-lights_385-19321244.jpg"/></a>
        <a href="#_8" class="lightbox trans" id="img_8"><img src="https://image.freepik.com/free-photo/skyscraper-with-clouds-reflection_23-10.jpg"/></a>
        <a href="#_9" class="lightbox trans" id="img_9"><img src="https://image.freepik.com/free-photo/foggy-pine-forest_426-19323742.jpg"/></a>
                </div>
                <div class="videoWrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0LIKUIUFUZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
</div>
        );
    }
}

export default App;
