import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Tabs.scss";

const Tabs: FC = () => {
  return (
    <div className="tabs">
      <NavLink to="/innora" className="tab">
        All Page
      </NavLink>
      <NavLink to="/delete" className="tab">
        Delete Page
      </NavLink>
    </div>
  );
};

export default Tabs;
