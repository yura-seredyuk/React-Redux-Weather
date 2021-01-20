import React, {Fragment} from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

import Weather from './components/weather'


class App extends React.Component{

  render(){
    return(
      <Fragment>
        <Weather />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))