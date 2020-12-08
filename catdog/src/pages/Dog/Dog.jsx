import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Footer from '../../components/Footer/Footer';
import "./Dog.css";
import axios from 'axios';

const Dog = () => {
    const [data, setData] = useState([]);


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
            <div className="dog">

                <Grid container spacing={3}>

                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                {data !== ""
                                    ? data.map((data, i) => {
                                        return <CardMedia component="img" alt="Foto de Cão" title="Foto de Cão" image={data.url} className="card-imagem" key={i} />
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

export default Dog;