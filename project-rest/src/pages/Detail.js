import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Detail.css";
import { useEffect, useState } from "react";
import formatCurrency from "../components/Helper";

function Detail() {
    const { updateProductResult } = useSelector((state) => state.ProductReducer);
    // updateProductResult = false;
    const [dataDetail, setDataDetail] = useState([]);
    // const [deleted, setDeleted] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/products/${params.id}`)
            .then(response => response.json())
            .then(data => setDataDetail(data));
    }, []);

    function formatCurrency(num) {
        console.log(num);
        return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    }

    const deleteHandler = (id) => {
        alert("ini di pages");

        fetch("http://localhost:3000/products/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(res => navigate('/product'))
            // .then(res => setDeleted(true))
            .catch(err => console.log(err));
    };

    // useEffect(() => {
    //     return () => {
    //         console.log('Success delete');
    //         navigate('/product');
    //     };
    // }, []);
    const editHandler = (id) => {
        navigate('/edit/' + id);
    };

    return (
        <div>
            <p1>ini halaman detail product dengan id {params.id}</p1>
            <Card style={{ width: '18rem' }} className="cardDetail">
                <Card.Img variant="top" src={dataDetail.imgUrl} />
                <Card.Body>
                    <Card.Title>{dataDetail.name}</Card.Title>
                    <Card.Text>
                        {dataDetail.price && formatCurrency(dataDetail.price)}
                    </Card.Text>
                    <Button variant="primary" onClick={() => editHandler(dataDetail.id)}>Edit</Button>
                    <Button variant="danger" onClick={() => deleteHandler(dataDetail.id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Detail;