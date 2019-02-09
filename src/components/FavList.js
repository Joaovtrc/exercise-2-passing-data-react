import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/


class FavList extends Component {
  render() {
    console.log(this.props.favorites)
    let filteredList;
    if(this.props.favorites.length != 0){
      	 filteredList = this.props.favorites.filter(fav => fav != undefined).map(fav =>
                         <span>                                                        
                           <ListItem key={fav.id}> {fav.name} </ListItem>
                           <Divider />
    					 </span>
    					 );

    }else{
   	 filteredList = <ListItem > None of the people favorited this movie </ListItem>
    }

    
    return (
    <div>
     <Typography variant="subtitle1" component="h3">
    	 Favorited by:
     </Typography>
     <List>
     {
      
		filteredList

	  }
     	
      </List>
	</div>
    );
  }
}

export default FavList;
