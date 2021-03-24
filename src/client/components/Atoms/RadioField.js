import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));

const RadioField = ({ formik, id, label, radioItems = [] }) => {
    const classes = useStyles();

    return (
        <FormControl
            component="span"
            error={formik.touched[id] && Boolean(formik.errors[id])}
            className={classes.formControl}
            variant="outlined"
        >
            <div className={classes.flex}>
                <FormLabel component="legend" >{label}</FormLabel>
                <RadioGroup row aria-label={id} name={id} value={formik.values[id]} onChange={formik.handleChange}>
                    {
                        radioItems.map(({ value, desc }, idx) =>
                            <FormControlLabel key={idx} value={value} control={<Radio />} label={desc} labelPlacement="start"/>)
                    }
                </RadioGroup>

            </div>
            {
                formik.touched[id] && Boolean(formik.errors[id])
                    ? <FormHelperText>{formik.touched[id] && formik.errors[id]}</FormHelperText>
                    : null
            }
        </FormControl>
    )
}

export default RadioField;
