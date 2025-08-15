import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Cart from './Pages/Cart.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },

      // All products
      { path: "/shop", element: <Shop /> },

      // Filtered by category
      { path: "/shop/:categoryId", element: <Shop /> },
      { path: "/contact", element: <Contact></Contact> },

  { path: "/cart", element:<Cart></Cart> },
      { path: "/login", element: <Login /> },
       { path: "/register", element: <Register></Register> },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>Loading...</div>}>
    <AuthProvider>
<RouterProvider router={router} />
    </AuthProvider>
    
  </Suspense>
);
