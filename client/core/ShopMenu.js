import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from '../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from '../cart/cart-helper'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}
const ShopMenu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        온라인 쇼핑몰
      </Typography>
      <div>
        <Link to="/shop">
          <IconButton aria-label="Home" style={isActive(history, "/shop")}>
            <HomeIcon/>
          </IconButton>
        </Link>
        <Link to="/shop/shops/all">
          <Button style={isActive(history, "/shop/shops/all")}>모든 상점</Button>
        </Link>
        <Link to="/shop/seller/shop/new">
          <Button style={isActive(history, "/shop/seller/shop/new")}>상점 등록 </Button>
        </Link>
        <Link to="/shop/cart">
          <Button style={isActive(history, "/shop/cart")}>
            카트
            <Badge color="secondary" invisible={false} badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
              <CartIcon />
            </Badge>
          </Button>
        </Link>      
      </div>
      <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/shop/signup">
            <Button style={isActive(history, "/shop/signup")}>쇼핑몰 회원가입
            </Button>
          </Link>
          <Link to="/shop/signin">
            <Button style={isActive(history, "/shop/signin")}>쇼핑몰 로그인
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          {auth.isAuthenticated().user.seller && (<Link to="/shop/seller/shops"><Button style={isPartActive(history, "/shop/seller/")}>내 상점</Button></Link>)}
          <Link to={"/shop/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/shop/user/" + auth.isAuthenticated().user._id)}>내프로필</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>쇼핑몰 로그아웃</Button>
        </span>)
      }
      </span></div>
    </Toolbar>
  </AppBar>
))

export default ShopMenu
