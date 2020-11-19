const parseRoute = (requires) => {
  const algoList = new Map<string, string>();
  requires.keys().forEach(key => {
    algoList.set(key.split('.')[1].slice(1), key.slice(2));
  });
  return algoList;

}
const route = parseRoute(require.context('/src/code', true, /\.ts$/, 'lazy'));

export { route };