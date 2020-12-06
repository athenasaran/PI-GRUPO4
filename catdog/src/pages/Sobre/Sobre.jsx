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

import { CardActions, CardHeader, IconButton, Collapse} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

const Sobre = () => {
    
    function tSobre() {
        document.title = "Cat & Dog - Sobre"
    };

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div onLoad={tSobre}>

            <Header />
            <div className="sobre">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Card className="e-txt-card">
                            <CardActionArea>
                                <CardHeader title="Quem Somos"/>
                            </CardActionArea>
                            <CardActions>
                                <IconButton 
                                    className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>                            
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>Bem-vindo(a) ao <em>Cat & Dog</em>! Somos um site criado por amantes dos  bichinhos peludos mais fofos e populares do mundo.</p>
                                    <p>A ideia para este site surgiu da necessidade de escolher um bom tema para o projeto final em um curso de programação. Tínhamos várias opções na mesa, mas nem todos concordávamos. Pesquisamos mais um pouco e chegamos em... cães e gatos!! Vai dizer que você nunca terminou aquela pesquisa séria pro trabalho da faculdade olhando fotos e vídeos de bichinhos às 2h da manhã?! Quem nunca passou por isso que atire a primeira pedra!</p>
                                    <p>Nosso intuito é compartilhar conhecimento (e fotos) sobre os <em>pets</em> e tentar acabar com a discussão sobre qual bichinho é melhor.</p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className="d-txt-card">
                            <CardActionArea>
                                <CardHeader title="Nosso Time"/>
                            </CardActionArea>
                            <CardActions>
                                <IconButton 
                                    className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>                            
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>Atualmente, somos formados por um time de desenvolvedores <em>web</em> que compartilham a paixão e o entusiasmo por animais.</p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Card className="e-txt-card">
                            <CardActionArea>
                                <CardHeader title="Junte-se a Nós!"/>
                            </CardActionArea>
                            <CardActions>
                                <IconButton 
                                    className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>                            
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>Queremos nos expandir e construir uma comunidade online de pessoas interessadas em <em>pets</em>, facilitando a interação entre elas e a troca de conhecimento. Você é entusiasta de cães e/ou gatos? Já trabalhou com isso? Sabe desenvolver aplicações? Tem alguma ideia incrível e quer se juntar ao time? Escreva-nos e nos conte mais. Ficaremos felizes com o seu interesse de se juntar ao time!</p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className="d-txt-card">
                            <CardActionArea>
                                <CardHeader title="Doe Hoje"/>
                            </CardActionArea>
                            <CardActions>
                                <IconButton 
                                    className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>                            
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>Quer ajudar animais de rua, mas não sabe como? Nós arrecadamos doações e ajudamos organizações sem fins lucrativos parceiras que já fazem essa boa ação!</p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid>
                
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <Card className="e-txt-card">
                            <CardActionArea>
                                <CardHeader title="Blá blá blá"/>
                            </CardActionArea>
                            <CardActions>
                                <IconButton 
                                    className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>                            
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>Algo a mais para inserir? Fiquei sem ideias haha</p>
                                </CardContent>
                            </Collapse>
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