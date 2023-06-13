import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddProduct = () => {
    const [product, setProduct] = useState({});

    const handleToAddProduct=event=>{
        event.preventDefault();
        console.log(product);
    
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('product has been added succecfully')
                event.target.reset();
            }

        })
    
    }

    const handleOnBlur =event=>{
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = {...product}
        newProduct[field] = value;
        setProduct(newProduct);
    

    }

    return (
        <Form onSubmit={handleToAddProduct} className='w-50 mx-auto'>
            <Form.Group onBlur={handleOnBlur} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control  name="name" type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control onBlur={handleOnBlur} name="photoURL" type="photo URl" placeholder="Photo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control onBlur={handleOnBlur} name="price" type="text" placeholder="Product Price $" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control onBlur={handleOnBlur} name="quantity" type="text" placeholder="Quantity" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AddProduct;