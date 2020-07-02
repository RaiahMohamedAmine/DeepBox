import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Spinner, Popover,OverlayTrigger } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import GetMaladeEtat from '../../middleware/malade/GetMaladeEtat';
import DeleteMalade from '../../middleware/malade/DeleteMalade';
import { withCookies } from 'react-cookie';
import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    state = {
        suspects: [],
        positifCases: [],
        negatifCases: [],
        healdCases: [],
        patientData: {
            nom: "",
            prenom: "",
            adresse: "",
            siege: "",
            dateAjout: "",
            dateNaissance: "",
            etat: "",
            tel:"",
            sexe:''
        },
        loading :0,
        patientModal: false
    }

    componentWillMount() {
        this.refreshMalades()
    }

    refreshMalades() {
        var {cookies} = this.props;

        GetMaladeEtat('Suspect',cookies.get('jwt')).then(malades=>{
            this.setState({
                suspects: malades,
                loading : this.state.loading+1
            }, () => {
            console.log(this.state.suspects)
            })
        });

        GetMaladeEtat('Positif',cookies.get('jwt')).then(malades=>{
            this.setState({
                positifCases: malades,
                loading : this.state.loading+1
            }, () => {
            console.log(this.state.positifCases)
            })
        });

        GetMaladeEtat('Negatif',cookies.get('jwt')).then(malades=>{
            this.setState({
                negatifCases: malades,
                loading : this.state.loading+1
            }, () => {
            console.log(this.state.negatifCases)
            })
        });

        GetMaladeEtat('Gueri',cookies.get('jwt')).then(malades=>{
            this.setState({
                healdCases: malades,
                loading : this.state.loading+1
            }, () => {
            console.log(this.state.healdCases)
            })
        });
    }

    togglePatientModal() {
        this.setState({
            patientModal: !this.state.patientModal
        })
    }

    getPatientData(data) {
        console.log(data)
        this.setState({
            patientData: {
                nom: data.nom,
                prenom: data.prenom,
                siege: data.siege,
                adresse: data.adresse,
                etat: data.etat,
                tel: data.tel,
                dateAjout: data.dateAjout,
                dateNaissance: data.dateNaissance,
                sexe: data.sexe
            },
            patientModal: !this.state.patientModal
        })
    }

    render() {
        
        let suspeciousPatients = this.state.suspects.map((patient, index) => {  
            const popup =(
                <Popover id='malade'>
                    <Popover.Content>
                        <button onClick={this.getPatientData.bind(this,patient)}> Details </button>
                        <button onClick={e=> {
                            const {history} =this.props ;
                            history.push({
                                pathname :"/forms/form-basic",
                                patient,
                                modify : true
                            })
                        }}>  Modifier </button>
                        <button onClick={e=>{
                            const {cookies} = this.props;
                            DeleteMalade(patient,cookies.get('jwt'))
                        }}>  Supprimer</button>
                    </Popover.Content>
                </Popover>
            )
            return (
                <OverlayTrigger 
                key={index}
                trigger='click'
                show={this.state.patientModal}
                placement ='bottom'
                overlay={popup}         
                delay='10'           
                >
                    <tr key={index} >
                    <th scope="row">{index+1}</th>
                    <td>{patient.prenom}</td>
                    <td>{patient.nom}</td>
                    <td>{patient.tel}</td>
                    <td>{patient.siege}</td>
                    <td>{patient.dateAjout}</td>
                    <td>{patient.sexe}</td>
                </tr>
                </OverlayTrigger>
            )
        })
        let positifPatients = this.state.positifCases.map((patient, index) => {
            const popup =(
                <Popover id='malade'>
                    <Popover.Content>
                        <button onClick={this.getPatientData.bind(this,patient)}> Details </button>
                        <button onClick={e=> {
                            const {history} =this.props ;
                            history.push({
                                pathname :"/forms/form-basic",
                                patient,
                                modify : true
                            })
                        }}>  Modifier </button>
                        <button onClick={e=>{
                            const {cookies} = this.props;
                            DeleteMalade(patient,cookies.get('jwt'))
                        }}>  Supprimer</button>
                    </Popover.Content>
                </Popover>
            )
            return (
                <OverlayTrigger 
                key={index}
                trigger='click'
                show={this.state.patientModal}
                placement ='bottom'
                overlay={popup}         
                delay='10'           
                >
                    <tr key={index} >
                    <th scope="row">{index+1}</th>
                    <td>{patient.prenom}</td>
                    <td>{patient.nom}</td>
                    <td>{patient.tel}</td>
                    <td>{patient.siege}</td>
                    <td>{patient.dateAjout}</td>
                    <td>{patient.sexe}</td>
                </tr>
                </OverlayTrigger>
            )
        })
        let NegatifPatients = this.state.negatifCases.map((patient, index) => {
            const popup =(
                <Popover id='malade'>
                    <Popover.Content>
                        <button onClick={this.getPatientData.bind(this,patient)}> Details </button>
                        <button onClick={e=> {
                            const {history} =this.props ;
                            history.push({
                                pathname :"/forms/form-basic",
                                patient,
                                modify : true
                            })
                        }}>  Modifier </button>
                        <button onClick={e=>{
                            const {cookies} = this.props;
                            DeleteMalade(patient,cookies.get('jwt'))
                        }}>  Supprimer</button>
                    </Popover.Content>
                </Popover>
            )
            return (
                <OverlayTrigger 
                key={index}
                trigger='click'
                show={this.state.patientModal}
                placement ='bottom'
                overlay={popup}         
                delay='10'           
                >
                    <tr key={index} >
                    <th scope="row">{index+1}</th>
                    <td>{patient.prenom}</td>
                    <td>{patient.nom}</td>
                    <td>{patient.tel}</td>
                    <td>{patient.siege}</td>
                    <td>{patient.dateAjout}</td>
                    <td>{patient.sexe}</td>
                </tr>
                </OverlayTrigger>
            )
        })
        let healdPatients = this.state.healdCases.map((patient, index) => {
            const popup =(
                <Popover id='malade'>
                    <Popover.Content>
                        <button onClick={this.getPatientData.bind(this,patient)}> Details </button>
                        <button onClick={e=> {
                            const {history} =this.props ;
                            history.push({
                                pathname :"/forms/form-basic",
                                patient,
                                modify : true
                            })
                        }}>  Modifier </button>
                        <button onClick={e=>{
                            const {cookies} = this.props;
                            DeleteMalade(patient,cookies.get('jwt'))
                        }}>  Supprimer</button>
                    </Popover.Content>
                </Popover>
            )
            return (
                <OverlayTrigger 
                key={index}
                trigger='click'
                show={this.state.patientModal}
                placement ='bottom'
                overlay={popup}         
                delay='10'           
                >
                    <tr key={index} >
                    <th scope="row">{index+1}</th>
                    <td>{patient.prenom}</td>
                    <td>{patient.nom}</td>
                    <td>{patient.tel}</td>
                    <td>{patient.siege}</td>
                    <td>{patient.dateAjout}</td>
                    <td>{patient.sexe}</td>
                </tr>
                </OverlayTrigger>
            )
        })

        return (
            <>
                <Modal className="modal-Body" isOpen={this.state.patientModal} toggle={this.togglePatientModal.bind(this)}>
                    <ModalHeader toggle={this.togglePatientModal.bind(this)}>Détails du patient</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs={6}>
                                <h6>Prénom</h6>
                                <p>{this.state.patientData.prenom}</p>
                            </Col>
                            <Col xs={6}>
                                <h6>Nom</h6>
                                <p>{this.state.patientData.nom}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <h6>Date de naissance</h6>
                                <p>{this.state.patientData.dateNaissance}</p>
                            </Col>
                            <Col xs={6}>
                                <h6>Adresse</h6>
                                <p>{this.state.patientData.adresse}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <h6>Siége</h6>
                                <p>{this.state.patientData.siege}</p>
                            </Col>
                            <Col xs={6}>
                                <h6>Date d'ajout</h6>
                                <p>{this.state.patientData.dateAjout}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <h6>Numéro de Téléphone</h6>
                                <p>{this.state.patientData.tel}</p>
                            </Col>
                            <Col xs={6}>
                                <h6>Etat</h6>
                                <p>{this.state.patientData.etat}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <h6>Sexe</h6>
                                <p>{this.state.patientData.sexe}</p>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
                <Aux>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="suspects" id="uncontrolled-tab-example">
                                <Tab eventKey="suspects" title="Cas suspects">
                                {
                                        this.state.loading>=4 ? this.state.suspects.length>0 ? 
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h5">Liste des cas Suspects</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <Table responsive hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Prénom</th>
                                                            <th>Nom</th>
                                                            <th>Téléphone</th>
                                                            <th>Siége</th>
                                                            <th>Date</th>
                                                            <th>Sexe</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ cursor: "pointer" }}>
                                                        {suspeciousPatients}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card> :
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h5">Aucun malade n'est Suspect</Card.Title>
                                            </Card.Header>
                                        </Card> :
                                        <Spinner animation="border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    }
                                </Tab>
                                <Tab eventKey="positif" title="Cas positifs">
                                {
                                        this.state.loading>=4 ? this.state.positifCases.length>0 ? 
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h5">Liste des cas testés Positifs</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <Table responsive hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Prénom</th>
                                                            <th>Nom</th>
                                                            <th>Téléphone</th>
                                                            <th>Siége</th>
                                                            <th>Date</th>
                                                            <th>Sexe</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ cursor: "pointer" }}>
                                                        {positifPatients}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card> :
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h5">Aucun malade n'est testé Positif</Card.Title>
                                            </Card.Header>
                                        </Card> :
                                        <Spinner animation="border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    }
                                </Tab>
                                <Tab eventKey="negatif" title="Cas négatifs">
                                    {
                                        this.state.loading>=4 ? this.state.negatifCases.length>0 ? 
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h5">Liste des cas testés négatifs</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <Table responsive hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Prénom</th>
                                                            <th>Nom</th>
                                                            <th>Téléphone</th>
                                                            <th>Siége</th>
                                                            <th>Date</th>
                                                            <th>Sexe</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ cursor: "pointer" }}>
                                                        {NegatifPatients}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card> :
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h5">Aucun malade n'est testé Negatif</Card.Title>
                                            </Card.Header>
                                        </Card> :
                                        <Spinner animation="border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    }
                                </Tab>
                                <Tab eventKey="gueris" title="Cas guéris">
                                {
                                        this.state.loading>=4 ? this.state.healdCases.length>0 ? 
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h5">Liste des cas Gueries</Card.Title>
                                            </Card.Header>

                                            <Card.Body>
                                                <Table responsive hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Prénom</th>
                                                            <th>Nom</th>
                                                            <th>Téléphone</th>
                                                            <th>Siége</th>
                                                            <th>Date</th>
                                                            <th>Sexe</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ cursor: "pointer" }}>
                                                        {healdPatients}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card> :
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h5">Aucun malade n'est Gueri</Card.Title>
                                            </Card.Header>
                                        </Card> :
                                        <Spinner animation="border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    }
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Aux>
            </>
        );
    }
}

export default withCookies(BootstrapTable);