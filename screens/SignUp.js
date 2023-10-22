import React from 'react'
import SignUpCompA from "../components/Screens.js/SignUp/SignUpCompA";

const SignUp = ({navigation}) => {
  return (
    <SignUpCompA navigation={navigation} />
  )
}

export default React.memo(SignUp)