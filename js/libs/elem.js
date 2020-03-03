export default (type, props={}, parent) => {
  const node = document.createElement(type);
  for (const key in props) {
    if (key === 'style') {
      for (const styleKey in props[key]) node.style[styleKey] = props[key][styleKey];
    } else node[key] = props[key];
  }
  if (parent) parent.appendChild(node);
  return node;
};
