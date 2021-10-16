const user = items => ({
  type: 'SET_USER',
  items,
});

const logout = () => ({
  type: 'SET_LOGOUT'
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  user,
  logout
};
