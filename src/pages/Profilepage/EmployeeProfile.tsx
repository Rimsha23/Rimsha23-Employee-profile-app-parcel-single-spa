import React, { useState } from "react";
import { Button, Layout, Breadcrumb } from "antd";
import EditProfileModal from './editProfileModal';
import EmployeeProfileIntro from "./EmployeeProfileIntro";
import EmployeeBankDetail from "./EmployeeBankDetail ";
import EmpProfEducation from "./EmployeeProfEducation ";
import EmpProfExperience from "./EmployeeProfExperience ";
import EmpProfCertificate from "./EmployeeProfCertificate ";
import styled from "styled-components";
import { Card, Col, Row } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';

const { Content } = Layout;

const EmployeeProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const listItems = [
    { title: "Dashboard", link: "/employee-profile/" },
    { title: "Employee", link: "" },
    { title: "Profile", link: "" },
  ];

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <Layout style={{backgroundColor:'white'}}>
        <Content style={{ margin: "0 16px" }}>
          <PageHeader>
          <div className="d-flex justify-content-between">
            <Breadcrumb items={listItems}></Breadcrumb>
            <div>
              <Button className="edit-btn" onClick={handleEditProfile}>
                Edit Profile
              </Button>
            </div>
          </div>
          </PageHeader>
          <h1>Profile</h1>
          <StyledDiv>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={24} md={24} lg={7}>
                <EmployeeProfileIntro />
              </Col>
              <Col xs={24} sm={24} md={24} lg={17}>
                <Card className={"employeeInfo"}>
                  <EmployeeBankDetail />
                  <hr />
                  <EmpProfEducation />
                  <EmpProfExperience />
                  <EmpProfCertificate />
                </Card>
              </Col>
            </Row>
          </StyledDiv>
        </Content>
      </Layout>
      <EditProfileModal showModal={showModal} onCancel={handleCancel} />
    </>
  );
};

export default EmployeeProfile;

const StyledDiv = styled.div`
  .employeeInfo {
    font-family: "Outfit";
    min-height: 100%;
    height: auto;
  }
`;
const PageHeader= styled.div`
margin:15px;
.edit-btn{
  background-color:#2d71d8;
  color:white;
  width:130px;
  margin-right:20px;
  height:45px;
  border-radius:30px;
  padding-right:15px;
  padding-left:15px;
  font-weight:400;
  font-size:16px;
}
.edit-btn:hover{
  background-color:#8d8de3;
}
`