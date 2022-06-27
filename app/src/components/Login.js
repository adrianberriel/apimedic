import React, {useEffect} from "react";
import {Form, Button, Container, Row, Col, Card} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import {getToken, login} from "../services/auth.service";
import {displayErrors} from "../helpers/errors";
import { useHistory } from "react-router-dom";

export default function Login() {
    const {setError, handleSubmit, control, reset, formState: {errors}, getValues} = useForm();
    let history = useHistory();

    useEffect(() => {
        console.log('Login -> getToken() ', getToken());
    }, []);

    const onSubmit = data => {
        const { email, password } = data;
        // console.log(data);
        return login(email, password).then(
            () => {
                history.push("/symptoms");
                // window.location.reload();
            }
        ).catch(error =>
            console.log(error));
    }

    return (
        // <Form onSubmit={handleSubmit(onSubmit)}>
        //     <Input {...register("firstName", {required: true, maxLength: 20})} />
        //     <Input {...register("lastName", {pattern: /^[A-Za-z]+$/i})} />
        //     <Input type="number" {...register("age", {min: 18, max: 99})} />
        //     <Input type="submit"/>
        // </Form>
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            Login
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Controller control={control} name="email"
                                                defaultValue=""
                                                render={({field: {onChange, onBlur, value, ref}}) => (
                                                    <Form.Control onChange={onChange} value={value} ref={ref}
                                                                  type="email"
                                                                  isInvalid={errors.email}
                                                                  placeholder="Enter email"/>)}/>
                                    <Form.Text className="text-muted">We need a valid email address.</Form.Text>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Controller control={control} name="password"
                                                defaultValue=""
                                                render={({field: {onChange, onBlur, value, ref}}) => (
                                                    <Form.Control
                                                        onChange={onChange} value={value} ref={ref} type="password"
                                                        isInvalid={errors.password}
                                                        placeholder="Enter password"/>
                                                )}/>
                                    <Form.Text className="text-muted">Don't forget it!!</Form.Text>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*<Form.Group className="mb-3" controlId="password">*/}
                                {/*<Controller control={control}*/}
                                {/*            render={({field: {ref}, formState}) => (*/}
                                {/*                <Button type="submit" disabled={formState.isSubmitting}*/}
                                {/*                        className="btn btn-primary">*/}
                                {/*                    {formState.isSubmitting &&*/}
                                {/*                        <span className="spinner-border spinner-border-sm mr-1"/>}*/}
                                {/*                    Save*/}
                                {/*                </Button>*/}
                                {/*                // <div></div>*/}
                                {/*            )}*/}
                                {/*/>*/}
                                {/*</Form.Group>*/}
                                <input type="submit" />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};