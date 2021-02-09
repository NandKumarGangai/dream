import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { validationSchema } from './validateForm';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function ForgotPassword({ initialValues, onSubmit }) {
    const classes = useStyles(); const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        {"Reset your password"}
                    </Typography>
                    <div className={classes.form}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            id='email'
                            label='Verify Email Address'
                            name='email'
                            autoComplete='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            autoFocus
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            name='password'
                            label='New Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            name='confirmPassword'
                            label='Verify Password'
                            type='password'
                            id='confirmPassword'
                            autoComplete='current-password'
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            {"Reset Password"}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <RouterLink to='/login'>
                                    <Link href='#' variant='body2'>
                                        {"Already have an account? Sign in"}
                                    </Link>
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </form>
    );
}
