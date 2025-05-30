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
    // getAccount();
    // getShips();
    // getShip();
    // getShipCargo();
    // getSystems();
    // getSystem();
    // getFactions();
    getMyFaction();
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
  const getShips = async () => {
    axios
      .get(`${baseUrl}my/ships`, headers)
      .then((response) => {
        console.log("API response:", response.data);
        setAgentData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getShip = async () => {
    axios
      .get(`${baseUrl}my/ships/ZORVEN-1`, headers)
      .then((response) => {
        console.log("API response:", response.data);
        setAgentData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getShipCargo = async () => {
    axios
      .get(`${baseUrl}my/ships/ZORVEN-1/cargo`, headers)
      .then((response) => {
        console.log("API response:", response.data);
        setAgentData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getSystems = async () => {
    axios
      .get(`${baseUrl}systems`, headers)
      .then((response) => {
        console.log("API response:", response.data);
        setAgentData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getSystem = async () => {
    axios
      .get(`${baseUrl}systems/X1-XF39`, headers)
      .then((response) => {
        console.log("API response:", response.data);
        setAgentData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getFactions = async () => {
    axios
      .get(`${baseUrl}factions/ASTRO`, headers)
      .then((response) => {
        console.log("API response:", response.data);
        setAgentData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getMyFaction = async () => {
    axios
      .get(`${baseUrl}my/factions`, headers)
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
