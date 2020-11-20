// @packages
import Plot from 'plotly.js';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

// @scripts         
// import WorksList from '../../components/organisms/risk-list';
import MainTemplate from '../../components/templates/main';
import styles from  './styles';

const DashboardScreen = ({
    classes,
    hist,
    id,
    onGetHist,
    risks
}) => {
    React.useEffect(() => {
        onGetHist();
        hist.forEach(h => Plot.plot(
            document.getElementById(`plot-${h.type}-data-${h.id}`),
            [{
                type: 'scatter',
                x: h.hist.map(a => a.data),
                y: h.hist.map(a => a.lostValue)
            }]))
    }, []);

    React.useEffect(() => hist.forEach(h => Plot.plot(
        document.getElementById(`plot-${h.type}-data-${h.id}`),
        [{
            mode: 'lines',
            type: 'scatter',
            x: h.hist.map(a => moment(a.date).format('YYYY')),
            y: h.hist.map(a => a.lostValue)
        }])), [hist]);

    const [selectedItems, setSelectedItems] = React.useState([]);
    
    const handleOnSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            const removeItem = selectedItems.filter(selectedItemId => selectedItemId !== id);
            setSelectedItems(removeItem);
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const content = (
        <div className={classes.mainContainer} id={id}>
            <Grid container direction="column" justify="center" alignContent="center">
                <Grid container justify="center" alignContent="center">
                    <Typography className={classes.title} variant="h3">OPVAR</Typography>
                </Grid>
                {hist.filter(item => item.type == 'opvar').map(h => (
                    <div className={classes.tableContainer}>
                        <div style={{ display: 'inline-flex' }}>
                            <Typography variant="h4" style={{ margin: 15 }}>{h.name}</Typography>
                        </div>
                        <Grid container direction="column" className={classes.infoContent}>
                            <div style={{ display: 'inline-flex', width: 200}}>
                                <Typography style={{ textAlign: 'center', width: '50%' }} variant="h5">Año</Typography>
                                <Typography style={{ width: '50%', textAlign: 'center' }} variant="h5">Pérdida</Typography>
                            </div>
                            {h.hist.map(data => (
                                <div style={{ display: 'inline-flex', width: 200}}>
                                    <Typography style={{ textAlign: 'center', width: '50%' }}>{moment(data.date).format('YYYY')}</Typography>
                                    <Typography style={{ width: '50%', textAlign: 'center' }}>{data.lostValue}</Typography>
                                </div>
                            ))} 
                            <div id={`plot-${h.type}-data-${h.id}`} className={classes.plot}/>
                        </Grid>
                    </div>
                ))}
                
                <Grid container justify="center" alignContent="center">
                    <Typography variant="h3" className={classes.title}>LDA</Typography>
                </Grid>
                {hist.filter(item => item.type == 'lda').map(h => (
                    <div className={classes.tableContainer}>
                        <div style={{ display: 'inline-flex' }}>
                            <Typography variant="h4" style={{ margin: 15 }}>{h.name}</Typography>
                        </div>
                        <Grid container direction="column" className={classes.infoContent}>
                            <div style={{ display: 'inline-flex', width: 200}}>
                                <Typography style={{ textAlign: 'center', width: '50%' }} variant="h5">Año</Typography>
                                <Typography style={{ width: '50%', textAlign: 'center' }} variant="h5">Pérdida</Typography>
                            </div>
                            {h.hist.map(data => (
                                <div style={{ display: 'inline-flex', width: 200}}>
                                    <Typography style={{ textAlign: 'center', width: '50%' }}>{moment(data.date).format('YYYY')}</Typography>
                                    <Typography style={{ width: '50%', textAlign: 'center' }}>{data.lostValue}</Typography>
                                </div>
                            ))} 
                            <div id={`plot-${h.type}-data-${h.id}`} className={classes.plot}/>
                        </Grid>
                    </div>
                    ))}
            </Grid>
        </div>
    );

    return <MainTemplate 
        content={content}
        id={`${id}-page`}
    />
};

DashboardScreen.propTypes = {
    classes: PropTypes.object.isRequired,
    hist: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    onGetRisks: PropTypes.func.isRequired,
    risks: PropTypes.array
};

DashboardScreen.defaultProps = {
    risks: [],
    hist: []
};

export default withStyles(styles)(DashboardScreen);