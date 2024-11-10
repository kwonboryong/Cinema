import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import Popular from './routes/Popular';
import Coming from './routes/Coming';
import Now from './routes/Now';
import MovieModal from './components/MovieModal';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'popular',
        element: <Popular />,
        children: [
          {
            path: 'movie/:id',
            element: <MovieModal />,
          },
        ],
      },
      {
        path: 'coming',
        element: <Coming />,
        children: [
          {
            path: 'movie/:id',
            element: <MovieModal />,
          },
        ],
      },
      {
        path: 'now',
        element: <Now />,
        children: [
          {
            path: 'movie/:id',
            element: <MovieModal />,
          },
        ],
      },
    ],
  },
]);
