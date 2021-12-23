const getItem = (key) => JSON.parse(localStorage.getItem(key)) || null;

const setItem = ({ key, value }) =>
  localStorage.setItem(key, JSON.stringify(value));

const updateItem = ({ key, updateProperty, updateValue }) => {
  const originData = getItem(key);

  const value = {
    ...originData,
    [updateProperty]: updateValue,
  };

  setItem({
    key,
    value,
  });
};
export { getItem, setItem, updateItem };
