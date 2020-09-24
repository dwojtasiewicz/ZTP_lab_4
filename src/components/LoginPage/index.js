import React from 'react';
import {connect} from 'react-redux'
import {IntlProvider, FormattedMessage} from 'react-intl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import messages from './messages';

const LoginPageComp = ({onSubmit, pushMessage}) => {
    let errMessage = '';
    let isFlg = false;


    switch (pushMessage) {
        case 1:
            errMessage = 'badPassword';
            isFlg = true;
        case 2:
            errMessage = 'serverError';
            isFlg = true;
        case 3:
            errMessage = 'connectionError';
            isFlg = true;
    }


    return (
        <IntlProvider locale={navigator.language}
                      messages={messages[navigator.language.substr(0, 2)]}>

            <div className="row-cols-1">
                <div className="col">
                    <h1 className="text-center">
                        <FormattedMessage id="welcome"/>
                    </h1>

                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label>
                                <FormattedMessage id="login"/>
                            </Form.Label>
                            <FormattedMessage id="loginPlaceholder">
                                {placeholder =>
                                    <Form.Control type="text" isInvalid={isFlg} placeholder={placeholder}/>}
                            </FormattedMessage>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>
                                <FormattedMessage id="password"/>
                            </Form.Label>
                            <FormattedMessage id="passwordPlaceholder">
                                {placeholder =>
                                    <Form.Control type="password"  isInvalid={isFlg} placeholder={placeholder}/>}
                            </FormattedMessage>
                            <Form.Control.Feedback type="invalid">
                                <FormattedMessage id={errMessage}/>
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="success" type="submit">
                                <FormattedMessage id="loginAction"/>
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </IntlProvider>
    );
};

const mapStateToProps = state => ({
    pushMessage: state.loginPage.pushMessage

})

export default connect(mapStateToProps)(LoginPageComp);