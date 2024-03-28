import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";


export default function App() {

  const AppLayout = () => (
    <div className="flex flex-col">
        <Header/>
        <div className="min-h-screen bg-slate-50">
          <Outlet/>
        </div>
    </div>

  )

  const appRouter = createBrowserRouter([
    {path: "/",element:<AppLayout/>, children: [{path:'/' , element:<Home/>}]}
  ])
  return (
  <RouterProvider router={appRouter} />
  )
}