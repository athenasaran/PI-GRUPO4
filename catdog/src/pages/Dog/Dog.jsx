import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Footer from '../../components/Footer/Footer';
import "./Dog.css";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '80%',
      height: '94vh',
    },
  }));

const Dog = () => {
    const [data, setData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        async function FetchData() {
            await axios({
                method: 'GET',
                url: 'https://api.thedogapi.com/v1/images/search?limit=100',
                header: 'x-api-key:fbc42b2d-d5cd-4f55-8fce-4b9d65cdb53f'
            }).then((res) => {

                setData(res.data)
            });
        }
        FetchData();

    }, []);


    function tDog() {
        document.title = "Cat & Dog - Dog"
    };


    return (
        <div onLoad={tDog}>

            <Header />
            <div className={classes.root}>
            <GridList cellHeight={'50vw'} spacing={50} className={classes.gridList} cols={2}>
                {data.map((data, id) => (
                <GridListTile key={id} cols={1}>
                    <img src={data.url} alt="Foto de Cão" />
                </GridListTile>
                ))}
            </GridList>
            </div>      
            <Footer />
        </div>
    );
};

export default Dog;
