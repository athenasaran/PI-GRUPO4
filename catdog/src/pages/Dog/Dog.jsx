import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./Dog.css";
import axios from 'axios';

const Dog = () => {
    
    const [data, setData] = useState([]);
  
    useEffect(() => {
        async function FetchData() {
            await axios({
                method: 'GET',
                url: 'https://api.thedogapi.com/v1/images/search?limit=30',
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
        <div onLoad={tDog} className="geral">

            <Header />
            <div className="caixaImagens">
                {data.map((data, id) => {
                    
                    var botaoComLike = "botaoComLike" + id
                    var botaoSemLike = "botaoSemLike" + id
                    
                    return (
                    <div className="divDog" key={id}>
                        <img className="imgDog" src={data.url} key={"img" + id} alt={"Foto de cão"}/>

                        <div className="like-button">
                            <IconButton 
                            aria-label="like icon" 
                            component="span"
                            id={botaoSemLike}
                            onClick={() => {
                                var comLike = document.getElementById(botaoComLike)
                                var semLike = document.getElementById(botaoSemLike)

                                semLike.style.display = "none"
                                comLike.style.display = "block"
                            
                            }}
                            style={{display:"block"}}
                            >

                                <FavoriteBorderIcon/>
                            
                            </IconButton>
                            <IconButton 
                            aria-label="like icon" 
                            component="span"
                            id={botaoComLike}
                            onClick={() => {
                                var comLike = document.getElementById(botaoComLike)
                                var semLike = document.getElementById(botaoSemLike)

                                semLike.style.display = "block"
                                comLike.style.display = "none"
                            
                            }}
                            style={{display:"none"}}
                            >    
                                
                                <FavoriteIcon/>
                            
                            </IconButton>
                        </div>
                    </div>
                )})
                }
            </div>
            <Footer />
        </div>
    );
};

export default Dog;

