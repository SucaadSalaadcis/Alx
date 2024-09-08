import React from 'react'
import { Link } from 'react-router-dom'

export default function Ribbons() {

    $(function () {
        /* BOOTSTRAP SLIDER */
        $('.slider').bootstrapSlider()

        /* ION SLIDER */
        $('#range_1').ionRangeSlider({
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: '$',
            prettify: false,
            hasGrid: true
        })
        $('#range_2').ionRangeSlider()

        $('#range_5').ionRangeSlider({
            min: 0,
            max: 10,
            type: 'single',
            step: 0.1,
            postfix: ' mm',
            prettify: false,
            hasGrid: true
        })
        $('#range_6').ionRangeSlider({
            min: -50,
            max: 50,
            from: 0,
            type: 'single',
            step: 1,
            postfix: '°',
            prettify: false,
            hasGrid: true
        })

        $('#range_4').ionRangeSlider({
            type: 'single',
            step: 100,
            postfix: ' light years',
            from: 55000,
            hideMinMax: true,
            hideFromTo: false
        })
        $('#range_3').ionRangeSlider({
            type: 'double',
            postfix: ' miles',
            step: 10000,
            from: 25000000,
            to: 35000000,
            onChange: function (obj) {
                var t = ''
                for (var prop in obj) {
                    t += prop + ': ' + obj[prop] + '\r\n'
                }
                $('#result').html(t)
            },
            onLoad: function (obj) {
                //
            }
        })
    })

    return (
        <body class="hold-transition sidebar-mini">
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
                                        <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
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
                                        <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
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
                                        <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
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
                    <Link to={'/'} class="brand-link">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                        <span class="brand-text font-weight-light">AdminLTE 3</span>
                    </Link>

                    {/* <!-- Sidebar --> */}
                    <div class="sidebar">
                        {/* <!-- Sidebar user (optional) --> */}
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                                <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
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

                                <br />
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Dashboard
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        {/* <!--  --> */}
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
                                        <i class="nav-icon fas fa-copy"></i>
                                        <p>
                                            Layout Options
                                            <i class="fas fa-angle-left right"></i>
                                            <span class="badge badge-info right">6</span>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <Link to={'/layout/top_nav'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Top Navigation</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/top_nav_sidebar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Top Navigation + Sidebar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/boxed'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Boxed</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_sidebar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_sidebar_custom'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_top_nav'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Navbar</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/fixed_footer'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Fixed Footer</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/layout/collapsed_sidebar'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Collapsed Sidebar</p>
                                            </Link>
                                        </li>
                                    </ul>
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
                                            <a href="../charts/flot.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Flot</p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={'/charts/inline'} class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Inline</p>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <a href="../charts/uplot.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>uPlot</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item menu-open">
                                    <a href="#" class="nav-link active">
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
                                            <Link to={'/ui/ribbons'} class="nav-link active">
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
                                            <a href="../forms/advanced.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Advanced Elements</p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="../forms/editors.html" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Editors</p>
                                            </a>
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
                                        <i class="nav-icon fas fa-calendar-alt"></i>
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
                                    <Link to={'/ui/kanban'} class="nav-link">
                                        <i class="nav-icon fas fa-columns"></i>
                                        <p>
                                            Kanban Board
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
                                            <a href="../../starter.html" class="nav-link">
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
                                    <Link to={'/iframe'} class="nav-link">
                                        <i class="nav-icon fas fa-ellipsis-h"></i>
                                        <p>Tabbed IFrame Plugin</p>
                                    </Link>
                                </li>
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
                <div class="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1>Ribbons</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">Ribbons</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Main content --> */}
                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Ribbons</h3>
                                        </div>
                                        {/* <!-- /.card-header --> */}
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="position-relative p-3 bg-gray" style={{ height: "180px" }}>
                                                        <div class="ribbon-wrapper">
                                                            <div class="ribbon bg-primary">
                                                                Ribbon
                                                            </div>
                                                        </div>
                                                        Ribbon Default <br />
                                                        <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="position-relative p-3 bg-gray" style={{ height: "180px" }}>
                                                        <div class="ribbon-wrapper ribbon-lg">
                                                            <div class="ribbon bg-info">
                                                                Ribbon Large
                                                            </div>
                                                        </div>
                                                        Ribbon Large <br />
                                                        <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="position-relative p-3 bg-gray" style={{ height: "180px" }}>
                                                        <div class="ribbon-wrapper ribbon-xl">
                                                            <div class="ribbon bg-secondary">
                                                                Ribbon Extra Large
                                                            </div>
                                                        </div>
                                                        Ribbon Extra Large <br />
                                                        <small>.ribbon-wrapper.ribbon-xl .ribbon</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-sm-4">
                                                    <div class="position-relative p-3 bg-gray" style={{ height: "180px" }}>
                                                        <div class="ribbon-wrapper ribbon-lg">
                                                            <div class="ribbon bg-success text-lg">
                                                                Ribbon
                                                            </div>
                                                        </div>
                                                        Ribbon Large <br /> with Large Text <br />
                                                        <small>.ribbon-wrapper.ribbon-lg .ribbon.text-lg</small>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="position-relative p-3 bg-gray" style={{ height: "180px" }}>
                                                        <div class="ribbon-wrapper ribbon-xl">
                                                            <div class="ribbon bg-warning text-lg">
                                                                Ribbon
                                                            </div>
                                                        </div>
                                                        Ribbon Extra Large <br /> with Large Text <br />
                                                        <small>.ribbon-wrapper.ribbon-xl .ribbon.text-lg</small>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="position-relative p-3 bg-gray" style={{ height: "180px" }}>
                                                        <div class="ribbon-wrapper ribbon-xl">
                                                            <div class="ribbon bg-danger text-xl">
                                                                Ribbon
                                                            </div>
                                                        </div>
                                                        Ribbon Extra Large <br /> with Extra Large Text <br />
                                                        <small>.ribbon-wrapper.ribbon-xl .ribbon.text-xl</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-sm-4">
                                                    <div class="position-relative">
                                                        <img src="../../dist/img/photo1.png" alt="Photo 1" class="img-fluid" />
                                                        <div class="ribbon-wrapper ribbon-lg">
                                                            <div class="ribbon bg-success text-lg">
                                                                Ribbon
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="position-relative">
                                                        <img src="../../dist/img/photo2.png" alt="Photo 2" class="img-fluid" />
                                                        <div class="ribbon-wrapper ribbon-xl">
                                                            <div class="ribbon bg-warning text-lg">
                                                                Ribbon
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="position-relative" style={{ minHeight: "180px;" }}>
                                                        <img src="../../dist/img/photo3.jpg" alt="Photo 3" class="img-fluid" />
                                                        <div class="ribbon-wrapper ribbon-xl">
                                                            <div class="ribbon bg-danger text-xl">
                                                                Ribbon
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /.card-body --> */}
                                    </div>
                                    {/* <!-- /.card --> */}
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                        {/* <!-- /.container-fluid --> */}
                    </section>
                    {/* <!-- /.content --> */}
                </div>
                {/* <!-- /.content-wrapper --> */}

                <footer class="main-footer">
                    <div class="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
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
