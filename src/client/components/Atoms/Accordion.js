import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const AccordionComponent = ({ children, id, label, classes }) => {
    return (
        <Grid item md={8} xs={12}>
            <Accordion className={classes.mb1}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-content`}
                    id={`${id}-header`}
                >
                    <Typography className={classes.heading}>{label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    { children }
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}

export default AccordionComponent;
