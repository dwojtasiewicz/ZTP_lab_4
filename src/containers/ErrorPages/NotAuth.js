import React from 'react';
import {withRouter} from "react-router-dom";
import {FormattedMessage, IntlProvider} from "react-intl";
import messages from "../ErrorPages/messenges";


class NotAuth extends React.Component{

    render() {
        return (
            <IntlProvider locale={navigator.language}
                          messages={messages[navigator.language.substr(0, 2)]}>
                <div className="container-fluid min-vh-100" style={{background: "#cdcfd6"}}>
                    <div className="row min-vh-100 justify-content-center align-content-center">
                        <h1>
                            <FormattedMessage id="auth"/>
                        </h1>
                        <div className="col-md-12">
                            <a href="/">
                                <button className="btn btn-danger col-12" >
                                    <FormattedMessage id="link"/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}

export default withRouter(NotAuth);
