import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import CounterV2 from "./components/CounterV2";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

library.add(faStopwatch);

function App() {
  const [counters, setCounters] = useState([]);

  const addCounterV2 = () => {
    const newTab = [...counters];
    newTab.push(0);
    setCounters(newTab);
  };

  return (
    <>
      <Header />
      {counters.length < 3 && (
        <div className="container">
          <div className="item-add-counter">
            <button className="add-counter" onClick={addCounterV2}>
              Add Counter
            </button>
          </div>
        </div>
      )}
      <div className="list-counter">
        {counters.map((counter, index) => {
          return (
            <CounterV2
              key={index}
              counter={counter}
              setCounters={setCounters}
              counters={counters}
              index={index}
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
