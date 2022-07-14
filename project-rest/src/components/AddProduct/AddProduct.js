import React, { useEffect, useState } from 'react';
import "./AddProduct.css";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getListProduct, updateProduct } from '../../store/actions/productAction';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState('');
    const [CategoryId, setCategoryId] = useState('');
    //id untuk update
    const [id, setId] = useState('');
    const { addProductResult, detailProductResult, updateProductResult } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        // alert("berfungsi");
        dispatch(addProduct({ name: name, imgUrl: imgUrl, price: price, CategoryId: CategoryId }));
        navigate('/product');

    };

    useEffect(() => {
        if (addProductResult) {
            dispatch(getListProduct());
            setName('');
            setImgUrl('');
            setPrice('');
            setCategoryId('');
        }
    }, [addProductResult, dispatch]);

    useEffect(() => {
        if (detailProductResult) {
            setName(detailProductResult.name);
            setImgUrl(detailProductResult.imgUrl);
            setPrice(detailProductResult.price);
            setCategoryId(detailProductResult.CategoryId);
            setId(detailProductResult.id);
        }
    }, [detailProductResult, dispatch]);

    useEffect(() => {
        if (updateProductResult) {
            dispatch(getListProduct());
            setName('');
            setImgUrl('');
            setPrice('');
            setCategoryId('');
        }
    }, [updateProductResult, dispatch]);

    return (
        <div className='addProduct'>
            <h1>{detailProductResult.id ? "Edit Product" : "Add Product"}</h1>
            <form className='form-add' onSubmit={submitHandler}>
                <input type="text" name="name" value={name} placeHolder="Name . . . ." onChange={(event) => setName(event.target.value)} />
                <input type="text" name="imgUrl" value={imgUrl} placeHolder="Image Url . . ." onChange={(event) => setImgUrl(event.target.value)} />
                <input type="text" name="price" value={price} placeHolder="Price . . ." onChange={(event) => setPrice(+event.target.value)} />
                <select name="CategoryId" value={CategoryId} nChange={(event) => setCategoryId(event.target.value)}>
                    <option selected disabled>Choose One</option>
                    <option value="1">Food</option>
                    <option value="2">Drink</option>
                </select>
                <button className='btn-submit' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;