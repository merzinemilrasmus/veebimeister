const route = location.href.replace(/^.*:\/\/[^/]+\//, '').split('/');


const renderView = async (view, props={}) => (await import(`./views/${view}.js`)).default(props);

const cleanRoute = level => route.length > level && location.assign('/' +route.slice(0, level).join('/'));


switch (route[0]) {
  case '':
    location.assign('/avaleht');
    break;

  case 'avaleht':
    cleanRoute(1);
    renderView('avaleht');
    break;

  case 'koolitused':
    cleanRoute(2);
    renderView('koolitused');
    break;

    case 'login':
      cleanRoute(1);
      renderView('login');
      break;

  default:
    location.assign('/');
}
