import * as React from 'react';

import Grid from 'material-ui/Grid';
import { Theme, withStyles } from 'material-ui/styles';

interface Props {
  heightPerc?: number;
  centered?: boolean;
}

interface ClassNames {
  child: string;
}

const FullHightComponent: React.SFC<Props & { classes: ClassNames }> = (props) => {
  const { centered = false, classes, heightPerc = 100 } = props;
  return (
    <Grid
      container
      style={{ height: `${String(heightPerc)}vh` }}
      direction={'column'}
      justify={centered ? 'center' : 'flex-start'}
      alignItems={centered ? 'center' : 'flex-start'}
    >
      <Grid item className={classes.child}>
        {props.children}
      </Grid>
    </Grid>
  );
};

const styleSheet = (theme: Theme) => ({
  child: {
    width: '100%',
  },
});

export default withStyles(styleSheet)<Props>(FullHightComponent);
