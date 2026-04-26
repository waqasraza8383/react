import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Navbar from './Navbar';
import './App.css'
import LoginForm from './LoginForm'
// Import other components as needed

function App() {
  // Use createBrowserRouter to wrap your route array
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> </>
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/login",
      element: <LoginForm />
    },
    {
      path: "/about",
      element: <About />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App