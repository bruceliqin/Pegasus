import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
  CDBSidebarCTA,
} from 'cdbreact';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
      <CDBSidebar textColor="#333" backgroundColor="#f4f4f4">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>PEGASUS</CDBSidebarHeader>

        <CDBSidebarContent>

          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large" textFontSize="14px">
              Mail
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note" textFontSize="14px">
              Schedule
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>

        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{ padding: '20px 5px' }}
          >
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  )
};

export default Sidebar;