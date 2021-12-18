import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {Switch, Route, useRouteMatch} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddTrees from '../../AddTrees/AddTrees';
import MyOrder from '../../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import AllTrees from '../../AllTrees/AllTrees';
import AllOrders from '../../AllOrders/AllOrders';
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';
import Home from '../../Home/Home/Home';

const drawerWidth = 150;

function Dashboard(props) {
  const {user, logout, admin} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img src={logo} width="60px" className="mb-0 p-2" alt="" />
      </Toolbar>
      <Divider />
      <div className="text-start p-2">
        {!admin && <Box>
          <Link to={`${url}`} style={{textDecoration: 'none'}}><Button color="inherit">Dashboard</Button></Link>
          <Divider />
          <Link to="/home" style={{textDecoration: 'none'}}><Button color="inherit">Home</Button></Link>
          <Link to={`${url}/myOrder`} style={{textDecoration: 'none'}}><Button color="inherit">My Orders</Button></Link>
          <Link to={`${url}/review`} style={{textDecoration: 'none'}}><Button color="inherit">Review</Button></Link>
        </Box>}
        
        {admin && <Box>
          <Link to={`${url}/addTrees`} style={{textDecoration: 'none'}}><Button color="inherit">Add Trees</Button></Link>
          <Link to={`${url}/allTrees`} style={{textDecoration: 'none'}}><Button color="inherit">All Trees</Button></Link>
          <Link to={`${url}/allOrders`} style={{textDecoration: 'none'}}><Button color="inherit">All Orders</Button></Link>
          <Link to={`${url}/makeAdmin`} style={{textDecoration: 'none'}}><Button color="inherit">Make Admin</Button></Link>
        </Box>}
        <Divider />
        {user?.email &&
          <button onClick={logout} className="btn btn-warning ms-1 mt-3"><i className="fas fa-sign-out-alt"></i> Logout</button>
        }
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'gold',
          color: 'black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Miazi's Bonsai Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
            <Route exact path={path}>
              <h3>Welcome to Miazi Automobile</h3>
            </Route>
            <Route path={`${path}/payment/:orderId`}>
              <Payment></Payment>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
            </Route>
            {/* <Route path={`${path}/payment`}>
                <Payment></Payment>
            </Route> */}
            <Route path={`${path}/review`}>
                <Review></Review>
            </Route>
            <Route path={`${path}/addTrees`}>
                <AddTrees></AddTrees>
            </Route>
            <Route path={`${path}/allTrees`}>
                <AllTrees></AllTrees>
            </Route>
            <Route path={`${path}/allOrders`}>
                <AllOrders></AllOrders>
            </Route>
            <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
            </Route>
        </Switch>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
