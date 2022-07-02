import CardProduct from "../components/Card";

import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    function detailHandler(data) {
        navigate(`/product/${data}`);
    }
    return (
        <div className="product">
            {
                data.map((el) => {
                    return (
                        < CardProduct key={el.id} data={el} detail={detailHandler} />
                    );
                })
            }
        </div>
    );
}

export default Home;