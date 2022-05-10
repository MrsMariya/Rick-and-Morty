import { NavLink, Outlet } from 'react-router-dom';
import { RoutersMap } from '../../constants';

const Layout = () => {
  return (
    <>
      <header data-testid={'navbar'}>
        <NavLink data-testid={'main-link'} to={`${RoutersMap.characters}`}>
          Main
        </NavLink>
        <NavLink data-testid={'about-link'} to={RoutersMap.about}>
          About app
        </NavLink>
      </header>
      <Outlet />
      <footer>
        <a href={'https://github.com/MrsMariya'}>MrsMariya</a>
        <h4>2022</h4>
      </footer>
    </>
  );
};

export default Layout;
