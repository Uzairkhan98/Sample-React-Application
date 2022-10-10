import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Community Support</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/topics">topics</Link> 
      </nav>
    </div>
  );
}