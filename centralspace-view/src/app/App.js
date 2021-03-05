import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './centralspace-training/components/navigation/Navbar';
import ScrollToTop from '../app/beautypage/components/utils/ScrollToTop';
import RouteSwitcher from './hoc/RouteSwitcher';

const App = () => {
  return (
    // or <BrowserRouter basename="/app"> /// HashRouter with path beacause -> "homepage": "http://localhost:8088/app/",
    <HashRouter>
      <ScrollToTop>
        {/* <div className="centralspace-view-app container"> */}
        <div className="centralspace-view-app">
          <Navbar />
        </div>
        <RouteSwitcher />
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
