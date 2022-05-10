import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { genderCur, setGender } from '../../store/filtersSlice';

export type MyGenderProps = {
  gender: string;
  onChangeGender: (genderFromInput: string) => void;
};

export const Gender = ({ gender, onChangeGender }: MyGenderProps) => {
  const dispatch = useAppDispatch();
  const curGender = useAppSelector(genderCur);

  useEffect(() => {
    dispatch(setGender(gender));
  }, []);

  const handleChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChangeGender(value);
    dispatch(setGender(value));
  };

  return (
    <form className={'buttonsFilter'}>
      <label htmlFor={'gender'}>
        <h4>Gender</h4>
        <select
          name={'gender'}
          className={'myCheck'}
          id={'gender'}
          value={curGender}
          onChange={handleChangeGender}
        >
          <option value={''}></option>
          <option value={'male'}>male</option>
          <option value={'female'}>female</option>
          <option value={'unknown'}>genderless</option>
          <option value={'unknown'}>unknown</option>
        </select>
      </label>
    </form>
  );
};
