import { SuperForm, LinkContainer } from '../../styles/formStyle';

export default function LoginForm({changeForm}){
    function handleSubmit(e){
        e.preventDefault();
    }
    
    return (
        <SuperForm>
            <form onSubmit={()=> handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Email'/>
                <input type="password" name="password" id="password" placeholder='Senha' />
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
