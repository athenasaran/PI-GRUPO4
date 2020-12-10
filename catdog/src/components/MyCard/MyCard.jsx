import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, CardHeader, IconButton, Collapse} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './MyCard.css';

const useStyles = makeStyles((theme) => ({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

 const MyCard = (props) => {
     
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
         setExpanded(!expanded);
    };
    
    return (
        <React.Fragment>
            <Card className={props.classe}>
                <CardActionArea>
                    <CardHeader title={props.title}/>
                </CardActionArea>
                <CardActions>
                    <IconButton 
                        className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>                            
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {props.children}
                    </CardContent>
                </Collapse>
            </Card>
        </React.Fragment>
    );
  };

  export default MyCard;