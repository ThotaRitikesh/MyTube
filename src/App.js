import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        errorElement:<ErrorPage/>,
      },
      {
        path: "watch",
        element: <WatchPage />,
        errorElement:<ErrorPage/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
