import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Input, FormGroup } from 'reactstrap'
import axios from 'axios'
import Formsy from 'formsy-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {
    state = {
        patientData: {
            nom: "",
            prenom: "",
            adresse: "",
            siege: "",
            dateAjout: "",
            dateNaissance: "",
            etat: "",
            tel: "",
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
        axios.post('http://localhost:5200/malade/add', { patient })
            .then((response) => {
                alert(patient.prenom + " " + patient.nom + " a été ajouté !")
            })
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
                                            <h6>Téléphone</h6>
                                                <PhoneInput
                                                    country={'dz'}
                                                    value={this.state.patientData.id}
                                                    onChange={phone => {
                                                        var { patientData } = this.state
                                                        patientData.tel = phone
                                                        this.setState({ patientData })
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6}>
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
                                                <option value="Négatif">Négatif</option>
                                                <option value="Guéris">Guéri</option>
                                            </Input>
                                        </Col>
                                        <Col xs={6}>
                                            <br />
                                            <FormGroup>
                                                <Button color="warning" className="btn-round" type="submit">Ajouter !</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Formsy>
                                                                {/** 
                                <h5 className="mt-5">Sizing</h5>
                                <hr />
                                <Row>
                                    <Col md={6}>
                                        <Form.Control size="lg" type="text" placeholder="Large text" className="mb-3" />
                                        <Form.Control type="text" placeholder="Normal text" className="mb-3" />
                                        <Form.Control size="sm" type="text" placeholder="Small text" className="mb-3" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control size="lg" as="select" className="mb-3">
                                            <option>Large select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        <Form.Control as="select" className="mb-3">
                                            <option>Default select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Inline</h5>
                                <hr />
                                <Row>
                                    <Col>
                                        <Form inline>
                                            <Form.Group className="mb-2">
                                                <Form.Label srOnly>Email</Form.Label>
                                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                            </Form.Group>
                                            <Form.Group className="mb-2 mr-5">
                                                <Form.Label srOnly>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Button className="mb-0">Confirm Identity</Button>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <h3 className="mt-5">Checkboxes and Radios</h3>
                                <Row>
                                    <Col md={12}>
                                        <h5 className="mt-5">Checkboxes</h5>
                                        <hr />
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                type="checkbox"
                                                id="checkbox1"
                                                label="Check this custom checkbox"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Radios</h5>
                                        <hr />
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="Toggle this custom radio"
                                                name="supportedRadios"
                                                id="supportedRadio3"
                                            />
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="Or toggle this other custom radio"
                                                name="supportedRadios"
                                                id="supportedRadio4"
                                            />
                                        </Form.Group>
                                        <h5 className="mt-3">Inline</h5>
                                        <hr />
                                        <Form.Group>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Toggle this custom radio"
                                                name="supportedRadio"
                                                id="supportedRadio21"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Or toggle this other custom radio"
                                                name="supportedRadio"
                                                id="supportedRadio22"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Range</h5>
                                        <hr />
                                        <Form.Label htmlFor="customRange1">Example range</Form.Label>
                                        <input type="range" className="custom-range" defaultValue="22" id="customRange1" />
                                        <Form.Label htmlFor="customRange2">Example range</Form.Label>
                                        <input type="range" className="custom-range" min="0" defaultValue="3" max="5" id="customRange2" />
                                        <Form.Label htmlFor="customRange3">Example range</Form.Label>
                                        <input type="range" className="custom-range" min="0" defaultValue="1.5" max="5" step="0.5" id="customRange3" />
                                    </Col>
                                </Row>
                            */}
                            </Card.Body>
                        </Card>
                        {/**
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Input Group</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                        <label htmlFor="basic-url">Your vanity URL</label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon3">
                                                    https://example.com/users/
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Amount (to the nearest dollar)" />
                                            <InputGroup.Append>
                                                <InputGroup.Text>.00</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>With textarea</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl as="textarea" aria-label="With textarea" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Sizing</h5>
                                        <hr />
                                        <InputGroup size="sm" className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                        </InputGroup>
                                        <br />
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup>
                                        <br />
                                        <InputGroup size="lg">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Checkboxes and radios</h5>
                                        <hr />
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox" />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Radio aria-label="Radio button for following text input" />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with radio button" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Button Addons</h5>
                                <hr />
                                <Row>
                                    <Col md={6}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button>Button</Button>
                                            </InputGroup.Prepend>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button>Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button>Button</Button>
                                                <Button variant="secondary">Button</Button>
                                            </InputGroup.Prepend>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button variant="secondary">Button</Button>
                                                <Button>Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Buttons With Dropdown</h5>
                                        <hr />
                                        <InputGroup className="mb-3">
                                            <DropdownButton as={InputGroup.Prepend} title="Dropdown" id="input-group-dropdown-1">
                                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                            </DropdownButton>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup>
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />

                                            <DropdownButton as={InputGroup.Append} title="Dropdown" id="input-group-dropdown-2">
                                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                            </DropdownButton>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Segmented  Buttons</h5>
                                        <hr />
                                        <InputGroup className="mb-3">
                                            <Dropdown as={InputGroup.Prepend}>
                                                <Button variant="secondary">Action</Button>
                                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic-1" />
                                                <Dropdown.Menu>
                                                    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup>
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />

                                            <Dropdown as={InputGroup.Append}>
                                                <Button variant="secondary">Action</Button>
                                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic-2" />
                                                <Dropdown.Menu>
                                                    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
*/}
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsElements;
