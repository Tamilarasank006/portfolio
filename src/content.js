import project1 from "/project1.png";
import project2 from "/project2.jpg";
import logo from "/logo.jpg";

const skills = [
        {
            name: "HTML",
           
            image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
        },
        {
            name: "CSS",
          
            image: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
        },
        {
            name: "JavaScript",
           
            image: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
        },
        {
            name: "React",
           
            image: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
        },
        {
            name: "Tailwind",
           
            image: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
        },
        {
            name: "Git",
            
            image: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
        },
        {
            name: "GitHub",
           
            image: "https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
        },
        {
            name: "Responsive",
            
            image: "https://img.icons8.com/?size=100&id=32313&format=png&color=000000"
        },
    ];

    const getSkills = () => {
    return skills;
}
    export { getSkills };

     const projects =[
        {

            id:1,
            title:"Portfolio",
            description:"Created a digital platform to showcase an individual's work, skills and experience..",
            image: project1,
            git:"https://tamilarasank006.github.io/portfolio/"
        },
        {
            id:2,
            title:"E-commerce",
            description:"E-Commerce application comes with multiple features like login/sign in, product lists, discount offers, cart items.",
            image: project2,
            git:""
        },
        {
            id:3,
            title:"landing page",
            description:"the product landing page to showcase the products in digital platform.",
            image: logo,
            git:""
        }
    ]
     
const getProjects = () => {
    return projects;
}
export { getProjects };