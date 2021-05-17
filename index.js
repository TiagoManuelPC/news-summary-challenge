document.addEventListener("DOMContentLoaded", function() {

  
fetch("https://content.guardianapis.com/search?api-key=SECRET_API_KEY")
  .then(response => response.json())
  .then(response => {
    const numberNews = response.response.results.length
    for (var i= 0 ; i< numberNews; i++){
    const title = response.response.results[i].webTitle;
    const url = response.response.results[i].webUrl;
    let element = document.createElement("div");
    element.id = "news";
    let titleElement = document.createElement("h4");
    titleElement.innerText = title;
    let urlElement = document.createElement("a");
    urlElement.innerText = url
    urlElement.href = url;
    element.appendChild(titleElement);
    element.appendChild(urlElement);
    document.querySelector("body").appendChild(element)
    }
  })
  
  //.then(data => console.log(data));

});