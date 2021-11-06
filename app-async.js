//Display the list of jokes
const renderJokes = (e) => {
    e.preventDefault();
    const number = document.querySelector('input[type="number"]').value;

    const getJokes = async () => {
        let url = `http://api.icndb.com/jokes/random/${number}`;
        // let url = 'https://api.icndb.com/jokes/random/'
        try{
            let response = await fetch(url);
            let data = response.json();
            return data
        }catch(error){
            console.log('An error occurred.')
        } 
    }

    const displayJokes = async () => {
        let jokes = await getJokes();
        let jokesArray = jokes.value;
        
        let jokeHTML = ''

        jokesArray.forEach((joke) => {
            let jokeOutput = `<div class="joke-card">
                                <p>${joke.joke}</p>
                              </div>`;
        jokeHTML += jokeOutput;
        })

        document.querySelector('.jokes').innerHTML = jokeHTML;
        
        console.log(jokesArray)
    }


    displayJokes();
}


document.querySelector('.get-jokes').addEventListener('click', renderJokes);