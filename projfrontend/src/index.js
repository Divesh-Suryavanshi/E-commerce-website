import { createRoot } from "react-dom/client";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
