import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HelloWorld() {
  const [message, setMessage] = useState("");
  async function fetchData() {
    try {
      const response = await fetch("/api/visits");
      const data = await response.json();
      document.getElementById("resultado-get").innerText = data.message;
      // console.log(data);
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <section>
      <div className="hero" id="resultado-get">
        {fetchData().message}
      </div>
      <button>
        <Link to="/">Go to Count</Link>
      </button>
    </section>
  );
}
