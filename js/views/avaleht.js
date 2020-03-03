import elem from '../libs/elem.js';
import topbar from './components/topbar.js';


export default props => {
  topbar();
  const wallpaper = elem('img', {
    style: {
      position: 'absolute',
      top: '-3vw',
      left: 0,
      width: '100%',
      zIndex: -1,
      opacity: 0.5
    },
    src: '/img/pilt.jpg'
  }, document.body);
  const company = elem('p', {
    innerHTML:"Terav pliiats",
    style: {
      position: 'absolute',
      right: '22vw',
      top: '25.5vw',
      fontWeight: '500'
    }
  }, document.body);

  const slogan = elem('h1', {
    innerHTML:"...SEST TERAVUS LOEB",
    style: {
      position: 'absolute',
      right: '14vw',
      top: '41vw',
      letterSpacing:'1.08vw'
    }
  }, document.body);

  const kontakt = elem('div', {
    style: {
      position: 'absolute',
      background:'var(--dark-white)',
      top: '60vw',
      display: 'grid',
      width: '100%',
      height: '50rem',
      maxHeight: '100vw',
      boxSizing: 'border-box',
      gridGap: '10vw',
      justifyContent:'center',
      alignContent:'center',
      gridTemplateColumns: 'auto auto',
    }
  }, document.body);

  const info = elem('div', {
    style: {
      display: 'grid',
      alignContent: 'space-between',
    }
  }, kontakt)
  const list = elem('ul', {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      fontSize:'1.5rem',
      fontWeight:'500',
      marginTop: '.8rem'
    }
  }, info);
  const aadress = elem('li', {
    innerHTML:"Männimetsa tee 23"
  }, list)
  const linn = elem('li', {
    innerHTML:"Tartu linn 55005",
  }, list)

  const list2 = elem('ul', {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      fontSize:'1.5rem',
      fontWeight:'500',
    }
  }, info);
  const email = elem('li', {
    innerHTML:"info@terav.ee",
  }, list2)

  const tel = elem('li', {
    innerHTML:"+372 555 1111",
  }, list2)

  const list3 = elem('div', {}, info);

  const iconStyle = {
    height: '3rem',
    marginRight:'1.5rem',
    cursor: 'pointer',
  };

  const fb = elem('img', {
    style: iconStyle,
    src: '/img/logo-facebook.svg'
  }, list3)

  const linked = elem('img', {
    style: iconStyle,
    src: '/img/logo-linkedin.svg'
  }, list3)

  const skype = elem('img', {
    style: iconStyle,
    src: '/img/logo-skype.svg'
  }, list3)


  const sendEmail = elem('form', {}, kontakt)

  const vormiLahtriteStiil = {
    display:'block',
    width: '30ex',
    marginTop:'.8rem',
  }

  const vormPealkiri = elem('input', {
    placeholder:'Pealkiri',
    style: vormiLahtriteStiil
  }, sendEmail);
  const vormSaatja = elem('input', {
    placeholder:'Saatja',
    style: vormiLahtriteStiil
  }, sendEmail);
  const vormSisu = elem('textarea', {
    placeholder:'Sisu',
    style: {
      ...vormiLahtriteStiil,
      height: '6rem',
    }
  }, sendEmail);
  const vormButton = elem('button', {
    innerHTML:'Saada',
    style: {
      ...vormiLahtriteStiil,
      marginTop: '1.5rem',
      width: 'auto',
    },
  }, sendEmail);

  setTimeout(() => {
    if (props.route[0] === 'kontakt') kontakt.scrollIntoView({behavior: 'smooth'});
  }, 0);
};
