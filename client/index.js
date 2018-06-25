import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import HauteOrNaute from './HauteOrNaute/HauteOrNaute';
import Summary from './Summary/Summary';
import './index.css';

const History = () => <div>History Page Goes Here</div>;

const NotFound = () => <div>404, yo</div>;

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HauteOrNaute} />
        <Route path="/history" component={Summary} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.querySelector('#app'),
);
