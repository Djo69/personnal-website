import React, { Component } from 'react';
import logoName from './logoname.png';
import './App.css';
import FirstStrat from './JS/FirstStrat';

class App extends Component {
  render() {
    return (
      <section className="All">
        <header>
          <img src={logoName} alt="LogoName" />
            <ul className="Ul1">
                <hr id="zero" />
              <li class="one"><a href="/">Présentation</a></li>
                <hr id="one" />
              <li lass="two"><a href="https://www.edenschool.fr">Eden School</a></li>
                <hr id="two" />
              <li class="three"><a href="/">Diplôme</a></li>
                <hr id="three" />
            </ul>

            <ul className="Ul2">
              <li><a href="https://github.com/Djo69"><i class="fab fa-github"></i></a></li>
              <li><a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
            </ul>
        </header>
      <FirstStrat />
    </section>
    );
  }
}

export default App;
