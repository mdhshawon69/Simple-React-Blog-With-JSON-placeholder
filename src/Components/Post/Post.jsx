import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Post.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 450,
    marginBottom: 30,
  },
  media: {
    height: 170,
  },
});

export default function MediaCard(props) {
  const { title, body, id } = props.post;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://picsum.photos/200/300?random=1'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {body.substring(0, 100)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/posts/${id}`} className='post-btn'>
          <Button size='small'>Read More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
