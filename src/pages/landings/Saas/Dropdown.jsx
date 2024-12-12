import React from 'react'
import "./Dropdown.css"
import { Link } from 'react-router-dom'
import ar from "../../../assets/images/ar1.svg"
const Dropdown = () => {
  return (
    <div class="dropdown0 d-none d-lg-block">Features
  <ul class="dropdown-menu0">
  <li>    <div class="dropdown1">Ordering
  <ul class="dropdown-menu1">
    <li><Link to="/ordering">Table QR Ordering</Link></li>
    <li><Link to="/ordering">Inhouse Takeaway Ordering</Link></li>
    <li><Link to="/ordering">Inhouse Delivery Ordering</Link></li>
  </ul>
</div></li>
     <li>    <div class="dropdown2">Sales
  <ul class="dropdown-menu2">
    <li><Link to="/sales">Broadcast Message</Link></li>
    <li><Link to="/sales">Live Chat</Link></li>
    <li><Link to="/sales">Templates</Link></li>
    <li><Link to="/sales">Campaigns</Link></li>
    <li><Link to="/sales">Guest Management</Link></li>

  </ul>
</div></li>
    <li>    <div class="dropdown3">Billing
  <ul class="dropdown-menu3">
        <li><div class="dropdown4 justify-content-between d-flex px-4">POS Management &nbsp;<span><img src={ar} width={"20px"} alt='Arrow Right'/></span>
  <ul class="dropdown-menu4">
    <li><Link to="/pos">Table View</Link></li>
    <li><Link to="/pos">Live View View</Link></li>
    <li><Link to="/pos">KOT View</Link></li>
    <li><Link to="/pos">KDS</Link></li>
  

  </ul>
</div></li>
            <li><div class="dropdown5 justify-content-between d-flex px-4">Menu Management &nbsp;<span><img src={ar} width={"20px"} alt='Arrow Right'/></span>
  <ul class="dropdown-menu5">
    <li><Link to="/menu">Item Management</Link></li>
    <li><Link to="/menu">Menu Config</Link></li>
    <li><Link to="/menu">Parent Management</Link></li>
    <li><Link to="/menu">Table Management</Link></li>

  

  </ul>
</div></li>
     <li><div class="dropdown13 justify-content-between d-flex px-4">Order Records &nbsp;<span><img src={ar} width={"20px"} alt='Arrow Right'/></span>
  <ul class="dropdown-menu13">
    <li><Link to="/orders">Order Summary</Link></li>
    <li><Link to="/orders">KOT Records</Link></li>
    <li><Link to="/orders">Online Records</Link></li>
    <li><Link to="/orders">Change Request</Link></li>
    <li><Link to="/orders">Avg Prep Time</Link></li>
    <li><Link to="/orders">Item Wise Sales</Link></li>

  </ul>
</div></li>

  </ul>
</div></li>
             <li><div class="dropdown6">Management
  <ul class="dropdown-menu6">
  <li><div class="dropdown7 justify-content-between d-flex px-4">Inventory Management &nbsp;<span><img src={ar} width={"20px"} alt='Arrow Right'/></span>
  <ul class="dropdown-menu7">
    <li><Link to="/inventory">Raw Material</Link></li>
    <li><Link to="/inventory">Supplier</Link></li>
    <li><Link to="/inventory">Purchase</Link></li>
    <li><Link to="/inventory">Recipe</Link></li>
    <li><Link to="/inventory">Semi Finished</Link></li>
    <li><Link to="/inventory">Requisition</Link></li>

  </ul>
</div></li>

<li><div class="dropdown8 justify-content-between d-flex px-4">Expense Management &nbsp;<span><img src={ar} width={"20px"} alt='Arrow Right'/></span>
  <ul class="dropdown-menu8">
    <li><Link to="/expense">Vendor List</Link></li>
    <li><Link to="/expense">Expense List</Link></li>


  </ul>
</div></li>
    <li><div class="dropdown9 justify-content-between d-flex px-4">Staff Management &nbsp;<span><img src={ar} width={"20px"} alt='Arrow Right'/></span>
  <ul class="dropdown-menu9">
    <li><Link to="/staff">Staff Register</Link></li>
    <li><Link to="/staff">Attendance and Leave</Link></li>
    <li><Link to="/staff">Salary</Link></li>
    <li><Link to="/staff">Attendance Stats</Link></li>


  </ul>
</div></li>
    <li><div class="dropdown10 justify-content-between d-flex px-4">Staff Load Management &nbsp;<span><img src={ar} width={"20px"} alt='Arrow Right'/></span>
  <ul class="dropdown-menu10">
    <li><Link to="/staffload">Load Creation</Link></li>
    <li><Link to="/staffload">Task list and Action</Link></li>
    <li><Link to="/staffload">Staff Performance</Link></li>
    <li><Link to="/staffload"></Link></li>
  </ul>
</div></li>

  </ul>
</div></li>
 
  </ul>
</div>
  )
}

export default Dropdown