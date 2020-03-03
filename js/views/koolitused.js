import elem from '../libs/elem.js';
import topbar from './components/topbar.js';


const currency = '€';
const getKoolitused = () => [
  {
    title: 'PHP alused',
    time: '2020-03-21 09:00',
    description: 'Sed tenetur doloribus esse velit maxime est nemo. Voluptatem eligendi praesentium non. Repellat qui enim ad quis reprehenderit excepturi. Aut et nisi dolore sint voluptas nobis inventore est. Saepe aut sint ipsa. Natus sint blanditiis a unde.',
    price: 20,
    trainer: {
      name: 'John Smith',
      imageUrl: '/img/logo.svg',
      description: 'Et aut soluta similique deserunt id.',
    }
  },
  {
    title: 'JavaScript for everything',
    time: '2020-03-14 09:00',
    description: 'Qui consequuntur repudiandae ea quidem veniam. Libero repudiandae nobis omnis debitis. Omnis enim numquam omnis repudiandae. Commodi et unde voluptatibus accusamus a totam. Id vitae rerum voluptatibus doloremque ex deserunt amet. Quia repudiandae ea ipsum vero enim ab veniam.',
    price: 30,
    trainer: {
      name: 'John Smith',
      imageUrl: '/img/logo.svg',
      description: 'Et aut soluta similique deserunt id.',
    }
  }
];


export default () => {
  topbar();

  const content = elem('div', {
    style: {
      padding: '3rem',
    }
  });

  const mainTitle = elem('h1', { innerHTML: 'Koolitused' }, content);

  const list = elem('div', {
    style: {
      width: '100%',
      maxWidth: '80rem',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gridGap: '2rem',
      boxSizing: 'border-box',
    }
  }, content);

  getKoolitused().forEach(koolitus => {
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
      innerHTML: 'Register',
      style: {
        font: 'inherit',
        border: 'none',
        background: 'var(--pencil)',
        padding: '.8rem 2rem',
        color: 'var(--coffee)',
        borderRadius: '1rem',
      }
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
  });

  document.body.appendChild(content);
};
