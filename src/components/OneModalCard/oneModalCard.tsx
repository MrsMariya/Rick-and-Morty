import { NavLink } from 'react-router-dom';
import { ModalCard } from '../../types/types';

export const OneModalCard = (props: ModalCard): JSX.Element => {
  const { name, image, species, gender, status, created } = props;
  return (
    <div className={'modal-card'}>
      <NavLink to={'/characters'}>Home</NavLink>
      <h4 data-testid={'Card_author'} className={'card-title-modal'}>
        {name}
      </h4>
      <p className={'release_date'}>⭐Gender: {gender}</p>
      <p className={'release_date'}>Species: {species}</p>
      <p className={'release_date'}>Status: {status}</p>
      <p className={'release_date'}>
        Created: {created.slice(0, 10).split('-').reverse().join('/')}
      </p>
      <img data-testid={'modalCard_img'} className={'card-img'} src={image} alt={'card image'} />
    </div>
  );
};
