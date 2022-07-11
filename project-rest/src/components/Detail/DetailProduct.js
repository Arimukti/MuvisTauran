import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./DetailProduct.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getListProduct, detailProduct, getProductById } from "../../actions/productAction";

function DetailProduct() {
    const { getListProductResult, getListProductLoading, getListProductError, deleteProductResult, getProductByIdResult } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();
    const [dataDetail, setDataDetail] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getProductById(params.id));
    }, []);

    function formatCurrency(num) {
        return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    }


    useEffect(() => {
        if (deleteProductResult) {
            navigate('/product');
        }
    }, [deleteProductResult, navigate]);

    const editHandler = (id) => {
        dispatch(detailProduct(dataDetail));
        navigate('/edit/' + id);
    };

    return (
        <div>
            <h1>Action for Product</h1>
            <Card style={{ width: '18rem' }} className="cardDetail">
                <Card.Img variant="top" src={getProductByIdResult.imgUrl} />
                <Card.Body>
                    <Card.Title>{getProductByIdResult.name}</Card.Title>
                    <Card.Text>
                        {getProductByIdResult.price && formatCurrency(getProductByIdResult.price)}
                    </Card.Text>
                    <Button variant="primary" className="btn-edit" onClick={() => editHandler(getProductByIdResult.id)}>Edit</Button>
                    <Button variant="danger" className="btn-delete" onClick={() => dispatch(deleteProduct(getProductByIdResult.id))}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DetailProduct;