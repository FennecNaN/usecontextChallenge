import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';
import './App.css'; 

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <RoutesApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
