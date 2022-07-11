import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardProduct.css";
import formatCurrency from '../Helper';

function CardProduct(props) {
    return (
        <Card style={{ width: '18rem' }} className="cardItem" onClick={() => props.detail(props.data.id)}>
            <Card.Img variant="top" src={props.data.imgUrl} />
            <Card.Body>
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Text>
                    {formatCurrency(props.data.price)}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardProduct;