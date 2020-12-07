import React, {useState} from "react";
import Header from '../../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Footer from '../../components/Footer/Footer';
import axios from 'axios'
import "./Dog.css";

const Dog = () => {
    const [dogs, setDogs] = useState([]);


        async function loadDogs() {
            axios.get('https://random.dog/woof.json')
            .then(response => {
                setDogs(response.data)
            })
            loadDogs();
        }
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
                {
                  dogs.map(dog => (
                      <Grid item xs={6}>
                          <Card className="dog-api-card">
                            <CardActionArea>

                                <CardContent>
                                 <img src={dog.url} alt="Dog" />
                                </CardContent>
                            </CardActionArea>

                        </Card>
                          </Grid>
                  ))
                  }
                </Grid>


            </div>

            <Footer />
        </div>
    );

}
export default Dog;