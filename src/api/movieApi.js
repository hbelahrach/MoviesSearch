export function fetchMovie(query) {
        return fetch(`${process.env.REACT_APP_API_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
            .then(resp => resp.json())
            .then(response => {
                return response.results
            })
            .catch(e => e);
}
