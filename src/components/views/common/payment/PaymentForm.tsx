import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface PaymentFormProps {
  title: string,
  memberId: string,
  processCallback: (params: Map<string, any>) => void;

  cardName?: string,
  cardNumber?: string,
  expDate?: string,
  cvv?: string,
  save?: boolean
}

interface PaymentFormState {
  title: string,
  memberId: string,
  processCallback: (params: Map<string, any>) => void;

  cardName: string,
  cardNumber: string,
  expDate: string,
  cvv: string,
  save: boolean
}

var cardName: string = "", cardNumber: string = "", expDate: string = "", cvv: string = "";
var save: boolean = false;

class PaymentForm extends React.Component<PaymentFormProps, PaymentFormState>  {
  constructor(props: PaymentFormProps) {
    super(props);

    this.state = {
      title: props.title,
      memberId: props.memberId,
      processCallback: props.processCallback,

      cardName: props.cardName === undefined ? "" : props.cardName,
      cardNumber: props.cardNumber === undefined ? "" : props.cardNumber,
      expDate: props.expDate === undefined ? "" : props.expDate,
      cvv: props.cvv === undefined ? "" : props.cvv,
      save: props.save === undefined ? false : props.save,
    }
  }

  componentDidMount() {
    this.setState({
      cardName: cardName,
      cardNumber: cardNumber,
      expDate: expDate,
      cvv: cvv,
      save: save
    })
  }

  componentWillUnmount() {
    console.log("PaymentFormProps.componentWillUnmount...");
    var params = new Map<string, any>();
    params.set("cardName", this.state.cardName);
    params.set("cardNumber", this.state.cardNumber);
    params.set("expDate", this.state.expDate);
    params.set("cvv", this.state.cvv);
    params.set("save", this.state.save);
   
    this.state.processCallback(params);

    cardName = this.state.cardName;
    cardNumber = this.state.cardNumber;
    expDate = this.state.expDate;
    cvv = this.state.cvv;
    save = this.state.save    
  }

  render() {
    return(
      <React.Fragment>
        <Typography variant="h6" gutterBottom>{this.state.title}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField 
              required id="cardName" 
              label="Name on card" 
              fullWidth autoComplete="cc-name"
              onChange={(event) =>  this.setState({
                cardName: event.target.value
              })}
              value={this.state.cardName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              onChange={(event) => this.setState({
                cardNumber: event.target.value
              })}
              value={this.state.cardNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" 
              onChange={(event) => this.setState({
                expDate: event.target.value
              })}
              value={this.state.expDate}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              onChange={(event) => this.setState({
                cvv: event.target.value
              })}
              value={this.state.cvv}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" 
                  checked={this.state.save}
                  onChange={(event)=> {
                    this.setState({
                      save: event.target.checked
                    })
                    console.log(event.target.checked);
                  }}
                />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentForm;
export { PaymentFormProps };