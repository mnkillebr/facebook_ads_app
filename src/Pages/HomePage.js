import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import AdLinks from '../Components/AdLinks';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
    { id: 'id', numeric: true, disablePadding: true, label: 'ID' },
    { id: 'created', numeric: true, disablePadding: false, label: 'Date Posted' },
    { id: 'text', numeric: false, disablePadding: false, label: 'Text' },
    { id: 'clicks', numeric: true, disablePadding: false, label: 'Clicks' },
    { id: 'impressions', numeric: true, disablePadding: false, label: 'Impressions' },
    { id: 'spend', numeric: true, disablePadding: false, label: 'Spend (RUS)' },
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headRows.map(row => (
                    <TableCell
                        key={row.id}
                        align={row.numeric ? 'right' : 'left'}
                        padding={row.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === row.id ? order : false}
                    >
                        {row.label === "Text" || row.label === "Spend (RUS)" ? 
                            row.label :
                            <TableSortLabel
                                active={orderBy === row.id}
                                direction={order}
                                onClick={createSortHandler(row.id)}
                            >
                                {row.label}
                                {orderBy === row.id ? (
                                    <span className={classes.visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </span>
                                ) : null}
                            </TableSortLabel>
                        }
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

const HomePage = () => {

    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchID, setSearchID] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [interestsFilter, setInterestsFilter] = useState('');
    const [placementsFilter, setPlacementsFilter] = useState('');
    const [languageFilter, setLanguageFilter] = useState('');
    const [excludedFilter, setExcludedFilter] = useState('');
    const [filters, setFilters] = useState([]);


    const handleRequestSort = (event, property) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const [rows, setRows] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:3000/data')
            const body = await result.json();
            setRows(body);
        }
        fetchData()
    }, []);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const ageRows = rows.map(row=>row.targeting.age);

    const locationRows = rows.map(row=> {
        if (row.targeting["location_living_in"]) {
            return Array.isArray(row.targeting["location_living_in"]) ?
            row.targeting["location_living_in"] :
            Object.keys(row.targeting["location_living_in"])
        } else {
            return row.targeting.location
        }    
    });
    
    const exclusionRows = rows.map(row => Array.isArray(row.targeting["excluded_connections"]) ? row.targeting["excluded_connections"] : typeof row.targeting["excluded_connections"])
    .filter(row => row!== "undefined");

    const interestRows = rows.map(row =>
        row.targeting.interests ?
            row.targeting.interests :
            row.targeting["people_who_match"] ?
                row.targeting["people_who_match"].interests :
                row.targeting["and_must_also_match"] ?
                    row.targeting["and_must_also_match"].interests :
                    row)
    .filter(row => Array.isArray(row));

    const placementRows = rows.map(row => row.targeting.placements)

    // const connectionRows = rows.map(row => Array.isArray(row.targeting["connections"]) ? row.targeting["connections"] : typeof row.targeting["connections"])
    //     .filter(row => row != "undefined");
    
    const getValueCount = (array) => {
        let counts = {};
        array.forEach(element => { counts[element] = (counts[element] || 0) + 1; });
        return counts;
    }

    const sortProperties = (obj) => {
        let arr = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                arr.push([key, obj[key]]); 
            };
        };

        arr.sort(function (a, b) {
            // return a[1] - b[1]; //for ascending
            return b[1] - a[1]; //for descending
        });
        return arr; 
    }

    // console.log(sortProperties(getValueCount(placementRows.flat())))
    // console.log(sortProperties(getValueCount(locationRows)))
    // console.log(sortProperties(getValueCount(ageRows)))
    // console.log(sortProperties(getValueCount(exclusionRows)))
    // console.log(sortProperties(getValueCount(interestRows.flat())))
    // console.log(sortProperties(getValueCount(connectionRows)))

    return (
        <div className={classes.root}>
            <Banner />
            <AdLinks />
            <NavBar
                sortProperties={sortProperties}
                getValueCount={getValueCount} 
                ageRows={ageRows}
                locationRows={locationRows}
                placementRows={placementRows.flat()}
                exclusionRows={exclusionRows}
                interestRows={interestRows.flat()}
                filters={filters} 
                setFilters={setFilters}
                searchID={searchID} 
                setSearchID={setSearchID} 
                ageFilter={ageFilter}
                setAgeFilter={setAgeFilter}
                locationFilter={locationFilter}
                setLocationFilter={setLocationFilter}
                interestsFilter={interestsFilter}
                setInterestsFilter={setInterestsFilter}
                languageFilter={languageFilter}
                setLanguageFilter={setLanguageFilter}
                placementsFilter={placementsFilter}
                setPlacementsFilter={setPlacementsFilter}
                excludedFilter={excludedFilter}
                setExcludedFilter={setExcludedFilter}
                />
            <Paper className={classes.paper}>
                <div className={classes.tableWrapper}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size='medium'
                    >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .filter( row => searchID == '' ? row : String(row.id).includes(searchID))
                                // .filter( row => 
                                //     Array.isArray(row.targeting.interests) ?
                                //         row.targeting.interests.find(element => element.includes(interestsFilter)) :
                                //         Array.isArray(row.targeting["people_who_match"]) ?
                                //             row.targeting["people_who_match"].interests.find(element => element.includes(interestsFilter)) :
                                //             Array.isArray(row.targeting["and_must_also_match"]) ?
                                //                 row.targeting["and_must_also_match"].interests.find(element => element.includes(interestsFilter)) :
                                //                 row
                                // )
                                .filter(row => Array.isArray(row.targeting.interests) ? row.targeting.interests.find(element => element.includes( interestsFilter )) : row)
                                .filter(row => Array.isArray(row.targeting.age) ? row.targeting.age.find(element => element.includes( ageFilter )) : row)
                                .filter(row => Array.isArray(row.targeting.location) ? row.targeting.location.find(element => element.includes( locationFilter )) : row)
                                .filter(row => Array.isArray(row.targeting.language) ? row.targeting.language.find(element => element.includes( languageFilter )) : row)
                                .filter(row => Array.isArray(row.targeting.placements) ? row.targeting.placements.find(element => element.includes( placementsFilter )) : row)
                                .filter(row => Array.isArray(row.targeting["excluded_connections"]) ? row.targeting["excluded_connections"].find(element => element.includes( excludedFilter )) : row)
                                .map(row => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.id}
                                        >
                                            <TableCell align="right">{row.id}</TableCell>
                                            <TableCell align="right">{moment(row.created).format('M/D/YYYY')}</TableCell>
                                            <TableCell align="left">{!row.text ? null : <Link to={`/${row.id}`}>{`${row.text.substring(0, 80)}...`}</Link>}</TableCell>
                                            <TableCell align="right">{row.clicks}</TableCell>
                                            <TableCell align="right">{row.impressions}</TableCell>
                                            <TableCell align="right">{row.spend.amount}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100, 1000, 3500]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}

export default HomePage;