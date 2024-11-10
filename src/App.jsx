import { Outlet, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import MovieModal from './components/MovieModal';
import Popular from './routes/Popular';

const Container = styled.main`
  user-select: none;

  width: 100%;
  margin: 0;

  color: white;
  background-color: black;

  h1 {
    color: white;
    font-size: 40px;
    margin: 0;

    padding-top: 30px;
    padding-bottom: 30px;

    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none; 
  }
`;

export default function App() {
  const location = useLocation();
  const background = location.state?.background || false;

  if (window.location.pathname === '/') {
    return <Navigate to="/popular" />;
  }

  return (
    <Container>
      <h1>Cinema</h1>
      <Header />

      {!background ? (
        <>{location.pathname === '/' ? <Popular /> : <Outlet />}</>
      ) : (
        <>
          <Outlet />
          <MovieModal />
        </>
      )}
    </Container>
  );
}
