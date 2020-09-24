
export const getBooks = () => dispatch => {
    const token = localStorage.getItem("auth")

    fetch("http://localhost:8080/dashboard",
        {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true,
                'Authorization': 'Basic ' + token,
            }
        }).then(response => response.json())
        .then(json =>
            dispatch({
                type: 'UPDATE_BOOK_LIST',
                bookList: json,
            })
        )
        .catch((response) => {
            console.log("Error")
        });
};