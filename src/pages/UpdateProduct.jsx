import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateProduct = () => {
    const storedProducts = useLoaderData();
    const [product, setProduct] = useState({storedProducts});

    const handleToUpdateProduct=event=>{
        event.preventDefault();
        console.log(product);
        
        fetch(`http://localhost:5000/products/${storedProducts._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('Updated successfully')
            }
        })

    }

    const handleOnChange =event=>{
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = {...product}
        newProduct[field] = value;
        setProduct(newProduct);
    

    }

    return (
        
       <div>
            <h2>Update Product {storedProducts.name}</h2>
            <Form onSubmit={handleToUpdateProduct} className='w-50 mx-auto'>
            <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control onChange={handleOnChange}  name="name" defaultValue={storedProducts.name} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control onChange={handleOnChange} name="photoURL" defaultValue={storedProducts.photoURL} type="photo URl" placeholder="Photo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={handleOnChange} name="price" defaultValue={storedProducts.price} type="text" placeholder="Product Price $" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control onChange={handleOnChange} name="quantity" defaultValue={storedProducts.quantity} type="text" placeholder="Quantity" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
       </div>
    );
};

export default UpdateProduct;