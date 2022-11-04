import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon icon="stopwatch" className="logo" />
        <span>React Counter V2</span>
      </div>
    </header>
  );
};

export default Header;
