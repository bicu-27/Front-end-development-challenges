/*
const testimonials = [
    {
        name:"cherise G",
        photoUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text:"I would also like to say thank you to all your staff.Wow what great service, I love it!  apple  impressed me on all levels."

    },
    {
        name:"Lydia K",
        photoUrl:"https://i.pinimg.com/736x/2a/9e/59/2a9e591ea91f24125540d956c87ab451.jpg",
        text:"God has been my strength in every challenge, my light in every darkness, and my peace in every storm. His love has never failed me, and His grace continues to guide my path. All glory to Him forever! 🙏✨"
        
    },
    {
        name: "Kebede M",
        photoUrl:"https://i.pinimg.com/236x/d1/9f/e8/d19fe87b14d2a81e56a021beeea720e2.jpg",
        text:"My father has been my guide, teaching me strength, wisdom, and perseverance."

    },
    {
        name:"Netsanet A",
        photoUrl:"https://i.pinimg.com/236x/e6/a1/4f/e6a14f14e36301a4ebc3fa3767bb3395.jpg",
        text:"My mother’s love and kindness have shaped me into who I am today. I am forever grateful for them both. ❤️"
    }
    

];
const image = document.querySelector("img");
const texts = document.querySelector(".text");
const username = document.querySelector(".username");
let index = 0;
updateTestimonial();
function updateTestimonial(){
    const {name,photoUrl,text} = testimonials(index);
    images.src=photoUrl;
    texts.innerHTML = text;
    username.innerText = name;
    index++;
    if (index === testimonials.length){
        index = 0;

    }
    setTimeout(()=>{
        updateTestimonial();
    },10000)
}
 */

const testimonials = [
    {
        name: "cherise G",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I would also like to say thank you to all your staff. Wow, what great service! I love it! Apple impressed me on all levels."
    },
    {
        name: "Lydia K",
        photoUrl: "https://i.pinimg.com/736x/2a/9e/59/2a9e591ea91f24125540d956c87ab451.jpg",
        text: "God has been my strength in every challenge, my light in every darkness, and my peace in every storm. His love has never failed me, and His grace continues to guide my path. All glory to Him forever! 🙏✨"
    },
    {
        name: "Kebede M",
        photoUrl: "https://i.pinimg.com/236x/d1/9f/e8/d19fe87b14d2a81e56a021beeea720e2.jpg",
        text: "My father has been my guide, teaching me strength, wisdom, and perseverance."
    },
    {
        name: "Netsanet A",
        photoUrl: "https://i.pinimg.com/736x/3e/e6/0d/3ee60daf615fed89180c5675aff3fa15.jpg",
        text: "My mother’s love and kindness have shaped me into who I am today. I am forever grateful for them both. ❤️"
    }
];

const image = document.querySelector("img");
const texts = document.querySelector(".text");
const username = document.querySelector(".username");
let index = 0;

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[index];

    if (image) image.src = photoUrl;
    if (texts) texts.innerHTML = text;
    if (username) username.innerText = name;

    index++;
    if (index === testimonials.length) {
        index = 0;
    }

    setTimeout(updateTestimonial, 10000);
}

updateTestimonial();
