import './Sidebar.css'
function Sidebar() {
    return ( 
         <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-items">
          <p >Doner request</p>
          <p >Donations received</p>
        </div>
        <button className="logout-btn" >
          Logout
        </button>
      </div>
    </div>
       
     );
}

export default Sidebar;