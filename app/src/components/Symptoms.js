import {useEffect, useState} from "react";
import {getSymptoms} from "../services/diagnosis.service";
import {Button, Card, Col, Container, Dropdown, DropdownButton, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import './Symptoms.css';

export default function Symptoms() {
    const [symptomsList, setSymptomsList] = useState([]);
    const [symptom, setSymptom] = useState();
    const {setError, handleSubmit, control, reset, formState: {errors}, getValues} = useForm();
    let history = useHistory();

    useEffect(() => {
        getSymptoms()
            .then(res => {
                    setSymptomsList(res.data);
                },
                error => {
                    console.log("getSymptoms() error ", error)
                });
    }, []);

    // const handleSelect = (e) => {
    //     setSymptom(e)
    // }

    const onSubmit = data => {
        console.log({data});
    }

    return (
        <Container>
            <Row xs={2} className="justify-content-sm-center">
                <Col>
                    <Card>
                        <Card.Header>
                            Symptoms
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                                <Form.Group className="mb-3" controlId="formSymptom">
                                    <Form.Label>Symptom</Form.Label>
                                    <DropdownButton
                                        id="symptoms-dropdown"
                                        title="Choose a symptom"
                                        // onSelect={handleSelect}
                                    >
                                        {symptomsList?.map(s =>
                                            <Dropdown.Item eventKey={s.ID}>{s.Name}</Dropdown.Item>
                                        )}
                                    </DropdownButton>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formAge">
                                    <Form.Label>Age</Form.Label>
                                    <Controller
                                        control={control}
                                        name="age"
                                        defaultValue=""
                                        render={({field: {onChange, onBlur, value, ref}}) => (
                                            <Form.Control
                                                onChange={onChange}
                                                value={value}
                                                ref={ref}
                                                type="number"
                                                placeholder="Enter age (year of birth)"
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-muted">i.e. 1982</Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Controller
                                        control={control}
                                        name="gender"
                                        defaultValue=""
                                        render={({field: {onChange, onBlur, value, ref}}) => (
                                            <>
                                                <Form.Check
                                                    inline
                                                    label="Male"
                                                    name="gender"
                                                    type="radio"
                                                    id="radio-gender-male"
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Female"
                                                    name="gender"
                                                    type="radio"
                                                    id="radio-gender-female"
                                                />
                                            </>
                                        )}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Get Diagnosis
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};