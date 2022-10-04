import React from 'react';
import ReactDOM from 'react-dom/client';
import MapsApp from './MapsApp';

if(!navigator.geolocation) {
  alert('Your browser does not have Geolocation');
  throw new Error('Your browser does not have Geolocation');
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
