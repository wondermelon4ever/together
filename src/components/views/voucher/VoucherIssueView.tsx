import React from 'react';

import StepperView from '../common/steps/DefaultStepperView';
import { StepInfo } from '../common/steps/StepperViewProps';
import VoucherAmountForm from './VoucherAmountForm';
// import PaymentForm from './PaymentForm';
import PaymentForm from '../common/payment/PaymentForm';
import Review from './Review';

export default class VoucherIssueView extends React.Component {
  constructor(props: any) {
    super(props);

    this.handleFinalStep = this.handleFinalStep.bind(this);
  }

  handleFinalStep = (param: Map<string, object>) => {
    console.log("Final step is finished for Voucher issue:" + param);
    return {}
  }

  render() {
    var amount: StepInfo = {
      name: "Amount",
      form: <VoucherAmountForm />,
      stepHandler: (param: Map<string, object>) => {
        console.log("Amount step finished.");
        return {}
      }
    }

    var payment: StepInfo = {
      name: "Payment",
      form: <PaymentForm title="Payment for voucher" memberId="" processCallback={(param: Map<string, any>) =>{
        console.log("Voucher Issue payment...");
      }}/>,
      stepHandler: (param: Map<string, object>) => {
        console.log("Payment step finished.");
        return {}
      }
    }

    var review: StepInfo = {
      name: "Review",
      form: <Review />,
      stepHandler: (param: Map<string, object>) => {
        console.log("Review step finished.");
        return {}
      }
    }

    var steps: StepInfo[] = [];
    steps.push(amount);
    steps.push(payment);
    steps.push(review);

    return(
      <StepperView steps={steps} title="Voucher Issue" finalStepHandler={ this.handleFinalStep }/> 
    );
  }
}