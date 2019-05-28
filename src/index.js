import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

const Form = (props) => {
  return (
    <form onSubmit = {this.props.loadWeather}>
  <input type="text" name="city" placeholder="City..."/>
  <input type="text" name="country" placeholder="Country..."/>
  <button>Get Weather</button>
</form>
);
}
