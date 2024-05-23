import React from 'react'
import Form from 'react-bootstrap/Form';

export const Contacto = () => {
  return (
    <div className='main'>
        <p className='titulo'>Cuentanos, ¿en que te podemos ayudar?</p>
        <Form >
            <Form.Group className="mb-3 FormGroup" controlId="exampleForm.ControlInput1">
                <Form.Label className='formLabel'>Correo:</Form.Label>
                <Form.Control size='lg' className='formControl' type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className='mb-3 FormGroup' controlId='exampleForm.ControlTextarea1'>
                <Form.Label className='formLabel'>Descripción</Form.Label>
                <Form.Control className='formControl' as="textarea" rows={7} />
            </Form.Group>
        </Form>
        <button>enviar</button>
    </div>
  )
}
