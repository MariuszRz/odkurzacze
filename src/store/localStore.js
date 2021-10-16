const localStorageTest = () => {
  const test = "test" + new Date().valueOf();
  try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
  } catch(e) {
      return false;
  }
}

const setLocalStore =(item,value)=>{
  if (localStorageTest()) {
    localStorage.setItem(item, value);
}
}

export default setLocalStore;