import elem from '../libs/elem.js';
import api from '../libs/api.js';
import topbar from './components/topbar.js';


const currency = '€';
const getKoolitused = api.getCourses();


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
      gridTemplateColumns: '1fr auto',
      gridGap: '4rem',
      boxSizing: 'border-box',
    }
  }, content);

  getKoolitused().then(res => res.json()).then(arr => arr.forEach(koolitus => {
    const subject = elem('div', {}, list);
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
    const price = elem('p', {
      innerHTML: koolitus.price +currency,
    }, subject);
    const button = elem('button', {
      innerHTML: 'Registreeri',
    }, subject);

    const trainer = elem('div', {
      style: {
        width: '20ex',
      }
    }, list);
    const name = elem('h3', {
      innerHTML: koolitus.trainer.name,
      style: {
        textAlign: 'center',
      }
    }, trainer);
    const image = elem('img', {
      src: koolitus.trainer.imageUrl,
      style: {
        width: '100%',
      }
    }, trainer);
    const trainerDesc = elem('p', {
      innerHTML: koolitus.trainer.description,
      style: {
        textAlign: 'center',
      }
    }, trainer);
  }));

  document.body.appendChild(content);
};
