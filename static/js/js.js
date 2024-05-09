var data=[
    {
        "title":"Try Hack Me - Overpass.md",
        "description":"A linux based machine with weak configurations",
        "image":"static/images/img2.jpg",
        "url":".../overpass.pdf",
        "date":"2 March 2024",
        "topic":["linux","http"]
    },
    
];

var html = document.getElementById("content");
if (html !== null) {
    for (var i = 0; i < data.length; i++) {
        var html = document.getElementById("content")
        // let recent = document.getElementById("recently_added")
        var innerHtml = `
    
            <a href=${data[i]["url"]}>
                <div class="background rounded-xl mt-4 flex items-center justify-between h-40">
                    <div class="w-3/4 p-5">
                        <p class="text-xl font-semibold my-2">${data[i]["title"]}</p>
                        <p class="txt_color font-semibold">${data[i]["description"]}</p>
                    </div>
                    <div class="h-full">
                        <img src=${data[i]["image"]} alt="" class="w-full h-full object-cover rounded-l-2xl">
                    </div>
                </div>
                <div class="flex items-center space-x-5 text-sm font-light text-yellow-400">
                    <p>${data[i]["date"]}</p>
                    <p>${data[i]["topic"]}</p>
                </div>
            </a> 
    
        `
    
        html.innerHTML += innerHtml;
        // recent.innerHTML += `<a href="${data[i]["url"]}" class="border-l pl-2 mt-2 text-sm hover:underline hover:text-white">${data[i]["title"]}</a> <br>`
    }
  }
function handleSubmit(event) {
    event.preventDefault();

    // Get the form input values
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    
    // Check if any of the fields are empty
    if (email.trim() === '' || phoneNumber.trim() === '' || message.trim() === '') {
        alert('Please fill in all the fields.');
        return;
    }

    alert("HINT!!!lamphilosopher101@gmail.com")
    return;
}

document.getElementById('contactUs').addEventListener('submit', handleSubmit);