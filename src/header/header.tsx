import { Link } from "react-router-dom";
import { AppRoute } from "../const";

export function Header(): JSX.Element {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="nav__list">
          <li className="nav__list--item">
            <Link className="nav__link" to={AppRoute.AllPos}>
              All positions
            </Link>
          </li>
          <li className="nav__list--item">
            <Link className="nav__link" to={AppRoute.Relative}>
              Relative
            </Link>
          </li>
          <li className="nav__list--item">
            <Link className="nav__link" to={AppRoute.Absolute}>
              Absolute
            </Link>
          </li>
          <li className="nav__list--item">
            <Link className="nav__link" to={AppRoute.Fixed}>
              Fixed
            </Link>
          </li>
          <li className="nav__list--item">
            <Link className="nav__link" to={AppRoute.Sticky}>
              Sticky
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
