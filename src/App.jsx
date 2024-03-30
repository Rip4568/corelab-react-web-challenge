import { Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import LoginPage from './assets/pages/LoginPage';
import TasksPages from './assets/pages/TasksPage';
import PrivateRoute from './assets/PrivateRoute';

function App() {
  return (
    <Fragment>
      <h1>Hello World</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/">
                <TasksPages />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;