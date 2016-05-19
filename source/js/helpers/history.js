import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../stores/store';

const history = syncHistoryWithStore(browserHistory, store);

export default history;