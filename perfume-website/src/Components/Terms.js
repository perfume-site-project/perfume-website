export default function Join() {
    return (
    <div>
        <br/>
        <input type='checkbox' name='all_ageement' value='all_agreemnet_check' /> 모두 동의합니다.<br/><br/>
        <input type='checkbox' name='age' value='age_check' />(필수) 본인은 만 14세 미만이 아닙니다.<br/>
        <input type='checkbox' name='ageement' value='ageement_check' />(필수) 이용약관에 동의합니다.<br/>
        <input type='checkbox' name='personal' value='personal_check' />(필수) 개인정보처리방침에 동의합니다.<br/>
        <input type='checkbox' name='get_info' value='get_info_check' />(선택) 시향하다에서 제공하는 소식을 SNS, 이메일로 수신하겠습니다.<br/><br/>
    </div>
    );
}

