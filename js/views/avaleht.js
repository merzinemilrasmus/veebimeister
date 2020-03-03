import elem from '/js/libs/elem.js';
import topbar from './components/topbar.js';


export default () => {
  topbar();
  const wallpaper = elem('img', {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: -1
    }
  }, document.body);
  wallpaper.src = '/img/pilt.jpg';
  const company = elem('p', {
    innerHTML:"Terav pliiats",
    style: {
      position: 'absolute',
      right: '10vw',
      top: '40vh'
    }
  }, document.body);
};
