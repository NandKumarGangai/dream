import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const SelectField = ({ formik, id, label, classes = {}, menuItems = [], width }) => {
    return (
        <FormControl
            variant="outlined"
            className={classes.fullWidth}
            error={formik.touched[id] && Boolean(formik.errors[id])}
        >
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                name={id}
                label={label}
                autoWidth={false}
                displayEmpty={false}
                className={width ? classes[width] : classes.halfWidth}
                value={formik.values[id]}
                onChange={e => formik.handleChange(e)}
            >
                {
                    menuItems.map(({ value, desc }, idx) => <MenuItem value={value} key={idx}>{desc}</MenuItem>)
                }
            </Select>
            {
                formik.touched[id] && Boolean(formik.errors[id])
                    ? <FormHelperText>{formik.touched[id] && formik.errors[id]}</FormHelperText>
                    : null
            }
        </FormControl>
    )
}

export default SelectField;
