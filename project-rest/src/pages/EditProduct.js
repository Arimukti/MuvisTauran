import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import "./EditProduct.css";
import { useNavigate } from "react-router-dom";

function EditDetail() {
    const [dataBefore, setData] = useState([]);
    const [isUpdate, setUpdate] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        fetch('http://localhost:3000/product/' + params.id)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    console.log(dataBefore, "ini data awal");

    const updateHandler = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/product/' + params.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataBefore)
        })
            .then(response => response.json())
            .then(data => setUpdate(true));
    };
    useEffect(() => {
        if (isUpdate) {
            alert('data berhasil di update');
            navigate('/product');
        }
    }, [isUpdate]);
    return (
        <Form>
            <p>Edit Product</p>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={dataBefore.name} onChange={(e) => setData((state) => ({ ...state, name: e.target.value }))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imgUrl">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" placeholder="http://image.jpg" value={dataBefore.imgUrl} onChange={(e) => setData((state) => ({ ...state, imgUrl: e.target.value }))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="ex. 20000" value={dataBefore.price} onChange={(e) => setData((state) => ({ ...state, price: e.target.value }))} />
            </Form.Group>
            <Form.Select aria-label="Category" value={dataBefore.CategoryId} onChange={(e) => setData((state) => ({ ...state, CategoryId: e.target.value }))}>
                <option selected disabled>Select One</option>
                <option value="1">Food</option>
                <option value="2">Drink</option>
            </Form.Select>
            <Button variant="primary" type="submit" onClick={updateHandler}>
                Submit
            </Button>
        </Form>
    );
}

export default EditDetail;