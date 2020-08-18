import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';

import { Dishes } from './reducers/dishes';
import { Comments } from './reducers/comments';
import { Leaders } from './reducers/leader';
import { Promotions } from './reducers/promotions';
import { InitialFeedback } from './Forms';

const configureStore = () => {
 
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            ...createForms({
                feedback: InitialFeedback,
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}

export default configureStore;