import elem from '/js/libs/elem.js';

const barHeight = '3rem';
const links = [ 'avaleht', 'koolitused', 'kontakt', 'login' ];

export default () => {
  const div = elem('div', {
    style: {
      width: '100%',
      height: barHeight,
      padding: '.5rem',
      position: 'fixed',
      top: 0,
      left: 0,
      background: '#0006',
      color: 'var(--white)',
      gridGap: '1rem',
      display: 'grid',
      gridTemplateColumns: `repeat(${links.length +1}, auto)`,
      justifyContent: 'start',
    }
  });
  const logo = elem('img', {
    style: { height: '100%' },
    src: '/img/logo.svg',
  }, div);
  links.forEach(link => {
    const hAvaleht = elem('a', {
      href: `/${link}`,
      innerHTML: link,
      style: {
        textTransform: 'capitalize',
        display: 'block',
        lineHeight: barHeight,
        verticalAlign: 'middle',
      }
    }, div);
  });
  document.body.appendChild(div);
}
