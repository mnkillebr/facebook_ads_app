import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Folder from '@material-ui/icons/Folder'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Download from '@material-ui/icons/CloudDownload';

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

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
}

const AdLinks = () => {

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
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Social Media Advertisement Files
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <Folder />
                    </ListItemIcon>
                    <ListItemText primary="2015:" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2015-q2.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 2 (218 MB)" />
                        </ListItemLink>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2015-q3.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 3 (662 MB)" />
                        </ListItemLink>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2015-q4.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 4 (397 MB)" />
                        </ListItemLink>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick2}>
                    <ListItemIcon>
                        <Folder />
                    </ListItemIcon>
                    <ListItemText primary="2016:" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2016-q1.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 1 (522 MB)" />
                        </ListItemLink>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2016-q2.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 2 (1.4 GB)" />
                        </ListItemLink>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2016-q3.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 3 (656 MB)" />
                        </ListItemLink>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2016-q4.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 4 (1.6 GB)" />
                        </ListItemLink>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick3}>
                    <ListItemIcon>
                        <Folder />
                    </ListItemIcon>
                    <ListItemText primary="2017:" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2017-q1.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 1 (1.4 GB)" />
                        </ListItemLink>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2017-04.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 2, April (1.2 GB)" />
                        </ListItemLink>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2017-05.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 2, May (754 MB)" />
                        </ListItemLink>
                        <ListItemLink className={classes.nested} href="https://intelligence.house.gov/uploadedfiles/facebook-ads/2017-q3.zip" >
                            <ListItemIcon>
                                <Download />
                            </ListItemIcon>
                            <ListItemText primary="Quarter 3 (24 MB)" />
                        </ListItemLink>
                    </List>
                </Collapse>
            </List>
            <p className={classes.paragraph}><strong>NOTE</strong>: There are no records from June 2017.</p>
            <p className={classes.paragraph}>To read more about these advertisements and Russia’s effort to sow discord online, <a href="https://intelligence.house.gov/social-media-content/">click here</a>.</p>

        </>
    )
}

export default AdLinks;