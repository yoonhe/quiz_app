const getItem = (key) => JSON.parse(localStorage.getItem(key)) || null;

const setItem = ({ key, value }) =>
  localStorage.setItem(key, JSON.stringify(value));

export { getItem, setItem };
