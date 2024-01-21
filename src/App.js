import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingScreen from '../src/pages/LoadingScreen';
import Layout from '../src/layout/Layout';

const Loadable = Component => props => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* Add the rest of other pages here */}
      </Route>
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;

const HomePage = Loadable(lazy(() => import('../src/pages/Home')));
const AboutUsPage = Loadable(lazy(() => import('../src/pages/AboutUs')));

const Page404 = Loadable(lazy(() => import('../src/pages/Page404')));
