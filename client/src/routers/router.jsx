import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import Promotions from "../components/Promotions";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/shop",
            element:<Shop/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
          path:"/promo",
          element:<Promotions/>
        },
        {
            path:"/book/:id",
            element:<SingleBook/>, 
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)       
            
        }
     ]
    },
  ]);

  export default router;