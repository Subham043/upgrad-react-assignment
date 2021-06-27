import React from 'react';
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "",
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


export default function Grid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={6}>
       
        {
          props.moviesData.map((item) => {

            return (
              <GridListTile key={item.id}>
                <img src={item.poster_url} alt={item.title} />

                <GridListTileBar
                  title={item.title}

                />
              </GridListTile>
            )
            
          })
        }
      </GridList>
    </div>
  );
}