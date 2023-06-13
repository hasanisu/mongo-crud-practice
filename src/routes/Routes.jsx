import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";
import UpdateProduct from "../pages/UpdateProduct";

  export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/products')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/updateProduct:id',
                element: <UpdateProduct></UpdateProduct>
            }
        ]
        
    }
  ])