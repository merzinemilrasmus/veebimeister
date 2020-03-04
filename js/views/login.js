import elem from '../libs/elem.js';
import api from '../libs/api.js';
import topbar from './components/topbar.js';


export default () => {
  topbar();


  const login = elem('form', {
    style: {
      marginTop:'5rem',
    }
  }, document.body)

  const loginLahtriteStiil = {
    display:'block',
    width: '30ex',
    margin:'auto',
    marginTop:'1.5rem',
  }

  const kasutajanimi = elem('input', {
    placeholder:'Kasutajanimi',
    style: loginLahtriteStiil,
  }, login);

  const password = elem('input', {
    placeholder:'Salasõna',
    type: 'password',
    style: loginLahtriteStiil
  }, login);
  
  const loginButton = elem('button', {
    innerHTML:'Logi sisse',
    style: {
      ...loginLahtriteStiil,
      marginTop:'2rem',
      width:'auto'
    },
    onclick: e => {
      e.preventDefault();
      const sessionId = api.login(kasutajanimi.value, password.value);
      console.log('--', sessionId);
    }
  }, login)
};
