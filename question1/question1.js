
const getMovieList = async () => {
    //Get Date Value from HTML
    document.getElementsByClassName('resultDiv')[0].innerHTML = ''
    const date = (document.getElementsByClassName('dateText')[0]).value
    
    //Change Date value from string to integer
    intDate = parseInt(date)

    //Validate that input is a number
    if(isNaN(intDate)){
        return (document.getElementsByClassName('resultDiv')[0]).innerHTML = '<p>Invalid Input! Please enter a year and try again.</p>'
    }
    const url = `https://jsonmock.hackerrank.com/api/moviesdata?Year=${intDate}`
    // console.log(url)

    //Using Fetch API to obtain JSON Data Object
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((movieJSON) => {
        const movies = movieJSON.data
        if(movies == false){
            return (document.getElementsByClassName('resultDiv')[0]).innerHTML += `<p>No Movies Found!\n</p>`
        }
        movies.forEach((movie) => {
            return (document.getElementsByClassName('resultDiv')[0]).innerHTML += `<p>${movie.Title}\n</p>`
        })
    })
    .catch((error) => {
        console.log(error)
    })

}


const onClear = () => {
    document.getElementsByClassName('resultDiv')[0].innerHTML = ''

}
