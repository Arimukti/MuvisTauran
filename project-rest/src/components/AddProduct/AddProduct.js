import React, { useEffect, useState } from 'react';
import "./AddProduct.css";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getListProduct, updateProduct } from '../../store/actions/productAction';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [CategoryId, setCategoryId] = useState('');
    const { addProductResult, detailProductResult, updateProductResult } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        alert("berfungsi dengan baik untuk add product");
        dispatch(addProduct({ name: name, imgUrl: imgUrl, price: price, description: description, CategoryId: CategoryId }));
        // navigate('/product');

    };

    useEffect(() => {
        if (addProductResult) {
            dispatch(getListProduct());
            setName('');
            setImgUrl('');
            setPrice('');
            setDescription('');
            setCategoryId('');
        }
    }, [addProductResult, dispatch]);

    useEffect(() => {
        if (detailProductResult) {
            setName(detailProductResult.name);
            setImgUrl(detailProductResult.imgUrl);
            setPrice(detailProductResult.price);
            setCategoryId(detailProductResult.CategoryId);
        }
    }, [detailProductResult, dispatch]);

    useEffect(() => {
        if (updateProductResult) {
            dispatch(getListProduct());
            setName('');
            setImgUrl('');
            setPrice('');
            setDescription('');
            setCategoryId('');
        }
    }, [updateProductResult, dispatch]);

    return (
        <div className='addProduct'>
            <h1>Add Product</h1>
            <form className='form-add' onSubmit={submitHandler}>
                <input type="text" name="name" placeHolder="Name . . . ." onChange={(event) => setName(event.target.value)} />
                <input type="text" name="imgUrl" placeHolder="Image Url . . ." onChange={(event) => setImgUrl(event.target.value)} />
                <input type="text" name="price" placeHolder="Price . . ." onChange={(event) => setPrice(+event.target.value)} />
                <input type="text" name="description" placeHolder="Description . . ." onChange={(event) => setDescription(event.target.value)} />
                <select name="CategoryId" value={CategoryId} onChange={(event) => setCategoryId(event.target.value)}>
                    <option selected>Choose One</option>
                    <option value="1">Food</option>
                    <option value="2">Drink</option>
                </select>
                <button className='btn-submit' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;