import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

// Components
import Signup from "./Signup";
import Signin from "./Signin";
import GymList from "./GymList";
import ClassList from "./ClassList";
import ClassDetails from "./ClassDetails";
import Home from "./Home";
import UserClasses from "./UserClasses";

const Routes = () => {
  const admin = useSelector((state) => state.userReducer.admin);
  const user = useSelector((state) => state.userReducer.user);
  const gymClasses = useSelector((state) => state.classReducer.classes);

  return (

    <Switch>
      <Route path="/admin">
        <Signup admin={true}/>
      </Route>
      <Route path="/signup">
        <Signup admin={false}/>
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/gyms/:gymSlug/classes">
        <ClassList gymClasses={gymClasses}/>
      </Route>
      <Route path="/classes/:classSlug">
        <ClassDetails />
      </Route>
      <Route path="/my-classes">
        <UserClasses />
      </Route>
      <Route path="/gyms">
        <GymList />
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
  );
};

export default Routes;
