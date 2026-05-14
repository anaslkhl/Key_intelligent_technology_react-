import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NewsletterPage from "../pages/newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newsletter",
    element: <NewsletterPage />,
  },
]);

export default router;
