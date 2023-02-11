import React from 'react';
import './App.css';
import NavigationBar from './screens/navigation/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Tech from './screens/Tech/Tech';
import Portfolio from './screens/portfolio/Portfolio';
import Footer from './screens/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <AboutMe />
      <Tech />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
