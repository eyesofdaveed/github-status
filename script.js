const getStatus = document.querySelector("#get");

const gitopName = document.querySelector(".gitop h2");
const gitopStatus = document.querySelector(".gitop p");
const gitopIcon = document.querySelector(".gitop i");
const boxes = document.querySelectorAll(".box");

const apiName = document.querySelector(".api h2");
const apiStatus = document.querySelector(".api p");
const apiIcon = document.querySelector(".api i");

const webName = document.querySelector(".web h2");
const webStatus = document.querySelector(".web p");
const webIcon = document.querySelector(".web i");

const issuesName = document.querySelector(".issues h2");
const issuesStatus = document.querySelector(".issues p");
const issuesIcon = document.querySelector(".issues i");

const pullName = document.querySelector(".pull h2");
const pullStatus = document.querySelector(".pull p");
const pullIcon = document.querySelector(".pull i");

const githubName = document.querySelector(".github h2");
const githubStatus = document.querySelector(".github p");
const githubIcon = document.querySelector(".github i");

const packagesName = document.querySelector(".packages h2");
const packagesStatus = document.querySelector(".packages p");
const packagesIcon = document.querySelector(".packages i");

const pagesName = document.querySelector(".pages h2");
const pagesStatus = document.querySelector(".pages p");
const pagesIcon = document.querySelector(".pages i");


const getData = () => {
  
  boxes.forEach(box => {
      box.className = "box box-animate";
  });

  axios.get("https://www.githubstatus.com/").then((response) => {
    body = response.data;
    body = body.split("\n");
    let index = 0;

    index = body.indexOf('<div data-component-id="8l4ygp009s5s"');
    gitopName.innerText = body[index + 6];
    gitopStatus.innerText = body[index + 15];
    if (body[index + 15] == "    Operational") {
        gitopIcon.className = "fas fa-check-circle op";
    }
    else {
        gitopIcon.className = "fas fa-exclamation-circle err";
    }
    
    index = body.indexOf('<div data-component-id="brv1bkgrwx7q"');
    apiName.innerText = body[index + 6];
    apiStatus.innerText = body[index + 15];
    if (body[index + 15] == "    Operational") {
        apiIcon.className = "fas fa-check-circle op";
    }
    else {
        apiIcon.className = "fas fa-exclamation-circle err";
    }
    
    index = body.indexOf('<div data-component-id="4230lsnqdsld"');
    webName.innerText = body[index + 6];
    webStatus.innerText = body[index + 15];
    if (body[index + 15] == "    Operational") {
        webIcon.className = "fas fa-check-circle op";
    }
    else {
        webIcon.className = "fas fa-exclamation-circle err";
    }
    
    index = body.indexOf('<div data-component-id="kr09ddfgbfsf"');
    issuesName.innerText = body[index + 6];
    issuesStatus.innerText = body[index + 15];
    if (body[index + 15] == "    Operational") {
        issuesIcon.className = "fas fa-check-circle op";
    }
    else {
        issuesIcon.className = "fas fa-exclamation-circle err";
    }

    index = body.indexOf('<div data-component-id="hhtssxt0f5v2"');
    pullName.innerText = body[index + 6];
    pullStatus.innerText = body[index + 15];
    if (body[index + 15] == "    Operational") {
        pullIcon.className = "fas fa-check-circle op";
    }
    else {
        pullIcon.className = "fas fa-exclamation-circle err";
    }

    index = body.indexOf('<div data-component-id="br0l2tvcx85d"');
    githubName.innerText = body[index + 6];
    githubStatus.innerText = body[index + 15];
    if (body[index + 15] == "    Operational") {
        githubIcon.className = "fas fa-check-circle op";
    }
    else {
        githubIcon.className = "fas fa-exclamation-circle err";
    }

    index = body.indexOf('<div data-component-id="st3j38cctv9l"');
    packagesName.innerText = body[index + 6];
    packagesStatus.innerText = body[index + 15];
    if (body[index + 15] == "    Operational") {
        packagesIcon.className = "fas fa-check-circle op";
    }
    else {
        packagesIcon.className = "fas fa-exclamation-circle err";
    }

    index = body.indexOf('<div data-component-id="vg70hn9s2tyj"');
    pagesName.innerText = body[index + 6];
    pagesStatus.innerText = body[index + 15];
    if (body[index + 15] == "    Operational") {
        pagesIcon.className = "fas fa-check-circle op";
    }
    else {
        pagesIcon.className = "fas fa-exclamation-circle err";
    }


  });
};

getStatus.addEventListener("click", getData);
