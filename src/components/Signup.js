import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mt-2'>Sign Up</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id='password-confirmation'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button className='w-100 text-center mt-2' type='submit'>Submit</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? Log In
        </div>
    </>
  )
}

export default Signup