import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';

import { TextField, SelectField } from '../../Atoms';
import { YesNoOptions } from '../../../../shared';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '50%',
    },
    fullWidth: {
        width: '100%'
    },
    halfWidth: {
        width: '60%'
    }
}));

const ReligiousSocialAstroBackground = ({ formik }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDateTimePicker
                            inputVariant="outlined"
                            margin="none"
                            id="dateAndTimeOfBirth"
                            name="dateAndTimeOfBirth"
                            label="Date of birth"
                            format="MM/dd/yyyy hh:mm"
                            KeyboardButtonProps={{
                                'aria-label': 'date of birth',
                            }}
                            value={formik.values.dateAndTimeOfBirth}
                            onChange={val => {
                                formik.setFieldValue("dateAndTimeOfBirth", val);
                            }}
                            error={formik.touched.dateAndTimeOfBirth && Boolean(formik.errors.dateAndTimeOfBirth)}
                            helperText={formik.touched.dateAndTimeOfBirth && formik.errors.dateAndTimeOfBirth}
                            disableFuture
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='placeOfBirth'
                        label='Place of birth'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='caste'
                        label='Caste'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='subCaste'
                        label='Sub caste'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        id='rassi'
                        label='Rassi'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectField
                        label='Manglik'
                        id='manglik'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={YesNoOptions}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default ReligiousSocialAstroBackground;

