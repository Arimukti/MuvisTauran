import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../CardProduct/CardProduct';
import { deleteProduct, getListProduct, detailProduct } from '../../store/actions/productAction';
import "./ListProduct.css";
import { useNavigate } from 'react-router-dom';
import SweetAlert2 from 'react-sweetalert2';


function ListProduct() {
    const { isLogin, getListProductResult, getListProductLoading, getListProductError, deleteProductResult } = useSelector((state) => state.ProductReducer);
    const [swalProps, setSwalProps] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        //panggil action getListProduct
        console.log("1. useEffect did mount");
        dispatch(getListProduct());
    }, [dispatch]);

    useEffect(() => {
        if (deleteProductResult) {
            dispatch(getListProduct());
        }
    }, [deleteProductResult, dispatch]);

    function detailHandler(data) {
        if (isLogin) {
            navigate(`/product/${data}`);
        } else {
            // setSwalProps({
            //     show: true,
            //     title: 'Not Authorized',
            //     text: 'Please Login....',
            // });
            // dispatch(setSwalProps());
        }
    }

    return (
        <div>
            <h1>List of Menu</h1>
            {getListProductResult ? (
                getListProductResult.map((product) => {
                    return (
                        <CardProduct key={product.id} data={product} detail={detailHandler} />
                    );
                })
            ) : getListProductLoading ? (
                <p>Loading . . . . </p>
            ) : (
                <p1> {getListProductError ? getListProductError : "data kosong"}</p1>
            )}
            <SweetAlert2 {...swalProps} />
        </div>

    );
}

export default ListProduct;