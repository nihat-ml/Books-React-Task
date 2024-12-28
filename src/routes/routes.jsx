import AddBook from "../pages/Admin/AddBook";
import AdminRoot from "../pages/Admin/AdminRoots";
import BookDetail from "../pages/Admin/BookDetail";
import DashBoard from "../pages/Admin/DashBoard";
import EditBook from "../pages/Admin/EditBook";
import Basket from "../pages/User/Basket";
import Books from "../pages/User/Books";
import {Books as AdminBook} from "../pages/Admin/Books"
import BooksDetail from "../pages/User/BooksDetail";
import Favorites from "../pages/User/Favorites";
import Home from "../pages/User/Home";
import UserRoot from "../pages/User/UserRoots";

const ROUTES = [
    {
        path: "/",
        element: <UserRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/books",
                element: <Books/>
            },
            {
                path: "/books/:id",
                element: <BooksDetail/>
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },

        ]
    },

    {
        path: "/admin",
        element:<AdminRoot/>,
        children:[{
                path:"",
                element:<DashBoard/>
            },
            {
                path:"adminbook",
                element:<AdminBook/>
            },
            {
                path:"addbook",
                element:<AddBook/>
            },
            {
                path: "books/:id",
                element: <BookDetail/>
            },
            {
                path: "editbook",
                element: <EditBook/>
            },
        ]

    }
]


export default ROUTES