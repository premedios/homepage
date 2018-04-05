import React, { Component } from 'react';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HeroSection />
      </div>
    );
  }
}

export default App;
