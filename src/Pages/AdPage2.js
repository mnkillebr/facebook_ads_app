import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const AdPage2 = () => {

    const adId = match.params.id;
    const [adInfo, setAdInfo] = useState({});
    const [adSpend, setAdSpend] = useState({});
    const [adTargeting, setAdTargeting] = useState({});
    const [option, setOption] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:3000/data/${adId}`)
            const body = await result.json();
            setAdInfo(body);
            setAdSpend(body.spend);
            setAdTargeting(body.targeting);
        }
        fetchData()
    }, [adId]);

    const selectTargetingOption = (eventKey, e) => {
        setOption(eventKey)
    }

    const removeUnderscore = (string) => {
        return string.split('_').join(' ')
    }

    return (
        <>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </>
    )
}

export default AdPage2;