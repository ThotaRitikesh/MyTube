import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import ErrorPage from "./components/ErrorPage";
import SearchPage from "./components/SearchPage";
import FilteredResults from "./components/FilteredResults";
import VideoContainer from "./components/VideoContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchPage />,
      },
      {
        path: "/filter",
        element: <FilteredResults />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
