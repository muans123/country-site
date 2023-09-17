import { RouterProvider } from "react-router-dom";

import { router } from "../Router/Router";

import './App.sass';

export function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}