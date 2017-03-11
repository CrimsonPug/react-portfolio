import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import './../styles/css/NavBar.css';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import PopoverExampleSimple from './NavComponents/NavBtn'

const styles = {
  marginRight: 12,
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
};

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      open:false
    }
    this.openDrawer = this.openDrawer.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(){
    this.setState({
      open:false
    })
  }
  openDrawer(){
    console.log('open sesame');
    this.setState({
      open:!this.state.open
    })
  }
  render() {
      return (
          <div className="nav-container">
            <div className="nav-bar">
              <div className="brand">
                  <h2>Ikram <span id="skinny">Mustapha</span></h2>
              </div>
              <div className="btn-container">
                <RaisedButton href="/about" label="Default" style={styles} />
                <RaisedButton label="Primary" primary={true} style={styles} />
                <PopoverExampleSimple/>
              </div>
              <div className="collapse-container">
                <IconButton
                  iconStyle={styles.mediumIcon}
                  onClick={this.openDrawer}
                  // style={styles.medium}
                  
                >
                  <NavigationMenu />
                  <Drawer
                    openSecondary={true}
                    docked={false}
                    width={250}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                  >
                    <MenuItem onTouchTap={this.handleClose}>About Me</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Work</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Find Me</MenuItem>
                  </Drawer>
                </IconButton>
              </div>
            </div>
              {this.props.children}          
          </div>
      );
    
    
  }
}


export default NavBar;
