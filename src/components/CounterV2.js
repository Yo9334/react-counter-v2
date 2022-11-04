const CounterV2 = ({ counter, setCounters, counters, index }) => {
  // console.log(counter, setCounters, "ici : ", counters);

  // aide ??? : counters[index] += 1;
  // copie du Tab 'counters'
  // changer la valeur de l element à l'index 'index' de la copie
  // setCounters(copie modifiee)

  return (
    <div className="container">
      {/* list-item */}
      <div className="list-item">
        <div
          className="item"
          style={{ backgroundColor: counter <= 0 ? "#f0f0f0" : "white" }}
        >
          <button
            className={counter <= 0 ? "hidden" : "block"}
            onClick={() => {
              const newTab = [...counters];
              newTab[index] -= 1;
              setCounters(newTab);
            }}
          >
            -
          </button>
        </div>

        <div className="item">
          <span>{counter}</span>
        </div>

        <div
          className="item"
          style={{ backgroundColor: counter > 9 ? "#f0f0f0" : "white" }}
        >
          <button
            className={counter > 9 ? "hidden" : "block"}
            onClick={() => {
              const newTab = [...counters];
              newTab[index] += 1;
              setCounters(newTab);
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* button reset */}
      <div className="item-reset">
        <button
          onClick={() => {
            const newTab = [...counters];
            newTab[index] = 0;
            setCounters(newTab);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterV2;
