import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isDecentralized, setIsDecentralized] = useState(true);

  useEffect(() => {
    if (!location.hostname.endsWith("localhost")) {
      setIsDecentralized(false);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: isDecentralized ? "black" : "white",
        color: isDecentralized ? "white" : "black",
      }}
    >
      {isDecentralized ? (
        <h1>{`<c>Centralize</c>`}</h1>
      ) : (
        <h1> {`<d>Decentralize</d>`}</h1>
      )}
    </div>
  );
}

export default App;
