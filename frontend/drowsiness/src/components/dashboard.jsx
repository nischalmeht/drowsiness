// components/Dashboard.js
import React, { useState } from 'react';
import axios from 'axios';
// import DataTable from './DataTable';
import './Dashboard.css'


export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const createDriver = async (e) => {
   
        e.preventDefault(); // Prevents the default form submission behavior
        const formData = new FormData(e.target);
        let user= localStorage.getItem("localData");
        let userData = JSON.parse(user)
        console.log(userData,'localData')
        let data = {
            driver_name:formData.get('driver_name'),
            vehicle_no:formData.get('vehicle_no'),
            user_id:userData[0]._id,          
            email: formData.get('email-driver'), // Accessing the email from the form
            password: formData.get('password-driver'), // Accessing the password from the form
          };
      
          try {
            const response = await axios.post('http://localhost:8001/url/add-driver', data);
            
            console.log('Sign In Response:', data);
            // setSignUpData({ full_name: '', phone_no: '', email: '', password: '' });
           
        
            // setIsActive(!isActive);
            
          } catch (error) {
            console.error('Error signing in:', error);
            alert('Sign In failed: ' + error.response.data.message);
          }
        //   console.log('Sign In Data:', data); // Log the form values
        
        
        
      };
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    return (
        <>
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

                <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                    <div className="container-fluid">

                        <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                            <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." />
                        </a>
                        <div className="navbar-user d-lg-none">

                            <div className="dropdown">

                                <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="avatar-parent-child">
                                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                                        <span className="avatar-child avatar-badge bg-success"></span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                    <a href="#" className="dropdown-item">Profile</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    <a href="#" className="dropdown-item">Billing</a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">Logout</a>
                                </div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="sidebarCollapse">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-house"></i> Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-bar-chart"></i> Analitycs
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                 <a className="nav-link" href="#">
                                     <i className="bi bi-chat"></i> Messages
                                     <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                                 </a>
                             </li> */}
                                {/* <li className="nav-item">
                                 <a className="nav-link" href="#">
                                     <i className="bi bi-bookmarks"></i> Collections
                                 </a>
                             </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-people"></i> Users
                                    </a>
                                </li>
                            </ul>
                            <hr className="navbar-divider my-5 opacity-20" />


                            <div className="mt-auto"></div>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-person-square"></i> Account
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-box-arrow-left"></i> Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">

                    <header className="bg-surface-primary border-bottom pt-6">
                        <div className="container-fluid pb-4">
                            <div className="mb-npx">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">

                                        <h1 className="h2 mb-0 ls-tight">Admin</h1>
                                    </div>
                                    <div className="col-sm-6 col-12 text-sm-end">
                                        <div className="mx-n1">

                                            <a onClick={openModal} className="btn d-inline-flex btn-sm btn-primary mx-1">
                                                <span className=" pe-2">
                                                    <i className="bi bi-plus"></i>
                                                </span>
                                                <span>Add Drivers</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </header>
                    <main className="py-6 bg-surface-secondary">
                        <div className="container-fluid">

                            <div className="row g-6 mb-6">

                                <div className="col-xl-4 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total No of Drivers</span>
                                                    <span className="h3 font-bold mb-0">215</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i className="bi bi-people"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                                    <i className="bi bi-arrow-up me-1"></i>30%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                                                    <span className="h3 font-bold mb-0">1.40</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                        <i className="bi bi-clock-history"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                                    <i className="bi bi-arrow-down me-1"></i>-5%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                                                    <span className="h3 font-bold mb-0">95%</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                        <i className="bi bi-minecart-loaded"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                                    <i className="bi bi-arrow-up me-1"></i>10%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 mb-7">
                                <div className="card-header">
                                    <h5 className="mb-0">Drivers</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Company</th>
                                                <th scope="col">Offer</th>
                                                <th scope="col">Meeting</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Robert Fox
                                                    </a>
                                                </td>
                                                <td>
                                                    Feb 15, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Dribbble
                                                    </a>
                                                </td>
                                                <td>
                                                    $3.500
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Darlene Robertson
                                                    </a>
                                                </td>
                                                <td>
                                                    Apr 15, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Netguru
                                                    </a>
                                                </td>
                                                <td>
                                                    $2.750
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-warning"></i>Postponed
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Theresa Webb
                                                    </a>
                                                </td>
                                                <td>
                                                    Mar 20, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Figma
                                                    </a>
                                                </td>
                                                <td>
                                                    $4.200
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Kristin Watson
                                                    </a>
                                                </td>
                                                <td>
                                                    Feb 15, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Mailchimp
                                                    </a>
                                                </td>
                                                <td>
                                                    $3.500
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-dark"></i>Not discussed
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Cody Fisher
                                                    </a>
                                                </td>
                                                <td>
                                                    Apr 10, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Webpixels
                                                    </a>
                                                </td>
                                                <td>
                                                    $1.500
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-danger"></i>Canceled
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Robert Fox
                                                    </a>
                                                </td>
                                                <td>
                                                    Feb 15, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Dribbble
                                                    </a>
                                                </td>
                                                <td>
                                                    $3.500
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Darlene Robertson
                                                    </a>
                                                </td>
                                                <td>
                                                    Apr 15, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Netguru
                                                    </a>
                                                </td>
                                                <td>
                                                    $2.750
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-warning"></i>Postponed
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Theresa Webb
                                                    </a>
                                                </td>
                                                <td>
                                                    Mar 20, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Figma
                                                    </a>
                                                </td>
                                                <td>
                                                    $4.200
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Kristin Watson
                                                    </a>
                                                </td>
                                                <td>
                                                    Feb 15, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Mailchimp
                                                    </a>
                                                </td>
                                                <td>
                                                    $3.500
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-dark"></i>Not discussed
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Cody Fisher
                                                    </a>
                                                </td>
                                                <td>
                                                    Apr 10, 2021
                                                </td>
                                                <td>
                                                    <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2" />
                                                    <a className="text-heading font-semibold" href="#">
                                                        Webpixels
                                                    </a>
                                                </td>
                                                <td>
                                                    $1.500
                                                </td>
                                                <td>
                                                    <span className="badge badge-lg badge-dot">
                                                        <i className="bg-danger"></i>Canceled
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer border-0 py-5">
                                    <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content slide-down" onClick={(e) => e.stopPropagation()}>
                        
                        <form onSubmit={createDriver}>
                        <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Driver Name</label>
                                <input type="text" className="form-control" id="driver_name" name="driver_name" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email </label>
                                <input type="email" className="form-control" id="email-driver" name="email-driver" 
                                autoComplete="email"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Vehicle No.</label>
                                <input type="text" className="form-control" id="vehicle_no" name="vehicle_no" />
                            </div>
                            
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password-driver" id="password-driver" autoComplete="current-password"/>
                            </div>

                            <button type="submit" className="btn btn-primary" >Add</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
// export default Dashboard;