import React from 'react'
import { avatar, avatar1, avatar2, avatar3, avatar5, avatar6, bar, clock, cloud, down, empicon, funnel, gear, grid, icon, logo, picon, printer, ricon, sicon, step1, step2, step3, step4, step5, ticon } from './imagepath'

const EmpList = () => {
  return (
    <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    {/* Header */}
    <header className="header header-fixed header-one">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <a href="javascript:void(0);" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </a>
        </div>
        <div className="main-menu-wrapper">
          <ul className="main-nav">
            <li>
              <a href="javascript:void(0);">
                <img src={icon} alt="" />{" "}
                Dashboard
              </a>
            </li>
            <li className="active">
              <a href="employees.html">
                <img src={empicon} alt="" />{" "}
                Employees
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src={ticon} alt="" /> Time off
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src={picon} alt="" /> Policies
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img src={ricon} alt="" /> Reports
              </a>
            </li>
          </ul>
          <ul className="nav header-navbar-rht">
            <li className="nav-item search-item">
              <div className="top-nav-search">
                <form action="#">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn" type="submit">
                    <i className="feather-search" />
                  </button>
                  <span>
                    <img src={sicon} alt="" />
                  </span>
                </form>
              </div>
            </li>
            <li className="nav-item quick-link-item">
              <a className="btn" href="javascript:void(0);">
                <span>
                  Quick Links <i className="feather-zap" />
                </span>
              </a>
            </li>
            <li className="nav-item nav-icons">
              <a href="javascript:void(0);">
                <i className="feather-sun" />
              </a>
            </li>
            <li className="nav-item dropdown has-arrow notification-dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="feather-bell" />
                <span className="badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="javascript:void(0)">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src={avatar1}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">John Doe</span>
                              added new task{" "}
                              <span className="noti-title">
                                Patient appointment booking
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="javascript:void(0)">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src={avatar2}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Tarah Shropshire
                              </span>{" "}
                              changed the task name{" "}
                              <span className="noti-title">
                                Appointment booking with payment gateway
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="javascript:void(0)">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src={avatar6}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Misty Tison</span>{" "}
                              added{" "}
                              <span className="noti-title">
                                Domenic Houston
                              </span>{" "}
                              and{" "}
                              <span className="noti-title">Claire Mapes</span>{" "}
                              to project{" "}
                              <span className="noti-title">
                                Doctor available module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="javascript:void(0)">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src={avatar5}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Rolland Webber</span>{" "}
                              completed task{" "}
                              <span className="noti-title">
                                Patient and Doctor video conferencing
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="javascript:void(0)">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src={avatar3}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Bernardo Galaviz
                              </span>{" "}
                              added new task{" "}
                              <span className="noti-title">
                                Private chat module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                2 days ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="javascript:void(0)">View all Notifications</a>
                </div>
              </div>
            </li>
            <li className="nav-item nav-icons">
              <a href="javascript:void(0);">
                <i className="feather-settings" />
              </a>
            </li>
            <li className="nav-item nav-icons">
              <a href="javascript:void(0);">
                <i className="far fa-circle-question" />
              </a>
            </li>
            <li className="nav-item dropdown has-arrow main-drop">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <span className="user-img">
                  <img
                    src={avatar1}
                    className="img-rounded"
                    alt=""
                  />
                </span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="javascript:void(0);">
                  <i className="feather-user-plus" /> My Profile
                </a>
                <a className="dropdown-item" href="javascript:void(0);">
                  <i className="feather-settings" /> Settings
                </a>
                <a className="dropdown-item" href="javascript:void(0);">
                  <i className="feather-log-out" /> Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    {/* /Header */}
    {/* Page Wrapper */}
    <div className="page-wrapper">
      {/* Page Content */}
      <div className="content container">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <h3 className="page-title">
                Employees <span>(215)</span>
                <a href="javascript:void(0);">Archived (13)</a>
              </h3>
            </div>
            <div className="col-lg-6 col-md-6 page-header-btns">
              <a href="javascript:void(0);" className="btn import-btn">
                <img src={cloud} alt="" /> Import
              </a>
              <a href="javascript:void(0);" className="btn">
                <img src={gear} alt="" />
              </a>
              <a
                href="javascript:void(0);"
                className="btn new-employee-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa-solid fa-plus" /> New Employee
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="search-filter employee-list-search">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="form-group d-flex justify-content-start">
                <i className="feather-search" />
                <input type="text" className="form-control" placeholder="" />
                <button className="btn btn-transparant">Apply Filter</button>
                <ul className="list-filter d-flex">
                  <li className="clearfix">
                    <i className="fa fa-building" aria-hidden="true" />
                    Coimbatore Office
                    <i className="fa fa-times" aria-hidden="true" />
                  </li>
                  <li className="clearfix">
                    <i className="fa fa-user" aria-hidden="true" />
                    John Walker
                    <i className="fa fa-times" aria-hidden="true" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="nav search-btns-info">
                <li>
                  <a href="javascript:void(0);" className="btn">
                    <img src={clock} alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="btn">
                    <img src={down} alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="btn">
                    <img src={printer} alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="btn">
                    <img src={funnel} alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="btn">
                    <img src={bar} alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="btn active">
                    <img src={grid} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Search Filter */}
        {/* Employee List */}
        <div className="employee-list">
          <div className="row">
            <div className="col-sm-12">
              <div className="card-table">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-center table-hover datatable">
                      <thead className="thead-light">
                        <tr>
                          <th>
                            Employee ID&nbsp;&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </th>
                          <th>
                            Employee Name&nbsp;&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </th>
                          <th>
                            Department&nbsp;&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </th>
                          <th>
                            Joining Date&nbsp;&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </th>
                          <th>
                            Employment Type&nbsp;&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </th>
                          <th>
                            Mail ID&nbsp;&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </th>
                          <th>
                            Phone Number&nbsp;&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </th>
                          <th>
                            Action&nbsp;&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="s-no">DGT 00201</td>
                          <td>
                            <h2 className="table-avatar d-flex">
                              <a
                                href="profile.html"
                                className="avatar avatar-md me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avatar2}
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">
                                Richard Miles <br />
                                <span>BD Manager</span>
                              </a>
                            </h2>
                          </td>
                          <td>Business Team</td>
                          <td>3 March 2023</td>
                          <td>Full Time</td>
                          <td>johnsmith@dgthrms.com</td>
                          <td>+1 989-438-3131</td>
                          <td className="d-flex align-items-center">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className=" btn-action-icon "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="edit-invoice.html"
                                    >
                                      <i className="far fa-edit me-2" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="far fa-trash-alt me-2" />
                                      Delete
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="invoice-details.html"
                                    >
                                      <i className="far fa-eye me-2" />
                                      View
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="active-customers.html"
                                    >
                                      <i className="far fa-bell me-2" />
                                      Active
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="deactive-customers.html"
                                    >
                                      <i className="far fa-bell-slash me-2" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="s-no">DGT 00201</td>
                          <td>
                            <h2 className="table-avatar d-flex">
                              <a
                                href="profile.html"
                                className="avatar avatar-md me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avatar2}
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">
                                Richard Miles <br />
                                <span>BD Manager</span>
                              </a>
                            </h2>
                          </td>
                          <td>Business Team</td>
                          <td>3 March 2023</td>
                          <td>Full Time</td>
                          <td>johnsmith@dgthrms.com</td>
                          <td>+1 989-438-3131</td>
                          <td className="d-flex align-items-center">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className=" btn-action-icon "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="edit-invoice.html"
                                    >
                                      <i className="far fa-edit me-2" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="far fa-trash-alt me-2" />
                                      Delete
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="invoice-details.html"
                                    >
                                      <i className="far fa-eye me-2" />
                                      View
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="active-customers.html"
                                    >
                                      <i className="far fa-bell me-2" />
                                      Active
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="deactive-customers.html"
                                    >
                                      <i className="far fa-bell-slash me-2" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="s-no">DGT 00201</td>
                          <td>
                            <h3 className="table-avatar d-flex">
                              <a
                                href="profile.html"
                                className="avatar avatar-md me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avatar2}
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">
                                Richard Miles <br />
                                <span>BD Manager</span>
                              </a>
                            </h3>
                          </td>
                          <td>Business Team</td>
                          <td>3 March 2023</td>
                          <td>Full Time</td>
                          <td>johnsmith@dgthrms.com</td>
                          <td>+1 989-438-3131</td>
                          <td className="d-flex align-items-center">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className=" btn-action-icon "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="edit-invoice.html"
                                    >
                                      <i className="far fa-edit me-2" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="far fa-trash-alt me-2" />
                                      Delete
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="invoice-details.html"
                                    >
                                      <i className="far fa-eye me-2" />
                                      View
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="active-customers.html"
                                    >
                                      <i className="far fa-bell me-2" />
                                      Active
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="deactive-customers.html"
                                    >
                                      <i className="far fa-bell-slash me-2" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="s-no">DGT 00201</td>
                          <td>
                            <h3 className="table-avatar d-flex">
                              <a
                                href="profile.html"
                                className="avatar avatar-md me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avatar2}
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">
                                Richard Miles <br />
                                <span>BD Manager</span>
                              </a>
                            </h3>
                          </td>
                          <td>Business Team</td>
                          <td>3 March 2023</td>
                          <td>Full Time</td>
                          <td>johnsmith@dgthrms.com</td>
                          <td>+1 989-438-3131</td>
                          <td className="d-flex align-items-center">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className=" btn-action-icon "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="edit-invoice.html"
                                    >
                                      <i className="far fa-edit me-2" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="far fa-trash-alt me-2" />
                                      Delete
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="invoice-details.html"
                                    >
                                      <i className="far fa-eye me-2" />
                                      View
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="active-customers.html"
                                    >
                                      <i className="far fa-bell me-2" />
                                      Active
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="deactive-customers.html"
                                    >
                                      <i className="far fa-bell-slash me-2" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="s-no">DGT 00201</td>
                          <td>
                            <h3 className="table-avatar d-flex">
                              <a
                                href="profile.html"
                                className="avatar avatar-md me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avatar2}
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">
                                Richard Miles <br />
                                <span>BD Manager</span>
                              </a>
                            </h3>
                          </td>
                          <td>Business Team</td>
                          <td>3 March 2023</td>
                          <td>Full Time</td>
                          <td>johnsmith@dgthrms.com</td>
                          <td>+1 989-438-3131</td>
                          <td className="d-flex align-items-center">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className=" btn-action-icon "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="edit-invoice.html"
                                    >
                                      <i className="far fa-edit me-2" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="far fa-trash-alt me-2" />
                                      Delete
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="invoice-details.html"
                                    >
                                      <i className="far fa-eye me-2" />
                                      View
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="active-customers.html"
                                    >
                                      <i className="far fa-bell me-2" />
                                      Active
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="deactive-customers.html"
                                    >
                                      <i className="far fa-bell-slash me-2" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="s-no">DGT 00201</td>
                          <td>
                            <h3 className="table-avatar d-flex">
                              <a
                                href="profile.html"
                                className="avatar avatar-md me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src={avatar2}
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">
                                Richard Miles <br />
                                <span>BD Manager</span>
                              </a>
                            </h3>
                          </td>
                          <td>Business Team</td>
                          <td>3 March 2023</td>
                          <td>Full Time</td>
                          <td>johnsmith@dgthrms.com</td>
                          <td>+1 989-438-3131</td>
                          <td className="d-flex align-items-center">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className=" btn-action-icon "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="edit-invoice.html"
                                    >
                                      <i className="far fa-edit me-2" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="far fa-trash-alt me-2" />
                                      Delete
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="invoice-details.html"
                                    >
                                      <i className="far fa-eye me-2" />
                                      View
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="active-customers.html"
                                    >
                                      <i className="far fa-bell me-2" />
                                      Active
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="deactive-customers.html"
                                    >
                                      <i className="far fa-bell-slash me-2" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="pagination-wrap d-flex justify-content-between">
                      <p>
                        Rows Per page&nbsp;&nbsp;<span>6</span>&nbsp;&nbsp;
                        <i className="fa fa-caret-right" aria-hidden="true" />
                      </p>
                      <ul className="d-flex">
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">...</a>
                        </li>
                        <li>
                          <a href="#">10</a>
                        </li>
                        <li>
                          <a href="#">11</a>
                        </li>
                        <li>
                          <a href="#">12</a>
                        </li>
                      </ul>
                      <p>
                        Go to page&nbsp;&nbsp;
                        <i
                          className="fa fa-long-arrow-right"
                          aria-hidden="true"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Employee List */}
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-12 col-lg-6 col-xl-6 p-0">
                <div className="footer-left">
                  <p>© 2023 Dreams HRMS</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-6 col-xl-6 p-0">
                <div className="footer-right">
                  <ul>
                    <li>
                      <a href="javascript:void(0);">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer */}
      </div>
      {/* /Page Content */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* Modal Popup */}
  {/* Button trigger modal */}
  {/* Modal */}
  <div className="employees-popup">
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title " id="staticBackdropLabel">
              <span className="user-icon">
                <img src={avatar} />
              </span>{" "}
              Add Employee
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="wizard">
              <ul className="form-wizard-steps" id="progressbar">
                <li className="progress-active">
                  <div className="profile-step">
                    <span className="profile-box">
                      <img src={step1} />
                    </span>
                    <div className="step-section">
                      <p>Step 1/5</p>
                      <h4>Personal Informations</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="profile-step">
                    <span className="profile-box">
                      <img src={step2} />
                    </span>
                    <div className="step-section">
                      <p>Step 2/5</p>
                      <h4>Employee Informations</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="profile-step">
                    <span className="profile-box">
                      <img src={step3} />
                    </span>
                    <div className="step-section">
                      <p>Step 3/5</p>
                      <h4>Dependency Informations</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="profile-step">
                    <span className="profile-box">
                      <img src={step4} />
                    </span>
                    <div className="step-section">
                      <p>Step 4/5</p>
                      <h4>Educational Informations</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="profile-step">
                    <span className="profile-box profile-box-one">
                      <img src={step5} />
                    </span>
                    <div className="step-section">
                      <p>Step 5/5</p>
                      <h4>Documents Information</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="multistep-form">
              <fieldset className="form-inner" id="first">
                <div className="form-area">
                  <h2>Personal Information</h2>
                  <div className="form-details ">
                    <h4>Basic Information</h4>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              First Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Emp First Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Last Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Emp Last Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Gender <span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Open this select menu</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Marital Status{" "}
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Marital Status</option>
                              <option value={1}>Single</option>
                              <option value={2}>Married</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">Nationality </label>
                            <select className="form-select select">
                              <option selected="">Select Nationality</option>
                              <option value={1}>Indian</option>
                              <option value={2}>Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area date-select">
                            <label className="form-label">
                              Date of Birth <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="DDMMYY"
                            />
                            <span className="icon">
                              {" "}
                              <i className="feather-calendar" />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">District </label>
                            <select className="form-select select">
                              <option selected="">Select District</option>
                              <option value={1}>Mumbai</option>
                              <option value={2}>Chennai</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">City</label>
                            <select className="form-select select">
                              <option selected="">Select City</option>
                              <option value={1}>Mumbai</option>
                              <option value={2}>Chennai</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Phone Number <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Select Gender"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Personal Email<span>*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Select Gender"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="title-btn">
                          <h4>Emergency Information</h4>
                          <a href="javascript:void(0);">
                            <i className="fa-solid fa-plus" /> Add More
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Full Name <span>*</span>{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Full Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Phone Number<span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Phone Number"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Relationship <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Relationship"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <a className="btn  main-btn next_btn">Save &amp; Next</a>
                    <a className="btn close-btn me-0">Cancel</a>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-inner">
                <div className="form-area">
                  <h2>Employee Informations</h2>
                  <div className="form-details ">
                    <h4>Basic Information</h4>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Employee ID<span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Emp ID"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area date-select">
                            <label className="form-label">
                              Effective Date <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="DDMMYY"
                            />
                            <span className="icon">
                              {" "}
                              <i className="feather-calendar" />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Walk-in Type <span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Walk-in Type</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Probation Period
                              <span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">
                                Select Probation Period
                              </option>
                              <option value={1}>1 Month</option>
                              <option value={2}>2 Month</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area date-select">
                            <label className="form-label">
                              Probation Start Date
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="DDMMYY"
                            />
                            <span className="icon">
                              {" "}
                              <i className="feather-calendar" />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area date-select">
                            <label className="form-label">
                              Probation End Date
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="DDMMYY"
                            />
                            <span className="icon">
                              {" "}
                              <i className="feather-calendar" />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="title-btn">
                          <h4>JOB Information</h4>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Job Title<span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Job Title</option>
                              <option value={1}>Designer</option>
                              <option value={2}>Developer</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Position Type<span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Position Type</option>
                              <option value={1}>Senior</option>
                              <option value={2}>Junior</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Line Manager<span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Line Manager</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Employment Type<span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">
                                Select Employment Type
                              </option>
                              <option value={1}>Senior</option>
                              <option value={2}>Hunior</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Designation<span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Designation</option>
                              <option value={1}>PHP Developer</option>
                              <option value={2}>Frontend Developer</option>
                              <option value={3}>Graphic Designer</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Department<span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Department</option>
                              <option value={1}>HR Department</option>
                              <option value={2}>Designing Department</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <a className="btn  main-btn next_btn">Save &amp; Next</a>
                    <a className="btn close-btn me-0">Cancel</a>
                  </div>
                  <div className="btn-right">
                    <a className="btn close-btn prev_btn back-btn me-0">
                      <i className="feather-chevron-left" /> Back
                    </a>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-inner">
                <div className="form-area">
                  <h2>Dependency Information</h2>
                  <div className="form-details ">
                    <div className="title-btn">
                      <h4>Basic Information</h4>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-plus" /> Add More
                      </a>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Full Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Full Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Gender <span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Gender</option>
                              <option value={1}>Men</option>
                              <option value={2}>Female</option>
                              <option value={3}>Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Relationship <span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Relationship</option>
                              <option value={1}>Single</option>
                              <option value={2}>Married</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Nationality
                              <span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Nationality</option>
                              <option value={1}>Indian</option>
                              <option value={2}>Srilankan</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                          <div className="input-area date-select">
                            <label className="form-label">
                              Date of Birth
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="DDMMYY"
                            />
                            <span className="icon">
                              {" "}
                              <i className="feather-calendar" />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                          <div className="input-area date-select">
                            <label className="form-label">
                              Phone Number
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="DDMMYY"
                            />
                            <span className="icon">
                              {" "}
                              <i className="feather-calendar" />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">District </label>
                            <select className="form-select select">
                              <option selected="">Select District</option>
                              <option value={1}>Mumbai</option>
                              <option value={2}>Chennai</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">City</label>
                            <select className="form-select select">
                              <option selected="">Select City</option>
                              <option value={1}>Mumbai</option>
                              <option value={2}>Chennai</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <a className="btn  main-btn next_btn">Save &amp; Next</a>
                    <a className="btn close-btn me-0">Cancel</a>
                  </div>
                  <div className="btn-right">
                    <a className="btn close-btn prev_btn back-btn me-0">
                      <i className="feather-chevron-left" /> Back
                    </a>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-inner">
                <div className="form-area">
                  <h2>Educational Information</h2>
                  <div className="form-details ">
                    <div className="title-btn">
                      <h4>Education Qualification</h4>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-plus" /> Add More
                      </a>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Institution Name
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of Institution"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Certificate/Diploma/UG/PG
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Academic course"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area date-select">
                            <label className="form-label">
                              Start Date Academic
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="DDMMYY"
                            />
                            <span className="icon">
                              {" "}
                              <i className="feather-calendar" />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area date-select">
                            <label className="form-label">
                              End Date Academic
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="DDMMYY"
                            />
                            <span className="icon">
                              {" "}
                              <i className="feather-calendar" />{" "}
                            </span>
                          </div>
                        </div>
                        <div className="title-btn">
                          <h4>Work History</h4>
                          <a href="javascript:void(0);">
                            <i className="fa-solid fa-plus" /> Add More
                          </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Company Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of Company"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Position <span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Position"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Experience <span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">No of Experience</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area">
                            <label className="form-label">
                              Location <span>*</span>
                            </label>
                            <select className="form-select select">
                              <option selected="">Select Location</option>
                              <option value={1}>Mumbai</option>
                              <option value={2}>Chennai</option>
                              <option value={3}>Pune</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <a className="btn  main-btn next_btn">Save &amp; Next</a>
                    <a className="btn close-btn me-0">Cancel</a>
                  </div>
                  <div className="btn-right">
                    <a className="btn close-btn prev_btn back-btn me-0">
                      <i className="feather-chevron-left" />
                      Back
                    </a>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-inner">
                <div className="form-area">
                  <h2>Documents</h2>
                  <div className="form-details ">
                    <div className="title-btn">
                      <h4>Personal identity proof</h4>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-plus" /> Add More
                      </a>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area file-choose">
                            <label className="form-label">
                              ID Proof<span>*</span>
                            </label>
                            <input
                              className="form-control file-input"
                              type="file"
                              id="formFile"
                            />
                            <input
                              type="hidden"
                              name="MAX_FILE_SIZE"
                              defaultValue={10485760}
                            />
                            <span className="choose-file">
                              Choose file
                              <span className="choose-btn">Choose file</span>
                            </span>
                            <div className="upload-message">
                              <div>
                                <h5>
                                  <i className="fa-solid fa-check" />{" "}
                                  PAN-001.jpg
                                  <span>uploaded successfully!!!</span>
                                </h5>
                              </div>
                              <div className="download-icon">
                                <i className="feather-download" />
                                <i className="feather-trash" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area file-choose">
                            <label className="form-label">
                              Address Proof<span>*</span>
                            </label>
                            <input
                              className="form-control file-input"
                              type="file"
                              id="formFile"
                            />
                            <input
                              type="hidden"
                              name="MAX_FILE_SIZE"
                              defaultValue={10485760}
                            />
                            <span className="choose-file">
                              Choose file
                              <span className="choose-btn">Choose File</span>
                            </span>
                          </div>
                        </div>
                        <div className="title-btn">
                          <h4>Work Experience certificate</h4>
                          <a href="javascript:void(0);">
                            <i className="fa-solid fa-plus" /> Add More
                          </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area file-choose">
                            <label className="form-label">
                              Letter of Indent<span>*</span>
                            </label>
                            <input
                              className="form-control file-input"
                              type="file"
                              id="formFile"
                            />
                            <input
                              type="hidden"
                              name="MAX_FILE_SIZE"
                              defaultValue={10485760}
                            />
                            <span className="choose-file">
                              Choose file
                              <span className="choose-btn">Choose File</span>
                            </span>
                            <div className="upload-message">
                              <div>
                                <h5>
                                  <i className="fa-solid fa-check" />{" "}
                                  PAN-001.jpg
                                  <span>uploaded successfully!!!</span>
                                </h5>
                              </div>
                              <div className="download-icon">
                                <i className="feather-download" />
                                <i className="feather-trash" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area file-choose">
                            <label className="form-label">
                              Experience Certificate<span>*</span>
                            </label>
                            <input
                              className="form-control file-input"
                              type="file"
                              id="formFile"
                            />
                            <input
                              type="hidden"
                              name="MAX_FILE_SIZE"
                              defaultValue={10485760}
                            />
                            <span className="choose-file">
                              Choose file
                              <span className="choose-btn">Choose File</span>
                            </span>
                          </div>
                        </div>
                        <div className="title-btn">
                          <h4>Educational Certificate</h4>
                          <a href="javascript:void(0);">
                            <i className="fa-solid fa-plus" /> Add More
                          </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area file-choose">
                            <label className="form-label">
                              Certificate/Diploma/Degress Certificate
                              <span>*</span>
                            </label>
                            <input
                              className="form-control file-input"
                              type="file"
                              id="formFile"
                            />
                            <input
                              type="hidden"
                              name="MAX_FILE_SIZE"
                              defaultValue={10485760}
                            />
                            <span className="choose-file">
                              Choose file
                              <span className="choose-btn">Choose File</span>
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <div className="input-area file-choose">
                            <label className="form-label">
                              Course Completion Copy
                              <span>*</span>
                            </label>
                            <input
                              className="form-control file-input"
                              type="file"
                              id="formFile"
                            />
                            <input
                              type="hidden"
                              name="MAX_FILE_SIZE"
                              defaultValue={10485760}
                            />
                            <span className="choose-file">
                              Choose file
                              <span className="choose-btn">Choose File</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <a
                      className="btn  main-btn "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Save &amp; Next
                    </a>
                    <a className="btn close-btn me-0">Cancel</a>
                  </div>
                  <div className="btn-right">
                    <a className="btn close-btn prev_btn back-btn me-0">
                      <i className="feather-chevron-left" /> Back
                    </a>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Popup */}
</>
  )
}

export default EmpList
