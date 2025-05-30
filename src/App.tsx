import { useEffect, useState } from "react";
import space from "./assets/space.jpg";
import "./App.css";
import axios from "axios";

const accountToken = import.meta.env.VITE_REACT_APP_ACCOUNT_TOKEN;
const agentToken = import.meta.env.VITE_REACT_APP_AGENT_TOKEN;

function App() {
  const [agentData, setAgentData] = useState(0);
  const baseUrl = "https://api.spacetraders.io/v2/";
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${agentToken}`,
    },
  };

  useEffect(() => {
    getAccount();
  }, []);

  const getAccount = async () => {
    axios
      .get(`${baseUrl}my/agent`, headers)
      .then((response) => {
        console.log("API response:", response.data);
        setAgentData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="Header">
        <div>
          <img src={space} />
        </div>
        <h1>
          I'm going to the one place that hasn't been corrupted by
          capitalism...SPACE!
        </h1>
      </div>
    </>
  );
}

export default App;
