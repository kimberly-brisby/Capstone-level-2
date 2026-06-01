const obstacles = ["Time: There seems to be never enough time to teach, grade, and just be a family, you have to find the right schedule.",
       "Financial and public resource loss: You are at risk of loosing after-school programs, special education resources, and even money when you decide to homeschool, so look for free and discounted resources, and which school teams allow homeschool children to play.",
      "Burnout: Yes even you as a homeschool parent will experience burnout from the stress an emotional fatigue like in any other profession, take breaks, learn to breathe through it, plan to have unplanned outings.",
      "Socialization: Yes while it can be great to target who you deem is right for you child(ren) it can rob them of important interactions, they can miss out on learning true problem solving skills from those that will push thier values and ways of."];
const benefits = ["Flexibale learning envrionment: The freedom to learn how you please from hours, days, or evenn the stucture.",
      "The change of the pace: It is easier to pace your child(ren) acadaimic growth, you dicide when it is best to stay on a subject longer or move to the next.", 
        "Envrionment: This could free the stigma for a bully, distraction, or peer pressure free safe place.",
       "Targeted Social groups: you can set up inter-actions with like minded community, you become incontrol of peer groups and outings."];

    //    the loop is like a flashcard for card element

    //    function runContentLists(){
    //     const obstacles = document.getElementById(obstacles-container);
    //     const benefits = document.getElementById(benefits-container);
    //     console.log(hi);

    //     for (let i = 0; i < obstacles.clientHeight; i++);
    //     const cardElement = document.createElement("obstacles")
    //    }
       
const form = document.querySelector("#newsletter");
form.onsubmit =handleSubmit;

const savedInfoString = localStorage.getItem("#userInfoString");
const savedInfo = JSON.parse(savedInfoString);
const output = document.querySelector("output");
output.innerText = "You have Successfully joined, " + savedInfo.firstName + "!";

async function handleSubmit(event){
    event.preventDefault();
    const form = event.target;

    const data = {
        username: form.elements.username.value,
        email: form.elements.email.value,
    };

    const dataString = JSON.stringify(data);
    const response = await fetch("https://dummyjson.com/auth/login",{
   method: "POST",
   headers: {"Content-Type": "application/json" },
   body: dataString,
});
    const result = await response.json();
    const message = result.message;
    const userInfo = {
        firstName: result.firstName,
        email: result.email,
    };

    output.innerText = "You have Successfully joined, " + savedInfo.firstName + "!";

    const userInfoString = JSON.stringify(userInfo);
    localStorage.setItem("userInfoString", userInfoString);
     
}