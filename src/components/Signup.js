import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

function Signup() {
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mt-2'>Sign Up</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' />
                    </Form.Group>
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