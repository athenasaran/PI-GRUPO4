import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GetAppIcon from '@material-ui/icons/GetApp';
// import {FavoriteIcon, FavoriteBorderIcon, GetAppIcon} from '@material-ui/icons';
import "./Dog.css";
import axios from 'axios';

const Dog = () => {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(0)
  
    useEffect(() => {
        async function FetchData() {
            await axios({
                method: 'GET',
                url: 'https://api.thedogapi.com/v1/images/search?limit=10',
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


    function likeClick(){
        if(like === 1){
            setLike(0);
        }
        else{
            setLike(1);
        }
        console.log(like)
    }

    return (
        <div onLoad={tDog}>

            <Header />
            <div className="caixaImagens">
                {data.map((data, id) => (
                    <div className="divDog" key={id}>
                        <img className="imgDog" src={data.url} key={"img" + id} alt={"Foto de cão"}/>

                        <div className="like-button">
                            <IconButton color="primary" aria-label="like icon" component="span" onClick={likeClick}>
                                <FavoriteIcon id="botaoComLike" style={like === 0 ? {display: 'none'} : {display: 'flex'}} />
                                <FavoriteBorderIcon id="botaoSemLike" style={like === 1 ? {display: 'none'} : {display: 'flex'}}/>
                            </IconButton>
                        </div>

                        {/* <a href="https://cdn2.thedogapi.com/images/Bk3Rf6TNX.gif" style={{display: "block"}} id="download-dog-image" download>
                            asdfasfsa
                        </a>
                        <label htmlFor="download-dog-image">
                            <IconButton color="primary" aria-label="download icon" component="span">
                                <GetAppIcon />
                            </IconButton>
                        </label> */}

                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Dog;

