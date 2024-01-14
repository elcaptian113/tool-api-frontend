import {Card, Button} from 'react-bootstrap';
import {deleteTool} from '../../actions/action';
import './ToolCard.css';

function ToolCardDelete(props) {

    
    const deleteById = (e) => {

            let tool = props.rowId
            let response = deleteTool(tool);
            if (response){
                window.location.reload(false);
            }
            console.log(tool);

    }


    function transformImageToURL(image){
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return(
        <Card key={props.id}>
            <Card.Img variant='top' src={ transformImageToURL(props.img)}/>
            <Card.Body>
                <Card.Title>{props.rowId} {props.description}</Card.Title>
                <Card.Text>Hire Price: £{props.hire_price}</Card.Text>
                <Card.Text>Category: {props.category}</Card.Text>
                <Button variant="danger" onClick={deleteById}>Delete Tool</Button>
            </Card.Body>
            
        </Card>
    )
}

export default ToolCardDelete;