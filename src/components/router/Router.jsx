import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../pages/Top";
import { UserPage } from "../pages/UserPage";
import { DefaultLayout } from "../template/DefaultLayout";
import { OnlyHeader } from "../template/OnlyHeader";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <OnlyHeader>
            <UserPage />
          </OnlyHeader>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
