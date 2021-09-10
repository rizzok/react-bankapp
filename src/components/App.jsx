import React from 'react';
import '@fontsource/roboto';
import '../css/App.css';
import Header from './Header';
import Main from './Main';

export default function App() {
  return (
    <div id="app">
      <Header />
      <Main />
    </div>
  );
}
