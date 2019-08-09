import React, { useState, useEffect } from 'react';
import LostPage from './LostPage'
import { Col, Container, Row } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const AdPage = ({ match }) => {

    const adId = match.params.id;
    const [adInfo, setAdInfo] = useState({});
    const [adSpend, setAdSpend] = useState({});
    const [adTargeting, setAdTargeting] = useState({});

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

    const removeUnderscore = (string) => {
        return string.split('_').join(' ')
    }

    if (!adInfo) return <LostPage />

    console.log(adTargeting)

    return (
        <>
            <Container style={{ textAlign: "left" }}>
                <Paper>
                    <Row>
                        <Col md={4}>Ad ID</Col>
                        <Col md={8}>{adInfo.id}</Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={4}>Ad Text</Col>
                        <Col md={8}>{adInfo.text}</Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={4}>Ad Landing Page</Col>
                        <Col md={8}>{adInfo.url}</Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={4}>Ad Impressions</Col>
                        <Col md={8}>{adInfo.impressions}</Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={4}>Ad Clicks</Col>
                        <Col md={8}>{adInfo.clicks}</Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={4}>Ad Spend</Col>
                        <Col md={8}>{`${adSpend.amount} RUS`}</Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={4}>Ad Create Date</Col>
                        <Col md={8}>{adInfo.created}</Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={4}>Ad End Date</Col>
                        <Col md={8}>{adInfo.ended}</Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={4}>
                            Ad Targeting
                        </Col>
                        <Col md={8}>
                            {adTargeting ? Object.keys(adTargeting).map( key=> 
                                <Row>
                                    <Col md={4}>{removeUnderscore(key)[0].toUpperCase() + removeUnderscore(key).slice(1)}</Col>
                                    <Col md={8}>{Array.isArray(adTargeting[key]) ? adTargeting[key].map(element => <Chip variant="outlined" label={element} />) : adTargeting[key].interests.map(element => <Chip variant="outlined" label={element} />)}</Col>
                                </Row>
                                ) : null}
                        </Col>
                    </Row>
                </Paper>
            </Container> 
        </>
    )
}

export default AdPage;