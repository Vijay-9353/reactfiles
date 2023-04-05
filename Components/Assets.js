import React from 'react'
import { assets1, attach1, avatar1, avatar15, avatar2, avatar3, avatar5, avatar6, avatard, ed, empicon, flogo, icon, logo, picon, ricon, sicon, ticon } from './imagepath'
import { Link } from 'react-router-dom'

const Assets = () => {
  return (
    <div>
      <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    {/* Header */}
    <header className="header header-fixed header-one">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <Link id="mobile_btn" to="javascript:void(0);">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </Link>
          <Link to="javascript:void(0);" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <ul className="main-nav">
            <li>
              <Link to="javascript:void(0);">
                <img src={icon} alt="" />{" "}
                Dashboard
              </Link>
            </li>
            <li className="active">
              <Link to="employees.html">
                <img src={empicon} alt="" />{" "}
                Employees
              </Link>
            </li>
            <li>
              <Link to="javascript:void(0);">
                <img src={ticon} alt="" /> Time off
              </Link>
            </li>
            <li>
              <Link to="javascript:void(0);">
                <img src={picon} alt="" /> Policies
              </Link>
            </li>
            <li>
              <Link to="javascript:void(0);">
                <img src={ricon} alt="" /> Reports
              </Link>
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
              <Link className="btn" to="javascript:void(0);">
                <span>
                  Quick Links <i className="feather-zap" />
                </span>
              </Link>
            </li>
            <li className="nav-item nav-icons">
              <Link to="javascript:void(0);">
                <i className="feather-sun" />
              </Link>
            </li>
            <li className="nav-item dropdown has-arrow notification-dropdown">
              <Link
                to="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="feather-bell" />
                <span className="badge">3</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <Link to="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All
                  </Link>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <Link to="javascript:void(0)">
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="javascript:void(0)">
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="javascript:void(0)">
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="javascript:void(0)">
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="javascript:void(0)">
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
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <Link to="javascript:void(0)">View all Notifications</Link>
                </div>
              </div>
            </li>
            <li className="nav-item nav-icons">
              <Link to="javascript:void(0);">
                <i className="feather-settings" />
              </Link>
            </li>
            <li className="nav-item nav-icons">
              <Link to="javascript:void(0);">
                <i className="far fa-circle-question" />
              </Link>
            </li>
            <li className="nav-item dropdown has-arrow main-drop">
              <Link
                to="#"
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
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="javascript:void(0);">
                  <i className="feather-user-plus" /> My Profile
                </Link>
                <Link className="dropdown-item" to="javascript:void(0);">
                  <i className="feather-settings" /> Settings
                </Link>
                <Link className="dropdown-item" to="javascript:void(0);">
                  <i className="feather-log-out" /> Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    {/* /Header */}
    {/* Page Wrapper */}
    <div className="page-wrapper employee-profile">
      {/* Page Content */}
      <div className="content container documents">
        {/* breadcrumb */}
        <ul className="breadcrumb">
          <li>
            <Link to="#">Employees</Link>
          </li>
          <li>
            <Link to="#">Richard</Link>
          </li>
          <li className="active">
            <Link to="#">Time Off</Link>
          </li>
        </ul>
        {/* breadcrumb */}
        {/* employee-info */}
        <div className="employee-info d-md-flex justify-content-between">
          <div className="info-one d-lg-flex">
            <Link to="#" className="d-inline-block profile-pic">
              <img src={avatar15} alt="" />
              <span className="feather-camera text-center" />
            </Link>
            <ul className="">
              <li>
                <h3>
                  Richard Steve <span>FT-0001</span>
                  <img src={ed} alt="" />
                </h3>
                <span className="d-block designation">UI/UX Designer</span>
              </li>
              <li>
                <span className="d-block">
                  <i className="feather-phone" />
                  (907) 888-0101
                </span>
                <span className="d-block">
                  <i className="feather-mail" />
                  example@email.com
                </span>
              </li>
            </ul>
          </div>
          <div className="info-two">
            <ul className="">
              <li>
                <span className="d-block head">Department</span>
                <span className="d-block">Design Team</span>
              </li>
              <li>
                <span className="d-block head">Date of Birth</span>
                <span className="d-block">25 May 1996</span>
              </li>
            </ul>
          </div>
          <div className="info-three">
            <ul className="">
              <li>
                <span className="d-block head">Line Manager</span>
                <span className="d-block">John Smith</span>
              </li>
              <li>
                <span className="d-block head">Joining Date</span>
                <span className="d-block">15 July 2020</span>
              </li>
            </ul>
          </div>
          <div className="info-four">
            <div className="">
              <div className="text-end">
                <i className="fas fa-ellipsis-v" />
              </div>
              <p className="head">Profile Complete</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="profile-completion">
                Your profile is 81% Completed <Link to="#">Finish Now</Link>
              </p>
            </div>
          </div>
        </div>
        {/* employee-info */}
        <div className="d-lg-flex justify-content-between align-items-center profile-items">
          <h2>Documents</h2>
          <ul className="d-sm-flex">
            <li>
              <Link to="employee-profile.html">Profile</Link>
            </li>
            <li>
              <Link to="employee-teams.html">Teams</Link>
            </li>
            <li className="active">
              <Link to="employee-assets.html">Assets</Link>
            </li>
            <li>
              <Link to="employee-time-off.html">Time off</Link>
            </li>
            <li>
              <Link to="employee-documents.html">Documents</Link>
            </li>
            <li>
              <Link to="employee-attendance.html">Attendance</Link>
            </li>
            <li>
              <Link to="employee-timesheet.html">Time Sheet</Link>
            </li>
          </ul>
          <div>
            <Link to="#" className="btn gradient-btn">
              <i className="fa fa-plus" aria-hidden="true" />
              Add Assets
            </Link>
          </div>
        </div>
        {/* Documents row */}
        <div className="row assets">
          <h3>All Folders</h3>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 document-wrap">
            <div className="white-bg">
              <div className="d-flex align-items-top head">
                <div className="flex-grow-1">
                  <div className="d-inline-block document-icon">
                    <i className="d-inline-block text-center">
                      <img src={assets1} />
                    </i>
                  </div>
                  <div className="d-inline-block">
                    <h3 className="d-inline popup-toggle">Key Board</h3>
                    <span className="d-block">ASSET00001</span>
                  </div>
                </div>
                <div className="star-ellips">
                  <div className="dropdown dropdown-action d-inline-block">
                    <Link
                      to="#"
                      className="btn-action-icon show"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-ellipsis-v" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                      style={{
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: 0,
                        transform: "translate3d(0px, 42px, 0px)"
                      }}
                    >
                      <ul>
                        <li>
                          <Link className="dropdown-item" to="edit-invoice.html">
                            <i className="far fa-edit me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#share"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="users-files">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    <span>Assignee :</span>&nbsp;&nbsp;John Smith
                  </p>
                  <p>
                    <span>Date :</span>&nbsp;&nbsp;06 Jan 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Documents row */}
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-12 col-lg-6 col-xl-6 p-0">
                <div className="footer-left">
                  <p>
                    © 2023 Dreams HRMS <span>Developed by</span>
                    <Link to="#">
                      <img src={flogo} />
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-6 col-xl-6 p-0">
                <div className="footer-right">
                  <ul>
                    <li>
                      <Link to="javascript:void(0);">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="javascript:void(0);">Terms &amp; Conditions</Link>
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
  {/* document-slide */}
  <div className="toggle-sidebar asset">
    <div className="d-flex align-items-center justify-content-between head">
      <h5>Assets Deatils</h5>
      <i
        className="fa fa-times round align-items-center d-flex justify-content-center sidebar-closes"
        aria-hidden="true"
      />
    </div>
    <h6>Asset Info</h6>
    <div className="d-flex align-items-center justify-content-start asset-info">
      <img src={assets1} />
      <span>Key Board</span>
    </div>
    <table className="w-100">
      <tbody>
        <tr>
          <td>
            <span>Asset ID</span>
          </td>
          <td align="right">
            <p>ASSET00001</p>
          </td>
        </tr>
        <tr>
          <td>
            <span>Device Type</span>
          </td>
          <td align="right">
            <p>Laptop Accessories</p>
          </td>
        </tr>
        <tr>
          <td>
            <span>Brand</span>
          </td>
          <td align="right">
            <p>Zebronics</p>
          </td>
        </tr>
        <tr>
          <td>
            <span>Model</span>
          </td>
          <td align="right">
            <p>Zebronics</p>
          </td>
        </tr>
        <tr>
          <td>
            <span>Serial Number</span>
          </td>
          <td align="right">
            <p>Nil</p>
          </td>
        </tr>
      </tbody>
    </table>
    <h6>Asset History</h6>
    <table className="w-100">
      <tbody>
        <tr>
          <td>
            <span>Owner</span>
          </td>
          <td align="right">
            <p>Hernandez</p>
          </td>
        </tr>
        <tr>
          <td>
            <span>User</span>
          </td>
          <td align="right">
            <p>Richard Steve</p>
          </td>
        </tr>
        <tr>
          <td>
            <span>Brand</span>
          </td>
          <td align="right">
            <p>Zebronics</p>
          </td>
        </tr>
        <tr>
          <td>
            <span>Model</span>
          </td>
          <td align="right">
            <p>Zebronics</p>
          </td>
        </tr>
        <tr>
          <td>
            <span>Serial Number</span>
          </td>
          <td align="right">
            <p>Nil</p>
          </td>
        </tr>
      </tbody>
    </table>
    <h6>Attachment</h6>
    <table className="w-100 attachment">
      <tbody>
        <tr>
          <td>
            <Link to="#">
              <img src={attach1} />
            </Link>
          </td>
          <td>
            <Link to="#">
              <img src={attach1} />
            </Link>
          </td>
          <td>
            <Link to="#">
              <img src={attach1} />
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="#">
              <img src={attach1} />
            </Link>
          </td>
          <td>
            <Link to="#">
              <img src={attach1} />
            </Link>
          </td>
          <td>
            <Link to="#">
              <img src={attach1} />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
    <h6>Activity</h6>
    <ul className="activity">
      <li>
        <span className="d-block">Yesterday</span>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="d-block group-avatar-wrap">
              <div className="group-avatar">
                <span className="avatar">
                  <img src={avatard} />
                </span>
                <span className="avatar">
                  <img src={avatard} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 no-padding">
            <div className="">
              <span>
                Richard Shared Edit Access to <Link to="#">John</Link>
              </span>
            </div>
          </div>
        </div>
        {/*row*/}
      </li>
      <li>
        <span className="d-block">Yesterday</span>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="d-block group-avatar-wrap">
              <div className="group-avatar">
                <span className="avatar">
                  <img src={avatard} />
                </span>
                <span className="avatar">
                  <img src={avatard} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 no-padding">
            <div className="">
              <span>
                Richard Shared Edit Access to <Link to="#">Robert</Link>
              </span>
            </div>
          </div>
        </div>
        {/*row*/}
      </li>
      <li>
        <span className="d-block">Yesterday</span>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="d-block group-avatar-wrap">
              <div className="group-avatar">
                <span className="avatar">
                  <img src={avatard} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 no-padding">
            <div className="">
              <span>
                Richard Changed File Name <Link to="#">Design Presentation</Link>
              </span>
            </div>
          </div>
        </div>
        {/*row*/}
      </li>
      <li>
        <span className="d-block">Yesterday</span>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="d-block group-avatar-wrap">
              <div className="group-avatar">
                <span className="avatar">
                  <img src={avatard} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 no-padding">
            <div className="">
              <span>
                Richard Changed File Name <Link to="#">Design Presentation</Link>
              </span>
            </div>
          </div>
        </div>
        {/*row*/}
      </li>
    </ul>
    <div className="">
      <button type="button" className="btn gradient-btn w-100">
        <i className="fa fa-flag" aria-hidden="true" />
        Report Issue
      </button>
    </div>
  </div>
  {/* document-slide */}
  {/* Modal */}
  <div
    className="modal fade"
    id="share"
    tabIndex={-1}
    aria-labelledby="share"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="share">
            Share File
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group required">
            <label className="label">Share With Team Members</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group d-flex align-items-center justify-content-between">
            <h6>Share Read-Only Link</h6>
            <div className="status-toggle d-flex align-items-center">
              <input id="rating_1" className="check" type="checkbox" />
              <label
                htmlFor="rating_1"
                className="checktoggle checkbox-bg mb-0"
              />
            </div>
          </div>
          <p>
            Anyone with the link can view this file, but won't be able to edit
            it.
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn gradient-btn">
            Share File
          </button>
          <button
            type="button"
            className="btn btn-dull"
            data-bs-dismiss="modal"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* End Modal */}
</>

    </div>
  )
}

export default Assets
