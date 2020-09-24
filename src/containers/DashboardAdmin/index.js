import React from 'react';
import {connect} from "react-redux";
import {getBooks, addBook, deleteBook} from "../DashboardAdmin/actions";
import {IntlProvider, FormattedMessage} from 'react-intl';
import BookItem from "../../components/Book/bookItem";
import messages from '../DashboardAdmin/messages';
import {Button, Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";


class DashboardAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.props.getBooks();
        this.state = {
            inputTitle: "",
            inputAuthor: "",
            publishedAt: "",
        };

        this.myChangeHandler  = this.myChangeHandler.bind(this);
        this.doDeleteBook = this.doDeleteBook.bind(this);
    }

    doLogout(event, props) {
        localStorage.clear();
        this.props.history.push("/");
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    doAddBook(event, props) {
        addBook(this.state.inputTitle, this.state.inputAuthor, this.state.publishedAt)
            .then(() => props.getBooks())
        this.setState({
            inputTitle: "",
            inputAuthor: "",
            publishedAt: "",
        })
    }

    doDeleteBook(event, props, id) {
        deleteBook(id).then(() => props.getBooks())
    }

    render() {
        let booksList = "";
        if (this.props.bookList !== null) {
            booksList = this.props.bookList.map(book =>
                <li key={book.id} className="list-group-item">
                    <Row>
                        <BookItem book={book} key={book.id}/>
                        <Col xs="auto">
                            <Button variant="danger" key={book.id} className="float-right"
                                    onClick={(e) => this.doDeleteBook(e, this.props, book.id, this.state)}>
                                <FormattedMessage id="delete"/>
                            </Button>
                        </Col>
                    </Row>
                </li>)
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
                            <button className="btn btn-danger col-12" onClick={(event) => this.doLogout(event, this.props)}>
                                <FormattedMessage id="logout"/>
                            </button>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid min-vh-100" style={{background: "#cdcfd6"}}>
                    <div className="row min-vh-100 justify-content-center align-content-center">

                       <div className="col-md-10" style={{background: "#ffffff",  border: "2px", 'border-radius': "12px", padding:"2em"}}>

                              <form className='justify-content-center align-content-center'>
                                  <Form.Label style={{margin: '25px 0px 0px 25px'}}>
                                      <FormattedMessage id="title"/>
                                  </Form.Label>
                                  <input style={{margin: '25px 0px 0px 25px'}}
                                      type='text'
                                      name='inputTitle'
                                      value={this.state.inputTitle}
                                      onChange={this.myChangeHandler}
                                  />

                                  <Form.Label style={{margin: '25px 0px 0px 25px'}}>
                                      <FormattedMessage id="author"/>
                                  </Form.Label>
                                  <input style={{margin: '25px 0px 0px 25px'}}
                                      type='text'
                                      name='inputAuthor'
                                      value={this.state.inputAuthor}
                                      onChange={this.myChangeHandler}
                                  />
                                  <Form.Label style={{margin: '25px 0px 0px 25px'}}>
                                      <FormattedMessage id="year"/>
                                  </Form.Label>
                                  <input style={{margin: '25px 0px 0px 25px'}}
                                      type='text'
                                      name='publishedAt'
                                      value={this.state.publishedAt}
                                      onChange={this.myChangeHandler}
                                  />
                                  <button className="btn btn-success" style={{margin: '0px 0px 0px 25px'}}  onClick={(e) => this.doAddBook(e, this.props)}>
                                      <FormattedMessage id="add"/>
                                  </button>
                              </form>

                       </div>

                        <div className="col-md-10" style={{background: "#ffffff",  border: "2px", 'border-radius': "12px", padding:"2em", margin: '25px 25px 25px 25px'}}>
                                {booksList}
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


export default connect(mapStateToProps, {getBooks})(DashboardAdmin);
