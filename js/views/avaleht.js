import elem from '/js/libs/elem.js';
import topbar from './components/topbar.js';


export default () => {
  topbar();
  const title = elem('h1', {
    innerHTML: 'Chat'
  }, document.body);
};
