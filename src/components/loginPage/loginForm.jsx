import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SuperForm, LinkContainer, TextError } from '../../styles/formStyle';
import apiAuth from '../../services/apiAuth';
import { UserContext } from '../../contexts/userContext';
import { ThreeDots } from  'react-loader-spinner'

export default function LoginForm({changeForm}){
    const {setUser} = useContext(UserContext);
    
    const [form, setForm] = useState({email:'',senha:''});
    const [erros, setErros] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const nav = useNavigate();

    function handleSubmit(e){
        setIsLoading(true);
        e.preventDefault();
        apiAuth.login(form)
            .then(res=>{
                setIsLoading(false);
                setUser(res.data);
                nav("/home");
            })
            .catch(err=>{
                if(Array.isArray(err.response.data)) setErros(err.response.data[0]);
                else setErros(err.response.data); 
                setIsLoading(false);
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
                    disabled={isLoading}
                    onChange={handleForm}
                />
                <input 
                    type="password" 
                    name="senha" 
                    id="password" 
                    placeholder='Senha'
                    value={form.senha}
                    disabled={isLoading}
                    onChange={handleForm} 
                />
                {erros.length > 0 && <TextError>{erros}*</TextError>}
                <button 
                type='submit'
                disabled={isLoading}
                >{
                    isLoading?(
                        <ThreeDots 
                        height="40" 
                        width="40" 
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                    ): "Login!"
                }

                </button>

            </form>
            <LinkContainer>
                <span onClick={changeForm}>
                    Não tem uma conta ? Cadastre-se aqui!
                </span>
            </LinkContainer>

        </SuperForm>
    )
}
