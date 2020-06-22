import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios'


import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    state = {
        patients: [],
        patientDate: {
            nom: "",
            prenom: "",
            tel: "",
            adresse: "",
            siege: "",
            dateAjout: "",
        },
        patientModal: false
    }
    
    componentWillMount() {
        this.refreshMembers()
    }

    refreshMembers() {
        axios.get('http://localhost:5200/malade/get').then((response) => {
          this.setState({
            patients: response.data.malades
          }, () => {
              console.log(this.state.patients)
          })
        })
      }

    togglePatientModal() {
        this.setState({
            patientModal: !this.state.patientModal
        })
    }

    getPatientData() {
        console.log("Before setState : " + this.state.patientModal)
        this.setState({
            patientModal: !this.state.patientModal
        }, () => {
            console.log("After setState : " + this.state.patientModal)
        })

    }

    render() {
        return (
            <>
                <Modal className="modal-Body" isOpen={this.state.patientModal} toggle={this.togglePatientModal.bind(this)}>
                    <ModalHeader toggle={this.togglePatientModal.bind(this)}>Détails du membre</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs={6}>
                                <h6>Prénom</h6>
                                </Col>
                            <Col xs={6}>
                                <h6>Nom</h6>
                                </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <h6>Email</h6>
                                </Col>
                            <Col xs={6}>
                                <h6>Département</h6>
                                <p >
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <h6>Statut</h6>
                            </Col>
                            <Col xs={6}>
                                <h6>Numéro de téléphone</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <h6>Responsabilité</h6>
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
                                                    <tr onClick={this.getPatientData.bind(this)}>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>0654234176</td>
                                                        <td>CHU Batna</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>0754234126</td>
                                                        <td>Mustafa Bacha Alger</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>0654234176</td>
                                                        <td>CHU Batna</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
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
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>0654234176</td>
                                                        <td>CHU Batna</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>0754234126</td>
                                                        <td>Mustafa Bacha Alger</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>0654234176</td>
                                                        <td>CHU Batna</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
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
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>0654234176</td>
                                                        <td>CHU Batna</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>0754234126</td>
                                                        <td>Mustafa Bacha Alger</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>0654234176</td>
                                                        <td>CHU Batna</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
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
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>0654234176</td>
                                                        <td>CHU Batna</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>0754234126</td>
                                                        <td>Mustafa Bacha Alger</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>0654234176</td>
                                                        <td>CHU Batna</td>
                                                        <td>{Date.now()}</td>
                                                    </tr>
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