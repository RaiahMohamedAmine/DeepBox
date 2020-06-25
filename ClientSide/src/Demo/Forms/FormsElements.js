import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Input, FormGroup } from 'reactstrap'
import axios from 'axios'
import Formsy from 'formsy-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Aux from "../../hoc/_Aux";
import AddMalade from '../../middleware/malade/AddMalade';
import { withCookies } from 'react-cookie';

class FormsElements extends React.Component {
    state = {
        patientData: {
            nom: "",
            prenom: "",
            adresse: "",
            siege: "",
            dateAjout: "",
            dateNaissance: "",
            etat: "Suspect",
            tel: "",
            sexe: "Homme",
        },
        canSubmit: false
    }
    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    addPatient() {
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
        var phone = this.state.patientData.tel.slice(3)
        var { patientData } = this.state
        patientData.dateAjout = today
        patientData.tel = phone
        this.setState({ patientData })
        let patient = this.state.patientData
        console.log(patient)
        const {cookies} = this.props;
        AddMalade(patient,cookies.get('jwt'));
    }

    render() {
        return (

            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Ajout d'un cas suspect</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Ce formulaire permet de signaler tout cas suspect au niveau de votre
                                établissement.
                                </h5>
                                <hr />
                                <Formsy onValidSubmit={this.addPatient.bind(this)}
                                    onValid={this.enableButton.bind(this)}
                                    onInvalid={this.disableButton.bind(this)}>
                                    <Row >
                                        <Col xs={6}>
                                            <FormGroup>
                                                <h6>Nom</h6>
                                                <Input
                                                    placeholder="Nom"
                                                    type="text"
                                                    required
                                                    pattern="[A-Za-z, ]*"
                                                    title="Lettres uniquement !"
                                                    onChange={(e) => {
                                                        var { patientData } = this.state
                                                        patientData.nom = e.target.value
                                                        this.setState({ patientData })
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <h6>Prénom</h6>
                                                <Input
                                                    placeholder="Prénom"
                                                    type="text"
                                                    required
                                                    pattern="[A-Za-z, ]*"
                                                    title="Lettres uniquement !"
                                                    onChange={(e) => {
                                                        var { patientData } = this.state
                                                        patientData.prenom = e.target.value
                                                        this.setState({ patientData })
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <h6>Date de naissance</h6>
                                                <Input
                                                    placeholder="dd-mm-yyyy"
                                                    type="date"
                                                    min="01-01-1900" max="31-12-2030"
                                                    required
                                                    pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                                                    title="Veuillez suivre le format correct !"
                                                    onChange={(e) => {
                                                        var { patientData } = this.state
                                                        patientData.dateNaissance = e.target.value
                                                        this.setState({ patientData })
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <h6>Téléphone</h6>
                                                <PhoneInput
                                                    country={'dz'}
                                                    value={this.state.patientData.tel}
                                                    onChange={phone => {
                                                        var { patientData } = this.state
                                                        patientData.tel = phone
                                                        this.setState({ patientData })
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <h6>Adresse</h6>
                                                <Input
                                                    placeholder="Adresse"
                                                    type="text"
                                                    required
                                                    pattern="[A-Za-z, ]*"
                                                    title="Lettres uniquement !"
                                                    onChange={(e) => {
                                                        var { patientData } = this.state
                                                        patientData.adresse = e.target.value
                                                        this.setState({ patientData })
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <h6>Sexe</h6>
                                                <Input
                                                    type="select"
                                                    onChange={(e) => {
                                                        var { patientData } = this.state
                                                        patientData.sexe = e.target.value
                                                        this.setState({ patientData })
                                                    }}
                                                >
                                                    <option value="Homme">Homme</option>
                                                    <option value="Femme">Femme</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row >
                                        <Col xs={6}>
                                            <FormGroup>
                                                <h6>Siége</h6>
                                                <Input
                                                    placeholder="Etablissement hospitalier"
                                                    type="text"
                                                    required
                                                    pattern="[A-Za-z, ]*"
                                                    title="Lettres uniquement !"
                                                    onChange={(e) => {
                                                        var { patientData } = this.state
                                                        patientData.siege = e.target.value
                                                        this.setState({ patientData })
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <h6>État</h6>
                                                <Input
                                                    type="select"
                                                    onChange={(e) => {
                                                        var { patientData } = this.state
                                                        patientData.etat = e.target.value
                                                        this.setState({ patientData })
                                                    }}
                                                >
                                                    <option value="Suspect">Suspect</option>
                                                    <option value="Positif">Positif</option>
                                                    <option value="Negatif">Négatif</option>
                                                    <option value="Gueri">Guéri</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                    <Row>

                                        <Col xs={6}>
                                            <br />
                                            <FormGroup>
                                                <Button color="warning" className="btn-round" type="submit">Ajouter !</Button>
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                </Formsy>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default withCookies(FormsElements);
