import React from 'react'
import { Card, Paper, Typography as Font, Button} from '@material-ui/core'
export default function Article({news:{title,source,published,url,img,snippet}}) {
    return (
      <Card id="article" elevation={5} align="center" key={title}>
        <Paper>
          <Font variant="h3">{title}</Font>
          <Font variant="body1" align="left">
            {source} | {published}
          </Font>
          <img src={img} id="aImg" alt={title}></img>
          <Font variant="body1" align="left">
            {snippet}
          </Font>
          <Button variant="contained" href={url} target="blank">
            <Font variant="button">Learn More</Font>
          </Button>
        </Paper>
      </Card>
    );
}
