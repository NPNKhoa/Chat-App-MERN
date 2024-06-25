import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LoadingPage, NotFoundPage } from "../../pages";
import { authRoutes, homeRoutes, } from "../../routes";
import { ChatLayout, AuthLayout, } from '../../layouts';
import useAuthContext from "../../context/useAuthContext";

const Routing = () => {
  const { authUser, } = useAuthContext();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Routes>
          {authRoutes.map(({ id, path, element }) => (
            <Route
              key={id}
              path={path}
              element={
                authUser ? (
                  <Navigate to={'/'} />
                ) : (
                  <AuthLayout>{element}</AuthLayout>
                )
              }
            />
          ))}
          {homeRoutes.map(({ id, path, element }) => (
            <Route
              key={id}
              path={path}
              element={
                authUser ? (
                  <ChatLayout>{element}</ChatLayout>
                ) : (
                  <Navigate to={'/login'} />
                )
              }
            />
          ))}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Routing;