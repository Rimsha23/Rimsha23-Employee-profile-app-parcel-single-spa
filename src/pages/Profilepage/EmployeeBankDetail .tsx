import styled from "styled-components";
import {Card} from "antd"
import bankImage from '../../images/bankImage.svg'
const EmployeeBankDetail = () =>{
     return (
<>
<Card>
<StyledDiv>
<div className='d-flex justify-content-between mb-4'>
<div className={"detailTitle"}>Bank Information</div>
<div className={"detailTitle"}>Current Salary</div>
</div>
<AddResponsive className='d-flex justify-content-between'>
<div className='d-flex gap-2 gap-md-4 '>
<div>
    <img src={bankImage} alt='bank' />
</div>
<BankAccountInfo className={'bankinfo'}>
<div className={'boldText'}>Account Title:<span>-</span></div>
<div className={'boldText'}>Bank Name:<span>-</span></div>
<div className={'boldText'}>Account No:<span>-</span></div>
</BankAccountInfo>
</div>
<div className={'employeeSalary'}> 0 PKR/-</div>
</AddResponsive>
</StyledDiv>
</Card>
</>
     );
}
export default EmployeeBankDetail;
const StyledDiv = styled.div`
padding-top: 40px;
padding-right:40px;
padding-left:40px;
.detailTitle{
    font-weight:600;
    font-size:28px;
}
`

const AddResponsive = styled.div`
padding-right: 40px;
.employeeSalary{
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: right;
}
`
const BankAccountInfo = styled.div`
.boldText{
    font-weight:600;
    font-size:17px;
}
`