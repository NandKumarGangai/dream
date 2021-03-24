import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { TextField, NumericField, SelectField } from '../../Atoms';
import {
    BloodGroups,
    BodyTypes,
    Diet,
    MaritalStatus,
    PhysicalStatus,
    YesNoOptions
} from '../../../../shared';

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

const PersonalDetails = ({ formik }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <NumericField
                        id='age'
                        label='Age'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <NumericField
                        id='height'
                        label='Height'
                        formik={formik}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <NumericField
                        id='weight'
                        label='Weight'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        label='Mother Tongue'
                        id='motherTongue'
                        formik={formik}
                    />
                </Grid>
                <Grid item md={4} xs={12}>
                    <SelectField
                        label='Blood Group'
                        id='bloodGroup'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={BloodGroups}
                    />
                </Grid>
                <Grid item md={4} xs={12}>
                    <SelectField
                        label='Body Type'
                        id='bodyType'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={BodyTypes}
                    />
                </Grid>
                <Grid item md={4} xs={12}>
                    <SelectField
                        label='Physical Status'
                        id='physicalStatus'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={PhysicalStatus}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectField
                        label='Marital Status'
                        id='maritalStatus'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={MaritalStatus}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectField
                        label='Drink'
                        id='drink'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={YesNoOptions}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectField
                        label='Diet'
                        id='diet'
                        formik={formik}
                        classes={classes}
                        width={'fullWidth'}
                        menuItems={Diet}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectField
                        label='Smoke'
                        id='smoke'
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

export default PersonalDetails;
