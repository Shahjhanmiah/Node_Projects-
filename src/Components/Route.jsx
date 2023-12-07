import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import AllnewUser from "./AllnewUser";
import Login from "./Login";
import Register from "./Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
            path:'/alluser',
            element:<AllnewUser></AllnewUser>
        },
        {
            path:'/login',
            element:<Login></Login>
        
        },
        {
            path:'/Register',
            element:<Register></Register>
        }
  
        
        
       


  
      ]
    },
  ]);
export default router  