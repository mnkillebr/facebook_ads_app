import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import FilterMenu from './FilterMenu'
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

const NavBar = (props) => {

    const classes = useStyles();

    const changeSearchID = (event) => {
        props.setSearchID(event.target.value)
    }

    const [filterOpen, setFilterOpen] = useState(false);

    const handleClick = () => {
        setFilterOpen(true);
    }

    const handleClose = () => {
        setFilterOpen(false)
    }

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Social Media Advertisement Reference Table
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search by ID…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.searchID}
                            onChange={changeSearchID}
                        />
                    </div>
                    <div>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Filter By Targeting
                        </Button>
                        <FilterMenu 
                            filterOpen={filterOpen} 
                            handleClose={handleClose} 
                            filters={props.filters} 
                            setFilters={props.setFilters} 
                            ageFilter={props.ageFilter}
                            setAgeFilter={props.setAgeFilter}
                            locationFilter={props.locationFilter}
                            setLocationFilter={props.setLocationFilter}
                            interestsFilter={props.interestsFilter}
                            setInterestsFilter={props.setInterestsFilter}
                            languageFilter={props.languageFilter}
                            setLanguageFilter={props.setLanguageFilter}
                            placementsFilter={props.placementsFilter}
                            setPlacementsFilter={props.setPlacementsFilter}
                            excludedFilter={props.excludedFilter}
                            setExcludedFilter={props.setExcludedFilter}
                        />
                    </div>
                </Toolbar>
            </AppBar> 
        </>
    )
};

export default NavBar;