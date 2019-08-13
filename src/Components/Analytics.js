import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Arrow from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    paragraph: {
        display: 'flex'
    },
}));

const Analytics = (props) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    const handleClick2 = () => {
        setOpen2(!open2);
    }
    const handleClick3 = () => {
        setOpen3(!open3);
    }

    return (
        <>
            <Dialog
                open={props.analyticsOpen}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Most Targeted</DialogTitle>
                <DialogContent>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.root}
                    >
                        <ListItem button onClick={handleClick}>
                            <ListItemText primary="Top 5 Targeted Age Groups:" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {props.sortProperties(props.getValueCount(props.ageRows)).slice(0, 5).map( group => 
                                    <ListItem className={classes.nested}>
                                        <ListItemIcon>
                                            <Arrow />
                                        </ListItemIcon>
                                        <ListItemText primary={`${group[0]} appeared ${group[1]} times`} />
                                    </ListItem>
                                )}
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick2}>
                            <ListItemText primary="Top 5 Targeted Interest Groups:" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {props.sortProperties(props.getValueCount(props.interestRows)).slice(0, 5).map(group =>
                                    <ListItem className={classes.nested}>
                                        <ListItemIcon>
                                            <Arrow />
                                        </ListItemIcon>
                                        <ListItemText primary={`${group[0]} appeared ${group[1]} times`} />
                                    </ListItem>
                                )}
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick3}>
                            <ListItemText primary="Top 5 Targeted Exclusion Groups:" />
                            {open3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {props.sortProperties(props.getValueCount(props.exclusionRows)).slice(0, 5).map(group =>
                                    <ListItem className={classes.nested}>
                                        <ListItemIcon>
                                            <Arrow />
                                        </ListItemIcon>
                                        <ListItemText primary={`${group[0]} appeared ${group[1]} times`} />
                                    </ListItem>
                                )}
                            </List>
                        </Collapse>          
                    </List>
                </DialogContent>
            </Dialog>
        </>
    )
};

export default Analytics;


