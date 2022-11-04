import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

library.add(faCalculator);

const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon icon="calculator" className="logo" />
        <span>React Counter</span>
      </div>
    </header>
  );
};

export default Header;
