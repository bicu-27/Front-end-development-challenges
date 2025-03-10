const testimonials = [
    {
        name: "Peter Durury",
        photoUrl: "https://i.pinimg.com/236x/92/c6/61/92c6617f9891268ca9dc2f2f67bbf91e.jpg" ,
        text: "Lionel Messi has shaken hand with paradise.The little boy from rosarion sant fe. He has just pitched up in heaven.He climbs into the galaxy of it's own. He has his crowning moment."
    },
    {
        name: "Pep Guardiola", 
        photoUrl: "https://i.pinimg.com/474x/c2/ed/b5/c2edb55cbf1d2cef17374dc58d28e133.jpg",
        text: "If you have messi on your team.Messi is number ten, Messi is number nine, Messi is number seven, Messi is number six, Messi is number five, Messi is number four, Messi is number three , Messi is number two and Messi is number one.He can fill any football positions"
    },
    {
        name: "Fàbregas S.",
        photoUrl: "https://i.pinimg.com/236x/b2/7a/3d/b27a3d782c1bca14168151893360cd80.jpg",
        text: "I have never seen anything like this. He was taking on players that with so much ease they had to follow him.It is so hard to stop him"
    },
    {
        name: "Cristiano R.",
        photoUrl: "https://i.pinimg.com/736x/15/22/bd/1522bd9343810cfe0479024e2b411017.jpg",
        text: "Messi is a fantastic guy. He is also fantastic player in history of football."


    },
    {
        name: "Frank  L.",
        photoUrl: "https://i.pinimg.com/236x/08/a9/e5/08a9e5f3126aca95df4dc072aeb556cc.jpg",
        text: "I think for me Lionel Messi is the best not just of this era.But of every era.I love his humility for me .For me every year messi desereve to win ballond'or"


    },
    {
        name: "Zlatan I.",
        photoUrl: "https://i.pinimg.com/474x/b1/0f/ea/b10feae9c3296b1720c84d3c8b1ea439.jpg",
        text: "Messi is unique. What he does, I don’t know if we will see another player do the things that he does because he has his style, and it is impossible to copy."


    }
    
    
    
];

document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector("img");
    const texts = document.querySelector(".text");
    const username = document.querySelector(".user-name");
    let index = 0;

    function updateTestimonial() {
        const { name, photoUrl, text } = testimonials[index];

        if (image) image.src = photoUrl;
        if (texts) texts.innerHTML = text;
        if (username) username.textContent = name; // Changed innerText to textContent (more reliable)

        index = (index + 1) % testimonials.length; 

        setTimeout(updateTestimonial, 3000);
    }

    updateTestimonial();
});
