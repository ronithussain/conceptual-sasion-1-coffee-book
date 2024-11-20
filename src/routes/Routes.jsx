import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";
import CoffeeCards from "../components/CoffeeCards";
import CoffeeDetails from "../pages/CoffeeDetails";


const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/', // index: true (setaw deya jay,jodi Home er indore e nested components na thake)
            element: <Home></Home>,
           loader: ()=> fetch('../categories.json'),
           children: [
            {
              path: '/', // etake by default home e card gulo dekhanor jonno copy kora holo..... 
              element:<CoffeeCards></CoffeeCards>,
              loader: ()=> fetch('../coffees.json'),
          },
            {
              path: '/category/:category',
              element:<CoffeeCards></CoffeeCards>,
              loader: ()=> fetch('../coffees.json'),
          }
           ]
        },
        {
            path: '/coffees',
            element: <Coffees></Coffees>,
            loader: ()=> fetch('../coffees.json'),
        },
        {
            path: '/dashboard',
            element: <DashBoard></DashBoard>
        },
        {
            path: '/coffee/:id',
            element: <CoffeeDetails></CoffeeDetails>,
            loader: ()=> fetch('../coffees.json'),

        },
       
      ]
    }
  ])
  
export default routes;