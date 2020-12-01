import './App.css';
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'
// import {Provider } from 'react-redux';

import configureStore from './redux/store';

// const store = configureStore();


function App() {
  return (
      <div>
        <Header/>
        <ImageGrid />
      </div>
  );
}

export default App;
