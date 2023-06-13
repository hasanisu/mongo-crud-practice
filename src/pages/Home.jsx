import React from 'react';
import {useLoaderData} from 'react-router-dom';


const Home = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h2>Here is the all Product list {products.length}</h2>
        </div>
    );
};

export default Home;