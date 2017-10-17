import App from '../App'
import Login from '../views/login/Login'
import Home from '../views/home/Home'

//const Login = r => require.ensure([], () => r(require('../views/login/login')), 'login');
//const Home = r => require.ensure([], () => r(require('../views/home/home')), 'home');


export default [{
  path: '/',
  components: { App },
  template: '<App/>',
  //component: App,
  children: [{
    path: '',
    redirect: '/home'
  }, {
    path: '/login',
    components: { Login },
    template: '<Login/>'
  }, {
    path: '/home',
    components: { Home },
    template: '<Home/>'
  }]
}]
