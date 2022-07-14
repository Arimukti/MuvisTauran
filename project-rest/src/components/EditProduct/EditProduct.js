import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProduct, detailProduct, getListProduct } from '../../store/actions/productAction';


function EditProduct() {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState('');
    const [CategoryId, setCategoryId] = useState('');
    const [id, setId] = useState('');


    let { detailProductResult, updateProductResult } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('masuk pak eko');
        // detailProduct(dataDetail);
    }, []);

    console.log(detailProductResult, '=================')
        ;
    console.log(updateProductResult);
    console.log('masuk');

    useEffect(() => {
        if (detailProductResult) {
            setName(detailProductResult.name);
            setImgUrl(detailProductResult.imgUrl);
            setPrice(detailProductResult.price);
            setCategoryId(detailProductResult.CategoryId);
            setId(detailProductResult.id);
        }
    }, [detailProductResult, dispatch]);

    const submitHandler = (event) => {
        event.preventDefault();
        // alert("berfungsi");
        dispatch(updateProduct({ id: id, name: name, imgUrl: imgUrl, price: price, CategoryId: CategoryId }));
        navigate("/product");
    };

    useEffect(() => {
        if (updateProductResult) {
            dispatch(getListProduct);
        }
    }, [updateProductResult, dispatch]);


    return (
        <div className='addProduct'>
            <h1>Edit Product</h1>
            <form className='form-add' onSubmit={submitHandler}>
                <input type="text" name="name" value={name} placeHolder="Name . . . ." onChange={(event) => setName(event.target.value)} />
                <input type="text" name="imgUrl" value={imgUrl} placeHolder="Image Url . . ." onChange={(event) => setImgUrl(event.target.value)} />
                <input type="text" name="price" value={price} placeHolder="Price . . ." onChange={(event) => setPrice(+(event.target.value))} />
                <select name="CategoryId" value={CategoryId} onChange={(event) => setCategoryId(event.target.value)}>
                    <option selected disabled>Choose One</option>
                    <option value="1">Food</option>
                    <option value="2">Drink</option>
                </select>
                <button className='btn-submit' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditProduct;