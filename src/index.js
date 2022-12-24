import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PatientsLayout from './components/PatientsLayout';
import Patients, { loader as patientsLoader } from './components/Patients';
import Patient, { loader as patientLoader } from './components/Patient';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/patients" element={<PatientsLayout />}>
        <Route index element={<Patients />} loader={patientsLoader} />
        <Route
          path="/patients/:id"
          element={<Patient />}
          loader={patientLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
