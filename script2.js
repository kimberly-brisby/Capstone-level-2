const formTag = document.getElementById("quoteForm");
formTag.onsubmit = fetchQuotes;


const account_id = 13733;
const token = `snpD9hCIJZ4W7WUj`;
const catergory = "Science";

const url = `https://www.stands4.com/services/v2/quotes.php?uid=$(account_id)=13733&token=$(token)&format=json`;

async function fetchQuotes(event){
    event.preventDefault();
    const form = event.target;

    searchType =  form.elements.searchType.value;
    searchQuery = form.elements.searchQuery.value;

    const data = {
        searchtype: searchType,
        query: searchQuery,
    };
    
    const dataString = new URLSearchParams(data)
    console.log(dataString);

    const response = await fetch(url + "&" + queryString);
    console.log(response);
    const result = await response.json();
    console.log(result);


    const output = document.getElementById("output");
    output.innerHTML = `
        <div>
        <h2>Quote: ${result.result[0].quote}</h2>
        <p>Author: ${result.result[0].author}</p>
        </div>
        `
}
