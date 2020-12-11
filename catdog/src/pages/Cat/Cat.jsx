import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./Cat.css";
import axios from 'axios';

const Cat = () => {
    
    const [data, setData] = useState([]);


    useEffect(() => {
        async function FetchData() {
            await axios({
                method: 'GET',
                url: 'https://api.thecatapi.com/v1/images/search?limit=30',
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
        <div onLoad={tCat} className="geral">

            <Header />
            <div className="caixaImagens">
                {data.map((data, id) => {
                    
                    var botaoComLike = "botaoComLike" + id
                    var botaoSemLike = "botaoSemLike" + id
                    
                    return (
                    <div className="divCat" key={id}>
                        <img className="imgCat" src={data.url} key={"img" + id} alt={"Foto de cão"}/>

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

export default Cat;