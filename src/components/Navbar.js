import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Select from 'react-styled-select';

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      windowWidth: window.innerWidth
    }
  }
  handleResize = (e) => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }
  handleScroll = (e) => {
    var navbar = document.getElementById('navbar');
    var sticky = 30;
    if (navbar) {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  }
  closeSidebarMenu = () => {
    this.setState({
      open: false
    })
  }
  linkTo = (value) => {
    document.getElementById(`${value}-link`).click();
    this.closeSidebarMenu();
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    console.log(window.innerWidth);
    const portfolioOptions = [{ label: 'MOMENTUM', value: 'momentum' }, { label: 'BALANCE', value: 'balance' }]
    return (
      <div id="home">
        {
          window.innerWidth < 700
            ?

            <Menu isOpen={this.state.open}>
              <AnchorLink className="nav-link" href='#home' style={{ width: '200px' }}>ANDREW WATTERS</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#about'>ABOUT ME</AnchorLink>
              <Select className="nav-link-dropdown dropdown-sidebar"
                options={portfolioOptions}
                onChange={this.linkTo}
                placeholder={"PORTFOLIO"} />
              <AnchorLink className="nav-link" offset='39' href='#skills'>SKILLS</AnchorLink>
              <AnchorLink className="nav-link" offset='-800' href='#contact'>CONTACT</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#momentum' id="momentum-link" style={{ display: 'none' }}>MOMENTUM</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#balance' id="balance-link" style={{ display: 'none' }}>BALANCE</AnchorLink>
            </Menu>

            :

            <div className="nav-container" id="navbar">
              <AnchorLink className="nav-link" href='#home' style={{ width: '200px' }}>ANDREW WATTERS</AnchorLink>
              <AnchorLink className="nav-link" />
              <AnchorLink className="nav-link" />
              <AnchorLink className="nav-link" offset='39' href='#about'>ABOUT ME</AnchorLink>
              <Select
                className="nav-link-dropdown"
                options={portfolioOptions}
                onChange={this.linkTo}
                placeholder={"PORTFOLIO"} />
              <AnchorLink className="nav-link" offset='39' href='#skills'>SKILLS</AnchorLink>
              <AnchorLink className="nav-link" offset='-800' href='#contact'>CONTACT</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#momentum' id="momentum-link" style={{ display: 'none' }}>MOMENTUM</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#balance' id="balance-link" style={{ display: 'none' }}>BALANCE</AnchorLink>
            </div>
        }
        <i id="menu-tag" />
      </div>
    )
  }
}