import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { MovieCard } from 'components/MovieCard.jsx';
import { useStyles } from 'config/useAppStyles';
import {
  Grid,
  Typography,
  Container,
  AppBar,
  CircularProgress,
} from '@material-ui/core';

const GET_MOVIES = gql`
  query Movies($limit: Int, $rating: Float) {
    movies(limit: $limit, minimum_rating: $rating) {
      id
      title
      rating
      large_cover_image
      summary
    }
  }
`;

const Home = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (error) return <p>Error :(</p>;

  return (
    <>
      <AppBar className={classes.secondaryAppBar}>
        <Typography style={{ textShadow: '1px 1px 2px black' }} variant='h5'>
          Top 50 Rated Movies
        </Typography>
      </AppBar>

      <Container className={classes.cardGrid} maxWidth='lg'>
        {loading ? (
          <CircularProgress
            style={{ position: 'fixed', top: '40%', right: '47%' }}
            size={180}
            variant='indeterminate'
          />
        ) : (
          <Grid container spacing={3}>
            {data.movies.map((movie) =>
              movie.large_cover_image ? (
                <MovieCard key={movie.id} {...movie} />
              ) : null
            )}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Home;
