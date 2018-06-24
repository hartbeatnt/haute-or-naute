import ReactDOM from 'react-dom';
import NavBar from './NavBar/NavBar';
import HauteOrNaute from './HauteOrNaute/HauteOrNaute';
import './index.css';

ReactDOM.render(
  <div>
    <NavBar />
    <HauteOrNaute />
  </div>,
  document.querySelector('#app'),
);
