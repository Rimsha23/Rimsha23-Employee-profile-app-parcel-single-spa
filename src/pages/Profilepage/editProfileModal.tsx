import React from "react";
import { Button, Drawer, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import profileStore from "../../components/store/ProfileStore";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

interface EditModalProps {
  showModal: boolean;
  onCancel: () => void;
}
const EditProfileModal: React.FC<EditModalProps> = observer(
  ({ showModal, onCancel }) => {
    const [form] = Form.useForm();

    const handleSave = () => {
      const profileData = form.getFieldsValue();
      Object.keys(profileData).forEach((field) => {
        profileStore.editProfile(field, profileData[field]);
      });
      console.log("Updated...");
      onCancel && onCancel();
    };

    return (
      <CustomDrawer
        title="Edit Profile"
        open={showModal}
        onClose={onCancel}
        footer={
          <Footer>
            <div className="d-flex justify-content-center">
              <Button
                className="update-btn"
                type="primary"
                onClick={handleSave}
              >
                Update
              </Button>
              <Button className="cancel-btn" type="default" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </Footer>
        }
        width={700}
        headerStyle={{ backgroundColor: "#2d71d8", color: "#ffffff" }}
      >
        <Form form={form} initialValues={profileStore}>
          <div className="d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-between">
              <div className="formRow">
                <label className="label-style">Name:</label>
                <Form.Item name="userName">
                  <Input />
                </Form.Item>
              </div>
              <div className="formRow">
                <label className="label-style">Designation:</label>
                <Form.Item name="designation" className="formFields">
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="d-flex  justify-content-between">
              <div className="formRow">
                <label className="label-style">Reports To:</label>
                <Form.Item name="reportsTo" className="formFields">
                  <Input />
                </Form.Item>
              </div>
              <div className="formRow">
                <label className="label-style">Role:</label>
                <Form.Item name="role" className="formFields">
                  <Input />
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </CustomDrawer>
    );
  }
);

export default EditProfileModal;

const Footer = styled.div`
  .update-btn {
    background-color: #2d71d8;
    color: white;
    width: 130px;
    margin-right: 20px;
    height: 45px;
    border-radius: 30px;
    padding-right: 15px;
    padding-left: 15px;
    font-weight: 400;
    font-size: 16px;
    margin-right: 5px;
  }
  .cancel-btn {
    background-color: white;
    color: #2d71d8;
    width: 130px;
    margin-right: 20px;
    height: 45px;
    border-radius: 30px;
    padding-right: 15px;
    padding-left: 15px;
    font-weight: 400;
    font-size: 16px;
  }
`;
const CustomDrawer = styled(Drawer)`
  .formRow {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px; /* Adjust margin between each form row */
  }

  .label-style {
    font-weight: 600;
    color: #010101;
    margin-bottom: 8px; /* Adjust margin between label and input */
  }

  .formFields {
    width: 270px;
  }
`;
