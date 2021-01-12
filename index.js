let qtBtn = document.getElementById('quotebtn');

qtBtn.addEventListener("click", evt => {
    let getInput = document.getElementById('input')
    let putQuote = document.getElementById('textBox')

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            wordList = []
            data.forEach(element => {
                var text = element.text.toLowerCase()
                if (text.includes(getInput.value.toLowerCase())) {
                    wordList.push(element)
                }
            });
            if (wordList.length == 0) {
                alert("Quote not found! Try another word")
            }
            var rand = Math.floor(Math.random() * wordList.length)
            if ((wordList[rand]).author == null) {
                putQuote.innerHTML = "<h3 style='text-align: center; margin: 3px;'>" + (wordList[rand]).text + "<h3> \n <h4 style='text-align: center; margin: 5px;'>- Unknown<h4>"
            } else {
                putQuote.innerHTML = "<h3 style='text-align: center; margin: 3px;'>" + (wordList[rand]).text + "<h3> \n <h4 style='text-align: center; margin: 5px;'>" + "- " + (wordList[rand]).author + "<h4>"
            }
        });


})