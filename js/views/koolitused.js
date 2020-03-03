import elem from '/js/libs/elem.js';
import topbar from './components/topbar.js';


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
      width: '100%',
      boxSizing: 'border-box',
      padding: '2rem',
    }
  });

  getKoolitused().forEach(koolitus => {
    const div = elem('div', {}, content);
    const title = elem('h1', {
      innerHTML: koolitus.title,
    }, div);
    const desc = elem('p', {
      innerHTML: koolitus.description,
    }, div);
  });

  document.body.appendChild(content);
};
