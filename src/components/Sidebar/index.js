import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarRoute,
    SideBtnWrap,
    SidebarLink,
    SidebarWrapper,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
             <CloseIcon />    
          </Icon> 
          <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} to="about">About</SidebarLink>
                <SidebarLink onClick={toggle} to="discover">Discover</SidebarLink>
                <SidebarLink onClick={toggle} to="services">Services</SidebarLink>
                <SidebarLink onClick={toggle} to="signup">Sign up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin" >Sign in</SidebarRoute>   
            </SideBtnWrap>   
          </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar;
