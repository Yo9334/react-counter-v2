import "./App.css";
import Header from "./components/Header";
// import Counter from "./components/Counter";
import Footer from "./components/Footer";
import { useState } from "react";
import CounterV2 from "./components/CounterV2";

function App() {
  // const [tabCounter, setTabCounter] = useState([]);
  const [counters, setCounters] = useState([]);

  const addCounterV2 = () => {
    const newTab = [...counters];
    newTab.push(0);
    setCounters(newTab);
    console.log(newTab);
  };

  return (
    <>
      <Header />
      {/* {tabCounter.length < 3 && (
        <div className="container">
          <div className="item-add-counter">
            <button class="add-counter" onClick={addCounter}>
              Add Counter
            </button>
          </div>
        </div>
      )} <div class="list-counter">{tabCounter}</div>*/}
      <div className="container">
        <div className="item-add-counter">
          <button className="add-counter" onClick={addCounterV2}>
            Add Counter
          </button>
        </div>
      </div>
      <div className="list-counter">
        {counters.map((counter, index) => {
          return (
            <CounterV2
              key={index}
              counter={counter}
              setCounter={setCounters[0]}
            />
          );
        })}
      </div>
      |
      <Footer />
    </>
  );
}

export default App;
