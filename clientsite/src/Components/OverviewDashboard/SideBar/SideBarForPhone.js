import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./SideBarForPhone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const SideBarForPhone = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sideBar-phone">
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faSliders} style={{ color: "#845ec2" }} />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar-top">
            <Link to="/doctorDashboard">
              <h5>Overview</h5>
            </Link>
            <Link to="/doctordetails">
              <h5>User Profile</h5>
            </Link>
            <Link to="/doctorappointment">
              <h5>Appointments</h5>
            </Link>
            <Link to="/chat">
              <h5>Chats</h5>
            </Link>
            <Link to="/notification">
              <h5>Notification</h5>
            </Link>
            <Link to="/">
              <h5>Logout</h5>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideBarForPhone;
