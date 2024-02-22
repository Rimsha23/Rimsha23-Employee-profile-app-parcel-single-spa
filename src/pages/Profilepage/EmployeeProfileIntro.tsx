import { Card, Avatar, Tooltip, Image } from "antd";
import { observer } from "mobx-react-lite";
import employeeProfileStore from "../../components/store/employeeProfileStore";
import store from "../../components/store/ProfileStore";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MdLocationOn,
  MdMail,
  MdOpacity,
  MdPerson,
  MdPhone,
} from "react-icons/md";
//import {Skeleton} from "antd";
const EmployeeProfileIntro = observer(() => {
  //const [isContactLoader, setIsContactLoader] = useState(true);
  const employeeProfile = employeeProfileStore.profile;
  return (
    <Card>
      {/* <Skeleton active loading={isContactLoader} paragraph={{ rows: 5 }}> */}
      <div className="text-center">
        <ProfileDiv>
          <div className={"circleDiv"}>
            {/* <Image
                    width={142}
                    height={142}
                    alt={'image'} 
                    preview={true} 
                  /> */}
            <Avatar size={140} className={"avatarTextSize"}>
              R
            </Avatar>
            <div className={"isActive"}></div>
          </div>
        </ProfileDiv>
        <Tooltip title={store.userName}>
          <Empname>{store.userName}</Empname>
        </Tooltip>
        <DesignationDiv>{store.designation}</DesignationDiv>
      </div>
      {/* </Skeleton> */}
      {/* <Skeleton active loading={isContactLoader} paragraph={{ rows: 5 }}> */}
      <EmpDetails>
        <div>
          <ul>
            <li>
              <div className={"textBold"}>Joining Date:</div>
              <div className={"textNormal"}>2024-01-12</div>
            </li>
            <li>
              <div className={"textBold"}>Employee ID:</div>
              <div className={"textNormal"}>NI-EMP-352</div>
            </li>
            <li>
              <div className={"textBold"}>Reports To:</div>
              <div className={"textNormal"}>{store.reportsTo}</div>
            </li>
            <li>
              <div className={"textBold"}>Employee Role:</div>
              <div className={"textNormal"}>{store.role}</div>
            </li>{" "}
            <li>
              <div className={"textBold"}>Shift:</div>
              <div className={"textNormal"}>10:00AM - 07:00PM</div>
            </li>
            <li>
              <div className={"textBold"}>Employment:</div>
              <div className={"textNormal"}>Main</div>
            </li>
            <li>
              <div className={"textBold"}>Rating:</div>
              <div className={"textNormal"}>
                -
                {/* {profileData?.avgRating ? (
                    <Rate allowHalf disabled value={profileData?.avgRating} />
                  ) : 'N/A'}</div> */}
              </div>
            </li>
          </ul>
        </div>
      </EmpDetails>
      {/* </Skeleton> */}
      {/* <Skeleton active loading={isContactLoader} paragraph={{ rows: 5 }}> */}

      <StyledDiv className={"mb-4"}>
        <div className={`${"listHeader"}`}>
          <div className={"listTitle"}>Contact Info</div>
        </div>
        <ul className={"listItems"}>
          <li>
            <MdPhone />-
          </li>
          <li>
            <MdMail />-
          </li>
          <li>
            <MdOpacity />-
          </li>
          <li>
            <span>
              <MdLocationOn />-
            </span>
          </li>
        </ul>
      </StyledDiv>
      {/* </Skeleton> */}
      {/* <Skeleton active loading={isContactLoader} paragraph={{ rows: 5 }}> */}
      <StyledDiv className={"mb-4"}>
        <div className={"listHeader"}>
          <div className={"listTitle"}>Family Info</div>
        </div>
        <ul className={"listItems"}>
          <li>
            <MdPerson />-
          </li>
          <li>
            <span>
              <MdPhone />-
            </span>
          </li>
        </ul>
      </StyledDiv>
      {/* </Skeleton> */}
    </Card>
  );
});
export default EmployeeProfileIntro;

const ProfileDiv = styled.div`
  margin-bottom: 20px;
  display: inline-flex;
  position: relative;
  .circleDiv {
    width: 142px;
    height: 142px;
    border: 1px solid #e3e3e3;
    border-radius: 50%;
  }
  .avatarTextSize {
    font-size: 40px !important;
  }
  .isActive {
    width: 16px;
    height: 16px;
    background: #55ce63;
    border: 1px solid #e3e3e3;
    border-radius: 20px;
    position: absolute;
    right: 14px;
    bottom: 12px;
  }
`;
const Empname = styled.div`
  font-weight: 600;
  font-size: 32px;
  color: #010101;
  line-height: 40px;
`;
const DesignationDiv = styled.div`
  margin-bottom: 18px;
  font-size: 18px;
  color: #525353;
  font-weight: 400;
  line-height: 27px;
`;
const EmpDetails = styled.div`
  matgin-bottom: 40px;
  ul {
    list-style: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .textBold {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #010101;
  }
  .textNormal {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #525353;
  }
`;
const StyledDiv = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  padding: 0 15px;
  .listHeader {
    padding: 15px 0;
    border-bottom: 1px solid #e3e3e3;
    .listTitle {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #010101;
    }
    svg {
      fill: #010101;
      cursor: pointer;
      font-size: 16px;
    }
  }
  .listItems {
    list-style: none;
    padding: 0;
    li {
      padding: 10px;
      border-bottom: 1px solid #e3e3e3;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #010101;
      display: flex;
      align-items: center;
      &:last-child {
        border: none;
      }
      svg {
        fill: #010101;
        font-size: 16px;
        margin-right: 10px;
        line-height: 21px;
      }
      span {
        position: relative;
        top: 2px;
      }
    }
  }
`;
