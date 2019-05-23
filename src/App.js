import React, { Component } from 'react';
import './App.css';
import { SpotifyApiContext } from 'react-spotify-api';
import { SpotifyFeatured } from './SpotifyFeatured';
import { SpotifyTop100 } from './SpotifyTop100';


class App extends Component {
  render() {
    return (
      <SpotifyApiContext.Provider value="BQBUcJuz28qjOmiyR6vnoPTyuuWj6MLlWFlnLfa4OzyCr9Hxqhqrx_ZdEF8QuBc1Cny59XgE-AU1kefc2Q3kQghxb8E_ly3pdw4RNXRFWwzdQ5skjQMqSqXjUQIL9P7RqDxv2Gp_A_D-HH_MjIjfOcwxaPngDGcWtWqTyh_oMsBs7CQyWKIX6d1F7M5sn8N9DsEx0j1-JiGG4az1UFd-ctLfnjqjp4rQ1ZC000EfTj8-aiGmNKopVbH3kxRZGPoBTXHrwrK23qKVNRb2_APbtBV9">
        <SpotifyFeatured />
        <SpotifyTop100 />
      </SpotifyApiContext.Provider>
    );
  }
}

export default App;