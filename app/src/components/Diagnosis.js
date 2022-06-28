import {useState} from "react";
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {login} from "../services/auth.service";

const Issue = ({Accuracy, ID, Icd, IcdName, Name, ProfName, Ranking}) => {
    console.log({ID})
    return (
        <Card>
            <Card.Header>
                Issue
            </Card.Header>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>{ID}</ListGroup.Item>
                    <ListGroup.Item>`Name: ${Name}`</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default function Diagnosis(props) {
    console.log(props.location)
    const diagnosis = props.location.state;
    // const [diagnosis, setDiagnosis] = useState();
    return (
        <Container>
            <Row xs={2} className="justify-content-sm-center">
                <Col>
                    {diagnosis.map(d =>
                        <Issue
                            ID={d.Issue.ID}
                            Name={d.Issue.Name}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    );
}