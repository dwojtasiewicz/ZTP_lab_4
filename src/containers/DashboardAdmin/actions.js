
export const getBooks = () => dispatch => {
    const token = localStorage.getItem("auth")

    fetch("http://localhost:8080/dashboard/",
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
}

export const addBook = (title, author, publishedAt) => {
    const token = localStorage.getItem("auth")
    return fetch("http://localhost:8080/dashboard",
        {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true,
                'Authorization': 'Basic ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'title':title,
                'author':author,
                'publishedAt':publishedAt,
            })
        }).then(response => response.json())
        .then(json =>
            console.log("Added book", json)
        )
        .catch((response) => {
            console.log("Error")
        });
}

export const deleteBook = (id) => {
    const token = localStorage.getItem("auth")
    return fetch( "http://localhost:8080/dashboard/"+ id,
        {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true,
                'Authorization': 'Basic ' + token,
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(json =>
            console.log("Usunieta", json)
        )
        .catch((response) => {
            console.log("Blad")
        });
}