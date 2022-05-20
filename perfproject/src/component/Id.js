import './Id.css';

export default function Id() {
    return (
  <div className='id-wrapper'>
    <div>
        <p>아이디(이메일)</p>
    </div>
        <input/>
    <span> @ </span>
    <input/>
        <select className='mail-select' name="language" >
            <option value="none">선택</option>
            <option value="naver">naver.com</option>
            <option value="daum">daum.net</option>
            <option value="hanmail">hanmail.net</option>
            <option value="nate">nate.com</option>
            <option value="gmail">gmail.com</option>
            <option value="hotmail">hotmail.com</option>
            <option value="hanmir">hanmir.com</option>
            <option value="dreamwiz">dreamwiz.com</option>
            <option value="lycos">lycos.co.kr</option>
            <option value="empas">empas.com</option>
            <option value="self">직접 입력</option>
        </select>
  </div>
    
    );
}

