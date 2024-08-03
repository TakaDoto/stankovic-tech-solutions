import React from 'react';
import axios from 'axios';
import './Home.scss';

class Home extends React.Component {
  componentDidMount() {
    axios.get('/api/data')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  render() {
    return (
      <div className="home-container">
        <img src="/images/logo.gif" alt="Logo" className="logo" />
        <h1>Welcome to Stankovic Tech Solutions</h1>
        <p>Your trusted partner in tech solutions.</p>
        <p>Innovative development to power your business forward.</p>
      </div>
    );
  }
}

export default Home;
