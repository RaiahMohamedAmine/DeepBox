import React from 'react';
import { Row, Col, Card, Table, Spinner, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios'

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import PieBasicChart from "../Charts/Nvd3Chart/PieBasicChart";
import BarDiscreteChart from "../Charts/Nvd3Chart/BarDiscreteChart";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class Dashboard extends React.Component {
    state = {
        suspects: [],
        positifCases: [],
        negatifCases: [],
        healdCases: [],
        loading: 0,
    }

    componentWillMount() {
        this.refreshMalades()
    }

    refreshMalades() {
        axios.get('http://localhost:5200/malade/get/Suspect').then((response) => {
            this.setState({
                suspects: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                console.log(this.state.suspects)
            })
        })
        axios.get('http://localhost:5200/malade/get/Positif').then((response) => {
            this.setState({
                positifCases: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                console.log(this.state.positifCases)
            })
        })
        axios.get('http://localhost:5200/malade/get/Negatif').then((response) => {
            this.setState({
                negatifCases: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                console.log(this.state.negatifCases)
            })
        })
        axios.get('http://localhost:5200/malade/get/Gueri').then((response) => {
            this.setState({
                healdCases: response.data.malades,
                loading: this.state.loading + 1
            }, () => {
                console.log(this.state.healdCases)
            })
        })
    }

    render() {
        const tabContent = (
            <Aux>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green" />3784</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Julie Vad</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green" />3544</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red" />2739</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Frida Thomse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red" />1032</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green" />8750</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red" />8750</span>
                    </div>
                </div>
            </Aux>
        );

        return (
            <>
            <Aux>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Répartition des cas par gravité</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieBasicChart />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Répartition des cas par sexe</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BarDiscreteChart />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Daily Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> $249.95</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">50%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Monthly Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5" /> $2.942.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">36%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{ width: '35%' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Yearly Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> $8.638.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">70%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{ height: '7px' }}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={8} className='m-b-30'>
                        <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
                            <Tab eventKey="today" title="Today">
                                {tabContent}
                            </Tab>
                            <Tab eventKey="week" title="This Week">
                                {tabContent}
                            </Tab>
                            <Tab eventKey="all" title="All">
                                {tabContent}
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            {
                                this.state.loading >= 4 ?
                                <>
                                    <Card.Body className='border-bottom'>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-auto">
                                                <i className="feather icon-zap f-30 text-c-yellow" />
                                            </div>
                                            <div className="col">
                                                <h3 className="f-w-300">{this.state.healdCases.length}</h3>
                                                <span className="d-block text-uppercase">Nombre de géris</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Body>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-auto">
                                                <i className="feather icon-alert-circle f-30 text-c-black" />
                                            </div>
                                            <div className="col">
                                                <h3 className="f-w-300">{this.state.suspects.length}</h3>
                                                <span className="d-block text-uppercase">Nombre de suspects</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Body className='border-bottom'>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-auto">
                                                <i className="feather icon-plus f-30 text-c-red" />
                                            </div>
                                            <div className="col">
                                                <h3 className="f-w-300">{this.state.positifCases.length}</h3>
                                                <span className="d-block text-uppercase">Nombre de testés positif</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Body className='border-bottom'>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-auto">
                                                <i className="feather icon-minus f-30 text-c-green" />
                                            </div>
                                            <div className="col">
                                                <h3 className="f-w-300">{this.state.negatifCases.length}</h3>
                                                <span className="d-block text-uppercase">Nombre de testés négatif</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </>
                                : <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                            }
                        </Card>
                    </Col>

                </Row>
            </Aux>
            </>
        );
    }
}

export default Dashboard;