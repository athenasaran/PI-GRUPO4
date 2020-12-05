import React from "react";
import Header from '../../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../..//assets/img/catdog.png';
import Footer from '../../components/Footer/Footer';
import "./Sobre.css";

const Sobre = () => {
    
    function tSobre() {
        document.title = "Cat & Dog - Sobre"
    };

    return (
        <div onLoad={tSobre}>

            <Header />
            <div className="sobre">
                <Grid container spacing={3}>
                            <Grid item xs={6}>
                                    <Card className="e-txt-card">
                                        <CardActionArea>
                                        
                                            <CardContent>
                                                
                                                <h1>Text 1</h1>
                                                
                                            </CardContent>
                                        </CardActionArea>
                                        
                                    </Card>
                            </Grid>
                            <Grid item xs={6}>
                            <Card className="d-txt-card">
                                        <CardActionArea>
                                            
                                            <CardContent>
                                                <h1>Text 2</h1>
                                                
                                            </CardContent>
                                        </CardActionArea>
                                        
                                    </Card>
                            </Grid>
                        
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                                <Card className="e-txt-card">
                                    <CardActionArea>
                                    
                                        <CardContent>
                                            
                                            <h1>Text 3</h1>
                                            
                                        </CardContent>
                                    </CardActionArea>
                                    
                                </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card className="d-txt-card">
                                    <CardActionArea>
                                        
                                        <CardContent>
                                            <h1>Text 4</h1>
                                            
                                        </CardContent>
                                    </CardActionArea>
                                    
                                </Card>
                        </Grid>
                    
                </Grid>
                <Grid container spacing={3}>
                        <Grid item xs={6}>
                                <Card className="e-txt-card">
                                    <CardActionArea>
                                    
                                        <CardContent>
                                            <h1>Text 5</h1>
                                            
                                        </CardContent>
                                    </CardActionArea>
                                    
                                </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card className="d-txt-card">
                                    <CardActionArea>
                                        
                                        <CardContent>
                                        <CardMedia component="img" alt="Foto da Logo" title="Foto da Logo" image={logo} />
                                            
                                        </CardContent>
                                    </CardActionArea>
                                    
                                </Card>
                        </Grid>
                    
                </Grid>
                


            </div>

            <Footer />
        </div>
    );
};

export default Sobre;