import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/home.tsx";
import { Wrapper } from "./components/wrapper.tsx";
import { Upload } from "./routes/upload.tsx";
import { ViewPost } from "./routes/post.tsx";

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
    path: "/temp-posts/:id",
    element: <ViewPost />,
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
