import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
export default class SkillCard extends React.Component {

    render() {
        return (
            <Card className="card">
    
                <CardMedia
                style={{height: 240}}
                image={this.props.image}
                title="Contemplative Reptile"
                
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                    {this.props.name}
                </Typography>
                
                </CardContent>
      
     
            </Card>
        )
    }
}



const classes = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

