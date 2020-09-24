import { combineReducers } from 'redux'
import loginPageReducer from './containers/LoginPage/Login/reducer'
import dashboardReducer from './containers/DashboardAdmin/reducer'

const rootReducer = combineReducers({
    loginPage: loginPageReducer,
    dashboard: dashboardReducer,
});

export default rootReducer