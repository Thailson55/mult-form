import Theme from '../../components/Theme'
import * as C from './styles'
import { useHistory } from 'react-router'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent } from 'react'

const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    history.push('/step2');
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr/>

        <label>
          Seu nome completo
          <input 
          type="text"
          autoFocus={true}
          value={state.name}
          onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container> 
    </Theme>
  )
}

export default FormStep1
