import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Footer from '../../components/Footer/Footer';
import "./Cat.css";
import axios from 'axios';

const Cat = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        async function FetchData() {
            await axios({
                method: 'GET',
                url: 'https://api.thecatapi.com/v1/images/search?limit=100',
                header: 'x-api-key:7d23f6e4-e201-468e-9f42-5dfaf8587f3c'
            }).then((res) => {

                setData(res.data)
            });
        }
        FetchData();

    }, []);

    function tCat() {
        document.title = "Cat & Dog - Cat"
    };


    return (
        <div onLoad={tCat}>

            <Header />
            <div className="cat">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                {data !== ""
                                    ? data.map((data, i) => {
                                        return <CardMedia component="img" alt="Foto de Gato" title="Foto de Gato" image={data.url} className="card-imagem" key={i} />
                                    })
                                    : ""

                                }
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>



            </div>

            <Footer />
        </div>
    );
};

export default Cat;