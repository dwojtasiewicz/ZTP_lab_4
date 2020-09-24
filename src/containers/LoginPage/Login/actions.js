
export const setPushMessage = (num) => dispatch => {
    dispatch({
        type: 'SET_MESSAGE',
        pushMessage: num,
    })
}

export const login = (event) => dispatch => {

    event.preventDefault();
    const login = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const url = "http://localhost:8080/dashboard/";
    const token = btoa(login + ":" + password);

    function loginRequest() {
        return fetch(url,
            {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Origin': true,
                    'Authorization': 'Basic ' + token,
                }
            }).then((response) => {
            if (response.status === 401)
                return 1;
            else if (response.status === 200) {
                return response.json().then((json) => {
                    dispatch({
                        type: 'SET_ROLE',
                        userRole:  json[0]["role"],
                    })
                    localStorage.setItem("role", json[0]["role"]);
                    localStorage.setItem("auth", token);
                    return 0;
                });
            } else return 2;
        })
            .catch((response) => {
                return 3;
            });
    }

    return loginRequest();
};
