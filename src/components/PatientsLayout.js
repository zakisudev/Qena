import React from 'react';
import { Outlet } from 'react-router-dom';

import '../index.css';

export default function PatientsLayout() {
  return (
    <div>
      <div className="container">
        <h1>CandidateLayout</h1>
        <Outlet />
      </div>
    </div>
  );
}
