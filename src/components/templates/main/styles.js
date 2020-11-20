import { globals } from '../../../styles/globals';

export default theme => Object.assign({}, {
    mainContainer: {},
    contentContainer: {
        overflowY: 'auto',
        overflowX: 'hidden',
        height: '100vh',
        position: 'absolute',
        top: 0,
        right: 0,
        width: `calc(100% - ${globals.SIDEBAR_MENU_WIDTH}px)`
    }
});