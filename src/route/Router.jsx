import {
  createBrowserRouter,
 
} from "react-router";
import MainLayouts from "../pages/maynlayouts/MainLayouts";

import About from "../pages/about/About";
import Academic from "../pages/academic/Academic";


import Gallery from "../pages/galary/Gallery";
import Teachers from "../components/teachers/Teachers";
import TeacherDetails from "../components/teachers/TeacherDetails";
import Login from "../authentification/login/Login";
import Register from "../authentification/register/Register";
import SocialLogin from "../authentification/SocialLogin";
import AdminRoute from "../pages/dashboard/AdminRoute";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddTeacher from "../pages/dashboard/AddTeacher";
import ManageUsers from "../pages/dashboard/ManageUsers";
import ManageContent from "../pages/dashboard/ManageContent";
import AddMemory from "../pages/galary/AddMemory";
import TimeTable from "../timetable/TimeTable";
import Home from "../pages/home/Home";
import EventsPage from "../pages/EventsPage";



export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [{
      index: true,
      Component: Home
    },
    {
      path: '/about',
      Component: About

      },
    {
        path: 'gallery-submissions',
        Component:AddMemory
      },
      
    {
      path: '/academics',
      Component: Academic
    }
      , {
      path: '/galary',
      Component: Gallery
      }
      , {
        path: "/events",
        Component:EventsPage,
      }
      , {
      path: "/teachers",
      Component: Teachers
    },
    {
      path: "/teachers/:id",
      Component: TeacherDetails
      },
      {
        path: "/timetable",
        Component:TimeTable
      
    },
    {
      path: 'login',
      Component: Login
    },
    {
      path: 'register',
      Component: Register
    },
    {
      path: "/socialLogin",
      Component: SocialLogin
    },
      {
        path: "/dashboard",
        element: <AdminRoute><DashboardLayout /></AdminRoute>,
        children: [
          {
            index: true,
            Component:DashboardHome
          },
          
         {   path:"add-teacher",
            Component: AddTeacher
          },
          {
            path: "manage-users",
            Component:ManageUsers
          },
          {
            path: "manage-content",
            Component:ManageContent
          }
        ]
    }
      
    
    
    ]
    
    
  },
]);