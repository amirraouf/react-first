import { Link } from "react-router-dom/cjs/react-router-dom.min";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/fav'>Favourites</Link></li>
                <li><Link to='/new-meetup'>New Meetup</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;