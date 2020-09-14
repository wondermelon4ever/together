import React from 'react';

import BodyMainView from './views/BodyMainView';
import ExamplePane1ContentView from './examples/ExamplePane1ContentView';
import SignInView from './views/common/sign/SignInView';
import SignUpView from './views/common/sign/SignUpView';
import VmarketMainView from './views/vmarket/VmarketMainView';
import MyVoucherView from './views/voucher/MyVoucherView';
import VoucherIssueView from './views/voucher/VoucherIssueView';

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
        <SignInView />
      );
    case "signUpView":
       return(
         <SignUpView />
       ); 
    case "voucherIssueView":
      return (
        <VoucherIssueView />
      );   
    case "vmarketMainView":
      return (
        <VmarketMainView />
      );
    case "myVoucherView":
      return(
        <MyVoucherView />
      );
    default:
      return null;
  }
}

export default createContentView;