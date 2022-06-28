import {useEffect, useState} from "react";
import {getSymptoms, getDiagnosis} from "../services/diagnosis.service";
import {Button, Card, Col, Container, Dropdown, DropdownButton, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import './Symptoms.css';

export default function Symptoms() {
    const [symptomsList, setSymptomsList] = useState([]);
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

    const onSubmit = data => {
        const { symptom, year_of_birth, gender } = data;
        getDiagnosis(symptom, gender, year_of_birth)
            .then(res => {
                console.log(res);
                history.push("diagnosis", res.data);
            })
            .catch(err => console.log(err));
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
                                    <Controller
                                        control={control}
                                        name="symptom"
                                        defaultValue=""
                                        render={({field: {onChange, onBlur, value, ref}}) => (
                                            <DropdownButton
                                                id="symptoms-dropdown"
                                                title="Choose a symptom"
                                                ref={ref}
                                                onSelect={onChange}
                                            >
                                                {symptomsList?.map(s =>
                                                    <Dropdown.Item key={s.ID} eventKey={s.ID}>{s.Name}</Dropdown.Item>
                                                )}
                                            </DropdownButton>
                                        )}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formYearOfBirth">
                                    <Form.Label>Age</Form.Label>
                                    <Controller
                                        control={control}
                                        name="year_of_birth"
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
                                        render={({
                                                     field: {onChange, onBlur, value, name, ref},
                                                     fieldState: {invalid, isTouched, isDirty, error},
                                                     formState,
                                                 }) => (
                                            <Form.Check
                                                onBlur={onBlur} // notify when input is touched
                                                onChange={onChange} // send value to hook form
                                                ref={ref}
                                                type="radio"
                                                id="radio-gender-male"
                                                value="male"
                                                label="Male"
                                                name={name}
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name="gender"
                                        render={({
                                                     field: {onChange, onBlur, value, name, ref},
                                                     fieldState: {invalid, isTouched, isDirty, error},
                                                     formState,
                                                 }) => (
                                            <Form.Check
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                ref={ref}
                                                type="radio"
                                                id="radio-gender-female"
                                                value="female"
                                                label="Female"
                                                name={name}
                                            />
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