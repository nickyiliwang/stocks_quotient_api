import { useEffect, useState } from "react";
import Button from "./components/Button";
import axios from "axios";
import RenderList from "./components/RenderList";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const options = {
        method: "GET",
        url: "https://quotient.p.rapidapi.com/equity/intraday",
        params: {
          symbol: "AAPL",
          interval: "1",
          from: "2020-04-21 10:00",
          to: "2020-04-21 10:30",
          adjust: "false",
        },
        headers: {
          "x-rapidapi-host": "quotient.p.rapidapi.com",
          "X-RapidAPI-Host": "quotient.p.rapidapi.com",
          "X-RapidAPI-Key":
            "cef2cc25aamshf4c03b3be003693p19a801jsnd285ab892620",
        },
      };

      const response = await axios
        .request(options)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      setState(response);
      setIsLoading(false);
      return response;
    }

    apiCall();
  }, []);

  return (
    <div className="App">
      <Button />
      {isLoading ? "Loading" : <RenderList data={state} />}
    </div>
  );
}

export default App;
