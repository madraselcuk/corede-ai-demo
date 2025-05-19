import { countries, Country } from './countries';

export const getCountries = (nameFilter?: string): Country[] => {
  if (!nameFilter) {
    return countries;
  }

  const regex = new RegExp(nameFilter, 'i');
  return countries.filter(country => regex.test(country.name));
};
