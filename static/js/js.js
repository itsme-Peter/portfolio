var data=[
    {
        "title":"File Inclusion Vulnerability and Mitigation.",
        "description":"Local and Remote file inclusion is among the top 10 OWASP vulnerabilities. They can lead to Remote Code Execution,Unauthorized data access",
        "image":"./static/images/fileInclusion.jpeg",
        "url":"./static/pdf/fileInclusion.pdf",
        "date":"8 may 2024",
        "topic":["rce","rfi","lfi","linux","owasp10"]
    },
    {
        "title":"DOG and CAT VM TryHackMe lab.(File Inclusion and RCE",
        "description":`This machine gives a chance to exploit a LFI,the solution is to use a base64 PHP filter to access files in the directory then decode. We get the PHP function being used, we can exploit it by 
        poisoning the logs. We can then achieve a reverse shell where priv escalate by exploiting the env in gtfobins`,
        "image":"./static/images/dogCat.png",
        "url":"./static/pdf/fileInclusion.pdf",
        "date":"10 may 2024",
        "topic":["rce","priv escalation","lfi","linux","owasp10"]
    },
    {
        "title":"Mr. Robot CTF TryHackMe",
        "description":`In here we get a linux machine with http open after nmap scan. We get a few interesting dirs after enumeration. We are able to get a wordlist and a login page which handles error by exposing whic field is incorrect.
        We use hydra to bruteforce and we are now in the wordpress where we are able to upload a reverse shell. We then switch user the perform linux priv escalation by exploiting nmap.`,
        "image":"./static/images/mrRobot.jpg",
        "url":"./static/pdf/mrRobot.pdf",
        "date":"10 may 2024",
        "topic":["linux","hydra","wordpress","file upload","reverse shell","priv escalation"],
    },
    {
        "title":"Three Lab : TryHackMe",
        "description":`This lab had http open, after looking around, there was a contact email which looked like a domain name. After sub-domain enumeration we get an s3 bucket. We then configre the /etc/hosts
        to match the sub doamin as well as the IP. We use AWS CLI to ineract and enumerate the bucket. We the upload a web shell which we use to send commands. `,
        "image":"./static/images/three.png",
        "url":"./static/pdf/three.pdf",
        "date":"7 may 2024",
        "topic":["aws","amazon","web shell"],
    },
    {
        "title":"Overpass Lab : TryHackMe",
        "description":`This TryHackMe lab explores burp suite features where you can intercept the requests and responses. There were two methods you can change the response or changing the cookie.
        We are able to get the private key as well as usernames. We use john to crack the key and obtain the password, ssh into the machine. After looking
        around there is crontab running as root which we eploit to gain root privileges.`,
        "image":"./static/images/overpass.jpg",
        "url":"./static/pdf/overpass.pdf",
        "date":"2 March 2024",
        "topic": ["linux","john","ssh","crack","crontabs","priv escalation"],
    },
    {
        "title":"Basic Scanning : TryHackMe",
        "description":`This machine had a few port opens. They ranged from http,smb,https. I performed dir enum, followed by smb enum where I found details about password complexity which gave an idea of 
        ssh cracking with the found usernames. SSh into the machine then found a private key`,
        "image":"./static/images/basicScanning.png",
        "url":"./static/pdf/basicScanning.pdf",
        "date":"10 March 2024",
        "topic":["scanning","smb","john","ssh cracking","private key"],
    },
    {
        "title":"cyborg : TryHackMe",
        "description":`With ssh and http open, I did dir enumeration which yielded a few directories. I found the passwrd, ssh into the machine where all I had to do was priv escalation. I exploited the sudo privileges
        given to the user on a file.`,
        "image":"./static/images/cyborg.png",
        "url":"./static/pdf/cyborg.pdf",
        "date":"14 March 2024",
        "topic":["ssh","dir enum","sudo","linpeas"],
    },
    {
        "title":"Gamezone : TryHackMe",
        "description":`This machine had an sql vulnerability, During this walkthrough we’re going to manually exploit the injection, instead of relying on SQLMap to do it for us, in order to get a password. From there we use
         SSH Port Forwarding to gain access to a Webmin service that’s locked down, before we use metasploit to compromise that`,
        "image":"./static/images/gameZone.png",
        "url":"./static/pdf/gameZone.pdf",
        "date":"16 March 2024",
        "topic":["sql","ssh","sqlmap","webmin"],
    },
    {
        "title":"Linux Escalation Capstone : TryHackMe",
        "description":`After sshing into the machine, I had to perform priv escalation. I had to look for SUID where I got base64 which after referencing gtfobins I got root priv`,
        "image":"./static/images/linuxEscalation.png",
        "url":"./static/pdf/linEscaCapstone.pdf",
        "date":"20 March 2024",
        "topic":["linux","ssh","priv escalation","base6t4","gtfobins"],
    },
    {
        "title":"skynet : TryHackMe",
        "description":`This CTF led to discovery of multiple dir after enumeration. Then I went to smb which had had anonymous login where I found a wordlist of passwords which I bruteforced the user.
        I established a low priv shell and after running linpeas I found a vulnerability which led to root privileges.`,
        "image":"./static/images/skynet.png",
        "url":"./static/pdf/skynet.pdf",
        "date":"31 March 2024",
        "topic":["linux","smb","linpeas","priv escalation","reverse shell","CVE"],
    },
    {
        "title":"",
        "description":``,
        "image":"",
        "url":"",
        "date":"",
        "topic":"",
    },

];
var html = document.getElementById("content");
if (html !== null) {
    for (var i = 0; i < data.length; i++) {
        var html = document.getElementById("content")
        // let recent = document.getElementById("recently_added")
        var innerHtml = `
    
            <a href=${data[i]["url"]}>
                <div class="background rounded-xl mx-2 md:mx-0 mt-4 flex items-center justify-between overflow-auto h-44">
                    <div class="w-3/4 p-3 md:p-5">
                        <p class="text-xl font-semibold my-2">${data[i]["title"]}</p>
                        <p class="txt_color font-semibold truncate md:line-clamp-none md:truncate-none">${data[i]["description"]}</p>
                    </div>
                    <div class="h-full">
                        <img src=${data[i]["image"]} alt="" class="w-full h-full object-cover rounded-l-2xl">
                    </div>
                </div>
                <div class="flex items-center space-x-5 text-sm font-light text-yellow-400 ml-4">
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

// JavaScript to toggle mobile menu visibility when the hamburger icon is clicked
var html = document.getElementById("ham");
if (html !== null) {
    html.addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.toggle('hidden');
    });
}

// Function to close the mobile menu when the "x" button is clicked
function ham() {
    let dc = document.getElementById('mobileMenu');
    dc.classList.add('hidden'); // Add the 'hidden' class to hide the menu
}
