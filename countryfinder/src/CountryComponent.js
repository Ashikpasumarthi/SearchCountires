import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './countrySlice';

export default function CountryComponent() {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) dispatch(fetchCountries());
  }, [dispatch, countries.length]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {countries.map((country) => (
        <div key={country.common}>
          <img src={country.png} alt={country.common} width={50} />
          {country.common}
        </div>
      ))}
    </div>
  );
}
