import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";

export default function Login() {
    const {handleSubmit, control, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        // <Form onSubmit={handleSubmit(onSubmit)}>
        //     <Input {...register("firstName", {required: true, maxLength: 20})} />
        //     <Input {...register("lastName", {pattern: /^[A-Za-z]+$/i})} />
        //     <Input type="number" {...register("age", {min: 18, max: 99})} />
        //     <Input type="submit"/>
        // </Form>
        <Container> <Row> <Col>
            <Card><Card.Header>Login</Card.Header><Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Controller control={control} name="username"
                        defaultValue=""
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.username}
                                          placeholder="Enter user name" />)} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
                </Card.Body></Card>
        </Col> </Row> </Container>
    );
};