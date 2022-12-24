import React from 'react';
import { useLocation, useLoaderData, Link } from 'react-router-dom';
import Cards from './Cards';
import { getPatients } from '../apis';

import '../index.css';

export async function loader({ params }) {
  return getPatients(params.id);
}

export default function Patient() {
  const location = useLocation();
  const currentPatient = useLoaderData();

  const search = location.state?.search || '';
  const filterBack = location.state?.id.idFilter || 'All';

  return (
    <div>
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <h2> Back to {filterBack}</h2>
      </Link>
      <section>
        <div className="single-patient">
          <Cards
            fname={currentPatient.first_name}
            lname={currentPatient.last_name}
            image={currentPatient.avatar}
            email={currentPatient.email}
            tag={currentPatient.tag}
          />
        </div>
      </section>
    </div>
  );
}
