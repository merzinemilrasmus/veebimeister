import elem from '/js/libs/elem.js';
import topbar from './components/topbar.js';


export default () => {
  topbar();
  const wallpaper = elem('img', {
    style: {
      position: 'absolute',
      top: '-3vw',
      left: 0,
      width: '100%',
      zIndex: -1,
      opacity: 0.5

    }
  }, document.body);
  wallpaper.src = '/img/pilt.jpg';
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
      top: '50vw',
      display: 'grid',
      width: '100%',
      padding: '12rem 24rem',
      boxSizing: 'border-box',
      gridGap: '3rem',
      justifyContent:'space-between',
      gridTemplateColumns: 'auto auto',
      fontWeight:'500',
      fontSize:'1.5vw'
    }
  }, document.body);

  const info = elem('div', {}, kontakt)
  const list = elem('ul', {
    style: {
      listStyle: "none",
      padding: 0,
      marginTop: '10px'
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
      padding: 0
    }
  }, info);
  const email = elem('li', {
    innerHTML:"info@terav.ee",
  }, list2)

  const tel = elem('li', {
    innerHTML:"+372 555 1111",
  }, list2)

  const list3 = elem('div', {
   }, info);

  const iconStyle = {
    height: '3rem',
    marginRight:'1.5vw',
    marginTop:'2vw',
    cursor: 'pointer',
  };

  const fb = elem('img', {
    style: iconStyle,
  }, list3)
fb.src = '/img/logo-facebook.svg';

  const linked = elem('img', {
    style: iconStyle,
  }, list3)
  linked.src = '/img/logo-linkedin.svg';
  const skype = elem('img', {
    style: iconStyle,
  }, list3)
  skype.src = '/img/logo-skype.svg';


  const sendEmail = elem('form', {}, kontakt)

  const vormiLahtriteStiil = {
    display:'block',
      width: '30ex',
      marginTop:'10px',
      borderRadius:'10px',
      border:'none',
      padding:'1.1vw'

  }

  const vormPealkiri = elem('input', {
    placeholder:'Pealkiri',
    style: vormiLahtriteStiil
  }, sendEmail);
  const vormSaatja = elem('input', {
    placeholder:'Saatja',
    style: vormiLahtriteStiil
  }, sendEmail);
  const vormSisu = elem('input', {
    placeholder:'Sisu',
    style: vormiLahtriteStiil
  }, sendEmail);
  const vormButton = elem('button', {
    innerHTML:'Saada',
    style: {
      ...vormiLahtriteStiil,
      marginTop:'2vw',
      padding:'0.5vw',
      width:'10ex'
      

    },
  }, sendEmail);
};
