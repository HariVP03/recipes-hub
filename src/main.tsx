import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/home.tsx";
import { Wrapper } from "./components/wrapper.tsx";
import { Upload } from "./routes/upload.tsx";
import { ViewPost } from "./routes/post.tsx";
import { Meal } from "./routes/meal.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/post/:id",
    element: <ViewPost />,
  },
  {
    path: "/cart",
    element: <Meal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </ChakraProvider>
  </React.StrictMode>
);
