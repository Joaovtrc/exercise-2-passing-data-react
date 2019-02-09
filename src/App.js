import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard.js'
import { movies }  from './dataSource.js'

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        	{Object.keys(movies).map((key, movie) =>
			<MovieCard key={movies[key].id} movie={movies[key]} />

        )}
      </div>
    );
  }
}

export default App;
