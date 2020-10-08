import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext'

class ThemeToggle extends React.Component {
  // or refactoring to functional component and using useContext(ThemeContext)
    static contextType = ThemeContext;
    render() { 
      const { toggleTheme } = this.context;
      return ( <button className="btn green darken-1" onClick={toggleTheme}>Change theme</button>);
    }
  }
 
export default ThemeToggle;