import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

const Home = () => {
  const products = useLoaderData();
  const [displayProduct, setDisplayProduct] = useState(products);
  
    const handleToDelete = product=>{
        const agree = window.confirm(`are you sure!! you want to delete this product? ${product.name}`)
        if(agree){
            fetch(`http://localhost:5000/products/${product._id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Product deleted successfully')
                    const remainingProduct =  displayProduct.filter(pro => pro._id !== product._id)
                    setDisplayProduct(remainingProduct);
                }
            })
        }
        

    }

    const handleToUpdate =()=>{

    }

  return (
    <div>
      <h2>Here is the all Product list {displayProduct.length}</h2>
      <div className="row row-cols-1 row-cols-lg-2 gap-3 justify-content-center mt-5">
        {displayProduct.map((product) => (
          <Card key={product._id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.photoURL} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              Price: {product.price} <br />
              <span>Quantity: {product.quantity}</span>
            </Card.Text>
            <Link to={`update/${product._id}`}> <Button  variant="primary" >Update</Button> </Link>
            <Button onClick={()=>handleToDelete(product)} variant="danger">Delete</Button>
          </Card.Body>
        </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
