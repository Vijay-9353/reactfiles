import React, {useState} from 'react'


const Document = () => {
		const[showModal, setShowModel] = useState(false);
		const[show, setShow] = useState(false);
		const[out, setOut] = useState(false);

		const Edit = () => {
			return (
				<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position:' absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(0px, 42px, 0px)'}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edu-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
			)
		}
		const Aside =() => {
			return (
				<div class="toggle-sidebar">
				<div class="d-flex align-items-center justify-content-between head">
					
					<i class="d-flex align-items-center text-center justify-content-center icon-bg"><img src="assets/img/icons/sidebar-pdf.svg"/></i>
					
					<h5>Design presentation</h5>
					<button onClick={() => setShow(false)}>
					<i class="fa fa-times round align-items-center d-flex justify-content-center sidebar-closes" aria-hidden="true" onClick={() => setShow(false)} >
							
					</i></button>
				</div>
				<img src="assets/img/design-presentation.png"/>
				<h6>File Owner</h6>
				<div class="d-flex align-items-center justify-content-start owner">
					<img src="assets/img/profiles/education-avatar.png"/>
					<span>Richard Steve</span>
				</div>
				<h6>Who has Access</h6>
				<div class="row">
					<div class="col-xs-12 col-sm-6 ">
						<div class="group-avatar">
							  <span class="avatar">
								<img src="assets/img/profiles/education-avatar.png"/>
							</span>
							  <span class="avatar">
								<img src="assets/img/profiles/education-avatar.png"/>
							</span>
							  <span class="avatar">
								<img src="assets/img/profiles/education-avatar.png"/>
							</span>
							  <span class="avatar">
							   <img src="assets/img/profiles/education-avatar.png"/>
							</span>
							<span class="avatar">
							   10+
							</span>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 d-flex align-items-center">
						<span>Member Access </span>
					</div>
				</div>
				<h6>File Information</h6>
				<ul>
					<li><span>Created Date:</span>08 Ma 2023, 6:48:31 PM</li>
					<li><span>Created Date:</span>08 Ma 2023, 6:48:31 PM</li>
					<li><span>View:</span>15 Members</li>
				</ul>
				<h6>Activity</h6>
				<ul class="activity">
					<li>
						<span class="d-block">Yesterday</span>
						<div class="row">
							<div class="col-xs-12 col-sm-6 col-md-4">
								<div class="d-block group-avatar-wrap">
									<div class="group-avatar">
										  <span class="avatar">
											 <img src="assets/img/profiles/avatar-doc-list.png"/> 
										</span>
										  <span class="avatar">
											<img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										  <span class="avatar">
											<img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										  <span class="avatar">
										   <img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										<span class="avatar">
										   10+
										</span>
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-8 no-padding">
								<div class="">
									<span>Richard Shared Edit Access to <a href="#">John</a></span>
								</div>
							</div>
						</div>
						{/* <!--row--> */}
					</li>
					
					<li>
						<span class="d-block">Yesterday</span>
						<div class="row">
							<div class="col-xs-12 col-sm-6 col-md-4">
								<div class="d-block group-avatar-wrap">
									<div class="group-avatar">
										  <span class="avatar">
											<img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										  <span class="avatar">
											<img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										  <span class="avatar">
											<img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										  <span class="avatar">
										   <img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										<span class="avatar">
										   10+
										</span>
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-8 no-padding">
								<div class="">
									<span>Richard Shared Edit Access to <a href="#">Robert</a></span>
								</div>
							</div>
						</div>
						{/* <!--row--> */}
					</li>

					<li>
						<span class="d-block">Yesterday</span>
						<div class="row">
							<div class="col-xs-12 col-sm-6 col-md-4">
								<div class="d-block group-avatar-wrap">
									<div class="group-avatar">
										  <span class="avatar">
											<img src="assets/img/profiles/avatar-doc-list.png"/> 
										</span>
										  <span class="avatar">
											<img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										  <span class="avatar">
											<img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										  <span class="avatar">
										   <img src="assets/img/profiles/avatar-doc-list.png"/>
										</span>
										<span class="avatar">
										   10+
										</span>
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-8 no-padding">
								<div class="">
									<span>Richard Changed File Name <a href="#">Design Presentation</a></span>
								</div>
							</div>
						</div>
						{/* <!--row--> */}
					</li>
				</ul>
				<div class="">
					<button type="button" class="btn btn-dull" data-bs-dismiss="modal"><span class="feather-eye toggle-password"></span>View</button>
					<button type="button" class="btn gradient-btn"><i class="fa fa-download" aria-hidden="true"></i>Download</button>
				</div>

			</div>
			)
		}

		const Modal = () => {
			return (
		  // <!-- Modal --> 
		  <div class="modal fade" id="upload-doc" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="newscheduleLabel" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered">
				  <div class="modal-content">
					  <div class="modal-header d-flex justify-content-between align-items-center">
						  <i class="fa fa-download blue-dull-bg d-inline-block text-center" aria-hidden="true"></i>
						  <h5 class="modal-title">Upload Documents</h5>
						  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModel(false)}>
							  <i class="fa fa-times" aria-hidden="true"></i>
							  </button>
					  </div>
					  <div class="modal-body">
						  <div class="drag-drop text-center">
							  <div class="upload">
								  <a href="#"><img src="assets/img/icons/drag-drop.svg"/></a>
								  <p>Drag & drop your files here or choose file <a href="#">browse</a></p>
								  <span>Maximum size: 50MB</span>
							  </div>
						  </div>
		  
						  <div class="upload-data">
							  <div class="d-flex justify-content-between align-items-center">
								  <div class="d-flex justify-content-between align-items-center">
									  <img src="assets/img/icons/education-doc.png"/>
									  <span>Resume-ui.doc</span>
								  </div>
								  <div class="d-flex justify-content-between align-items-center action-icon">
									  <i class="fa fa-check-circle success-icon" aria-hidden="true"></i>
									  <i class="fa fa-trash" aria-hidden="true"></i>
								  </div>
							  </div>
							  <div class="progress">
								  <div class="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
							  </div>
						  </div>
		  
						  <div class="upload-data warning">
							  <div class="d-flex justify-content-between align-items-center">
								  <div class="d-flex justify-content-between align-items-center">
									  <img src="assets/img/icons/education-xls.png"/>
									  <span>Resume-ui.doc</span>
								  </div>
								  <div class="d-flex justify-content-between align-items-center action-icon">
									  <i class="fa fa-exclamation-triangle warning-icon" aria-hidden="true"></i>
									  <i class="fa fa-trash" aria-hidden="true"></i>
								  </div>
							  </div>
							  <div class="progress">
								  <div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
							  </div>
						  </div>
		  
						  <div class="upload-data">
							  <div class="d-flex justify-content-between align-items-center">
								  <div class="d-flex justify-content-between align-items-center">
									  <img src="assets/img/icons/education-pdf.png"/>
									  <span>Resume-ui.doc</span>
								  </div>
								  <div class="d-flex justify-content-between align-items-center action-icon">
									  <i class="fa fa-pause" aria-hidden="true"></i>
									  <i class="fa fa-trash" aria-hidden="true"></i>
								  </div>
							  </div>
							  <div class="progress">
								  <div class="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
							  </div>
						  </div>
		  
					  </div>
				  </div>
			  </div>
		  
		  
		  
		  
			  <div class="modal fade" id="edu-share" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog">
				  <div class="modal-content">
					<div class="modal-header">
					  <h5 class="modal-title">Share File</h5>
					  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>
					</div>
					<div class="modal-body">
					  <div class="form-group required">
						  <label class="label">Share With Team Members</label>
						  <input type="email" class="form-control"/>
					  </div>
					  <div class="form-group d-flex align-items-center justify-content-between">
						  <h6>Share Read-Only Link</h6>
						  <div class="status-toggle d-flex align-items-center">
							  <input id="rating_1" class="check" type="checkbox"/>
							  <label for="rating_1" class="checktoggle checkbox-bg mb-0"></label>
						  </div>																	
					  </div>
					  <p>Anyone with the link can view this file, but won't be able to edit it.</p>
					</div>
					<div class="modal-footer">
					  <button type="button" class="btn gradient-btn">Share File</button>
					  <button type="button" class="btn btn-dull" data-bs-dismiss="modal">Cancle</button>
					</div>
				  </div>
				</div>
			  </div>
			  </div>
			
			)
		  }
  return (
    <>
    <div class="main-wrapper">

		{/* <!-- Header --> */}
		<header class="header header-fixed header-one">
			<nav class="navbar navbar-expand-lg header-nav">
				<div class="navbar-header">
					<a id="mobile_btn" href="javascript:void(0);">
						<span class="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>
					<a href="javascript:void(0);" class="navbar-brand logo">
						<img src="assets/img/logo.svg" class="img-fluid" alt="Logo"/>
					</a>
				</div>
				<div class="main-menu-wrapper">
					<ul class="main-nav">
						<li>
							<a href="javascript:void(0);">
								<img src="assets/img/icons/dashboard-icon.svg" alt=""/> Dashboard
							</a>
						</li>
						<li class="active">
							<a href="employees.html">
								<img src="assets/img/icons/employees-icon.svg" alt=""/> Employees
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<img src="assets/img/icons/time-off-icon.svg" alt=""/> Time off
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<img src="assets/img/icons/policies-icon.svg" alt=""/> Policies
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<img src="assets/img/icons/reports-icon.svg" alt=""/> Reports
							</a>
						</li>
					</ul>
					<ul class="nav header-navbar-rht">
						<li class="nav-item search-item">
							<div class="top-nav-search">
								<form action="#">
									<input type="text" class="form-control" placeholder="Search"/>
									<button class="btn" type="submit"><i class="feather-search"></i></button>
									<span><img src="assets/img/icons/shortcut-icon.svg" alt=""/></span>
								</form>
							</div>
						</li>
						<li class="nav-item quick-link-item">
							<a class="btn" href="javascript:void(0);">
								<span>Quick Links <i class="feather-zap"></i></span>
							</a>
						</li>
						<li class="nav-item nav-icons">
							<a href="javascript:void(0);">
								<i class="feather-sun"></i>
							</a>
						</li>
						<li class="nav-item dropdown has-arrow notification-dropdown">
							<a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
								<i class="feather-bell"></i>
								<span class="badge">3</span>
							</a>
							<div class="dropdown-menu dropdown-menu-end notifications">
								<div class="topnav-dropdown-header">
									<span class="notification-title">Notifications</span>
									<a href="javascript:void(0)" class="clear-noti"> Clear All</a>
								</div>
								<div class="noti-content">
									<ul class="notification-list">
										<li class="notification-message">
											<a href="javascript:void(0)">
												<div class="media d-flex">
													<span class="avatar flex-shrink-0">
														<img alt="" src="assets/img/profiles/avatar-01.jpg"
															class="rounded-circle"/>
													</span>
													<div class="media-body flex-grow-1">
														<p class="noti-details"><span class="noti-title">John Doe</span>
															added new task <span class="noti-title">Patient appointment
																booking</span></p>
														<p class="noti-time"><span class="notification-time">4 mins
																ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li class="notification-message">
											<a href="javascript:void(0)">
												<div class="media d-flex">
													<span class="avatar flex-shrink-0">
														<img alt="" src="assets/img/profiles/avatar-02.jpg"
															class="rounded-circle"/>
													</span>
													<div class="media-body flex-grow-1">
														<p class="noti-details"><span class="noti-title">Tarah
																Shropshire</span> changed the task name <span
																class="noti-title">Appointment booking with payment
																gateway</span></p>
														<p class="noti-time"><span class="notification-time">6 mins
																ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li class="notification-message">
											<a href="javascript:void(0)">
												<div class="media d-flex">
													<span class="avatar flex-shrink-0">
														<img alt="" src="assets/img/profiles/avatar-06.jpg"
															class="rounded-circle"/>
													</span>
													<div class="media-body flex-grow-1">
														<p class="noti-details"><span class="noti-title">Misty
																Tison</span> added <span class="noti-title">Domenic
																Houston</span> and <span class="noti-title">Claire
																Mapes</span> to project <span class="noti-title">Doctor
																available module</span></p>
														<p class="noti-time"><span class="notification-time">8 mins
																ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li class="notification-message">
											<a href="javascript:void(0)">
												<div class="media d-flex">
													<span class="avatar flex-shrink-0">
														<img alt="" src="assets/img/profiles/avatar-05.jpg"
															class="rounded-circle"/>
													</span>
													<div class="media-body flex-grow-1">
														<p class="noti-details"><span class="noti-title">Rolland
																Webber</span> completed task <span
																class="noti-title">Patient and Doctor video
																conferencing</span></p>
														<p class="noti-time"><span class="notification-time">12 mins
																ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li class="notification-message">
											<a href="javascript:void(0)">
												<div class="media d-flex">
													<span class="avatar flex-shrink-0">
														<img alt="" src="assets/img/profiles/avatar-03.jpg"
															class="rounded-circle"/>
													</span>
													<div class="media-body flex-grow-1">
														<p class="noti-details"><span class="noti-title">Bernardo
																Galaviz</span> added new task <span
																class="noti-title">Private chat module</span></p>
														<p class="noti-time"><span class="notification-time">2 days
																ago</span></p>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
								<div class="topnav-dropdown-footer">
									<a href="javascript:void(0)">View all Notifications</a>
								</div>
							</div>
						</li>
						<li class="nav-item nav-icons">
							<a href="javascript:void(0);">
								<i class="feather-settings"></i>
							</a>
						</li>
						<li class="nav-item nav-icons">
							<a href="javascript:void(0);">
								<i class="far fa-circle-question"></i>
							</a>
						</li>
						<li class="nav-item dropdown has-arrow main-drop">
							<a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
								<span class="user-img">
									<img src="assets/img/profiles/avatar-01.jpg" class="img-rounded" alt=""/>
								</span>
							</a>
							<div class="dropdown-menu">
								<a class="dropdown-item" href="javascript:void(0);">
									<i class="feather-user-plus"></i> My Profile
								</a>
								<a class="dropdown-item" href="javascript:void(0);">
									<i class="feather-settings"></i> Settings
								</a>
								<a class="dropdown-item" href="javascript:void(0);">
									<i class="feather-log-out"></i> Logout
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</header>
		{/* <!-- /Header --> */}

		{/* <!-- Page Wrapper --> */}
		<div class="page-wrapper employee-profile">

			{/* <!-- Page Content --> */}
			<div class="content container documents">

				{/* <!-- breadcrumb --> */}
				<ul class="breadcrumb">
					<li><a href="#">Employees</a></li>
					<li><a href="#">Richard</a></li>
					<li class="active"><a href="#">Time Off</a></li>
				</ul>
				{/* <!-- breadcrumb -->
				<!-- employee-info --> */}
				<div class="employee-info d-md-flex justify-content-between">
					<div class="info-one d-lg-flex">
						<a href="#" class="d-inline-block profile-pic">
							<img src="assets/img/profiles/avatar-15.png" alt=""/>
							<span class="feather-camera text-center"></span>
						</a>
						<ul class="">
							<li>
								<h3>Richard Steve <span>FT-0001</span><img src="assets/img/icons/edit-profile.svg" alt=""/></h3>
								<span class="d-block designation">UI/UX Designer</span>
							</li>
							<li>
								<span class="d-block"><i class="feather-phone"></i>(907) 888-0101</span>
								<span class="d-block"><i class="feather-mail"></i>example@email.com</span>
							</li>
						</ul>
					</div>
					<div class="info-two">
						<ul class="">
							<li>
								<span class="d-block head">Department</span>
								<span class="d-block">Design Team</span>
							</li>
							<li>
								<span class="d-block head">Date of Birth</span>
								<span class="d-block">25 May 1996</span>
							</li>
						</ul>
					</div>
					<div class="info-three">
						<ul class="">
							<li>
								<span class="d-block head">Line Manager</span>
								<span class="d-block">John Smith</span>
							</li>
							<li>
								<span class="d-block head">Joining Date</span>
								<span class="d-block">15 July 2020</span>
							</li>
						</ul>
					</div>
					<div class="info-four">
						<div class="">
							<div class="text-end">
								<i class="fas fa-ellipsis-v"></i>
							</div>
							<p class="head">Profile Complete</p>
							<div class="progress">
								<div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<p class="profile-completion">Your profile is 81% Completed <a href="#">Finish Now</a></p>
						</div>
					</div>
				</div>
				{/* <!-- employee-info --> */}

				<div class="d-lg-flex justify-content-between align-items-center profile-items">
					<h2>Documents</h2>
					<ul class="d-sm-flex">
						<li><a href="employee-profile.html">Profile</a></li>
						<li><a href="employee-teams.html">Teams</a></li>
						<li><a href="employee-assets.html">Assets</a></li>
						<li><a href="employee-time-off.html">Time off</a></li>
						<li class="active"><a href="employee-documents.html">Documents</a></li>
						<li><a href="employee-attendance.html">Attendance</a></li>
						<li><a href="employee-timesheet.html">Time Sheet</a></li>
					</ul>
					<div>
						<button type="text" class="btn btn-white"><img src="assets/img/icons/upload-documents.svg"/></button>
						<button type="text" class="btn gradient-btn" data-bs-toggle="modal" data-bs-target="#upload-doc" onClick={() =>setShowModel(true)}>
							<i class="fa fa-plus" aria-hidden="true"></i>
							Upload Documents
							</button>
							{ showModal && <Modal />}
					</div>
				</div>
				{/* <!-- Documents row --> */}
				<div class="row education-documents">
					<div onClick={() =>setShow(true)}>
						<h3>Education Documents</h3>
						{ show && <Aside/>}
					</div>
					<div class="col-sm-12 col-md-6 col-lg-3 document-wrap">
						<div class="white-bg">
							<div class="d-flex align-items-top head">
								<div class="flex-grow-1">
									<div class="d-inline-block document-icon"><i class="d-flex align-items-center text-center justify-content-center red-dull-bg"><img src="assets/img/icons/education-pdf.png"/></i></div>
									<div class="d-inline-block">
										<h3 class="d-inline dotted-text popup-toggle">Education Documents</h3>
										<span class="d-block">1 Minute ago</span>
									</div>
								</div>
								<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true" onClick={() => setOut(false)}>
											<i class="fas fa-ellipsis-v">
												x
												{out && <Edit />}
												</i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position:' absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(0px, 42px, 0px)'}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edu-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row users-files align-items-center">
								<div class="col-xs-12 col-sm-6 ">
									<div class="d-block">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6">
									<span>Member Access</span>
								</div>
							</div>
							{/* <!--row--> */}
						</div>
					</div>
					
					<div class="col-sm-12 col-md-6 col-lg-3 document-wrap">
						<div class="white-bg">
							<div class="d-flex align-items-top head">
								<div class="flex-grow-1">
									<div class="d-inline-block document-icon"><i class="d-flex align-items-center text-center justify-content-center red-dull-bg"><img src="assets/img/icons/education-pdf.png"/></i></div>
									<div class="d-inline-block">
										<h3 class="d-inline">Education Documents</h3>
										<span class="d-block">4 hrs ago</span>
									</div>
								</div>
								<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position: "absolute", inset: "0px 0px auto auto", margin:" 0px", transform: "translate3d(0px, 42px, 0px)"}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edu-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row users-files align-items-center">
								<div class="col-xs-12 col-sm-6 ">
									<div class="d-block">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6">
									<span>Member Access</span>
								</div>
							</div>
							{/* <!--row--> */}
						</div>
					</div>

					<div class="col-sm-12 col-md-6 col-lg-3 document-wrap">
						<div class="white-bg">
							<div class="d-flex align-items-top head">
								<div class="flex-grow-1">
									<div class="d-inline-block document-icon"><i class="d-flex align-items-center text-center justify-content-center red-dull-bg"><img src="assets/img/icons/education-pdf.png"/></i></div>
									<div class="d-inline-block">
										<h3 class="d-inline dotted-text">X Marksheet.pdf</h3>
										<span class="d-block">yesterday</span>
									</div>
								</div>
								<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(0px, 42px, 0px)'}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edu-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row users-files align-items-center">
								<div class="col-xs-12 col-sm-6 ">
									<div class="d-block">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6">
									<span>Member Access</span>
								</div>
							</div>
							{/* <!--row--> */}
						</div>
					</div>

					<div class="col-sm-12 col-md-6 col-lg-3 document-wrap">
						<div class="white-bg">
							<div class="d-flex align-items-top head">
								<div class="flex-grow-1">
									<div class="d-inline-block document-icon"><i class="d-flex align-items-center text-center justify-content-center red-dull-bg"><img src="assets/img/icons/education-pdf.png"/></i></div>
									<div class="d-inline-block">
										<h3 class="d-inline dotted-text">X Marksheet.pdf</h3>
										<span class="d-block">07 Mar 2023</span>
									</div>
								</div>
								<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(0px, 42px, 0px)'}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edu-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row users-files align-items-center">
								<div class="col-xs-12 col-sm-6 ">
									<div class="d-block">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6">
									<span>Member Access</span>
								</div>
							</div>
							{/* <!--row--> */}
						</div>
					</div>
				</div>
				{/* <!-- Documents row -->

				<!-- Documents row --> */}
				<div class="row education-documents">
					<div class="col-sm-12 col-md-6 col-lg-3 document-wrap">
						<div class="white-bg">
							<div class="d-flex align-items-top head">
								<div class="flex-grow-1">
									<div class="d-inline-block document-icon"><i class="d-flex align-items-center text-center justify-content-center blue-dull-bg"><img src="assets/img/icons/education-doc.png"/></i></div>
									<div class="d-inline-block">
										<h3 class="d-inline dotted-text">Education Documents</h3>
										<span class="d-block">1 Minute ago</span>
									</div>
								</div>
								<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(0px, 42px, 0px)'}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row users-files align-items-center">
								<div class="col-xs-12 col-sm-6 ">
									<div class="d-block">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6">
									<span>Member Access</span>
								</div>
							</div>
							{/* <!--row--> */}
						</div>
					</div>
					
					<div class="col-sm-12 col-md-6 col-lg-3 document-wrap">
						<div class="white-bg">
							<div class="d-flex align-items-top head">
								<div class="flex-grow-1">
									<div class="d-inline-block document-icon"><i class="d-flex align-items-center text-center justify-content-center green-dull-bg"><img src="assets/img/icons/education-xls.png"/></i></div>
									<div class="d-inline-block">
										<h3 class="d-inline">Education Documents</h3>
										<span class="d-block">4 hrs ago</span>
									</div>
								</div>
								<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(0px, 42px, 0px)'}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edu-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row users-files align-items-center">
								<div class="col-xs-12 col-sm-6 ">
									<div class="d-block">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6">
									<span>Member Access</span>
								</div>
							</div>
							{/* <!--row--> */}
						</div>
					</div>

					<div class="col-sm-12 col-md-6 col-lg-3 document-wrap">
						<div class="white-bg">
							<div class="d-flex align-items-top head">
								<div class="flex-grow-1">
									<div class="d-inline-block document-icon"><i class="d-flex align-items-center text-center justify-content-center red-dull-bg"><img src="assets/img/icons/education-pdf.png"/></i></div>
									<div class="d-inline-block">
										<h3 class="d-inline dotted-text">X Marksheet.pdf</h3>
										<span class="d-block">yesterday</span>
									</div>
								</div>
								<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(0px, 42px, 0px)'}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edu-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row users-files align-items-center">
								<div class="col-xs-12 col-sm-6 ">
									<div class="d-block">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6">
									<span>Member Access</span>
								</div>
							</div>
							{/* <!--row--> */}
						</div>
					</div>

					<div class="col-sm-12 col-md-6 col-lg-3 document-wrap">
						<div class="white-bg">
							<div class="d-flex align-items-top head">
								<div class="flex-grow-1">
									<div class="d-inline-block document-icon"><i class="d-flex align-items-center text-center justify-content-center red-dull-bg"><img src="assets/img/icons/education-notepad.png"/></i></div>
									<div class="d-inline-block">
										<h3 class="d-inline dotted-text">X Marksheet.pdf</h3>
										<span class="d-block">07 Mar 2023</span>
									</div>
								</div>
								<div class="star-ellips">
									<div class="dropdown dropdown-action d-inline-block">
										<a href="#" class="btn-action-icon show" data-bs-toggle="dropdown" aria-expanded="true"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate3d(0px, 42px, 0px)'}}>
											<ul>
												<li>
													<a class="dropdown-item" href="edit-invoice.html"><i class="far fa-edit me-2"></i>Edit</a>
												</li>
												<li>
													<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
												</li>
												<li>
													<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edu-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row users-files align-items-center">
								<div class="col-xs-12 col-sm-6 ">
									<div class="d-block">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/education-avatar.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6">
									<span>Member Access</span>
								</div>
							</div>
							{/* <!--row--> */}
						</div>
					</div>
				</div>
				{/* <!-- Documents row -->
				<!-- document-slide --> */}
				<div class="toggle-sidebar">
					<div class="d-flex align-items-center justify-content-between head">
						<i class="d-flex align-items-center text-center justify-content-center icon-bg"><img src="assets/img/icons/sidebar-pdf.svg"/></i>
						<h5>Design presentation</h5>
						<i class="fa fa-times round align-items-center d-flex justify-content-center sidebar-closes" aria-hidden="true"></i>
					</div>
					<img src="assets/img/design-presentation.png"/>
					<h6>File Owner</h6>
					<div class="d-flex align-items-center justify-content-start owner">
						<img src="assets/img/profiles/education-avatar.png"/>
						<span>Richard Steve</span>
					</div>
					<h6>Who has Access</h6>
					<div class="row">
						<div class="col-xs-12 col-sm-6 ">
							<div class="group-avatar">
							  	<span class="avatar">
							        <img src="assets/img/profiles/education-avatar.png"/>
							    </span>
							  	<span class="avatar">
							        <img src="assets/img/profiles/education-avatar.png"/>
							    </span>
							  	<span class="avatar">
							        <img src="assets/img/profiles/education-avatar.png"/>
							    </span>
							  	<span class="avatar">
							       <img src="assets/img/profiles/education-avatar.png"/>
							    </span>
							    <span class="avatar">
							       10+
							    </span>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 d-flex align-items-center">
							<span>Member Access </span>
						</div>
					</div>
					<h6>File Information</h6>
					<ul>
						<li><span>Created Date:</span>08 Ma 2023, 6:48:31 PM</li>
						<li><span>Created Date:</span>08 Ma 2023, 6:48:31 PM</li>
						<li><span>View:</span>15 Members</li>
					</ul>
					<h6>Activity</h6>
					<ul class="activity">
						<li>
							<span class="d-block">Yesterday</span>
							<div class="row">
								<div class="col-xs-12 col-sm-6 col-md-4">
									<div class="d-block group-avatar-wrap">
										<div class="group-avatar">
										  	<span class="avatar">
										         <img src="assets/img/profiles/avatar-doc-list.png"/> 
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-8 no-padding">
									<div class="">
										<span>Richard Shared Edit Access to <a href="#">John</a></span>
									</div>
								</div>
							</div>
							{/* <!--row--> */}
						</li>
						
						<li>
							<span class="d-block">Yesterday</span>
							<div class="row">
								<div class="col-xs-12 col-sm-6 col-md-4">
									<div class="d-block group-avatar-wrap">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-8 no-padding">
									<div class="">
										<span>Richard Shared Edit Access to <a href="#">Robert</a></span>
									</div>
								</div>
							</div>
							{/* <!--row--> */}
						</li>

						<li>
							<span class="d-block">Yesterday</span>
							<div class="row">
								<div class="col-xs-12 col-sm-6 col-md-4">
									<div class="d-block group-avatar-wrap">
										<div class="group-avatar">
										  	<span class="avatar">
										        <img src="assets/img/profiles/avatar-doc-list.png"/> 
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										  	<span class="avatar">
										        <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										  	<span class="avatar">
										       <img src="assets/img/profiles/avatar-doc-list.png"/>
										    </span>
										    <span class="avatar">
										       10+
										    </span>
										</div>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-8 no-padding">
									<div class="">
										<span>Richard Changed File Name <a href="#">Design Presentation</a></span>
									</div>
								</div>
							</div>
							{/* <!--row--> */}
						</li>
					</ul>
					<div class="">
						<button type="button" class="btn btn-dull" data-bs-dismiss="modal"><span class="feather-eye toggle-password"></span>View</button>
						<button type="button" class="btn gradient-btn"><i class="fa fa-download" aria-hidden="true"></i>Download</button>
					</div>

				</div>
				{/* <!-- document-slide --> */}

				<div class="docs-pages pagination-wrap d-flex justify-content-between">
					<p>Rows Per page&nbsp;&nbsp;<span>3</span>&nbsp;&nbsp;<i class="fa fa-caret-right" aria-hidden="true"></i></p>
					<ul  class="d-flex">
						<li><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">...</a></li>
						<li><a href="#">10</a></li>
						<li><a href="#">11</a></li>
						<li><a href="#">12</a></li>
					</ul>
					<p>Go to page&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
				</div>
			{/* <!-- Footer --> */}
			<footer class="footer">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-6 col-12 col-lg-6 col-xl-6 p-0">
							<div class="footer-left">
								<p>© 2023 Dreams HRMS <span>Developed by</span><a href="#"><img src="assets/img/footer-logo.png"/></a></p>
							</div>
						</div>
						<div class="col-md-6 col-sm-6 col-12 col-lg-6 col-xl-6 p-0">
							<div class="footer-right">
								<ul>
									<li>
										<a href="javascript:void(0);">Privacy Policy</a>
									</li>
									<li>
										<a href="javascript:void(0);">Terms & Conditions</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* <!-- Footer --> */}

			</div>
			{/* <!-- /Page Content --> */}

		</div>
		{/* <!-- /Page Wrapper --> */}

	</div>
	{/* <!-- /Main Wrapper -->

	<!-- Modal --> */}
	<div class="modal fade" id="upload-doc" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="newscheduleLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-between align-items-center">
                    <i class="fa fa-download blue-dull-bg d-inline-block text-center" aria-hidden="true"></i>
                    <h5 class="modal-title">Upload Documents</h5>
	        		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <div class="modal-body">
                    <div class="drag-drop text-center">
                    	<div class="upload">
	                    	<a href="#"><img src="assets/img/icons/drag-drop.svg"/></a>
	                    	<p>Drag & drop your files here or choose file <a href="#">browse</a></p>
	                    	<span>Maximum size: 50MB</span>
	                    </div>
                    </div>

                    <div class="upload-data">
                    	<div class="d-flex justify-content-between align-items-center">
                    		<div class="d-flex justify-content-between align-items-center">
                    			<img src="assets/img/icons/education-doc.png"/>
                    			<span>Resume-ui.doc</span>
                    		</div>
                    		<div class="d-flex justify-content-between align-items-center action-icon">
                    			<i class="fa fa-check-circle success-icon" aria-hidden="true"></i>
                    			<i class="fa fa-trash" aria-hidden="true"></i>
                    		</div>
                    	</div>
                    	<div class="progress">
							<div class="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
                    </div>

                    <div class="upload-data warning">
                    	<div class="d-flex justify-content-between align-items-center">
                    		<div class="d-flex justify-content-between align-items-center">
                    			<img src="assets/img/icons/education-xls.png"/>
                    			<span>Resume-ui.doc</span>
                    		</div>
                    		<div class="d-flex justify-content-between align-items-center action-icon">
                    			<i class="fa fa-exclamation-triangle warning-icon" aria-hidden="true"></i>
                    			<i class="fa fa-trash" aria-hidden="true"></i>
                    		</div>
                    	</div>
                    	<div class="progress">
							<div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
                    </div>

                    <div class="upload-data">
                    	<div class="d-flex justify-content-between align-items-center">
                    		<div class="d-flex justify-content-between align-items-center">
                    			<img src="assets/img/icons/education-pdf.png"/>
                    			<span>Resume-ui.doc</span>
                    		</div>
                    		<div class="d-flex justify-content-between align-items-center action-icon">
                    			<i class="fa fa-pause" aria-hidden="true"></i>
                    			<i class="fa fa-trash" aria-hidden="true"></i>
                    		</div>
                    	</div>
                    	<div class="progress">
							<div class="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Modal -->
	
	<!-- Modal --> */}
		<div class="modal fade" id="edu-share" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title">Share File</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>
		      </div>
		      <div class="modal-body">
		        <div class="form-group required">
					<label class="label">Share With Team Members</label>
					<input type="email" class="form-control"/>
				</div>
				<div class="form-group d-flex align-items-center justify-content-between">
					<h6>Share Read-Only Link</h6>
					<div class="status-toggle d-flex align-items-center">
						<input id="rating_1" class="check" type="checkbox"/>
						<label for="rating_1" class="checktoggle checkbox-bg mb-0"></label>
					</div>																	
				</div>
				<p>Anyone with the link can view this file, but won't be able to edit it.</p>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn gradient-btn">Share File</button>
		        <button type="button" class="btn btn-dull" data-bs-dismiss="modal">Cancle</button>
		      </div>
		    </div>
		  </div>
		</div>
		{/* <!-- End Modal --> */}
</>
  )
}

export default Document