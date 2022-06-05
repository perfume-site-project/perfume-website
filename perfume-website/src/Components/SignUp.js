import React from 'react';
import Header from './Header';
import Birthdate from './Birthdate';
import Contact from './Contact';
import Id from './Id';
import Join from './Join';
import Name from './Name';
import Password from './Password';
import Passwordcheck from './Passwordcheck';
import Terms from './Terms';

const SignUp = () => {
  return (
    <div>
      <Id />
      <Password />
      <Passwordcheck />
      <Name />
      <Contact />
      <Birthdate />
      <Terms />
      <Join />
    </div>
  ); 
}

export default SignUp