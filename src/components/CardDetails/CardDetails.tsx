import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { modalCardApiSubmit, modalCardInf } from '../../store/modalCardSlice';
import { OneModalCard } from '../OneModalCard/oneModalCard';

export const CardDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const modalCardInfo = useAppSelector(modalCardInf);

  useEffect(() => {
    dispatch(modalCardApiSubmit(modalCardInfo));
  }, [id]);

  const { id: idModal, name, image, species, gender, status, created } = modalCardInfo;

  return (
    <OneModalCard
      id={idModal}
      name={name}
      image={image}
      species={species}
      gender={gender}
      status={status}
      created={created}
      data-testid={'oneCardDetails'}
    />
  );
};
