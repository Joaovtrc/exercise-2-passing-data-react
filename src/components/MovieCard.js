import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FavList from './FavList.js'
import { profiles, users }  from '../dataSource.js'

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const paperStyle = {
  padding: '10px',
  margin: '10px'
};

function getMovieFavorites(movie) {
	const favProf = profiles.filter(p => p.favoriteMovieID == movie.id);
  	const usersArray = Object.keys(users).map((key, movie) => users[key]);
  	const favUserList = [];
  
   	for( let prof of favProf){
    	favUserList.push(usersArray.find(u => u.id == prof.userID))
	}
  

	return favUserList;
}


class MovieCard extends Component {
  render() {

    return (
      <div>
      <Paper style={paperStyle} elevation={1}>
        <Typography variant="h5" component="h3">
			{this.props.movie.name}
        </Typography>
        <FavList favorites={getMovieFavorites(this.props.movie)} />
      </Paper>
    </div>
    );
  }
}

export default MovieCard;
