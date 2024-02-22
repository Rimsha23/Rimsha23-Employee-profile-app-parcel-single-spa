import React from "react";
import { Button, Drawer, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import profileStore from "../../components/store/employeeProfileStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
interface EditModalProps{
 showModal: boolean;
onCancel : () => void;
}
const EditProfileModal:React.FC<EditModalProps> = observer(({ showModal, onCancel }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    const profileData = form.getFieldsValue();
    Object.keys(profileData).forEach(field => {
      profileStore.updateProfileField(field, profileData[field]);
    });
    console.log('Updated...')
  onCancel &&  onCancel();
  };

  return (
    <CustomDrawer
    title="Edit Profile"
    open={showModal}
    onClose={onCancel}
    footer={ 
      <Footer>
        <div className="d-flex justify-content-center">
          <Button className="update-btn" type="primary" onClick={handleSave} >
            Update
          </Button>
          <Button className='cancel-btn' type="default" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </Footer>
    }
    width={700}
    headerStyle={{ backgroundColor: '#2d71d8', color: '#ffffff' }} 
  >
  
      <Form form={form} initialValues={profileStore.profile} >
        <div className="d-flex flex-column justify-content-center">
      <div className="d-flex justify-content-between mr-2">
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="designation" label="Designation">
          <Input />
        </Form.Item>
        </div>
        <div className="d-flex justify-content-between">
        <Form.Item name="reports_to" label="Reports To">
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Input />
        </Form.Item>
        </div>
        </div>
      </Form>
    </CustomDrawer>
  );
});

export default EditProfileModal;
const Footer = styled.div`
.update-btn{
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
  margin-right:5px;
}
.cancel-btn{
  background-color:white;
  color:#2d71d8;
  width:130px;
  margin-right:20px;
  height:45px;
  border-radius:30px;
  padding-right:15px;
  padding-left:15px;
  font-weight:400;
  font-size:16px;
 
}
`;
 const CustomDrawer = styled(Drawer)`

 `