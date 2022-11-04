const CounterV2 = ({ counter, setCounter }) => {
  console.log(counter, setCounter);

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
              setCounter(counter - 1);
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
              setCounter(counter + 1);
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
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterV2;
