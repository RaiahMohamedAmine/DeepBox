import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';


import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    render() {
        return (
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
                                            <tbody>
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
                                            <tbody>
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
                                            <tbody>
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
                                            <tbody>
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
        );
    }
}

export default BootstrapTable;