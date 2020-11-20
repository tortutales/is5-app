import { globals } from '../../../styles/globals';

export default theme => Object.assign({}, {
    mainContainer: {
        backgroundColor: '#E67470',
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        width: globals.SIDEBAR_MENU_WIDTH
    },
    listItem: {
        color: 'inherit'
    }
});