import React, {useEffect, useState} from "react";
import Header from '../../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Footer from '../../components/Footer/Footer';
import "./Dog.css";
import axios from 'axios';

const Dog = () => {
       const [data, setData] = useState([]);


  useEffect(() => {
    async function FetchData() {
    await axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random',
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
                        <Card className="dog-txt-card">
                            <CardActionArea>

                                <CardContent>
                                    <h1>Dogs</h1>
                                    <h1>Text</h1>

                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                </Grid>


            </div>
            <div className="dog-api">



            </div>

            <Footer />
        </div>
    );
}
export default Dog;