import Card from '../Card/Card';
import { NewType } from '../../types/types';

type MyProps = NewType & { setMovieInfo: (id: number) => void };

const CardList = ({ movies, setMovieInfo }: MyProps): JSX.Element => {
  return (
    <ul className={'container'} data-testid={'wrapperCards'}>
      {movies.map(({ id, name, image, species }) => {
        return (
          <Card
            handelClick={() => setMovieInfo(id)}
            key={id}
            id={id}
            image={image}
            name={name}
            species={species}
            data-testid={'oneCard'}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
