import { Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import LoginPage from './assets/pages/LoginPage';
import SignupPage from './assets/pages/SignupPage';
import TasksPages from './assets/pages/TasksPage';
import PrivateRoute from './assets/PrivateRoute';
import Navbar from './assets/layouts/navbar/Navbar';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
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