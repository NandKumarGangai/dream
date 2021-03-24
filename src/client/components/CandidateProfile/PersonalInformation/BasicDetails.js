import _get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const BasicDetails = ({ formik }) => {

    return (
        <Grid container spacing={3}>
            <Grid item md={4} xs={12} >
                <Typography variant="body1" component="span">
                    {'Name: '}
                </Typography>
                <Typography variant="body1" component="span">
                    {_get(formik, 'values.name', '')}
                </Typography>
            </Grid>
            <Grid item md={4} xs={12} >
                <Typography variant="body1" component="span">
                    {'Profile For: '}
                </Typography>
                <Typography variant="body1" component="span">
                    {_get(formik, 'values.profileFor', '')}
                </Typography>
            </Grid>
            <Grid item md={4} xs={12} >
                <Typography variant="body1" component="span">
                    {'Gender: '}
                </Typography>
                <Typography variant="body1" component="span">
                    {_get(formik, 'values.gender', '')}
                </Typography>
            </Grid>
            <Grid item md={4} xs={12} >
                <Typography variant="body1" component="span">
                    {'E-Mail:'}
                </Typography>
                <Typography variant="body1" component="span">
                    {_get(formik, 'values.email', '')}
                </Typography>
            </Grid>
            <Grid item md={4} xs={12} >
                <Typography variant="body1" component="span">
                    {'Religion: '}
                </Typography>
                <Typography variant="body1" component="span">
                    {_get(formik, 'values.religion', '')}
                </Typography>
            </Grid>
            <Grid item md={4} xs={12} >
                <Typography variant="body1" component="span">
                    {'Mobile: '}
                </Typography>
                <Typography variant="body1" component="span">
                    {_get(formik, 'values.mobileNumber', '')}
                </Typography>
            </Grid>
            
        </Grid >
    )
}

export default BasicDetails;
