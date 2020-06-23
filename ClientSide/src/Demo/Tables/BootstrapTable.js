import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios'


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
            tel:""
        },
        patientModal: false
    }

    componentWillMount() {
        this.refreshMembers()
    }

    refreshMembers() {
        axios.get('http://localhost:5200/malade/get/Suspect').then((response) => {
            this.setState({
                suspects: response.data.malades
            }, () => {
                console.log(this.state.suspects)
            })
        })
        axios.get('http://localhost:5200/malade/get/Positif').then((response) => {
            this.setState({
                positifCases: response.data.malades
            }, () => {
                console.log(this.state.positifCases)
            })
        })
        axios.get('http://localhost:5200/malade/get/Négatif').then((response) => {
            this.setState({
                negatifCases: response.data.malades
            }, () => {
                console.log(this.state.negatifCases)
            })
        })
        axios.get('http://localhost:5200/malade/get/Guéri').then((response) => {
            this.setState({
                healdCases: response.data.malades
            }, () => {
                console.log(this.state.healdCases)
            })
        })
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
                tel: "0" + data.tel,
                dateAjout: data.dateAjout,
                dateNaissance: data.dateNaissance
            },
            patientModal: !this.state.patientModal
        })
    }

    render() {
        let suspeciousPatients = this.state.suspects.map((patient, index) => {
            return (
                <tr key={index} onClick={this.getPatientData.bind(this, patient)}>
                    <th scope="row">1</th>
                    <td>{patient.prenom}</td>
                    <td>{patient.nom}</td>
                    <td>{patient.tel}</td>
                    <td>{patient.siege}</td>
                    <td>{patient.dateAjout}</td>
                </tr>
            )
        })
        let positifPatients = this.state.positifCases.map((patient, index) => {
            return (
                <tr key={index} onClick={this.getPatientData.bind(this, patient)}>
                    <th scope="row">1</th>
                    <td>{patient.prenom}</td>
                    <td>{patient.nom}</td>
                    <td>{patient.tel}</td>
                    <td>{patient.siege}</td>
                    <td>{patient.dateAjout}</td>
                </tr>
            )
        })
        let NegatifPatients = this.state.negatifCases.map((patient, index) => {
            return (
                <tr key={index} onClick={this.getPatientData.bind(this, patient)}>
                    <th scope="row">1</th>
                    <td>{patient.prenom}</td>
                    <td>{patient.nom}</td>
                    <td>{patient.tel}</td>
                    <td>{patient.siege}</td>
                    <td>{patient.dateAjout}</td>
                </tr>
            )
        })
        let healdPatients = this.state.healdCases.map((patient, index) => {
            return (
                <tr key={index} onClick={this.getPatientData.bind(this, patient)}>
                    <th scope="row">1</th>
                    <td>{patient.prenom}</td>
                    <td>{patient.nom}</td>
                    <td>{patient.tel}</td>
                    <td>{patient.siege}</td>
                    <td>{patient.dateAjout}</td>
                </tr>
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
                                <h6>Adresse</h6>
                                <p>{this.state.patientData.adresse}</p>
                            </Col>
                            <Col xs={6}>
                                <h6>Siége</h6>
                                <p>{this.state.patientData.siege}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <h6>Date d'ajout</h6>
                                <p>{this.state.patientData.dateAjout}</p>
                            </Col>
                            <Col xs={6}>
                                <h6>Date de naissance</h6>
                                <p>{this.state.patientData.dateNaissance}</p>
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
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
                <Aux>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="suspects" id="uncontrolled-tab-example">
                                <Tab eventKey="suspects" title="Cas suspects">
                                    <Card>
                                        <Card.Header>
                                            <Card.Title as="h5">Liste des cas suspects</Card.Title>
                                            <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span>
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
                                                    </tr>
                                                </thead>
                                                <tbody style={{ cursor: "pointer" }}>
                                                    {suspeciousPatients}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                                <Tab eventKey="positif" title="Cas positifs">
                                    <Card>
                                        <Card.Header>
                                            <Card.Title as="h5">Liste des cas testés positif</Card.Title>
                                            <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span>
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
                                                    </tr>
                                                </thead>
                                                <tbody style={{ cursor: "pointer" }}>
                                                    {positifPatients}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                                <Tab eventKey="negeatif" title="Cas négatifs">
                                    <Card>
                                        <Card.Header>
                                            <Card.Title as="h5">Liste des cas testés négatifs</Card.Title>
                                            <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span>
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
                                                    </tr>
                                                </thead>
                                                <tbody style={{ cursor: "pointer" }}>
                                                    {NegatifPatients}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                                <Tab eventKey="gueris" title="Cas guéris">
                                    <Card>
                                        <Card.Header>
                                            <Card.Title as="h5">Liste des cas guérris</Card.Title>
                                            <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span>
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
                                                    </tr>
                                                </thead>
                                                <tbody style={{ cursor: "pointer" }}>
                                                    {healdPatients}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Aux>
            </>
        );
    }
}

export default BootstrapTable;