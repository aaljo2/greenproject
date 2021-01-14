import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from '../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ffa726'}
  else
    return {color: '#ffffff'}
}
const SocialMenu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        소셜
      </Typography>
      <Link to="/social">
        <IconButton aria-label="Home" style={isActive(history, "/social")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/social/signup">
            <Button style={isActive(history, "/social/signup")}>회원가입
            </Button>
          </Link>
          <Link to="/social/signin">
            <Button style={isActive(history, "/social/signin")}>로그인
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/social/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/social/user/" + auth.isAuthenticated().user._id)}>내프로필</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/social'))
            }}>로그아웃</Button>
        </span>)
      }
    </Toolbar>
  </AppBar>
))

export default SocialMenu 
