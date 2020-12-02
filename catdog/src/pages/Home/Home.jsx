import React from "react";
import Header from "../../components/Header/Header";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import cat_image from "../../assets/img/maxresdefault.jpg";
import dog_image from "../../assets/img/v3imagesbinb9bb06b04d755656942fb0ac75991dbc-kyjy7jq4mw9wx5drwt2_t1880.jpg";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

            <Header />
            <div className="home">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                            <Card className="c-card">
                                <CardActionArea>
                                    <CardMedia component="img" alt="Foto de Gato" title="Foto de Gato" image={cat_image} />
                                    <CardContent>
                                        <h1>Cats</h1>
                                        <p>O gato é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação.
                                             Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos.</p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button className="cg-botao" size="small" color="primary">
                                        <Link to="/cat">Saiba Mais</Link>
                                    </Button>
                                </CardActions>
                            </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card className="d-card">
                                <CardActionArea>
                                    <CardMedia component="img" alt="Foto de Cachorro" title="Foto de Cachorro" image={dog_image} />
                                    <CardContent>
                                        <h1>Dogs</h1>
                                        <p>O cão é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano. 
                                            Teorias postulam que surgiu do lobo cinzento no continente asiático há mais de 100 000 anos.</p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                            <Link to="/dog">Saiba Mais</Link>
                                    </Button>
                                </CardActions>
                            </Card>
                    </Grid>
                
                </Grid>
            </div>

            <Footer />
        </>
    );
};





export default Home;