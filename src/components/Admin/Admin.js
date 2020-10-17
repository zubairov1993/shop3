import React from 'react'
import './Admin.scss';
import AdminContent from './AdminContent/AdminContent';
import SideBar from './SideBar/SideBar';

function Admin() {
  return (
    <div className='admin'>
      <SideBar />
      <AdminContent />
    </div>
  )
}

export default Admin
