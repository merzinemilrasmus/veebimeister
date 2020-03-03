import elem from '../libs/elem.js';
import topbar from './components/topbar.js';


export default () => {
  topbar();


  const login = elem('form', {}, document.body)

  const loginLahtriteStiil = {
    display:'block',
      width: '30ex',
      borderRadius:'10px',
      border:'none',
      padding:'1.1vw',
      margin:'auto',
      marginTop:'25px',
     
      
  }

  const kasutajanimi = elem('input', {
    placeholder:'Kasutajanimi',
    style: {
        ...loginLahtriteStiil,
        marginTop:'10vw',
        
      }
  }, login);

  const password = elem('input', {
    placeholder:'Salasõna',
    style: loginLahtriteStiil
  }, login);
  
  const loginButton = elem('button', {
    innerHTML:'Logi sisse',
    style: {
      ...loginLahtriteStiil,
      marginTop:'2vw',
      padding:'0.5vw',
      width:'20ex'
    }
  }, login)
};
