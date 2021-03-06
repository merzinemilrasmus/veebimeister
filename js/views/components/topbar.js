import elem from '/js/libs/elem.js';

const barHeight = 2.5;
const barPadding = .8;
const links = [ 'avaleht', 'koolitused', 'kontakt', sessionStorage.getItem('sessionId') ? 'logOut' : 'logIn' ];

export default () => {
  const div = elem('div', {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: `${barHeight +barPadding *2}rem`,
      padding: `${barPadding}rem`,
      position: 'fixed',
      top: 0,
      left: 0,
      background: '#0006',
      color: 'var(--white)',
      gridGap: '1rem',
      display: 'grid',
      gridTemplateColumns: `repeat(${links.length +1}, auto) 1fr`,
      justifyContent: 'start',
      zIndex: 9,
    }
  });

  const logo = elem('img', {
    style: {
      width: `${barHeight}rem`,
    },
    src: '/img/logo.svg',
  }, div);

  links.forEach(link => {
    const portal = elem('a', {
      href: `/${link.toLowerCase()}`,
      innerHTML: link,
      style: {
        textTransform: 'capitalize',
        display: 'block',
        lineHeight: `${barHeight}rem`,
        verticalAlign: 'middle',
      }
    }, div);
    if (link === 'logOut') elem('span', {
      innerHTML: sessionStorage.getItem('email'),
      style: { marginLeft: '.5rem' }
    }, portal);
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
      padding: '.5rem .8rem',
      border: 'none',
      borderRadius: `${barHeight}rem`,
    }
  }, search);

  const searchButton = elem('button', {
    style: {
      background: '#0000',
      border: 'none',
      padding: 0,
      height: '1.6rem',
    },
    onclick: e => {
      e.preventDefault();
      location.assign(`/koolitused/${searchBar.value}`);
    }
  }, search);

  const searchIcon = elem('img', {
    src: '/img/search-outline-white.svg.png',
    style: {
      height: '100%',
    }
  }, searchButton);


  const filler = elem('div', { style: { height: `${barHeight +barPadding *2}rem` } }, document.body);
  document.body.appendChild(div);
}
