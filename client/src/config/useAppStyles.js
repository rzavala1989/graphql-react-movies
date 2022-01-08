import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '250px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    width: '100%',
    paddingTop: '150%', // 16:9
    backgroundImage: 'cover',
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: '18px',
  },
  cardContent: {
    flexGrow: 1,
    padding: '9px',
  },
  cardRating: {
    flexDirection: 'column',
    padding: '0 0 4px',
  },
  mainFeaturedPost: {
    minHeight: '70vh',
    paddingTop: '26px',
    position: 'relative',
    top: '120px',
    backgroundColor: '#07082e',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'row',
    opacity: '.85',
    paddingBottom: '120px',
  },
  secondaryAppBar: {
    backgroundColor: '#353839',
    position: 'absolute',
    zIndex: '2',
    top: '64px',
    padding: '12px 0 12px 24px',
  },

  media: {
    height: '90%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  mainFeaturedPostContent: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 0),
  },
  cardGrid: {
    paddingTop: '150px',
    paddingBottom: theme.spacing(8),
  },
}));
