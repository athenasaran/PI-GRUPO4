import React from "react";
import Header from "../../components/Header/Header";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import cat from "../../assets/img/maxresdefault.jpg"
import Footer from "../../components/Footer/Footer"
import "./Home.css"

const Home = () => {
    return (
        <>

            <Header />
            <div className="home">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                            <Card className="cg-card">
                                <CardActionArea>
                                    <CardMedia component="img" alt="Foto de Gatos" title="Foto de Gatos" image={cat} />
                                    <CardContent>
                                        <h1>Cats</h1>
                                        <h2>Gatos</h2>
                                        <p>O gato, também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação.
                                             Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos.</p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Leia Mais
                                    </Button>
                                </CardActions>
                            </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="cg-card">
                            <h1>Dog</h1>
                        </Paper>
                    </Grid>
                
                </Grid>
            </div>

            <Footer />
        </>
    );
};

export default Home;