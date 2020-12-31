import {DefaultLayout} from './layout/defaultLayout'
import { Route, Switch, Redirect } from "react-router-dom";
import {LoginForm} from './pages/login_register/login'
import {RegisterForm} from './pages/login_register/register'
import {Results} from './pages/results/index'
import Detail from './pages/detail/index'
import {HomePage} from './pages/home/home'
import {Posting} from './pages/posting/index'
import SetProFile from "./pages/dashboard/posts/index"
import {ManageAccount} from './pages/dashboard/profile/index'
import {UpdatePost} from './pages/posting/updatePost'
import { Page403} from './pages/Page403/index'
import {ProtectedRoute, VerifiedRoute} from './services/service.route'
function App() {
  return (
    <DefaultLayout>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" component={HomePage} />
        <Redirect exact path="/" to="/detail" /> 
        <Route path="/detail/:idBlog" render={(props) => <Detail {...props} key={Date.now()}/>} />
        <Redirect exact path="/" to="/result" />
        <Route path="/result" render={(props) => <Results {...props} key={Date.now()}/>} />

        <Redirect exact path="/" to="/login" />
        <VerifiedRoute path="/login" component={LoginForm} />
        <Redirect exact path="/" to="/register" />
        <VerifiedRoute path="/register" component={RegisterForm} />

        <Redirect exact path="/" to="/manage/account/:idUser" />
        <ProtectedRoute path="/manage/account/:idUser" component={ManageAccount} />
        <Redirect exact path="/" to="/setting" />
        <ProtectedRoute path="/setting" component = {SetProFile} />
        <Redirect exact path="/" to="/update/:idBlog" />
        <ProtectedRoute path="/update/:idBlog" component = {UpdatePost} />
        <Redirect exact path="/" to="/posting" />
        <ProtectedRoute path="/posting" component = {Posting} />

        <Redirect exact path="/" to="/page/403" />
        <Route path="/page/403" render={(props) => <Page403 {...props} key={Date.now()}/>}/>

      </Switch>
    </DefaultLayout>
  );
}

export default App;
