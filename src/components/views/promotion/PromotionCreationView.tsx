import React from 'react';

import StepperView from '../common/steps/DefaultStepperView';
import { StepInfo } from '../common/steps/StepperViewProps';

import PromotionBasicInfoForm, { test } from './PromotionBasicInfoForm';
import PromotionPolicyForm from './PromotionPolicyForm';
// import PromotionPaymentForm from './PromotionPaymentForm';
import PaymentForm from '../common/payment/PaymentForm';
import PromotionReviewForm from './PromotionReviewForm';

class PromotionCreationView extends React.Component {

  constructor(props: any) {
    super(props);

    this.state = {
      
    }

    this.handleFinalStep = this.handleFinalStep.bind(this);
  }

  handleFinalStep = (param: Map<string, object>) => {
    console.log("Final step finished for promotion createion: " + param);
    param.forEach((value, key)=>{
      console.log(key + ": " + JSON.stringify(value));
    })
  }

  render() {
    var steps: StepInfo[] = [];
    
    var basicInfo: StepInfo = {
      name: "Basic Info",
      form: <PromotionBasicInfoForm />,
      stepHandler: (param: any) => {
        console.log("TEST function call=>" + test);
        console.log("Basic Information step finished.");
        return { policy: "success" }
      }
    }

    var policy: StepInfo = {
      name: "Policy",
      form: <PromotionPolicyForm />,
      stepHandler: (param: any) => {
        console.log("Policy step finished.");
        return { policy: "success" }
      }
    }

    var payment: StepInfo = {
      name: "Payment",
      form: <PaymentForm title="Payment for promotion" memberId="memberId" processCallback={ (param: Map<string, any>)=>{
        console.log("Payment callback called.")
      }}/>,
      stepHandler: (param: any) => {
        console.log("Payment step finished.");
        return { policy: "success" }
      }
    }

    var review: StepInfo = {
      name: "Review",
      form: <PromotionReviewForm />,
      stepHandler: (param: any) => {
        console.log("Review step finished.");
        return { policy: "success" }
      }
    }

    steps.push(basicInfo);
    steps.push(policy);
    steps.push(payment);
    steps.push(review);

    return(
      <StepperView steps={ steps } title="Promotion Issue" finalStepHandler={ this.handleFinalStep }/> 
    );
  }
}

export default PromotionCreationView;