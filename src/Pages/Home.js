import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import moment from 'moment';

const Home = () => {

    const [data, setData] = useState([]);
    const [sortKey, setSortKey] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:3000/data')
            const body = await result.json();
            setData(body);
        }
        fetchData()
    }, []);

    const useSort = (eventKey, e) => {
        setSortKey(e.target.id)
        setSortOrder(eventKey)
    };

    const compareValues = (key, order = 'asc') => {
        return (a, b) => {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string') ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
                b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    };

    console.log(data)

    return (
        <>
            <Container>
                <Table striped borderd="true" hover responsive>
                    <thead>
                        <tr>
                            <th>
                                <DropdownButton variant="light" id="dropdown-basic-button" title="ID">
                                    <Dropdown.Item id="id" eventKey="asc" onSelect={useSort}>Ascending</Dropdown.Item>
                                    <Dropdown.Item id="id" eventKey="desc" onSelect={useSort}>Descending</Dropdown.Item>
                                </DropdownButton>
                            </th>
                            <th>
                                <DropdownButton variant="light" id="dropdown-basic-button" title="Date">
                                    <Dropdown.Item id="created" eventKey="asc" onSelect={useSort}>Oldest</Dropdown.Item>
                                    <Dropdown.Item id="created" eventKey="desc" onSelect={useSort}>Newest</Dropdown.Item>
                                </DropdownButton>
                            </th>
                            <th>Text</th>
                            <th>
                                <DropdownButton variant="light" id="dropdown-basic-button" title="Clicks">
                                    <Dropdown.Item id="clicks" eventKey="asc" onSelect={useSort}>Ascending</Dropdown.Item>
                                    <Dropdown.Item id="clicks" eventKey="desc" onSelect={useSort}>Descending</Dropdown.Item>
                                </DropdownButton>
                            </th>
                            <th>
                                <DropdownButton variant="light" id="dropdown-basic-button" title="Impressions">
                                    <Dropdown.Item id="impressions" eventKey="asc" onSelect={useSort}>Ascending</Dropdown.Item>
                                    <Dropdown.Item id="impressions" eventKey="desc" onSelect={useSort}>Descending</Dropdown.Item>
                                </DropdownButton>
                            </th>
                            <th>Spend (RUB)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.sort(compareValues(`${sortKey}`, `${sortOrder}`)).map(item=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{moment(item.created).format('M/D/YYYY')}</td>
                            <td>{!item.text? null : <Link to={`/${item.id}`}>{`${item.text.substring(0,50)}...`}</Link>}</td>
                            <td>{item.clicks}</td>
                            <td>{item.impressions}</td>
                            <td>{item.spend.amount}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Container>
        </>
    )
};

export default Home;
