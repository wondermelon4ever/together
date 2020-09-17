import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, CssBaseline, Grid, Radio, RadioGroup, FormControlLabel, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const PromotionPolicyForm = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const [state, setState] = React.useState({
    checkedForMobile: false,
    checkedForWeb: false,
  });

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  return(
    <React.Fragment>
      <CssBaseline />
      <Typography variant="subtitle1" gutterBottom>
        Issue Policy
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography>
            Expected expensive:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography>
            10,000 W
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography>
            Promotion Type
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <RadioGroup row aria-label="position" name="promType" defaultValue="ps" onChange={handleRadioChange} >
            <FormControlLabel value="ps" control={<Radio color="primary" />} label="Presales" labelPlacement="end"/>
            <FormControlLabel value="pr" control={<Radio color="primary" />} label="PR" labelPlacement="end"/>
            <FormControlLabel value="bs" control={<Radio color="primary" />} label="Bargainsales" labelPlacement="end"/>
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography>
            Promotion Target
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
        <FormControlLabel control={ <Checkbox checked={state.checkedForMobile} onChange={handleCheckBoxChange} name="checkedForMobile" color="primary" /> }
                          label="Mobile"
        />
        <FormControlLabel control={ <Checkbox checked={state.checkedForWeb} onChange={handleCheckBoxChange} name="checkedForWeb" color="primary" /> }
                          label="Web"
        />
        </Grid>
      </Grid>
      <div>
      1. 프로모션 종류: 사전판매 | 할인 | 홍보
      2. 노출범위 선택 (모바일 디바이스-명수선택 | WEB  Main화면 노출)
      3. 노출대상 선택 - 선택범위에 따라 예상되는 비용을 함께 보여줌
         - 고객범위 (사람명수, 지역)
         - 추천보기 (AI 분석으로 주변고객 분석 결과를 알려줌)
    </div>
    </React.Fragment>
  );
}

export default PromotionPolicyForm;