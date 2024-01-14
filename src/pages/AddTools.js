import {Form, Container, Button, Alert, Badge} from 'react-bootstrap';
import {addTool} from '../actions/action';
import './AddTools.css';
import { useState } from 'react';

function AddTools(){
    const [description, setDescription] = useState('');
    const [hire_price, setHirePrice] = useState(0);
    const [tool_category_id, setToolCategory] = useState(0);
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const submitData = async(tool) => {
        try{
            let response = await addTool(tool);

            if (response){
                setSuccess(true)
            }
        }
        catch (e){
            setError(e.message);
        }  
    }

    const submitTool = (e) => {
        e.preventDefault();

        setSuccess(false);
        setError('');

        if (description && hire_price && tool_category_id && image){
            let tool = {
                description: description,
                hire_price: hire_price,
                tool_category_id: tool_category_id,
                image: image
            };

            submitData(tool);
        }
        else{
            setError('All fields must contain a value!')
        }
    }
    return(
        <div className='add-tools'>
            <h1><Badge bg="info">$$</Badge>Add Tools<Badge bg="info">$$</Badge></h1>

            <Container>
                <Alert show={success} variant='success'>
                    <Alert.Heading>Success!</Alert.Heading>
                    <p>You have successfully added a new tool to the service!</p>
                </Alert>
                <Alert show={error} variant="danger">
                    <Alert.Heading>An Error has Occurred</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>

            <Container>
                <Form onSubmit={submitTool}>
                    <Form.Group className ='mb-4' controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type = "text" placeholder='Enter Description' onChange={e => setDescription(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='hire_price'>
                        <Form.Label>Hire Price</Form.Label>
                        <Form.Control type = "number" step="0.01" placeholder='0' onChange={e => setHirePrice(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='category_id'>
                        <Form.Label>Category ID</Form.Label>
                        <Form.Control type = "number" placeholder='0' onChange={e => setToolCategory(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='image'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type = "file" onChange={e => setImage(e.target.files[0])} required/>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Add Tool
                    </Button>
                </Form>
            </Container>

        </div>
    );
}


export default AddTools;