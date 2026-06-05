const obstaclesArray = ["OBSTACLES", "Time: There seems to be never enough time to teach, grade, and just be a family, you have to find the right schedule.",
       "Financial and public resource loss: You are at risk of loosing after-school programs, special education resources, and even money when you decide to homeschool, so look for free and discounted resources, and which school teams allow homeschool children to play.",
      "Burnout: Yes even you as a homeschool parent will experience burnout from the stress an emotional fatigue like in any other profession, take breaks, learn to breathe through it, plan to have unplanned outings.",
      "Socialization: Yes while it can be great to target who you deem is right for you child(ren) it can rob them of important interactions, they can miss out on learning true problem solving skills from those that will push thier values and ways of."];
const benefitsArray = ["BENEFITS","Flexibale learning envrionment: The freedom to learn how you please from hours, days, or evenn the stucture.",
      "The change of the pace: It is easier to pace your child(ren) acadaimic growth, you dicide when it is best to stay on a subject longer or move to the next.", 
        "Envrionment: This could free the stigma for a bully, distraction, or peer pressure free safe place.",
       "Targeted Social groups: you can set up inter-actions with like minded community, you become incontrol of peer groups and outings."];

    //    I want the loop to flip over like a flashcard


const form = document.querySelector("#newsletter");

form.onsubmit = handleSubmit;
const output = document.getElementById("output");

function handleSubmit(event){
    event.preventDefault();
    const form = event.target;

    const userData = {
        firstname: form.elements.firstname.value,
        email: form.elements.email.value,
    };
    console.log(userData);
    // add user info to local storage
//   localStorage.setItem("userName","userData.username");
//   localStorage.setItem("userEmail","userData.email");
localStorage.setItem("userData", JSON.stringify(userData));
const storedUserData = localStorage.getItem("userData");
// console.log(storedUserData);

if(storedUserData){
    const userData = JSON.parse(storedUserData);
     output.innerText = "You have successfully joined, " + userData.firstname + "!";  
}else {
     output.innerText = "Enter a valid email address."
}

};
    
const formTag = document.getElementById("affrimForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event){
    event.preventDefault();
    const form = event.target;

    const data = {"api-key": cb612559bbf74a23a8917dfff4cdbb96};
    
    const queryString = new URLSearchParams(data);
    const response = await fetch("https://www.affirmations.dev/" + queryString);
    const result = await response.json();
    const affirmation = result.affirmation;
    const src = result.url;
    console.log(affirmation);


    const outputTag = document.getElementById("affrimation");
    outputTag.innerText = affirmation;
}
console.log("affrim");