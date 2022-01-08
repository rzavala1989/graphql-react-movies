import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { useStyles } from 'config/useAppStyles';
import {
  Paper,
  Typography,
  CardMedia,
  Button,
  Box,
  Chip,
  AppBar,
  Tooltip,
  CircularProgress,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { formatLanguages, getCountryCode } from '../config/dataTransform';

const GET_TITLE = gql`
  query Movie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      description_full
      language
      large_cover_image
      genres
    }
  }
`;

const TitlePage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TITLE, {
    variables: { id: Number(id) },
  });

  if (loading)
    return (
      <CircularProgress
        style={{ position: 'fixed', top: '40%', right: '47%' }}
        size={180}
        variant='indeterminate'
      />
    );
  if (error) return <p>Error :(</p>;

  const {
    title,
    description_full,
    language,
    large_cover_image: thumbnail,
    genres,
    rating,
  } = data.movie;
  return (
    <>
      <AppBar className={classes.secondaryAppBar}>
        <Typography style={{ textShadow: '1px 1px 2px black' }} variant='h5'>
          More About "{title}"
        </Typography>
      </AppBar>
      <Paper className={classes.mainFeaturedPost}>
        <Box style={{ flex: '1 1 40.333%' }}>
          <CardMedia
            className={classes.media}
            image={thumbnail}
            title={title}
          />
        </Box>
        <Box style={{ flex: '1 1 40.333%', padding: '3.5%' }}>
          <Typography component='h1' variant='h3' color='inherit' gutterBottom>
            {title}
          </Typography>
          <Tooltip placement='left-start' title={`Rating: ${rating}`}>
            <Button color='primary'>
              <Rating
                value={rating}
                max={10}
                readOnly
                size='large'
                precision={0.1}
              />
            </Button>
          </Tooltip>

          <Typography variant='h5' color='inherit' paragraph>
            {language && (
              <img
                src={getCountryCode(language)}
                style={{ width: '36px' }}
                alt={getCountryCode(language)}
              />
            )}
            {' - '}
            {}
            {language === '' ? (
              <em>No official language specified for this release</em>
            ) : (
              formatLanguages(language)
            )}
          </Typography>
          <Typography variant='h5' color='inherit'>
            {genres.map((genre) => (
              <Chip
                key={`${genre}-${id}`}
                style={{ marginRight: '5px' }}
                color='primary'
                label={genre}
              />
            ))}
          </Typography>
          <Typography variant='h5' color='inherit' paragraph>
            {description_full === '' ? (
              <em>
                <br /> No movie description for this movie supplied in API{' '}
                <br />
              </em>
            ) : (
              description_full
            )}
          </Typography>
          <Link to='/'>
            <Button color='secondary' variant='contained'>
              back
            </Button>
          </Link>
        </Box>
      </Paper>
    </>
  );
};
export default TitlePage;
