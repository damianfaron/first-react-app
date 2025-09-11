import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <NavLink to='/'>
            <span className={`fa fa-tasks ${styles.icon}`} />
          </NavLink>

          <ul className={styles.menu}>
            <li>
              <NavLink to='/' end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/favorite'>Favorite</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
