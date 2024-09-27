var data=[
      {
        "title":"GreenHorn: HackTheBox",
        "description":``,
        "image":"./static/images/GreenHorn.png",
        "url":"./static/pdf/greenHorn.pdf",
        "date":"",
        "topic":["Pluck","CVE","Hash Cracking","Depix","Pixelation"],
    },
      {
        "title":"BoardLight.pdf",
        "description":``,
        "image":"./static/images/boardLight.png",
        "url":"./static/pdf/boardLight.pdf",
        "date":"",
        "topic":[" CVE-2023-30253","gnu-enlightenment","mysql"],
    },
    {
        "title":"Unified:HackTheBox",
        "description":`It explores the effects of exploiting Log4J in a very well known network appliance monitoring
                           system called "UniFi". This box will show you how to set up and install the necessary packages and tools to
                           exploit UniFi by abusing the Log4J vulnerability and manipulate a POST header called remember , giving you
                           a reverse shell on the machine. You'll also change the administrator's password by altering the hash saved
                           in the MongoDB instance that is running on the system, which will allow access to the administration panel
                           and leads to the disclosure of the administrator's SSH password.`,
        "image":"./static/images/unified.png",
        "url":"./static/pdf/unified.pdf",
        "date":"",
        "topic":["Reconnaissance","Vulnerability Assessment","Databases","Code Injection","Default Credentials"],
    },
         {
        "title":"Web scrapping : selenium-webdriver,beautiful-soup",
        "description":`This was all about data scrapping from a lawyer website, where I was to get personal data (name. company,phone,website,and location).  This was an easy part as it involved using selenium together with chrome driver, then I used beautiful-soup to find the elements I needed in the DOM.`,
        "image":"./static/images/scrapy.png",
        "url":"./static/pdf/scrapping.pdf",
        "date":"",
        "topic":["python","selenium","beautiful-soup","pandas","dataframe","CSV"],
    },
         {
        "title":"Dreaming : Solve the riddle that dreams have woven",
        "description":`It is an apche default web app on the outside. Directory enumeration unveils the pluck CMS which is vulnerable to remote file upload. This provides us with a shell which we use to pivot from one use to the other gaining different permissions.`,
        "image":"./static/images/dreaming.png",
        "url":"./static/pdf/dreaming.pdf",
        "date":"6 June 2024",
        "topic":["Linux","pivoting","mysql"],
    },
         {
        "title":"Creative : Vulnerable Web App with some misconfigurations",
        "description":`From the outside, the app looks to have been secure. That is until you enumerate to find its subdomain which has a misconfiguration. this allows us to list dir and files to gain valuable information which potentially allows for escalation into the system.`,
        "image":"./static/images/creative.svg",
        "url":"./static/pdf/creative.pdf",
        "date":"6 June 2024",
        "topic":["Linux","SSRF","ssh","priv escalation"],
    },
         {
        "title":"Brick by Brick",
        "description":`This is a wordpress application, it has CVE-2024–25600, discovered on Feb 2024, this allows for remote code execution allowing data exposure and malicious code execution which is also unauthenticated. All it takes is exploitation of the wordpress brick theme exploitaion.`,
        "image":"./static/images/bricks.png",
        "url":"./static/pdf/bricksHeist.pdf",
        "date":"5 Jun 2024",
        "topic":["wordpress","RCE","encodeing and decoding","wallet"],
    },
         {
        "title":"Tardigrade Linux Persistence",
        "description":`This machine explore different ways in which attackers aim to maintain persistence to a system. Different ways are employed such as concealing reverse shells in bash files or when a root user logs on.`,
        "image":"./static/images/tardigrade.png",
        "url":"./static/pdf/tardigrade.pdf",
        "date":"4 June 2024",
        "topic":["linux","persistence",".bashrc"],
    },

         {
        "title":"Bullet Proof Penguin: Hardening Linux",
        "description":`At first, the system has a large attack surface that can be exploited. We need to remove unused and unecessary services running. From Telnet to internet facing databases.`,
        "image":"./static/images/penguin.jpg",
        "url":"./static/pdf/bulletProofPenguin.pdf",
        "date":"4 Jun 2024",
        "topic":["Linux","SSH","Telenet","mysql","redis"],
    },
         {
        "title":"Linux Process Analysis",
        "description":`To identify Indicators of Compromise, we need to identify the baseline which is can be made by defining the normal systems processes, current running, cronjobs, services and auto scripts. Configurations have to be looked to avoid mishaps.`,
        "image":"./static/images/processAnalysis.jpg",
        "url":"./static/pdf/processAnalysis.pdf",
        "date":"3 Jun 2024",
        "topic":["Linux","Cronjobs","Services"],
    },
         {
        "title":"Security Engineer: Log Analysis TryHackMe",
        "description":`log analyis is a crucial part of information and evidence gathering. It outlines the different types, formats and standards of logs. Various ways and tools to analyze, store and manage them.`,
        "image":"./static/images/logs.png",
        "url":"./static/pdf/logs.pdf",
        "date":"29 May 2024",
        "topic":["logs","linux","rsyslog"],
    },
         {
        "title":"Python Sodoku Solver Script",
        "description":`Uses numpy to define a grid matrix, uses backtracking algo to solve and fill in the missing values defined by 0`,
        "image":"./static/images/sodoku.png",
        "url":"./static/pdf/sodokuSolver.pdf",
        "date":"17 May 2024",
        "topic":["python","backtacking","numpy"],
    },
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
        "title":"Cyborg : TryHackMe",
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
        "title":"Skynet : TryHackMe",
        "description":`This CTF led to discovery of multiple dir after enumeration. Then I went to smb which had had anonymous login where I found a wordlist of passwords which I bruteforced the user.
        I established a low priv shell and after running linpeas I found a vulnerability which led to root privileges.`,
        "image":"./static/images/skynet.png",
        "url":"./static/pdf/skynet.pdf",
        "date":"31 March 2024",
        "topic":["linux","smb","linpeas","priv escalation","reverse shell","CVE"],
    },
    {
        "title":"The Mitnick Attack : Kevin Mitnick",
        "description":`The Mitnick attack is a type of Denial of Service (DoS) attack that was first demonstrated by Kevin Mitnick in 1994. It involves filling a server’s memory with half-open SYN requests from spoofed IP addresses, effectively preventing the server from responding to any other req`,
        "image":"./static/images/mitnick.png",
        "url":"./static/pdf/mitnick.pdf",
        "date":"27 March 2024",
        "topic":["DOS","Ubuntu","TCP","python","tcpdump","wireshark","rsh"],
    },
    {
        "title":"VPN Tunnelling SeedLab",
        "description":`Creating and configuring a tunnul interface to send data to be received and forwarded ny another machine`,
        "image":"./static/images/vpn.png",
        "url":"./static/pdf/vpn.pdf",
        "date":"6 April 2024",
        "topic":["vpn","ubuntu","tun0","scapy","python"],
    },
    {
        "title":"Sometimes GIT Happens : TryHackMe",
        "description":`This room looks into git and version control. By downloading the files, you can view the git logs to see which commit stands out,
        that can expose data before a patch/ development is made. In this lab, it was before data was obfsucated to hide plain text password and username.`,
        "image":"./static/images/gitHappens.png",
        "url":"./static/pdf/gitHappens.pdf",
        "date":"15 May 2024",
        "topic":["git","wget","html","js","base64"],
    },
     // {
    //     "title":"",
    //     "description":``,
    //     "image":"",
    //     "url":"",
    //     "date":"",
    //     "topic":[],
    // },

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
