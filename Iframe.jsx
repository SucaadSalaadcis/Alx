import React from 'react'
import { Link } from 'react-router-dom'

export default function Iframe() {

    return (
        <body class="hold-transition sidebar-mini layout-fixed" data-panel-auto-height-mode="height">
            <div class="wrapper">

                {/* <!-- Navbar --> */}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* <!-- Left navbar links --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <Link to={'/'} class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                    </ul>

                    {/* <!-- Right navbar links --> */}
                    <ul class="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i class="fas fa-search"></i>
                            </a>
                            <div class="navbar-search-block">
                                <form class="form-inline">
                                    <div class="input-group input-group-sm">
                                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div class="input-group-append">
                                            <button class="btn btn-navbar" type="submit">
                                                <i class="fas fa-search"></i>
                                            </button>
                                            <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        {/* <!-- Messages Dropdown Menu --> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#">
                                <i class="far fa-comments"></i>
                                <span class="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                Brad Diesel
                                                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">Call me whenever you can...</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                John Pierce
                                                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">I got your message bro</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    {/* <!-- Message Start --> */}
                                    <div class="media">
                                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                Nora Silvester
                                                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">The subject goes here</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* <!-- Message End --> */}
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#">
                                <i class="far fa-bell"></i>
                                <span class="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span class="dropdown-item dropdown-header">15 Notifications</span>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                                    <span class="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-users mr-2"></i> 8 friend requests
                                    <span class="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-file mr-2"></i> 3 new reports
                                    <span class="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                <i class="fas fa-th-large"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <!-- /.navbar --> */}

                {/* <!-- Main Sidebar Container --> */}
                <aside class="main-sidebar sidebar-dark-primary elevation-4">
                    {/* <!-- Brand Logo --> */}
                    <a href="index3.html" class="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                        <span class="brand-text font-weight-light">AdminLTE 3</span>
                    </a>

                    {/* <!-- Sidebar --> */}
                    <div class="sidebar">
                        {/* <!-- Sidebar user panel (optional) --> */}
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                                <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div class="info">
                                <a href="#" class="d-block">Alexander Pierce</a>
                            </div>
                        </div>

                        {/* <!-- SidebarSearch Form --> */}
                        <div class="form-inline">
                            <div class="input-group" data-widget="sidebar-search">
                                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div class="input-group-append">
                                    <button class="btn btn-sidebar">
                                        <i class="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Sidebar Menu --> */}
                        <nav class="mt-2">
                            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Dashboard
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Dashboard v3</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/widgets'} class="nav-link">
                                        <i class="nav-icon fas fa-th"></i>
                                        <p>
                                            Widgets
                                            <span class="right badge badge-danger">New</span>
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-chart-pie"></i>
                                        <p>
                                            Charts
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/chartjs'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>ChartJS</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/charts/flot'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Flot</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/charts/inline'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Inline</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-tree"></i>
                                        <p>
                                            UI Elements
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/ui/general'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>General</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/icon'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Icons</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/buttons'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Buttons</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/sliders'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Sliders</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/modals'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Modals & Alerts</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/navbar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Navbar & Tabs</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/timeline'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Timeline</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/ui/ribbons'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Ribbons</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-edit"></i>
                                        <p>
                                            Forms
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/forms/general'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>General Elements</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <a href="pages/forms/advanced.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Advanced Elements</p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/forms/editors'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Editors</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/forms/validations'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Validation</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-table"></i>
                                        <p>
                                            Tables
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/table/simple'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Simple Tables</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/table/data'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>DataTables</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/table/jsgrid'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>jsGrid</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-header">EXAMPLES</li>
                                <li class="nav-item">
                                    <Link to={'/ui/calender'} class="nav-link">
                                        <i class="nav-icon far fa-calendar-alt"></i>
                                        <p>
                                            Calendar
                                            <span class="badge badge-info right">2</span>
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/ui/galery'} class="nav-link">
                                        <i class="nav-icon far fa-image"></i>
                                        <p>
                                            Gallery
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-envelope"></i>
                                        <p>
                                            Mailbox
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/mailbox/mailbox'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Inbox</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/mailbox/compose'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Compose</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/mailbox/read_mail'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Read</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-book"></i>
                                        <p>
                                            Pages
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/example/invoice'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Invoice</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/profile'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Profile</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/ecommerce'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>E-commerce</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/projects'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Projects</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/project_add'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Add</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/project_edit'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Edit</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/project_detail'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Project Detail</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/contacts'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Contacts</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/faq'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>FAQ</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/contact_us'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Contact us</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-plus-square"></i>
                                        <p>
                                            Extras
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                    Login & Register v1
                                                    <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <Link to={'/example/login'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Login v1</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/register'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Register v1</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/forgot_password'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Forgot Password v1</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/recover_password'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Recover Password v1</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                    Login & Register v2
                                                    <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <Link to={'/example/login_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Login v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/register_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Register v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/forgot_password_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Forgot Password v2</p>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to={'/example/recover_password_v2'} class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Recover Password v2</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/lockscreen'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Lockscreen</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/legacy_user_menu'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Legacy User Menu</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/language_menu'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Language Menu</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/404'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Error 404</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/500'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Error 500</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/pace'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Pace</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/example/blank'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Blank Page</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <a href="starter.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Starter Page</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-search"></i>
                                        <p>
                                            Search
                                            <i class="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/search/simple_search'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Simple Search</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/search/enhanced'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Enhanced</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-header">MISCELLANEOUS</li>
                                <li class="nav-item">
                                    <a href="https://adminlte.io/docs/3.1/" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Documentation</p>
                                    </a>
                                </li>
                                <li class="nav-header">MULTI LEVEL EXAMPLE</li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="fas fa-circle nav-icon"></i>
                                        <p>Level 1</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-circle"></i>
                                        <p>
                                            Level 1
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Level 2</p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>
                                                    Level 2
                                                    <i class="right fas fa-angle-left"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="far fa-dot-circle nav-icon"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Level 2</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="fas fa-circle nav-icon"></i>
                                        <p>Level 1</p>
                                    </a>
                                </li>
                                <li class="nav-header">LABELS</li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-circle text-danger"></i>
                                        <p class="text">Important</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-circle text-warning"></i>
                                        <p>Warning</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-circle text-info"></i>
                                        <p>Informational</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- /.sidebar-menu --> */}
                    </div>
                    {/* <!-- /.sidebar --> */}
                </aside>

                {/* <!-- Content Wrapper. Contains page content --> */}
                <div class="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750">
                    <div class="nav navbar navbar-expand navbar-white navbar-light border-bottom p-0">
                        <div class="nav-item dropdown">
                            <a class="nav-link bg-danger dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Close</a>
                            <div class="dropdown-menu mt-0">
                                <a class="dropdown-item" href="#" data-widget="iframe-close" data-type="all">Close All</a>
                                <a class="dropdown-item" href="#" data-widget="iframe-close" data-type="all-other">Close All Other</a>
                            </div>
                        </div>
                        <a class="nav-link bg-light" href="#" data-widget="iframe-scrollleft"><i class="fas fa-angle-double-left"></i></a>
                        <ul class="navbar-nav overflow-hidden" role="tablist"></ul>
                        <a class="nav-link bg-light" href="#" data-widget="iframe-scrollright"><i class="fas fa-angle-double-right"></i></a>
                        <a class="nav-link bg-light" href="#" data-widget="iframe-fullscreen"><i class="fas fa-expand"></i></a>
                    </div>
                    <div class="tab-content">
                        <div class="tab-empty">
                            <h2 class="display-4">No tab selected!</h2>
                        </div>
                        <div class="tab-loading">
                            <div>
                                <h2 class="display-4">Tab is loading <i class="fa fa-sync fa-spin"></i></h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /.content-wrapper --> */}
                <footer class="main-footer">
                    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                    All rights reserved.
                    <div class="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.2.0
                    </div>
                </footer>

                {/* <!-- Control Sidebar --> */}
                <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
                </aside>
                {/* <!-- /.control-sidebar --> */}
            </div>
            {/* <!-- ./wrapper --> */}
        </body>
    )
}
