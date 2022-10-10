import { Link } from "react-router-dom";
import {Home} from "./routes/home.jsx"
import './App.css'

export default function App() {
  return (
    <div>
      <h1>Community Support</h1>
        <Home/>
        <Link to="/topics">topics</Link> 
    </div>
  );
}