import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/ShopHome'
import Users from './user/ShopUsers'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import MyShops from './shop/MyShops'
import Shop from './shop/Shop'
import EditShop from './shop/EditShop'
import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'
import Product from './product/Product'
import Cart from './cart/Cart'
import StripeConnect from './user/StripeConnect'
import ShopOrders from './order/ShopOrders'
import Order from './order/Order'
import SocialMenu from './core/SocialMenu'
import ShopMenu from './core/ShopMenu'
import SocialHome from './core/SocialHome'
import SocialUsers from './user/SocialUsers'
import SocialSignup from './user/social/user/SocialSignup'
import SocialSignin from './auth/SocialSignin'

const MainRouter = () => {
  return (<div>
      <SocialMenu/>
      <ShopMenu/>
      <Switch>
        <Route exact path="/shop" component={Home}/>
        <Route path="/shop/users" component={Users}/>
        <Route path="/shop/signup" component={Signup}/>
        <Route path="/shop/signin" component={Signin}/>
        <Route exact path="/social" component={SocialHome}/>
        <Route path="/social/signup" component={SocialSignup}/>
        <Route path="/social/signin" component={SocialSignin}/>
        <Route path="/social/users" component={SocialUsers}/>

       
        <PrivateRoute path="/shop/user/edit/:userId" component={EditProfile}/>
        <Route path="/shop/user/:userId" component={Profile}/>
        <PrivateRoute path="/shop/user/edit/:userId" component={EditProfile}/>
        <Route path="/shop/user/:userId" component={Profile}/>

        <Route path="/shop/cart" component={Cart}/>
        <Route path="/shop/product/:productId" component={Product}/>
        <Route path="/shop/shops/all" component={Shops}/>
        <Route path="/shop/shops/:shopId" component={Shop}/>

        <Route path="/shop/order/:orderId" component={Order}/>
        <PrivateRoute path="/shop/seller/orders/:shop/:shopId" component={ShopOrders}/>

        <PrivateRoute path="/shop/seller/shops" component={MyShops}/>
        <PrivateRoute path="/shop/seller/shop/new" component={NewShop}/>
        <PrivateRoute path="/shop/seller/shop/edit/:shopId" component={EditShop}/>
        <PrivateRoute path="/shop/seller/:shopId/products/new" component={NewProduct}/>
        <PrivateRoute path="/shop/seller/:shopId/:productId/edit" component={EditProduct}/>

        <Route path="   " component={StripeConnect}/>
      </Switch>
    </div>)
}

export default MainRouter
