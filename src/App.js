import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div className="flexbox">
      <Sidebar />
      <div className="layout-container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
