import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>GenshinReact</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Characters</Link>
          </li>
          <li>
            <Link to='/add-character'>Add New Character</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;
