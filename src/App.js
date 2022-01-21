import Counter from './components/Counter';
import Header from './components/Header';
import { Fragment } from 'react';
import Auth from './components/Auth'
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {!isAuth ? <Auth /> : null}
      {isAuth ? <UserProfile /> : null}
      <Counter />

    </Fragment>
  );
}

export default App;
