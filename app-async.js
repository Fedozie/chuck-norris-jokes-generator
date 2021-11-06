let bodyTag = document.querySelector('body');

//Onload Message
const loadingMsg = () => {
    alert('Enter a number to get that amount of random Chuck Norris Jokes, after that click on the refresh button to try out another number.')
}

//Display the list of jokes
const renderJokes = (e) => {
    e.preventDefault();
    const number = document.querySelector('input[type="number"]').value;

    const getJokes = async () => {
        let url = `http://api.icndb.com/jokes/random/${number}`;
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

        
        let jokesList = document.querySelector('.jokes');
        let title = document.createElement('h3');
        title.className = 'jokes-title';
        title.innerHTML = `A List of ${number} Chuck Norris Jokes`;
        bodyTag.insertBefore(title, jokesList);
        jokesList.innerHTML = jokeHTML;

        let reloadBtn = document.createElement('button');
        reloadBtn.innerHTML = 'Click to Reload';
        reloadBtn.className = 'reload-btn';
        bodyTag.insertBefore(reloadBtn, bodyTag.lastChild);
        reloadBtn.addEventListener('click', () => {
            location.reload();
        })
    }

    displayJokes();
}


document.querySelector('.get-jokes').addEventListener('click', renderJokes);