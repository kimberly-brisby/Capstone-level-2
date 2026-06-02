const obstaclesArray = ["Time: There seems to be never enough time to teach, grade, and just be a family, you have to find the right schedule.",
       "Financial and public resource loss: You are at risk of loosing after-school programs, special education resources, and even money when you decide to homeschool, so look for free and discounted resources, and which school teams allow homeschool children to play.",
      "Burnout: Yes even you as a homeschool parent will experience burnout from the stress an emotional fatigue like in any other profession, take breaks, learn to breathe through it, plan to have unplanned outings.",
      "Socialization: Yes while it can be great to target who you deem is right for you child(ren) it can rob them of important interactions, they can miss out on learning true problem solving skills from those that will push thier values and ways of."];
const benefitsArray = ["Flexibale learning envrionment: The freedom to learn how you please from hours, days, or evenn the stucture.",
      "The change of the pace: It is easier to pace your child(ren) acadaimic growth, you dicide when it is best to stay on a subject longer or move to the next.", 
        "Envrionment: This could free the stigma for a bully, distraction, or peer pressure free safe place.",
       "Targeted Social groups: you can set up inter-actions with like minded community, you become incontrol of peer groups and outings."];

    //    I want the loop to flip over like a flashcard

    //    function flipContentLists(){
    //     const obstacles = document.getElementById(obstacles-container);
    //     const benefits = document.getElementById(benefits-container);
    //     console.log(hi);

    //     for (let i = 0; i < obstaclesArray.length; i++){
    //     const card = document.createCard("obstacles")
    //     card.className ="info-card obstacles-card";
    //     card.textContent = obstaclesArray[i];
    //     obstacles-Container.appendChild(card);
    //    }

    //    for (let j = 0; j < benefitsArray.length; j++){
    //     const card = document.createCard("benefits")
    //     card.className ="info-card benefits-card";
    //     card.textContent = benefitsArray[i];
    //     benefits-Container.appendChild(card);
    //    }

    //    renderContentLists();

    //    };
       
    //    if they correctly enter a email they can unlock resource page

const form = document.querySelector("#newsletter");
form.onsubmit = handleSubmit;

// const savedInfoString = localStorage.getItem("#userInfoString");

// const savedInfo = JSON.parse(savedInfoString);
// const output = document.querySelector("output");
// console.log("hi")

async function handleSubmit(event){
    event.preventDefault();
    const form = event.target;

    const userData = {
        username: form.elements.username.value,
        email: form.elements.email.value,
    };
    console.log(userData);
    // add user info to local storage
  localStorage.setItem("userName","userData.username");
  localStorage.setItem("userEmail","userData.email");
    // const dataString = JSON.stringify(data);
}
    // const response = await fetch("https://dummyjson.com/auth/login",{
//    method: "POST",

//    headers: {"Content-Type": "application/json" },
//    body: dataString,

    // const result = await response.json();
    // const message = result.message;
    // const userInfo = {
    //     firstName: result.firstName,
    //     email: result.email,
    // };

    // output.innerText = "You have Successfully joined, " + savedInfo.firstName + "!";

    // const userInfoString = JSON.stringify(userInfo);
    // localStorage.setItem("userInfoString", userInfoString);
     
// }

// const isChecked = form.elements.ischecked.checked

// if(isChecked){
//     checkbox.innerHtml = <a href="Resources.html">Resources</a>
    
// } else{
//     innerText = "Enter valid email"
// }
// const form = document.querySelector(#form)

// const dataString = new URLSearchParams(data);
// const response = await fetch("https://fastudy.app/learning-style-test");
// const result = await response.json();
// console.log(result);

// const output = document.getElementById("output");
// outut.innerText = "" + "is how I l";p