import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function VoucherAmountForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Member Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography>
            Member name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="memberName"
            name="memberName"
            label="Name of member"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Voucher Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography>
            Current Voucher
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="currentVoucher"
            name="currentVoucher"
            label="Voucher in current"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>
            Total Voucher
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="totalVoucher"
            name="totalVoucher"
            label="Voucher in total"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>
            Charge
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="voucherCharge"
            name="voucherCharge"
            label="Voucher want to charge"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}