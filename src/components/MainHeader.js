import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/SignIn">
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/Intake">
              Intake
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/Triage">
              Triage
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;