import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    root: {
        minWidth: 240,
        maxWidth: 240,
        margin: "auto",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    formControl: {
        width: "100%",
        marginTop:30
    }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function SimpleCard(props) {
    const classes = useStyles();

    const handleChange = (event) => {
        setPersonName(event.target.value);
    }

    const [personName, setPersonName] = useState([]);
    const [artistName, setArtistName] = useState([]);
    const [movieName, setMovieName] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [errorDisp, setErrorDisp] = useState(false);

   

    const handleChangeArtist = (event) => {
        setArtistName(event.target.value);
    }

    const filterHandler = () =>{
        if(personName.length===0 && artistName.length===0 && movieName==="" && dateStart === null && dateEnd === null){
            setErrorDisp(true)
        }else{
            let filterData = {personName,artistName,movieName,dateStart,dateEnd}
            props.getFilterData(filterData)
            setPersonName([])
            setArtistName([])
            setMovieName("")
            setDateStart(null)
            setDateEnd(null)
        }
    }

    
    const names = props.genresList.map((item)=>{
        return item.genre
    })

    const artist = props.artistList.map((item)=>{
        return (item.first_name +" "+item.last_name)
    })
    


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="primary" gutterBottom>
                    FIND MOVIES BY:
                </Typography>

                {
                errorDisp===true ? 
                <Typography className={classes.title} style={{color:"red"}} gutterBottom>
                    Select atleast one filter
                </Typography>
                :
               null
                }
                

                <div>
                    <FormControl className={classes.formControl}>
                        <TextField

                            id="standard-error-helper-text"
                            label="Movie Name"
                            value={movieName}
                            onChange={(event)=>{setMovieName(event.target.value)}}
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
                        <Select
                            labelid="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-checkbox-artist">Artist</InputLabel>
                        <Select
                            labelid="demo-mutiple-checkbox-artist"
                            id="artist-mutiple-checkbox"
                            multiple
                            value={artistName}
                            onChange={handleChangeArtist}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {artist.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={artistName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <TextField

                            id="date"
                            label="Release Date Start"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dateStart}
                            onChange={(event)=>{setDateStart(event.target.value)}}
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <TextField

                            id="date"
                            label="Release Date End"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dateEnd}
                            onChange={(event)=>{setDateEnd(event.target.value)}}
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <Button variant="contained" color="primary" onClick={filterHandler}>
                            APPLY
                        </Button>
                    </FormControl>
                </div>

            </CardContent>

        </Card>
    );
}