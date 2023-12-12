import { useState } from "react";
import { SuperForm, LinkContainer,TextError } from "../../styles/formStyle"
import { ThreeDots } from  'react-loader-spinner'
import apiAuth from "../../services/apiAuth";

export default function RegisterForm({changeForm}){
    
    const [form, setForm] = useState({nome:'',email:'',phone:'',CPF:'',senha:'',foto:'',password:''});
    const [erros, setErros] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleRegister(e){
        e.preventDefault();
        if(form.senha !== form.password){
            setErros('As senhas informadas são diferentes');
            return;
        }
        setIsLoading(true);
        const{ password, ...obj} = form;
        apiAuth.cadastro(obj)
            .then(res=>{
                setIsLoading(false);
                alert('Cadastro realizado com sucesso');
                changeForm();
            })
            .catch(err=>{
                if(Array.isArray(err.response.data)) setErros(err.response.data[0]);
                else setErros(err.response.data); 
                setIsLoading(false);
            });
    }
    
    return (
    <SuperForm>
        <form onSubmit={handleRegister}>
            <input type="text" name="nome" id="name" placeholder='Nome' onChange={handleForm} value={form.nome} required/>
            <input type="email" name="email" id="email" placeholder='Email' onChange={handleForm} value={form.email}  required/>
            <input type="text" name="foto" id="foto" placeholder='Link da foto de perfil' onChange={handleForm} value={form.foto}  required/>
            <input type="text" name="CPF" id="CPF" placeholder='CPF' onChange={handleForm} value={form.CPF}  required/>
            <input type="text" name="phone" id="phone" placeholder='Número de telefone' onChange={handleForm} value={form.phone} required/>
            <input type="password" name="senha" id="senha" placeholder='Senha' onChange={handleForm} value={form.senha} required/>
            <input type="password" name="password" id="password" placeholder='Confirmar senha' onChange={handleForm} value={form.password} required/>
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
                    ): "Cadastrar"
                }

                </button>


        </form>
        <LinkContainer>
            <span onClick={changeForm}>
                Já possui uma conta ? Faça o login aqui!
            </span>
        </LinkContainer>

    </SuperForm>
    )
}