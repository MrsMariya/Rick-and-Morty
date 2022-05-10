import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setSpecies, speciesCur } from '../../store/filtersSlice';

export type MySpeciesProps = {
  species: string;
  onChangeSpecies: (speciesFromInput: string) => void;
};

export const Species = ({ species, onChangeSpecies }: MySpeciesProps) => {
  const dispatch = useAppDispatch();
  const curSpecies = useAppSelector(speciesCur);

  useEffect(() => {
    dispatch(setSpecies(species));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setSpecies(value));
    onChangeSpecies(value);
  };

  return (
    <form className={'buttonsFilter'}>
      <label htmlFor={'species'}>
        <h4>Species</h4>
        <select
          name={'species'}
          className={'myCheck'}
          id={'gender'}
          value={curSpecies}
          onChange={handleChange}
        >
          Species
          <option value={''}></option>
          <option value={'human'}>human</option>
          <option value={'humanoid'}>humanoid</option>
          <option value={'robot'}>robot</option>
          <option value={'unknown'}>unknown</option>
        </select>
      </label>
    </form>
  );
};
