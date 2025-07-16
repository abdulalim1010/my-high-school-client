import {
  createBrowserRouter,
 
} from "react-router";
import MainLayouts from "../pages/maynlayouts/MainLayouts";
import Home from "../pages/home/Hero";
import About from "../pages/about/About";
import Academic from "../pages/academic/Academic";


import Gallery from "../pages/galary/Gallery";
import Teachers from "../components/teachers/Teachers";



export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [{
      index: true,
      Component:Home
    },
      {
        path: '/about',
        Component:About

      }
      ,
      {
        path: '/academics',
        Component:Academic
      }
      , {
        path: '/galary',
        Component:Gallery
      }
      , {
        path: "/teachers",
        Component:Teachers
      }
    
    
    ]
    
    
  },
]);