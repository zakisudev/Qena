import React from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';

import Cards from './Cards';
import { getPatients } from '../apis';

import '../index.css';

export async function loader() {
  return await getPatients();
}

export default function Patients() {
  const [searchParams, setSearchParams] = useSearchParams();

  const patientFilter = searchParams.get('id');
  const patients = useLoaderData();

  const displayedPatients = patientFilter
    ? patients?.filter((patient) => patient.id === patientFilter)
    : patients;

  const patientElements = displayedPatients.map((patient) => (
    <div key={patient.id}>
      <Link
        to={`/candidates/${patient.id}`}
        state={{
          search: `?${searchParams.toString()}`,
          type: { patientFilter },
        }}
      >
        <Cards
          fname={patient.first_name}
          lname={patient.last_name}
          image={patient.avatar}
          email={patient.email}
          tag={patient.tag}
        />
      </Link>
    </div>
  ));
  return (
    <div>
      <div className="container">
        <div className="candidates-container">
          <div className="candidates-header">
            <h2>Candidates</h2>
            <div className="sort">
              <label htmlFor="sort">Sort</label>
              <select
                name="sort"
                id="sort"
                onChange={(e) => setSearchParams({ sort: e.target.value })}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="filter">Filter</label>
              <select
                name="filter"
                id="filter"
                onChange={(e) => setSearchParams({ filter: e.target.value })}
              >
                <option value="all">All</option>
                <option value="all">Newest</option>
                <option value="all">Oldest</option>
              </select>
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Search by name"
                onChange={(e) => setSearchParams({ id: e.target.value })}
              />
            </div>
          </div>
        </div>
        {patientElements}
      </div>
    </div>
  );
}
