import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './countrySlice';
import styles from './countryComponent.module.css'

export default function CountryComponent() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);
  // const searchResults = useSelector(
  //   (state) => state.countries.searchResults
  // );

  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);
  console.log(show)

  // useEffect(() => {
  //   if (!Array.isArray(countries) || countries.length === 0) {
  //     dispatch(fetchCountries());
  //   }
  // }, [dispatch, countries]);

  useEffect(() => {
    if (!Array.isArray(countries) || countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries]);


  const filteredCountries = Array.isArray(countries)
    ? countries.filter((c) =>
      c.common.toLowerCase().includes(input.toLowerCase())
    )
    : [];

  const dataToShow = input.trim() ? filteredCountries : countries;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <input id='search-input' style={{
        width: '25rem',
        height: '1rem',
        marginBottom: '1rem'
      }} type='text' onFocus={() => setShow(true)} onBlur={() => setShow(false)} value={input} onChange={(e) => setInput(e.target.value)}
      />


      <div className={styles.countriesContainer}>
        {Array.isArray(dataToShow) &&
          dataToShow.map((country) => (
            <div key={country.common} style={{ width: '14rem', display: 'flex', flexDirection: 'column' }}>
              <img src={country.png} alt={country.common} width={50} style={{ margin: 'auto' }} />
              {country.common}
            </div>
          ))}
      </div>



    </>
  );
}
