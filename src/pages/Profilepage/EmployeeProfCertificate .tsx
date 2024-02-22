import styled from "styled-components";
import { MdEmojiEvents } from "react-icons/md";
import { Timeline } from "antd";
const EmpProfCertificate = () =>{
    return(
<>
<StyledDiv>
<div className={` certificate d-flex gap-3 align-items-center `}>
    <div>
<MdEmojiEvents className={'certificateLogo'} />
    </div>
    <div className={'certificateTitle'}>Education</div>
</div>
<div className={'certificates'}>
    <Timeline>
        <Timeline.Item>
 <div className={'title'}>Title</div>
 <div className={'subtitle'}>Issue Date | authority</div>
 </Timeline.Item>
    </Timeline>
    {/* <div className={'subtitle'}>No Data</div> */}
</div>
</StyledDiv>
</>
    );
}
export default EmpProfCertificate;

const StyledDiv = styled.div`
padding: 30px;
.certificateLogo{
    font-size:20px;
    line-height:25px;
    font-weight:600;
}
.certificateTitle{
    font-size:22px;
    line-height:25px;
    font-weight:700;
    color:#010101;
}
.certificates{
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