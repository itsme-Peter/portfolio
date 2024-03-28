var data=[
    {
        "title":"Try Hack Me - Overpass.md",
        "description":"A linux based machine with weak configurations",
        "image":"static/images/img2.jpg",
        "url":".../overpass.pdf",
        "date":"2 March 2024",
        "topic":["linux","http"]
    },
    {
        "title":"Try Hack Me - Overpass.md2",
        "description":`A linux based machine with weak configuration
                          dddd dddddddddd ddddddddddddddd dddddddddddddd ddddd
                          ddddddddd ddddddddd dddddddddddddddd dddddddddddd dddddddd dd
                          d ddd ddd d d d d d d   `,
        "image":"static/images/img2.jpg",
        "url":"./overpass.pdf",
        "date":"2 March 2024",
        "topic":["linux","http"]
    }
];

for (var i = 0; i < data.length; i++) {
    var html = document.getElementById("content")
    var html2 = document.getElementById("contents")
    var innerHtml = `
    
    <div id="existing-container" class="w-5/6 mx-auto mt-5 overflow-hidden relative">
    <a href=${data[i]["url"]}>
        <div class="flex rounded-lg h-40 justify-between " style="background-color: #232328;">
            <div class="w-3/4 px-5">
                <p class="text-lg my-2 text-white">${data[i]["title"]}</p>
                <p class="line-clamp-3 overflow-hidden text-gray-300 text-sm">${data[i]["description"]}</p>
                <div class="flex items-center mt-4 text-sm font-light absolute bottom-7 ">
                    <p class="text-gray-400 line-clamp-2">${data[i]["date"]}</p>
                    <p class="text-gray-400 line-clamp-2">${data[i]["topic"]}</p>
                </div>
            </div>
            <div class="">
                <img src=${data[i]["image"]} class="h-full rounded-r-lg" alt="">
            </div>
        </div>
    </a>
</div>


    `
    html.innerHTML += innerHtml;
    html2.innerHTML += innerHtml;
  }

// Function to handle screen size change
function handleScreenSize() {
    var screenWidth = window.innerWidth;

    // Example: Log screen width
    console.log("Screen width: " + screenWidth);

    var phoneElement = document.getElementById("phone");
    var desktopElement = document.getElementById("desktop");
    var desktopElement2 = document.getElementById("desktop2");


    // Example: Respond to screen size
    if (screenWidth < 768) {
        // Phone
        console.log("Phone detected");
        phoneElement.style.height = "auto";
        desktopElement.style.height = "0";
        phoneElement.style.display ="block"
        desktopElement2.style.display="none"
    } else {
        // Desktop
        console.log("Desktop detected");
        phoneElement.style.height = "0";
        desktopElement.style.height = "auto";
        phoneElement.style.display ="none"
        desktopElement2.style.display="block"

    }
}

// Initial call to handle screen size
handleScreenSize();

// Event listener for screen size change
window.addEventListener('resize', handleScreenSize);

// Get the current page URL
var currentPageURL = window.location.href;

// Log the current page URL
console.log("Current Page URL: " + currentPageURL);
