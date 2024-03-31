import React from 'react';
import {  BrowserRouter as Router ,  Routes,  Route } from "react-router-dom";
import Netflix from './pages/Netflix';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './components/Layout';
import NetflixDetail from './components/Neflix/NetflixDetail';

const App = () => {
  return (

    
    <>
      <GlobalStyle/>
        <Router basename='/NETFLIX'>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Netflix/>}/>
              <Route path='/detail/:id' element={<NetflixDetail/>}/>
            </Route>
          </Routes>
        </Router>
    </>
  );
};

export default App;