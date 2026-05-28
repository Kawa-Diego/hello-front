import { Link } from "react-router-dom";

export default function Count() {
  let count = 0;
  async function handleClick() {
    count++;
    document.getElementById("count").innerHTML = count;
  }

  return (
    <section id="center">
      <div className="content">
        <h1>
          Welcome to the <span>Redis Counter App</span>
        </h1>

        <div>
          <p>
            This is a simple application that demonstrates how to use Redis to
            count the number of visits to this page. Click the button below to
            see the count in action!
          </p>
        </div>

        <div>
          <div>
            Count: <span id="count">0</span>
          </div>
          <button
            onClick={handleClick}
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            CONTAGEM
          </button>
        </div>
        <div>
            <Link to="/hello">Go to Hello World</Link>
        </div>
      </div>
    </section>
  );
}
