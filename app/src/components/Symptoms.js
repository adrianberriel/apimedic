import {useEffect, useState} from "react";
import {getSymptoms} from "../services/diagnosis.service";
import {Card, Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";

export default function Symptoms() {
    const [symptomsList, setSymptomsList] = useState([]);
    const [symptom, setSymptom] = useState();

    useEffect(() => {
        getSymptoms()
            .then(res => {
                    setSymptomsList(res.data);
                },
                error => {
                    console.log("getSymptoms() error ", error)
                });
    }, []);

    const handleSelect = (e) => {
        console.log(e);
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
                            <DropdownButton
                                id="symptoms-dropdown"
                                title="Choose a symptom"
                                onSelect={handleSelect}
                            >
                                {symptomsList?.map(s =>
                                    <Dropdown.Item>{s.Name}</Dropdown.Item>
                                )}
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};