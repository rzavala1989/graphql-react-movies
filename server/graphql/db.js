import axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2/';
const TOP_MOVIES_URL = `${BASE_URL}list_movies.json?sort_by=rating&limit=50`;
const TITLE_PAGE_URL = `${BASE_URL}movie_details.json`;

export const getMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(TOP_MOVIES_URL);
  return movies;
};

export const getTitle = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(TITLE_PAGE_URL, {
    params: {
      movie_id: id,
    },
  });

  return movie;
};
