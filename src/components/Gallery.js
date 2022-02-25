import React, { Component } from 'react'
import image1 from '../images/studio_gallery/active-barre-20221.jpg'
import image2 from '../images/studio_gallery/active-barre-20222.jpg'
import image3 from '../images/studio_gallery/active-barre-20223.jpg'
import image4 from '../images/studio_gallery/active-barre-20224.jpg'
import image5 from '../images/studio_gallery/active-barre-20225.jpg'
import image6 from '../images/studio_gallery/activebarre-ball-work.jpg'
import image7 from '../images/studio_gallery/activebarre-studio.jpg'
import image8 from '../images/studio_gallery/activebarre-studio2.jpg'
import image9 from '../images/studio_gallery/activebarre-foot-extension.jpg'

import '../assets/scss/gallery.scss'

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="top">
          <ul>
            <li>
              <a href="#img_1">
                <img src={image1} />
              </a>
            </li>
            <li>
              <a href="#img_2">
                <img src={image2} />
              </a>
            </li>
            <li>
              <a href="#img_3">
                <img src={image3} />
              </a>
            </li>
            <li>
              <a href="#img_4">
                <img src={image4} />
              </a>
            </li>
            <li>
              <a href="#img_5">
                <img src={image5} />
              </a>
            </li>
            <li>
              <a href="#img_6">
                <img src={image6} />
              </a>
            </li>
            <li>
              <a href="#img_7">
                <img src={image7} />
              </a>
            </li>
            <li>
              <a href="#img_8">
                <img src={image8} />
              </a>
            </li>
            <li>
              <a href="#img_9">
                <img src={image9} />
              </a>
            </li>
          </ul>
          <a href="#_1" class="lightbox trans" id="img_1">
            <img src={image1} />
          </a>
          <a href="#_2" class="lightbox trans" id="img_2">
            <img src={image2} />
          </a>
          <a href="#_3" class="lightbox trans" id="img_3">
            <img src={image3} />
          </a>
          <a href="#_4" class="lightbox trans" id="img_4">
            <img src={image4} />
          </a>
          <a href="#_5" class="lightbox trans" id="img_5">
            <img src={image5} />
          </a>
          <a href="#_6" class="lightbox trans" id="img_6">
            <img src={image6} />
          </a>
          <a href="#_7" class="lightbox trans" id="img_7">
            <img src={image7} />
          </a>
          <a href="#_8" class="lightbox trans" id="img_8">
            <img src={image8} />
          </a>
          <a href="#_9" class="lightbox trans" id="img_9">
            <img src={image9} />
          </a>
        </div>
        {/* <div class="videoWrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ccM_Cp7vXFU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreengats"></iframe>
                </div> */}
      </div>
    )
  }
}

export default App
