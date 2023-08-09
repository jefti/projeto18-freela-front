import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SuperForm, LinkContainer, TextError } from '../../styles/formStyle';
import apiAuth from '../../services/apiAuth';
import { UserContext } from '../../contexts/userContext';

export default function LoginForm({changeForm}){
    const {setUser} = useContext(UserContext);
    const [form, setForm] = useState({email:'',senha:''});
    const [erros, setErros] = useState('');
    const nav = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        apiAuth.login(form)
            .then(res=>{
                console.log(res.data);
                setUser(res.data);
                //nav("/home");
            })
            .catch(err=>{
                if(Array.isArray(err.response.data)) setErros(err.response.data[0]);
                else setErros(err.response.data); 
                console.log(err.response.data);   
            });

        
    }
    
    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <SuperForm>
            <form onSubmit={ handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Email'
                    value={form.email}
                    onChange={handleForm}
                />
                <input 
                    type="password" 
                    name="senha" 
                    id="password" 
                    placeholder='Senha'
                    value={form.senha}
                    onChange={handleForm} 
                />
                {erros.length > 0 && <TextError>{erros}*</TextError>}
                <button type='submit'>Login</button>
            </form>
            <LinkContainer>
                <span onClick={changeForm}>
                    Não tem uma conta ? Cadastre-se aqui!
                </span>
            </LinkContainer>

        </SuperForm>
    )
}
