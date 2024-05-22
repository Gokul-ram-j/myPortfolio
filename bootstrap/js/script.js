var typing = new Typed('.autofill', {
    strings:["FullStack Developer","Python Programmer","Web Designer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});


// opening menu
let open_btn=document.querySelector(".show")
open_btn.addEventListener("click",(e)=>{
    document.querySelector(".nav-opt").classList.toggle("open")
})

// closing menu
let nav_elem=document.querySelector(".nav-opt")
nav_elem.addEventListener("click",(e)=>{
    document.querySelector(".nav-opt").classList.toggle("open")
    menu.classList.toggle("fa-bars")
    menu.classList.toggle("fa-close")
})

// changing menu sign

let menu=document.querySelector(".menu")
menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-bars")
    menu.classList.toggle("fa-close")
})

// displaying skill proficency

function show_details(elem){
    let clicked_skill=elem.parentElement
    clicked_skill.querySelector("img").classList.toggle("not-visible")
    clicked_skill.querySelector(".info").classList.toggle("not-visible")
   
}

// adding skill

let skill_container=document.querySelector(".skill-section")

mySkill={
    "html":{
    "scale":9,
    "certificate":"https://www.linkedin.com/learning/certificates/374bb3f0eee83ff0418e2e48974fc9afbf516aa9b671b5c0645aa797e7d62b3d"
    },
    "css":{
    "scale":9,
    "certificate":"https://www.linkedin.com/learning/certificates/4b74b53b15e105c91682f9756e9b66bf6fe7d214d1e0e7afeff7b1ca7fc5a205"
    },
    "sass":{
        "scale":8.5,
        "certificate":"#"
    },
    "bootstrap":{
        "scale":8,
        "certificate":"https://www.linkedin.com/learning/certificates/8413820233bcd5c3accc3b5d02d5d6097038f3cac31741ffcfd24485ada88194"
    },
    "javascript":{
    "scale":8,
    "certificate":"https://www.linkedin.com/learning/certificates/9ef80c9df18b94a0895d7db13992d354c685ed4b8e97533338a9c9dd8c44c87a"
    },
    "react":{
    "scale":7.5,
    "certificate":"https://www.linkedin.com/learning/certificates/9012a0d66627c79fea66f0f82c01e90f9c9fde54209698d44b8a494327239c96"
    },
    "git":{
    "scale":8,
    "certificate":""
    },
    "github":{
    "scale":8,
    "certificate":""
    },
    "nodejs":{
    "scale":8,
    "certificate":"https://www.linkedin.com/learning/certificates/9379daba6ba61ad4e6de09a5028a12b0fb1d08bf23adcb6b8d53cd28ddfcf425"
    },
    "expressjs":{
    "scale":7.5,
    "certificate":""
    },
    "mysql":{
    "scale":8,
    "certificate":"https://www.linkedin.com/learning/certificates/ebaee6bcfc41cc134814bfc3bc8dc84083aaa99a4f797d229418fef9ddd09e70"
    },
    "canva":{
        "scale":8.5,
        "certificate":""
    },
    "python":{
        "scale":9,
        "certificate":"https://www.linkedin.com/learning/certificates/352def1019050ed71b83b7c9cd04f8c1aa16a5f2446c02fc8d0b7f67bf022ab3"
    },
    "numpy":{
        "scale":6,
        "certificate":""
    },
    "blender":{
        "scale":4,
        "certificate":""
    },
    "c":{
        "scale":7.5,
        "certificate":""
    },
    "tableau":{
        "scale":4.5,
        "certificate":""
    },
    "figma":{
        "scale":5.5,
        "certificate":""
    },
    "java":{
        "scale":7.5,
        "certificate":"https://drive.google.com/file/d/1C-PiNn3M10C3rtccqfcqOqEdE4qhgBRU/view"
    },
    "firebase":{
        "scale":5.5,
        "certificate":""
    },

   
}


for(skill_name in mySkill)
{
    skill_container.innerHTML+=
    `
    <div data-aos="zoom-in" class=" col-sm-12 col-md-6 col-lg-4 p-1">
        <div class="skill">
            <button onclick="show_details(this)" class="skill-show" style="color: white;"><i class="fa fa-eye" aria-hidden="true"></i></button>
            <img  src="./assert//${skill_name}.png" alt="html">
            <div class="info not-visible">
                <h1>${mySkill[skill_name]["scale"]}/10</h1>
                <a href=${mySkill[skill_name]["certificate"]}><i class="fa fa-certificate" aria-hidden="true" style="margin-right:2px;"></i>view certificate</a>
            </div>
        </div>  
    </div> 
    `
}

//    -------------------------------- certificates --------------------------
let myCertificate={
    "FrontEnd Development":[
        {"title":"HTML, CSS, and Javascript for Web Developers","src":"https://coursera.org/share/5397be832a94b78aaccc3012799f59d7"},
        {"title":"Introduction to Front-End Development","src":"https://coursera.org/share/1f6ae9afdd8d0a5403688ffcb37ce32d"},
        {"title":"Succeeding in Web Development: Full Stack and Front End","src":""}
    ],
    "Python Programming":[
        {"title":"Python(Basics)","src":"https://www.hackerrank.com/certificates/8f9aec679de6"},
        {"title":"Intermediate Python for Non-Programmers","src":"https://www.linkedin.com/learning/certificates/352def1019050ed71b83b7c9cd04f8c1aa16a5f2446c02fc8d0b7f67bf022ab3"},
        {"title":"Programming ,Data structure And Algorithm in Python","src":"https://drive.google.com/file/d/1HHNvA9BItKo6nFTLuarRS6bdb4Il6EiV/view?usp=drive_link"}
    ],
    "Java programming":[
        {"title":"Java for beginners: Step-by-step hands-on guide to Java","src":"https://drive.google.com/file/d/1C-PiNn3M10C3rtccqfcqOqEdE4qhgBRU/view?usp=drivesdk"}
    ],
    "React":[
        {"title":"React: Design Patterns","src":"https://www.linkedin.com/learning/certificates/837b889160f5552dd157cf5caa1fbbeb7d07f5d49c8bfe406416b133115944e6"},
        {"title":"React Basics","src":"https://coursera.org/share/e7d9c74616c9d6a2a8c4c17e2c72e9ff"}
    ],
    "BackEnd Development":[
        {"title":"Introduction to Back-End Development","src":"https://www.coursera.org/account/accomplishments/verify/4AF5EAVZTHPC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"},
        {"title":"SQL(Basics)","src":"https://www.hackerrank.com/certificates/34dbdf02bb02"},
        {"title":"SQL Essential Training","src":"https://www.linkedin.com/learning/certificates/ebaee6bcfc41cc134814bfc3bc8dc84083aaa99a4f797d229418fef9ddd09e70"},
        {"title":"Using SQL with Python","src":"https://www.linkedin.com/learning/certificates/38c125032f2b991cf64f976f4a44b53d38499ff80786d64d1232731606084d4c"},
        {"title":"Database Foundations: Intro to Databases","src":"https://www.linkedin.com/learning/certificates/5ebe3a3077509a37c894e49e85ee45967800e5e50a61719462d40a0b57bd531e"}
    ]
}

let certificate_container=document.querySelector(".certificates")
for(cer in myCertificate){

    let cer_div=document.createElement("div")
    cer_div.setAttribute("data-aos","fade-up")
    cer_div.setAttribute("data-aos-anchor-placement","center-center")
    cer_div.setAttribute("class","certificate")
    cer_div.innerHTML+=
    `
    <button onclick="display_certificate(this)" class="show-btn">
        <h1>${cer}</h1>
        <i class="fa fa-angle-down" aria-hidden="true"></i>
    </button>
    `
    let cer_lst=document.createElement("ol")
    cer_lst.setAttribute("class","not-visible")
    for(certif of myCertificate[cer]){
        cer_lst.innerHTML+=
        `
        <li><a href=${certif["src"]}>${certif["title"]}<i class="fa fa-external-link" aria-hidden="true"></i></a></li>
        `
    }

    cer_div.append(cer_lst)
    certificate_container.append(cer_div)

    
    
}

// show certificates


function display_certificate(elem){
    elem.parentElement.querySelector("ol").classList.toggle("not-visible")
    elem.querySelector("i").classList.toggle("fa-angle-down")
    elem.querySelector("i").classList.toggle("fa-angle-up")
}








//  -------------------------------  internship section    ----------------------------------------------

let internship_carousel=document.querySelector(".intership-carousel")


let myInternship=[
    {
        "company_name":"Codsoft",
        "img":"https://media.licdn.com/dms/image/D560BAQHDmIfYA5sY7w/company-logo_200_200/0/1685777115831?e=1716422400&v=beta&t=N4LGZYwUjI-gspZlRvtUcNax3t2vO5hasybgpJXHxNs",
        "role":"Python Programming Intern",
        "date":"01/11/2023 - 30-01-2023",
        "offer_letter":"https://drive.google.com/file/d/1Kk-rHseYS6aFcWWeEE80BOz5O5msa6X5/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1LIzFuGknR3A9rA1um1t-RigHOzDc1xMY/view?usp=drive_link",
        "company":"https://codsoft.in/",
        "active":false
    },
    {
        "company_name":"LearnSmasher EduTech LLP",
        "img":"https://media.licdn.com/dms/image/D560BAQF3i9iyPePkvQ/company-logo_200_200/0/1706279614099?e=1716422400&v=beta&t=6S34JJEK3Noq5ozUam_Xh5JwIlggKd1QMUj8V64kjCQ",
        "role":"Web Development Intern",
        "date":"20/12/2023 - 20-01-2024",
        "offer_letter":"https://drive.google.com/file/d/1KqhKdNL1i69ED3ig57HE6DRi4DX001vi/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1LKBvVmrTNBemvE1E3mep9Pd88jZtP5u-/view?usp=drive_link",
        "company":"https://learnsmasher.in/",
        "active":false
    },
    {
        "company_name":"OASIS InfoByte",
        "img":"https://media.licdn.com/dms/image/C4E0BAQHfk_O8amPovQ/company-logo_200_200/0/1642532597684/oasis_infobyte_logo?e=1716422400&v=beta&t=T7-XRKrOCaGC4N2ysQTcAcYqP1nky6opEAC62k6yS4c",
        "role":"Web Development Intern",
        "date":"01/01/2024 - 05-02-2024",
        "offer_letter":"https://drive.google.com/file/d/1KwLkJ5pDwAjyVmrj9y60NuLKiPzXqK2p/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1u3V7JkUKFavxA1pqo8NwJqoh4uP3FLgw/view?usp=drive_link",
        "company":"http://oasisinfobyte.com/",
        "active":false
    },
    {
        "company_name":"Bharat Intern",
        "img":"https://media.licdn.com/dms/image/D560BAQFV0JYJ33yONg/company-logo_200_200/0/1691701552297/bharat_intern_logo?e=1717027200&v=beta&t=bC7W43ibYq8w1B97VWSFM5LGahDh8sqi822XEd8JM_I",
        "role":"Web Development Intern",
        "date":"10/01/2024 - 10-02-2024",
        "offer_letter":"https://drive.google.com/file/d/1KPcfmoSMUE-owxvwewJiJeAune67Pfu6/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/195AcpdOHBAvwpRoT1YMb8G8NInvHwq97/view?usp=drive_link",
        "company":"https://bharatintern.live/",
        "active":false
    },
    {
        "company_name":"Campus Coder",
        "img":"https://media.licdn.com/dms/image/D4D0BAQFcPjC2TQlOmw/company-logo_100_100/0/1697543142221?e=1719446400&v=beta&t=rHE9yJNIhL4VzlyKsZ6pUt1I_GEEu5_q2oLzS5RlfKU",
        "role":"Web Development Intern",
        "date":"23/01/2024 - 20-02-2024",
        "offer_letter":"https://drive.google.com/file/d/1KWOi4p1SjcBQaGoug_-Yhd4rviqv74_g/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1L0hanlyadFfvyR704U9cn1aa7ndU0oWg/view?usp=drive_link",
        "company":"https://www.linkedin.com/company/campus-coder/about/",
        "active":false
    },
    {
        "company_name":"TechnoHacks EduTech Official",
        "img":"https://media.licdn.com/dms/image/C560BAQHbRc4KalclmA/company-logo_200_200/0/1676715857373?e=1719446400&v=beta&t=f1N7H0unxrJ3_cFpdLNgNDOxOLhgwuQmXB17tDP3T9E",
        "role":"Web Development Intern",
        "date":"23/01/2024 - 22-02-2024",
        "offer_letter":"https://drive.google.com/file/d/1KzgqeuND670XB8GHwnYHWXsbzPSTxImU/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1FfU695KPW7b9l6E1lHrytO1gCmNEQFot/view?usp=drive_link",
        "company":"https://www.technohacks.co.in/",
        "active":false
    },
    {
        "company_name":"Slash Mark IT Startup",
        "img":"https://media.licdn.com/dms/image/D560BAQGx3kX2Z4L-BQ/company-logo_200_200/0/1699711794222/slash_mark_logo?e=1719446400&v=beta&t=7Cukzdvox4aTor9dSU-1TCeYOFIsXxjZXLCT8yio4iY",
        "role":"Web Development Intern",
        "date":"25/02/2024 - 25-03-2024",
        "offer_letter":"https://drive.google.com/file/d/13AvgLnW7xqhl9KzNIHFmkf5152F3TXC8/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1w-CcQUaKk3t9kgJioM6Lg-DSJ5nczmLe/view?usp=drive_link",
        "company":"https://slashmark.cloud/",
        "active":false
    },
    {
        "company_name":"TECH-A-INTERN",
        "img":"https://media.licdn.com/dms/image/D4D0BAQEn7hYCKWsMrw/company-logo_200_200/0/1688907826942?e=1719446400&v=beta&t=yJgb1YRSwlYxAu0LQaXAOoqJDxkasE8amfinQtdIUgU",
        "role":"Web Development Intern",
        "date":"10/02/2024 - 10-03-2024",
        "offer_letter":"https://drive.google.com/file/d/1u6TZ-wPsrp-H7-6FBaoG5yRYY5sqjsDw/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1f-iqLwSg5o2a4ddtWh8ceEs1-PJeu28D/view?usp=drive_link",
        "company":"https://slashmark.cloud/",
        "active":false
    },
    {
        "company_name":"Coders Cave",
        "img":"https://media.licdn.com/dms/image/C560BAQG8mB16kIRhMQ/company-logo_200_200/0/1675512082141?e=1724284800&v=beta&t=e6DfCgQVw_jqfGtCUlXsHi1w7OkVBugm6TbPBLtm34s",
        "role":"Web Development Intern",
        "date":"02/04/2024 - 05-05-2024",
        "offer_letter":"https://drive.google.com/file/d/1HKu7ZDR2HnyQnY3d7WS53Orjw4jEk2aw/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1wBHmETjebX39ONeTPMYO0dnkBDI4vR_g/view?usp=drive_link",
        "company":"https://www.coderscave.in/",
        "active":true
    },
    {
        "company_name":"GrowIntern",
        "img":"https://media.licdn.com/dms/image/D560BAQHHF0AlGk_n3g/company-logo_200_200/0/1689862973092/growintern_logo?e=1724284800&v=beta&t=LPj_b-9JEyqsjVWKg-DRa6f_rP_DafKHuXrM8Bvz1BA",
        "role":"Web Development Intern",
        "date":"05/04/2024 - 05-05-2024",
        "offer_letter":"https://drive.google.com/file/d/156mcrSGGBwiNccRQSuMj_y9UrdHr39Cf/view?usp=drive_link",
        "completion_letter":"https://drive.google.com/file/d/1HO_RZtlfhzdiQcQ2RvVF_IbwIC7INO74/view?usp=drive_link",
        "company":"https://growintern.com/",
        "active":false
    },
   

]



for(intern of myInternship){
    let elem=
    `
    <div  class="carousel-item ${intern["active"]?"active":""}">
                <div class="intern-details  d-block w-10">
                <img src=${intern["img"]}  alt="">
                    <h1>${intern["company_name"]}</h1>
                    <ul class="intern-info">
                        <li><i class="fa fa-user-o" aria-hidden="true"></i> Role :${intern["role"]}</li>
                        <li><i class="fa fa-calendar" aria-hidden="true"></i> ${intern["date"]}</li>
                        <li><a href="${intern["offer_letter"]}"><i class="fa fa-file-text" aria-hidden="true"></i> View Offer Letter</a></li>
                        <li><a href="${intern["completion_letter"]}"><i class="fa fa-check-circle-o" aria-hidden="true"></i> View Completion Letter</a></li>
                        <li><a href="${intern["company"]}"><i class="fa fa-external-link" aria-hidden="true"></i> About Company </a></li>
                    </ul>
                </div>
          </div>
    `
    internship_carousel.innerHTML+=elem
}


// -----------------------------project section--------------------------------------

let project_carousel=document.querySelector(".project-carousel")

let myProject=[

    {
        "title":"githubprofileviewer",
        "src":"https://github.com/Gokul-ram-j/campus-coder",
        "desc":"GITHUB PROFILE VIEWER",
        "active":false
    },
    {
        "title":"currencyexchange",
        "src":"https://github.com/Gokul-ram-j/TechnoHacks-EduTech/tree/main/currency%20converter",
        "desc":"CURRENCY CONVERSION",
        "active":false
    },
    {
        "title":"weathercasting",
        "src":"https://github.com/Gokul-ram-j/Bharat-Intern/tree/main/weather%20web%20app",
        "desc":" WEATHER CASTING",
        "active":false
    },
    {
        "title":"expensetracker",
        "src":"https://github.com/Gokul-ram-j/learnsmasher/tree/main/expensetracker",
        "desc":"EXPENSE TRACKER",
        "active":false
    },
    {
        "title":"recipebook",
        "src":"https://github.com/Gokul-ram-j/Tech-A-Intern/tree/main/recipe%20book",
        "desc":"RECIPE BOOK",
        "active":true
    }
]

for(proj of myProject){
    let elem=
    `
    
    <div class="carousel-item  ${proj["active"]?"active":""}">
    <div class="project-details d-block w-100">
        <img src="./assert/${proj["title"]}.png" alt="">
        <p><a href="${proj["src"]}">${proj["desc"]} <i class="fa fa-external-link" aria-hidden="true"></i></a></p>
    </div>
    </div>
    `
    project_carousel.innerHTML+=elem
}


// ---------------------------------------------------------------

