import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './countrySlice';

export default function CountryComponent() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries); 
  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);

  useEffect(() => {
    if (!countries[0] || countries[0].length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {countries[0].map((country) => (
        <div key={country.common}>
          <img src={country.png} alt={country.common} width={50} />
          {country.common}
        </div>
      ))}
    </div>
  );
}
