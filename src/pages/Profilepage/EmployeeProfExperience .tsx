import styled from "styled-components";
import { MdFactCheck } from "react-icons/md";
import { Timeline } from "antd";
const EmpProfExperience = () =>{
    return(
<>
<StyledDiv>
<div className={` experience d-flex gap-3 align-items-center `}>
    <div>
<MdFactCheck className={'experienceLogo'} />
    </div>
    <div className={'experienceTitle'}>Experience</div>
</div>
<div className={'positions'}>
    {/* <Timeline>
        <Timeline.Item>
 <div className={'title'}>Position</div>
 <div className={'subtitle'}>Organization Name / Address</div>
 <div className={'subtitle'}>Present</div>
 </Timeline.Item>
    </Timeline> */}
    <div className={'subtitle'}>No Data</div>
</div>
</StyledDiv>
</>
    );
}
export default EmpProfExperience;

const StyledDiv = styled.div`
padding: 30px;
.experienceLogo{
    font-size:20px;
    line-height:25px;
    font-weight:600;
}
.experienceTitle{
    font-size:22px;
    line-height:25px;
    font-weight:700;
    color:#010101;
}
.positions{
    margin-top:18px;
    margin-left:30px;
}
.title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #34444c !important;
  }
  .subtitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #6f6f6f !important;
  }
`