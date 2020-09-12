import React from 'react';

import BodyMainView from './views/BodyMainView';
import ExamplePane1ContentView from './examples/ExamplePane1ContentView';
import SignIn from './views/common/sign/SignIn';
import SignUp from './views/common/sign/SignUp';
import VoucherIssue from './views/voucher/VoucherIssue';


const createContentView = (data: any) => {
  switch(data.viewId) {
    case "examplePane1ContentView":
      return (
        <ExamplePane1ContentView name={data.viewId}/>
      );
    case "examplePane1ContentView2":
      return (
        <ExamplePane1ContentView name={data.viewId}/>
    );
    case "bodyMainView":
      return (
        <BodyMainView />
      );
    case "signInView":
      return(
        <SignIn />
      );
    case "signUpView":
       return(
         <SignUp />
       ); 
    case "voucherIssueView":
      return (
        <VoucherIssue />
      );   
    default:
      return null;
  }
}

export default createContentView;