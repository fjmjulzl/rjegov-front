import App from '../App'
import Login from '../views/login/Login'
import Home from '../views/home/Home'

//const Login = r => require.ensure([], () => r(require('../views/login/Login')), 'Login');
//const Home = r => require.ensure([], () => r(require('../views/home/Home')), 'Home');

export default [{
  path: '/',
  //components: { App },
  //template: '<App/>',
  component: App,
  children: [{
    path: '',
    redirect: '/login'
  }, {
    path: '/login',
    component: Login
    //components: { Login },
    //template: '<Login/>'
  }, {
    path: '/home',
    component: Home
    //components: { Home },
    //template: '<Home/>'
  }]
}]
