import elem from '/js/libs/elem.js';

export default () => {
  elem('div', {
    innerHTML: 'navbar',
    style: {
      width: '100%',
      position: 'fixed',
      background: '#0002',
      top: 0,
      left: 0,
    }
  }, document.body);
}
