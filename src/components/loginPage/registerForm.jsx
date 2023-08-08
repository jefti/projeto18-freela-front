import { SuperForm, LinkContainer } from "../../styles/formStyle"

export default function RegisterForm({changeForm}){
    return (
    <SuperForm>
        <form>
            <input type="text" name="name" id="name" placeholder='Nome'/>
            <input type="email" name="email" id="email" placeholder='Email'/>
            <input type="text" name="name" id="name" placeholder='Link da foto de perfil'/>
            <input type="text" name="CPF" id="CPF" placeholder='CPF'/>
            <input type="text" name="phone" id="phone" placeholder='Número de telefone'/>
            <input type="password" name="password" id="password" placeholder='Senha' />
            <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirmar senha' />
            <button type='submit'>Cadastrar</button>
        </form>
        <LinkContainer>
            <span onClick={changeForm}>
                Já possui uma conta ? Faça o login aqui!
            </span>
        </LinkContainer>

    </SuperForm>
    )
}