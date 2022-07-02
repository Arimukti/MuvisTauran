import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import React from "react";
import { useState } from 'react';

function AddProduct() {
    const [add, setAdd] = useState({
        name: "",
        imgUrl: "",
        price: "",
        CategoryId: ""
    });
    const navigate = useNavigate();

    function submitHandler(event) {
        console.log(add);
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(add)
        };
        fetch("http://localhost:3000/products", requestOptions)
            .then(response => response.json())
            .then(res => navigate('/product'))
            .catch(err => console.log(err));
    };

    return (
        <Form >
            <p>Add Product</p>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={add.name} placeholder="Enter name" onChange={(e) => setAdd((state) => ({ ...state, name: e.target.value }))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imgUrl">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" value={add.imgUrl} placeholder="http://image.jpg" onChange={(e) => setAdd((state) => ({ ...state, imgUrl: e.target.value }))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" value={add.price} placeholder="ex. 20000" onChange={(e) => setAdd((state) => ({ ...state, price: +e.target.value }))} />
            </Form.Group>
            <Form.Select aria-label="Category" value={add.CategoryId} onChange={(e) => setAdd((state) => ({ ...state, CategoryId: e.target.value }))}>
                <option>Select One</option>
                <option value="1">Food</option>
                <option value="2">Drink</option>
            </Form.Select>
            <Button variant="primary" type="submit" onClick={submitHandler}>
                Submit
            </Button>
        </Form>
    );
}

export default AddProduct;