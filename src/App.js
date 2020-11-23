import {DefaultLayout} from './layout/defaultLayout'
import { Route, Switch, Redirect } from "react-router-dom";
import {LoginForm} from './pages/login_register/login'
import {RegisterForm} from './pages/login_register/register'
import {Results} from './pages/results/index'
import Detail from './pages/detail/index'
import {HomePage} from './pages/home/mainHome'
import {Posting} from './pages/posting/index'
import SetProFile from "./pages/dashboard/posts/index"
import {ManageAccount} from './pages/dashboard/profile/index'
import {UpdatePost} from './pages/posting/updatePost'
function App() {
  return (
    <DefaultLayout>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" component={HomePage} />
        <Redirect exact path="/" to="/detail" />
        <Route path="/detail/:idBlog" component={Detail} />
        <Redirect exact path="/" to="/result" />
        <Route path="/result" component={Results} />
        <Redirect exact path="/" to="/login" />
        <Route path="/login" component={LoginForm} />
        <Redirect exact path="/" to="/register" />
        <Route path="/register" component={RegisterForm} />
        <Redirect exact path="/" to="/manage/account/:idUser" />
        <Route path="/manage/account/:idUser" component={ManageAccount} />
        <Redirect exact path="/" to="/setting" />
        <Route path="/setting" component={SetProFile} />
        {/* <Redirect exact path="/" to="/profile" /> */}
        <Redirect exact path="/" to="/update/:idBlog" />
        <Route path="/update/:idBlog" component={UpdatePost} />
        
        {/* <ProtectedRoute path="/profile/edit" component={EditProfile} />
        <ProtectedRoute path="/profile/index" component={ListRoom} /> */}

        {/* <Redirect exact path="/" to="/posting" /> */}

        <Redirect exact path="/" to="/posting" />
        <Route path="/posting" component={Posting} />

        {/* <Redirect exact path="/" to="/update/post/:idPost" />
        <ProtectedRoute path="/update/post/:idPost" component={Posts} /> */}
      </Switch>
    </DefaultLayout>
  );
}

export default App;
