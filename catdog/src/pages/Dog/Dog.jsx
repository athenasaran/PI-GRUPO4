import React from "react";
import Header from '../../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Footer from '../../components/Footer/Footer';
import "./Dog.css";

const Dog = () => {
    return (
        <>

            <Header />
            <div className="Dog">

                <Grid container spacing={3}>
                            <Grid item xs={6}>
                                    <Card className="dog-txt-card">
                                        <CardActionArea>
                                        
                                            <CardContent>
                                                <h1>Dogs</h1>
                                                <h1>Text</h1>
                                                
                                            </CardContent>
                                        </CardActionArea>
                                        
                                    </Card>
                            </Grid>
                            <Grid item xs={6}>
                            <Card className="dog-api-card">
                                        <CardActionArea>
                                            
                                            <CardContent>
                                                <h1>Api</h1>
                                                
                                            </CardContent>
                                        </CardActionArea>
                                        
                                    </Card>
                            </Grid>
                        
                </Grid>


            </div>

            <Footer />
        </>
    );
};

export default Dog;