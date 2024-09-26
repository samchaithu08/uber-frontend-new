import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Optional for additional styling
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from 'react-fullscreen-loading';

function App() {
  // State variables to store the results
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");
  const [loading, setLoading] = useState(false)

  // Function to fetch data from the API and set the corresponding state
  const fetchData = async (endpoint, setResult) => {
    setLoading(true)
    try {
      const response = await axios.get(endpoint);
      setResult(JSON.stringify(response.data, null, 2));
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult("Error fetching data");
    }
  };

  return (
    <div className="container">
      {loading && <Loading loading background="#64646454" loaderColor="#3498db" />}
      <h1 className="text-center">Uber Data Analysis</h1>
      <div className="row mt-4" style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        <div className="col-md-6 mb-4">
          <div style={{display: 'flex', marginBottom: '2rem'}}>
            <h3 style={{marginRight: '2rem'}}>Get analytics</h3>
            <button
              className="btn btn-primary"
              onClick={() =>
                fetchData("https://uber-analytics.xanderco.in/fetch-analytics", setResult1)
              }
            >
              Get Results
            </button>
          </div>
          <pre>{result1}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
