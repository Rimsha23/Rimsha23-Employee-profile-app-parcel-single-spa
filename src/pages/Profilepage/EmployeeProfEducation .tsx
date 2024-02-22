import styled from "styled-components";
import { MdOutlineMenuBook } from "react-icons/md";
import { Timeline } from "antd";
const EmpProfEducation = () =>{
    return(
<>
<StyledDiv>
<div className={` education d-flex gap-3 align-items-center `}>
    <div>
<MdOutlineMenuBook className={'educationLogo'} />
    </div>
    <div className={'educationTitle'}>Education</div>
</div>
<div className={'degrees'}>
    <Timeline>
        <Timeline.Item>
 <div className={'title'}>Degree</div>
 <div className={'subtitle'}>BSIT Jan 20,2023 - Jan 20,2027</div>
 <div className={'subtitle'}>CGPA 4.00</div>
 </Timeline.Item>
    </Timeline>
    {/* <div className={'subtitle'}>No Data</div> */}
</div>
</StyledDiv>
</>
    );
}
export default EmpProfEducation;

const StyledDiv = styled.div`
padding: 30px;
.educationLogo{
    font-size:20px;
    line-height:25px;
    font-weight:600;
}
.educationTitle{
    font-size:22px;
    line-height:25px;
    font-weight:700;
    color:#010101;
}
.degrees{
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