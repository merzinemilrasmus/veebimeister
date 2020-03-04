import elem from '../libs/elem.js';
import api from '../libs/api.js';
import topbar from './components/topbar.js';


const currency = '€';


export default () => {
  topbar();

  const content = elem('div', {
    style: {
      padding: '3rem',
      width: '80%',
      maxWidth: '60rem',
      margin: 'auto',
    }
  });

  const mainTitle = elem('h1', { innerHTML: 'Koolitused' }, content);

  const list = elem('div', {
    style: {
      width: '100%',
      display: 'grid',
      gridGap: '4rem',
      boxSizing: 'border-box',
    }
  }, content);

  api.getCourses().then(res => res.json()).then(arr => arr.forEach(koolitus => {
    const subject = elem('div', {
      style: {
        background: (new Date()).getTime() < (new Date(koolitus.time)).getTime() ? '#afa' : 'none'
      }
    }, list);
    const title = elem('h2', {
      innerHTML: koolitus.title,
      style: {
        textTransform: 'capitalize'
      }
    }, subject);
    const desc = elem('p', {
      innerHTML: koolitus.description,
      style: {
        textAlign: 'justify',
      }
    }, subject);
    const time = elem('p', {
      innerHTML: koolitus.time,
    }, subject);
    const trainer = elem('p', {
      innerHTML: koolitus.trainer,
    }, subject);
    const price = elem('p', {
      innerHTML: koolitus.price +currency,
    }, subject);
    if (koolitus.registered) {
      const reg = elem('p', {
        innerHTML: 'Olete registreeritud!'
      }, subject);
    } else {
    console.log(koolitus.id, koolitus.registered);
    const button = elem('button', {
      innerHTML: 'Registreeri',
      onclick: () => {
        const sessionId = sessionStorage.getItem('sessionId');
        if (sessionId) {
          api.register(koolitus.id);
          location.reload();
        } else location.assign('/login');
      }
    }, subject);
}
  }));

  document.body.appendChild(content);
};
