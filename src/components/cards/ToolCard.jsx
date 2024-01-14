import {Card} from 'react-bootstrap';
import './ToolCard.css';

function ToolCard(props) {
    function transformImageToURL(image){
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return(
        <Card key={props.id}>
            <Card.Img variant='top' src={ transformImageToURL(props.img)}/>
            <Card.Body>
                <Card.Title>{props.id} {props.description}</Card.Title>
                <Card.Text>Hire Price: £{props.hire_price}</Card.Text>
                <Card.Text>Category: {props.category}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ToolCard;