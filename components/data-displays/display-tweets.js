import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const DisplayTweetComponent = (props) => {
  const { data, handleButtonClick } = props;
  return (
    <Paper elevation={4}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography type="body2">
            <a href={`//twitter.com/${data.user_screen_name}`} target="_blank">@{data.user_screen_name}</a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography type="body1">{data.text}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleButtonClick}>Bot</Button>
        </Grid>
        <Grid item xs={8}>
          {' '}
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleButtonClick}>Not Bot</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DisplayTweetComponent;
