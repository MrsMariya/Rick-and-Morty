export type MoviesCard = {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  created: string;
};

export type ModalCard = {
  id: string | undefined;
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  created: string;
};

export type NewType = {
  movies: Array<MoviesCard>;
};

export type FormsCardType = {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  genderValue: string;
  agree: boolean;
  url: string;
};

export type MyNewProps = {
  cardList: Array<FormsCardType>;
};
