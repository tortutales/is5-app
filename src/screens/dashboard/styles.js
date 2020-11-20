export default theme => Object.assign({}, {
    mainContainer: {
        width: '100%'
    },
    title: {
        backgroundColor: '#E674702a',
        width: '100%',
        textAlign: 'center'
    },
    tableContainer: {
        boderTop: 2,
        borderRight: 0,
        borderLeft: 0,
        borderBottom: 0,
        height: 500,
        borderColor: 'black',
        borderStyle: 'solid'
    },
    plot: {
        position: 'absolute',
        right: 100,
        height: 400,
        width: '60%'
    },
    infoContent: { 
        position: 'relative', 
        height: 'fit-content',
        margin: 15
    }
});