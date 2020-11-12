import React from 'react'
import './Admin.scss';
import AdminContent from './AdminContent/AdminContent';
import LoginForm from './LoginForm/LoginForm';
import SideBar from './SideBar/SideBar';

function Admin() {
  const adminUser = {
    name: "admin",
    password: "admin",
  };

  const [user, setUser] = React.useState({ name: "", password: "" });

  const Login = (details) => {
    if (
      details.name == adminUser.name &&
      details.password == adminUser.password
    ) {
      setUser({
        name: details.name,
        password: details.password,
      });
    }
  };

  return (
    <div className='admin'>
      {user.name != "" ? (
        <>
          <SideBar />
          <AdminContent />
        </>
        ) : (
          <LoginForm Login={Login}/>
        )
      }
    </div>
  )
}

export default Admin
