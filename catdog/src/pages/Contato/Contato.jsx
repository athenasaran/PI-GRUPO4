import React from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import "./Contato.css"

// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const Contato = () => {
    
    function tContato() {
        document.title = "Cat & Dog - Contato"
        // document.getElementById('ResContato').style.display = "none"
    };
    
    function validador() {
        let nome = document.getElementById('nome-completo');
        let email = document.getElementById('email');
        let texto = document.getElementById('contato-texto');
        
        if (nome.value.length > 2){
            var rNome = true;
        };

        if (email.value.length > 8){
            var rEmail = true;
        };

        if (texto.value.length != " "){
            var rTexto = true;
        };
       
        if (rNome && rEmail && rTexto){
            
            document.getElementById('erros').innerHTML= ""
            
            document.querySelector('#titulo p').style.display = 'none'
            document.getElementById('form-de-contato').innerHTML= "<h1>Obrigado, " + nome.value + "</h1><p>Entraremos em Contato!!</p>"
                                                                    
            
            
        }else{
            document.getElementById('erros').innerHTML= ""

            if(! rNome){
                document.querySelector('#erros').innerHTML+= "<p>Campo <strong>Nome</Strong> deve ter no mínimo 2 letras </p>"
            }
            if(! rEmail){
                document.querySelector('#erros').innerHTML+= "<p>Campo <strong>Email</Strong> inválido </p>"
            }
            if(! rTexto){
                document.querySelector('#erros').innerHTML+= "<p>Campo <strong>Texto</Strong> deve ter no mínimo 10 letras </p>"
            }
        };


    }

    
    return (
        <div onLoad={tContato}>

            <Header id="header"/>
                
                        <div className="contato">
                            <div id="titulo">
                                <h1>Contato</h1>
                                <p>Use esse formulário para falar conosco!</p>
                            </div>
                            <div  id="erros">

                            </div>
                            <div id="form-de-contato">
                                <TextField
                                id="nome-completo"
                                label="Nome completo"
                                style={{ margin:12}}
                                placeholder="Insira seu nome"
                                helperText="Com sobrenome!"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                    
                                }}
                                />
                                <TextField
                                id="email"
                                label="Email"
                                style={{ margin: 12}}
                                placeholder="exemplo@catdog.com"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                                <TextField
                                style={{ margin: 12 }}
                                id="contato-texto"
                                label="Fale conosco!"
                                multiline
                                fullWidth
                                rows={4}
                                variant="outlined"
                                />
                            
                                <Button variant="contained" color="primary"
                                style={{marginLeft: 10}} onClick={validador}>
                                Enviar
                                </Button>
                                <div className='ResContato'></div>
                                
                        </div>
                    </div>
                    
            
            <Footer className="footer"/>
        </div>
    );
};

export default Contato;