import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs'; // Import the AboutUs component

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        {/* Define routes for the application */}
        <Route path={'/'} element={<Home />} />
        <Route path={'/about-us'} element={<AboutUs />} /> {/* Add AboutUs route */}
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/contact'} element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
