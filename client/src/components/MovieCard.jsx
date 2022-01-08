import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from 'config/useAppStyles';
import {
  Button,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

export const MovieCard = ({
  id,
  title,
  rating,
  large_cover_image: thumbnail,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={thumbnail}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.cardHeader}
            gutterBottom
            variant='body2'
            component='h1'
          >
            {title.length > 35 ? title.substring(0, 34) + '...' : title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardRating}>
          <span>
            <Button size='small' color='primary'>
              <Rating
                name='read-only'
                value={rating}
                max={10}
                readOnly
                size='small'
                precision={0.1}
              />
            </Button>{' '}
            <br />
            <Typography style={{ fontSize: '12px' }} align='center'>
              {' '}
              {rating} / 10
            </Typography>
          </span>

          <Link
            to={`/${id}`}
            style={{ textDecoration: 'none', paddingBottom: '5px' }}
          >
            <Button color='secondary' variant='contained'>
              Title Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
