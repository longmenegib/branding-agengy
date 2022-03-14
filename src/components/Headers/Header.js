
import { Container} from "reactstrap";
import Navbars from "../Navbars/Navbars";

const Header = ({color}) => {

  return (
    <div className="header bg-gradient-warning pb-8 pt-2 pt-md-4">
        <Navbars color={color}/>
    </div>
  );
};

export default Header;
