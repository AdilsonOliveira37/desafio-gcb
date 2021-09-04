import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';

const Routes = (): JSX.Element => {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;