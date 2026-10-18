import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello-world")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <p className="font-bold text-xl p-4">{message}</p>;
}

export default App;
