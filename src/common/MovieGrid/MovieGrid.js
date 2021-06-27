import React from 'react';
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {Link} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "transparent",
  },
  gridList: {
    width: "100%",
    height: "auto",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function MoviGrid(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList} cols={3}>

        {
          props.moviesList.map((item) => {
            return (
              
                  <GridListTile key={item.id}>
                    <Link to="/">
                    <img src={item.poster_url} alt={item.title} style={{width:"100%"}} />
                    <GridListTileBar
                      title={item.title}
                      subtitle={<span>Release Date: {item.release_date}</span>}
                      
                    />
                    </Link>
                  </GridListTile>
              
            )

          })
         
        }
        
      </GridList>
    </div>
  );
}
