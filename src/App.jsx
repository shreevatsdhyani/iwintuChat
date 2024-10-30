import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Chat from "./pages/Chat";
import Login from "./pages/Login";

function App() {

  const router = createBrowserRouter([

    {
      path:"/chat",
      element: <><Chat/></>,
    },
    {
      path:"/",
      element: <><Login/></>,
    }
  ])
  
  return (
    <>

      <RouterProvider router={router} />
      
    </>
  )
}

export default App
