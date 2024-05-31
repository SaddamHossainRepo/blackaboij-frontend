import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            sx={{
                '& input': {

                },
                '& .MuiInputLabel-root': {
                    color: '#757575',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {

                    border: "1px solid #757575"
                },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            sx={{
                '& input': {

                },
                '& .MuiInputLabel-root': {
                    color: '#757575',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {

                    border: "1px solid #757575"
                },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            sx={{
                '& input': {

                },
                '& .MuiInputLabel-root': {
                    color: '#757575',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {

                    border: "1px solid #757575"
                },
            }}
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
            variant="standard"
            sx={{
                '& input': {

                },
                '& .MuiInputLabel-root': {
                    color: '#757575',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {

                    border: "1px solid #757575"
                },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}