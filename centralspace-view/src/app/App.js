import React from 'react';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop';
import RouteSwitcher from './hoc/RouteSwitcher';

const App = () => {
  return (
    // or <BrowserRouter basename="/app"> /// HashRouter with path beacause -> "homepage": "http://localhost:8088/app/",
    <HashRouter>
      <ScrollToTop>
        <RouteSwitcher />
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
