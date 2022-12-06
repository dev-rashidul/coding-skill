import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Pages/Blog/Blog";
import Checkout from "../component/Pages/Checkout/Checkout";
import Course from "../component/Pages/Course/Course";
import CourseDetails from "../component/Pages/CourseDetails/CourseDetails";
import Error from "../component/Pages/Error/Error";
import Faq from "../component/Pages/FAQ/Faq";
import Home from "../component/Pages/Home/Home";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import Login from "../component/Shared/Login/Login";
import Register from "../component/Shared/Register/Register";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => {
          return fetch(`https://coding-skill-server.vercel.app/courses`)
        }
      },
      {
        path : '/courses',
        element : <Course></Course>,
        loader : () => {
          return fetch(`https://coding-skill-server.vercel.app/courses`)
        }
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/faq',
        element : <Faq></Faq>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/course/:id',
        element : <CourseDetails></CourseDetails>,
        loader : ({params}) =>{
          return fetch(`https://coding-skill-server.vercel.app/course/${params.id}`)
        }
      },
      {
        path : '/checkout/:id',
        element : <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader : ({params}) =>{
          return fetch(`https://coding-skill-server.vercel.app/course/${params.id}`)
        }
      }
    ],
  },
  {
    path : '*',
    element : <Error></Error>
  }
]);
