import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import GameOverview from './GameOverview';
// import EintrachtFrankfurtVfLWolfsburg290924 from './ticker_games/Eintracht_Frankfurt_VfL_Wolfsburg_29.09.2024';
// import TestSpielUnionWerder from './ticker_games/TestSpielUnionWerder';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TestSpielUnionWerder /> */}
    {/* <EintrachtFrankfurtVfLWolfsburg290924 /> */}
    <GameOverview />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
