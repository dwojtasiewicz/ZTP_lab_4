import React from 'react';
import {connect} from "react-redux";
import {getBooks} from "./actions";
import {IntlProvider, FormattedMessage} from 'react-intl';
import BookItem from "../../components/Book/bookItem";
import messages from './messages';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.props.getBooks();
    }

    doLogout(event, props) {
        localStorage.clear();
        this.props.history.push("/");
    }

    render() {
        let booksList = "";
        if (this.props.bookList !== null) {
            booksList = this.props.bookList.map(book =>
                <li key={book.id} className="list-group-item"><BookItem book={book} key={book.id}/></li>)
        }

        return (
            <IntlProvider locale={navigator.language}
                          messages={messages[navigator.language.substr(0, 2)]}>
                <nav className="navbar bg-dark">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand text-white">
                                <FormattedMessage id="library"/>
                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            <button className="btn btn-danger col-12" onClick={(e) => this.doLogout(e, this.props)}>
                                <FormattedMessage id="logout"/>
                            </button>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid min-vh-100" style={{background: "#cdcfd6"}}>
                    <div className="row min-vh-100 justify-content-center align-content-center">
                        <div className="col-md-10">
                            <ul className="list-group" id="booksList">
                                {booksList}
                            </ul>
                        </div>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}


const mapStateToProps = state => {
    return {
        bookList: state.dashboard.bookList,
    }
}


export default connect(mapStateToProps, {getBooks})(Dashboard);
