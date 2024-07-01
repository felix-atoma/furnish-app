import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import About from './pages/about'
import Collection from './pages/collection'
import ContactUs from './pages/contactUs'
import RootLayout from './layouts/rootLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: "about-us",
          element: <About />
        },
        {
          path: "collections",
          element: <Collection />
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
      ]
    }
  ]);


  return (
    <RouterProvider router={router} />
  );
};

export default App
