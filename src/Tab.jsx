import "./styles/bootstrap.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Tab({title, route}){
  return (
    <div className="bg-secondary mx-4">
      <Link to={route} class="text-decoration-none text-dark"><h2>{title}</h2></Link>
    </div>
  )
}

Tab.propTypes = {
  title : PropTypes.string,
  route : PropTypes.string,
}

Tab.defaultProps = {
  title : "Tab Title",
}

export default Tab;