import React, { Component } from 'react';
import '../CSS/FirstStrat.css';
import Img1 from '../code1.jpg';
import Img2 from '../code2.jpg';

class FirstStrat extends Component {
  render() {
    return (
      <section className="FirstStrat">
        <div className="Presentation">
          <h1>Présentation</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
      <div className="IMG">
        <img className="Img1" src={Img1} alt="CodeImage" />
        <img className="Img1" src={Img2} alt="CodeImage2" />
      </div>
  </section>
    );
  }
}

export default FirstStrat;
