import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Component/Shared/Login/Login';
import TourPackages from './Component/TourPackages/TourPackages';
import AddServices from './Component/AddServices/AddServices';
import DetailedService from './Component/DetailedService/DetailedService';
import PrivateRout from './Component/Shared/PrivateRoute/PrivateRout';
import MangeOrder from './Component/ManageOrder/MangeOrder';
import MyOrders from './Component/MyOrders/MyOrders';
import PageNotFound from './Component/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/tourpackages'>
          <TourPackages></TourPackages>
        </Route>
        <Route path='/addservices'>
          <AddServices></AddServices>
        </Route>
        <Route path='/manageorders'>
          <MangeOrder></MangeOrder>
        </Route>
        <Route path='/myorders'>
          <MyOrders></MyOrders>
        </Route>
        <PrivateRout path='/detailedservices/:packageID'>
         <DetailedService></DetailedService>
        </PrivateRout>
        <Route path='*'>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>


      </BrowserRouter>

      </AuthProvider>
      
    </div>
  );
}

export default App;
