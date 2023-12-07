import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import AllnewUser from "./AllnewUser";


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
        }
  
        
        
       


  
      ]
    },
  ]);
export default router  