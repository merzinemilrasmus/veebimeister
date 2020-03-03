import elem from '/js/libs/elem.js';

const barHeight = 2.5;
const links = [ 'avaleht', 'koolitused', 'kontakt', 'login' ];

export default () => {
  const div = elem('div', {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: `${barHeight +1.6}rem`,
      padding: '.8rem',
      position: 'fixed',
      top: 0,
      left: 0,
      background: '#0006',
      color: 'var(--white)',
      gridGap: '1rem',
      display: 'grid',
      gridTemplateColumns: `repeat(${links.length +1}, auto) 1fr`,
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
        lineHeight: `${barHeight}rem`,
        verticalAlign: 'middle',
      }
    }, div);
  });

  const search = elem('form', {
    style: {
      display: 'grid',
      gridGap: '.6rem',
      gridTemplateColumns: 'auto auto',
      justifyContent: 'end',
      alignItems: 'center',
    }
  }, div);

  const searchBar = elem('input', {
    type: 'text',
    placeholder: 'otsi',
    style: {
      height: '1rem',
      padding: '.5rem',
      border: 'none',
      borderRadius: `${barHeight}rem`,
    }
  }, search);

  const searchButton = elem('button', {
    style: {
      background: '#0000',
      border: 'none',
      height: '1.8rem',
    },
    onclick: () => location.assign(`/koolitused/${searchBar.value}`)
  }, search);

  const searchIcon = elem('img', {
    src: '/img/search-outline-white.svg.png',
    style: {
      height: '100%',
    }
  }, searchButton);

  document.body.appendChild(div);
}
