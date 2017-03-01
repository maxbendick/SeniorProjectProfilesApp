import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const infoCard = (title, cardInnerJSX) => (
  <Card style={{margin: "10px", width: "100%"}}>
    <CardTitle title={title} />
    <CardText>
      {cardInnerJSX}
    </CardText>
  </Card>
);
