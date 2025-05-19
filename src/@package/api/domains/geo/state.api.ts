import { states, State } from './states';

export interface GetStatesOptions {
  nameFilter?: string;
  countryName?: string;
}

export function getStates(options: GetStatesOptions = {}): State[] {
  let filteredStates = [...states];

  if (options.countryName) {
    filteredStates = filteredStates.filter(
      state => state.country_name.toLowerCase() === options.countryName!.toLowerCase()
    );
  }

  if (options.nameFilter) {
    const regex = new RegExp(options.nameFilter, 'i');
    filteredStates = filteredStates.filter(state => regex.test(state.name));
  }

  return filteredStates;
} 