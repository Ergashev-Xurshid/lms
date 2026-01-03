import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import Loader from "./components/common/Loader";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Login sahifasi yuklanishidan oldin loader chiqadi
    const timer = setTimeout(() => setShowLoader(false), 1500); // 0.3s loader
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <Loader />;

  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}
