import './card.css';
import { MoviesCard } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { RoutersMap } from '../../constants';

type MyProps = Omit<MoviesCard, 'gender' | 'status' | 'created'> & { handelClick: () => void };

const Card: React.FC<MyProps> = (props): JSX.Element => {
  const { id, name, image, species, handelClick } = props;
  const navigate = useNavigate();
  const newHandleClick = () => {
    navigate(`${RoutersMap.characters}/${id}`);
    handelClick();
  };

  return (
    <li className={'card'} onClick={newHandleClick}>
      <img data-testid={'Card_img'} className={'card-img'} src={image} alt={'card image'} />
      <h4 data-testid={'Card_author'} className={'card-title'}>
        {name}
      </h4>
      <p className={'release_date'} data-testid={'species'}>
        ⭐Species: {species}
      </p>
    </li>
  );
};
export default Card;
