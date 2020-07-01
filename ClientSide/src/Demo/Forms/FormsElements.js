import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Input, FormGroup } from 'reactstrap'
import Formsy from 'formsy-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Aux from "../../hoc/_Aux";
import AddMalade from '../../middleware/malade/AddMalade';
import ModifyMalade from '../../middleware/malade/ModifyMalade';
import { withCookies } from 'react-cookie';

class FormsElements extends React.Component {
    state = {
        patientData: {
            id: "",
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
        canSubmit: false,
        modify :false
    }
    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    componentDidMount(){
        const {location} = this.props ;
        if (location.modify)
        {
            const patient = location.patient
            this.setState({
                modify :true,
                patientData:{
                    id : patient.id,
                    nom : patient.nom,
                    prenom : patient.prenom,
                    adresse : patient.adresse,
                    siege: patient.siege,
                    dateAjout: patient.dateAjout,
                    dateNaissance: patient.dateNaissance,
                    etat: patient.etat,
                    tel: patient.tel,
                    sexe: patient.sexe,
                }
            },()=>console.log(this.state))
        }
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
        var { patientData } = this.state
        patientData.dateAjout = today
        this.setState({ patientData })
        let patient = this.state.patientData
        console.log(patient)
        const {cookies} = this.props;
        AddMalade(patient,cookies.get('jwt'));
    }

    modifyPatient () {
        let patient = this.state.patientData
        console.log(patient)
        const {cookies} = this.props;
        ModifyMalade(patient,cookies.get('jwt'));
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
                                <h5>{this.state.modify ? "Modifier le malade "+ this.state.patientData.nom + " " +this.state.patientData.prenom: 
                                " Ce formulaire permet de signaler tout cas suspect au niveau de votre établissement."}
                                </h5>
                                <hr />
                                <Formsy onValidSubmit={this.state.modify ? this.modifyPatient.bind(this) : this.addPatient.bind(this)}
                                    onValid={this.enableButton.bind(this)}
                                    onInvalid={this.disableButton.bind(this)}>
                                    <Row>
                                    <Col xs={6}>
                                            <FormGroup>
                                                <h6>Identificateur National</h6>
                                                <Input
                                                    placeholder="Identificateur National"
                                                    type="text"
                                                    required
                                                    disabled={this.state.modify}
                                                    pattern="[0-9, ]*"
                                                    title="Chiffres uniquement !"
                                                    value={this.state.patientData.id}
                                                    onChange={(e) => {
                                                        var { patientData } = this.state
                                                        patientData.id = e.target.value
                                                        this.setState({ patientData })
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col xs={6}>
                                            <FormGroup>
                                                <h6>Nom</h6>
                                                <Input
                                                    placeholder="Nom"
                                                    type="text"
                                                    required
                                                    disabled={this.state.modify}
                                                    pattern="[A-Za-z, ]*"
                                                    title="Lettres uniquement !"
                                                    value={this.state.patientData.nom}
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
                                                    disabled={this.state.modify}
                                                    value={this.state.patientData.prenom}
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
                                                    type="date"
                                                    value={this.state.patientData.dateNaissance}
                                                    disabled={this.state.modify}
                                                    required
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
                                                <Input
                                                    placeholder='Numéro de téléphone'
                                                    pattern='0[5-7][0-9]{8}'
                                                    title="Veuilez donnez un Numéro de téléphone Valide "
                                                    required
                                                    value={this.state.patientData.tel}
                                                    onChange={e => {
                                                        var { patientData } = this.state
                                                        patientData.tel = e.target.value
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
                                                    value={this.state.patientData.adresse}
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
                                                    disabled={this.state.modify}
                                                    value={this.state.patientData.sexe}
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
                                                    value={this.state.patientData.siege}
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
                                                    value={this.state.patientData.etat}
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
                                                <Button color="warning" className="btn-round" type="submit">{this.state.modify ? "Modifier !" : "Ajouter !"}</Button>
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
