import React from 'react';
import { Row, Col, Card, Spinner, Tabs, Tab } from 'react-bootstrap';
import moment from 'moment'

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import BarDiscreteChart from '../Charts/Nvd3Chart/BarDiscreteChart';
import PieBasicChart from '../Charts/Nvd3Chart/PieBasicChart';
import AgeChart from '../Charts/Nvd3Chart/AgeChart';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import GetMalade from '../../middleware/malade/GetMalade';
import GetMaladeEtat from '../../middleware/malade/GetMaladeEtat';
import { withCookies } from 'react-cookie';

class Dashboard extends React.Component {
    state = {
        malades: [],
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
        const {cookies} = this.props;
        GetMalade(cookies.get('jwt')).then(malades=>{
            this.setState({
                malades: malades,
            })
        });  
        GetMaladeEtat('Suspect',cookies.get('jwt')).then(malades=>{
            this.setState({
                suspects: malades,
                loading : this.state.loading+1
            });
        });

        GetMaladeEtat('Positif',cookies.get('jwt')).then(malades=>{
            this.setState({
                positifCases: malades,
                loading : this.state.loading+1
            });
        });

        GetMaladeEtat('Negatif',cookies.get('jwt')).then(malades=>{
            this.setState({
                negatifCases: malades,
                loading : this.state.loading+1
            });
        });

        GetMaladeEtat('Gueri',cookies.get('jwt')).then(malades=>{
            this.setState({
                healdCases: malades,
                loading : this.state.loading+1
            });
        });
    }

    render() {
        let CasesSameDay = this.state.malades.map((malade, index) => {
            let date = malade.dateAjout
            let today = new Date()
            if (parseInt(date.slice(0, 4)) === today.getFullYear()) {
                if (parseInt(date.slice(5, 7)) === today.getMonth() + 1) {
                    if (parseInt(date.slice(8)) === parseInt(today.getDate())) {
                        if (malade.etat === "Positif" || malade.etat === "Negatif") {
                            return (
                                <div key={index} className="media friendlist-box align-items-center justify-content-center m-b-20">
                                    <div className="m-r-10 photo-table">
                                        {malade.sexe === "Homme" ?
                                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></a>
                                            :
                                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></a>
                                        }

                                    </div>
                                    <div className="media-body">
                                        <h6 className="m-0 d-inline">{malade.nom + " " + malade.prenom}</h6>
                                        {malade.etat === "Positif" ?
                                            <span className="float-right d-flex  align-items-center"><i className="fa fa-plus f-22 m-r-10 text-c-red" /><b>Positif</b></span>
                                            :
                                            <span className="float-right d-flex  align-items-center"><i className="fa fa-minus f-22 m-r-10 text-c-green" /><b>Négatif</b></span>
                                        }
                                    </div>
                                </div>
                            )
                        }
                    }
                }
            }
        })

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;
        let CasesSameWeek = this.state.malades.map((malade, index) => {
            let date = malade.dateAjout
            //console.log("Date : " + date + " Today : " + today)
            if (moment(date).isSame(today, 'week')) {
                    return (
                        <div key={index} className="media friendlist-box align-items-center justify-content-center m-b-20">
                            <div className="m-r-10 photo-table">
                                {malade.sexe === "Homme" ?
                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></a>
                                    :
                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></a>
                                }

                            </div>
                            <div className="media-body">
                                <h6 className="m-0 d-inline">{malade.nom + " " + malade.prenom}</h6>
                                {malade.etat === "Positif" ?
                                    <span className="float-right d-flex  align-items-center"><i className="fa fa-plus f-22 m-r-10 text-c-red" /><b>Positif</b></span>
                                    :
                                    malade.etat==='Negatif' ? 
                                    <span className="float-right d-flex  align-items-center"><i className="fa fa-minus f-22 m-r-10 text-c-green" /><b>Négatif</b></span>
                                    :
                                    malade.etat==='Suspect' ? 
                                    <span className="float-right d-flex  align-items-center"><i className="feather icon-alert-circle f-30 text-c-black" /><b>Suspect</b></span>
                                    :
                                    <span className="float-right d-flex  align-items-center"><i className="feather icon-zap f-30 text-c-yellow" /><b>Guéri</b></span>
                                }
                            </div>
                        </div>
                    )
            }
        })

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
                                    <PieBasicChart/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Répartition des cas par sexe</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <BarDiscreteChart/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xl={8} className='m-b-30'>
                            <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
                                <Tab eventKey="today" title="Aujourd'hui">
                                    {CasesSameDay}
                                </Tab>
                                <Tab eventKey="week" title="Cette Semaine">
                                    {CasesSameWeek}
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
                                                        <span className="d-block text-uppercase">Nombre de guérisons</span>
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
                                                        <span className="d-block text-uppercase">Nombre de cas suspects</span>
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
                    <Row>
                    <Col md={16}>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Repartitions age</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <AgeChart/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            </>
        );
    }
}

export default withCookies(Dashboard);