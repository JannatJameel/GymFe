import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

// Components
import Signup from "./Signup";
import Signin from "./Signin";
import GymList from "./GymList";
import ClassList from "./ClassList";

const Routes = () => {
  const admin = useSelector((state) => state.userReducer.admin);
  const user = useSelector((state) => state.userReducer.user);
  const gymClasses = useSelector((state) => state.classReducer.classes);

  console.log("Admin", admin);
  console.log("User", user);
  console.log("Class State", gymClasses);


  return (

    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/gyms/:gymSlug/classes">
        <ClassList gymClasses={gymClasses}/>
      </Route>
      <Route path="/gyms">
        <GymList />
      </Route>
      <Route exact path="/">
        <div>Hellooo</div>
      </Route>
    </Switch>
  );
};

export default Routes;
