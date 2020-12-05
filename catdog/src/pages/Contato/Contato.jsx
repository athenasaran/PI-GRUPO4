import React from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./Contato.css"

// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';

const Contato = () => {
    
    function tContato() {
        document.title = "Cat & Dog - Contato"
    };
    
    
    return (
        <div onLoad={tContato}>

            <Header />

            <div className="contato">
                <div id="titulo">
                    <h1>Contato</h1>
                    <p>Use esse formulário para falar conosco!</p>
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
                    color="secondary"
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
                    {/* nome
                    email
                    sugestão */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contato;