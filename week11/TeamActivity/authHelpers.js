export class Errors {
    constructor(errorElementId) {
        this.errorElement = document.getElementById(errorElementId);
    }

    handleError(error, callback) {
        const code = error.message.substring(0, 3);
        this.displayError(error);
        if (code == 500 || code == 401) {
            callback();
        }
        console.log(code);
    }

    displayError(error) {
        this.errorElement.innerHTML = error.message;
        this.errorElement.classList.remove('hidden');
    }
    clearError() {
        this.errorElement.innerHTML = '';
        this.errorElement.classList.add('hidden');
    }
}
const baseURL = 'http://127.0.0.1:3000/';

export async function makeRequest(
    url,
    method = 'GET',
    body = null,
    token = null
) {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (method == 'POST' || method == 'PUT') {
        options.body = JSON.stringify(body);
    }
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(baseURL + url, options);
    const data = await response.json();

    if (!response.ok) {

        console.log(response);
        throw new Error(`${data.status}: ${data.message}`);
    } else {
        return data;
    }
}