//____________________________________________NAVBAR_____________________________________________
// menu
const list = ["Home", "About", "Projects", "Contact"];
// div parent
const nav = document.getElementById('nav');
// logo de menu ☰
const logo = document.createElement('img');
logo.className = 'logo';
logo.src = 'open-menu (1).png';
nav.appendChild(logo);
// logo de menu X
const logoo = document.createElement('img')
logoo.className = 'logoo';
logoo.src = 'delete.png';
nav.appendChild(logoo);
// fonction transformaton logo menu
logo.addEventListener('click', () =>{
    logo.src = (logo.src.includes('delete.png')) ? 'open-menu (1).png' : 'delete.png';
});
// img
const img = document.createElement('img');
img.src = '000.jpg';
img.className = 'img';
nav.appendChild(img);
// name
const MOnName = document.createElement('span');
MOnName.className = 'MOnName';
MOnName.innerHTML = `
<span style="color:#D10121">M</span>ohamed <span style="color:#D10121">A</span>ddakkaki`;
nav.appendChild(MOnName);
// add ul
const UlMenu = document.createElement('ul');
UlMenu.className = 'UlMenu';
// add Li
list.forEach(retation => {
        const liMenu = document.createElement('li');
        liMenu.className = 'liMenu';
// add a
        const link = document.createElement('a');
        link.className = "link"
        link.textContent = retation;
        link.href = "#" + retation.toLowerCase()
        liMenu.appendChild(link);
        UlMenu.appendChild(liMenu);
});
nav.appendChild(UlMenu);

// Home
const Home = document.getElementById('Home');
// video & source
const video = document.createElement('video');
video.autoplay = true;
video.muted = true;
video.loop = true;
video.playsInline = true; 
video.className = 'video';
const source = document.createElement('source');
source.src = 'Plexus_Background_White.mp4';
source.type = 'video/mp4';
video.appendChild(source);
// ajouter video en Home
Home.appendChild(video);
//foction de logo de menu
// party 1
const mediaQuery = window.matchMedia("(max-width : 600px)");
//party 2
let menuState = 'none';
UlMenu.style.display = menuState;
//party 3 event click
logo.addEventListener('click',() => {
    if (mediaQuery.matches) {
        menuState = (menuState === 'none') ? 'block' : 'none';
        UlMenu.style.display = menuState;
    } else {
        UlMenu.style.display = 'block';
    }
});
//party 4 مراقبة تغيير حجم الشاشة
mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        // دخلنا فالموبايل
        UlMenu.style.display = 'none';
        logo.style.display = 'block';
        menuState = 'none';
    } else {
        // خرجنا من الموبايل
        UlMenu.style.display = 'flex'; // المينيو كتبان
        logo.style.display = 'none';   // الزر يخبا
    }
});
//__________________________________________________Home_________________________________________________________
// appel element
const hero_content = document.querySelector('.home');
// creat titale
const title_content = document.createElement('h1');
title_content.className = 'title_content';
title_content.innerHTML = "HEY, MY NAME IS " +MOnName.innerHTML;
hero_content.appendChild(title_content);
// creat content
const content = document.createElement('p');
content.className = 'content';
content.innerHTML = "I’m a passionate web developer dedicated to crafting modern, elegant, and high-performance websites. My goal is to build fast, responsive, and intuitive digital experiences that make the web a better place for everyone.";
hero_content.appendChild(content);
// creat button de project
const button_pr = document.createElement('a');
button_pr.className = 'button_pr';
button_pr.innerHTML = 'PROJECTS';
hero_content.appendChild(button_pr);
//_________________________________________________about__________________________________________________________
// appel element
const about = document.querySelector('.about_1')
// creat title
const title_about = document.createElement("h2");
title_about.className = "title_about";
title_about.innerHTML = 'ABOUT ME';
about_1.appendChild(title_about);
// creat content
const content_about = document.createElement('p');
content_about.className = "content_about";
content_about.innerHTML = "I’m <b> "+MOnName.innerHTML+"</b>, a passionate <b>Full Stack Web Developer</b> from Tangier, Morocco. With experience <b>in Python, PHP, JavaScript, and modern web frameworks</b>, I focus on building responsive, clean, and efficient web applications. I love combining <b>creativity and technical precision</b> to turn ideas into digital solutions that truly work.";
about_1.appendChild(content_about);
// creat div about_900px for pc
const about_2 = document.querySelector('.about_2');
const about_3 = document.querySelector('.about_3');
// creat title get to know me
const title_get_to_know_me = document.createElement('h2');
title_get_to_know_me.className = 'title_get_to_know_me';
title_get_to_know_me.innerHTML = 'Get to Know Me';
about_2.appendChild(title_get_to_know_me);
// creat content get to know me 
const content_get_to_know_me = document.createElement('p');
content_get_to_know_me.className = 'content_get_to_know_me';
content_get_to_know_me.innerHTML = "Hey! I’m <strong>Mohamed</strong>, a curious mind and a lifelong learner.I’ve worked on freelance and remote projects, collaborated with great teams, and helped create user-friendly web experiences for different audiences.Outside of coding, you’ll probably find me playing football, exploring new places, or learning something new about technology.Let’s connect and build something awesome together!"
about_2.appendChild(content_get_to_know_me);
// creat button contact
const button_contact = document.createElement('a');
button_contact.className = 'button_contact';
button_contact.innerHTML = 'CONTACT';
about_2.appendChild(button_contact);
// creat title skils
const title_skils = document.createElement('h2');
title_skils.className = "title_skils";
title_skils.innerHTML = 'My Skills';
about_3.appendChild(title_skils);
// creat skils 
const skils = document.createElement('p');
skils.className = 'skils';
skils.innerHTML = '<em>HTML</em> <em>CSS</em> <em>JavaScript</em> <em>Python</em> <em>PHP</em> <em>C</em> <em>Bootstrap</em> <em>Tailwind</em> <em>SASS</em> <em>Vue.js</em> <em>WordPrees </em>';
about_3.appendChild(skils);
//____________________________________________________________________projects___________________________________________________________________
// appel element
const text_project = document.querySelector('.text_project');

const project_1 = document.querySelector('.project_1');
const project_2 = document.querySelector('.project_2');
const project_3 = document.querySelector('.project_3');

const photo_1 = document.querySelector('.photo_1');
const photo_2 = document.querySelector('.photo_2');
const photo_3 = document.querySelector('.photo_3');

const about_project_1 = document.querySelector('.about_project_1');
const about_project_2 = document.querySelector('.about_project_2');
const about_project_3 = document.querySelector('.about_project_3');


// creat title projects
const title_projects = document.createElement('h1');
title_projects.className = 'title_projects';
title_projects.innerHTML = 'PROJECTS';
text_project.appendChild(title_projects);
// text about projects
const text_about_projects = document.createElement('p');
text_about_projects.className = 'text_about_projects';
text_about_projects.innerHTML = 'Explore some of the projects I’ve worked on — each one built with passion, precision, and clean code.'
text_project.appendChild(text_about_projects);

// creat img project_1
const img_project_1 = document.createElement('img');
img_project_1.src = 'project-mockup-example-removebg-preview.png';
img_project_1.className = 'img_project_1';
photo_1.appendChild(img_project_1);
// creat title project 1
const title_project_1 = document.createElement('h3');
title_project_1.className = 'title_project_1';
title_project_1.innerHTML = 'Project 1'
about_project_1.appendChild(title_project_1);
// creat project details
const project_detail_1 = document.createElement('p');
project_detail_1.className = 'project_detail_1';
project_detail_1.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora, explicabo quae quod deserunt eius sapiente praesentium.';
about_project_1.appendChild(project_detail_1);
// creat button project 1
const button_project_1 = document.createElement('a');
button_project_1.className = 'button_project_1';
button_project_1.innerHTML = 'CASE STUDY';
about_project_1.appendChild(button_project_1);

// creat img project_2
const img_project_2 = document.createElement('img');
img_project_2.src = 'project-mockup-example-removebg-preview.png';
img_project_2.className = 'img_project_2';
photo_2.appendChild(img_project_2);
// creat title project 1
const title_project_2 = document.createElement('h3');
title_project_2.className = 'title_project_2';
title_project_2.innerHTML = 'Project 2'
about_project_2.appendChild(title_project_2);
// creat project details
const project_detail_2 = document.createElement('p');
project_detail_2.className = 'project_detail_2';
project_detail_2.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora, explicabo quae quod deserunt eius sapiente praesentium.';
about_project_2.appendChild(project_detail_2);
// creat button project 2
const button_project_2 = document.createElement('a');
button_project_2.className = 'button_project_2';
button_project_2.innerHTML = 'CASE STUDY';
about_project_2.appendChild(button_project_2);

// creat img project_3
const img_project_3 = document.createElement('img');
img_project_3.src = 'project-mockup-example-removebg-preview.png';
img_project_3.className = 'img_project_3';
photo_3.appendChild(img_project_3);
// creat title project 1
const title_project_3 = document.createElement('h3');
title_project_3.className = 'title_project_3';
title_project_3.innerHTML = 'Project 3'
about_project_3.appendChild(title_project_3);
// creat project details
const project_detail_3 = document.createElement('p');
project_detail_3.className = 'project_detail_3';
project_detail_3.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora, explicabo quae quod deserunt eius sapiente praesentium.';
about_project_3.appendChild(project_detail_3);
// creat button project 3
const button_project_3 = document.createElement('a');
button_project_3.className = 'button_project_3';
button_project_3.innerHTML = 'CASE STUDY';
about_project_3.appendChild(button_project_3);

// function repit video
function createVideo() {
  const video = document.createElement('video');
  video.src = "Plexus_Background_White.mp4";
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.classList.add('myVideo');
  return video;
}
window.onload = () => {
  document.querySelector('.contact_me').appendChild(createVideo());
};

// creat contact
const contact = document.querySelector('.contact_me')
// creat title contact
const title_contact = document.createElement('h1');
title_contact.className = 'title_contact';
title_contact.innerHTML = 'CONTACT';
contact.appendChild(title_contact);
// text about projects
const text_about_contact = document.createElement('p');
text_about_contact.className = 'text_about_contact';
text_about_contact.innerHTML = 'Explore some of the projects I’ve worked on — each one built with passion, precision, and clean code.'
contact.appendChild(text_about_contact);
// creat form
const form = document.createElement('form');
form.className = 'form';
form.action = 'https://formspree.io/f/xjkpbkkg';
form.method = 'POST';
// creat title input your name 
const title_name = document.createElement('span');
title_name.className = "title_name";
title_name.innerHTML = "Name"
form.appendChild(title_name);
// creat input name
const inp_name = document.createElement('input');
inp_name.className = "inp_name";
inp_name.type = 'text';
inp_name.name = 'name';
inp_name.placeholder = 'Enter Your Name';
form.appendChild(inp_name);
// creat title email
const title_email = document.createElement('span');
title_email.className = "title_email";
title_email.innerHTML = "Email";
form.appendChild(title_email);
// creat input email
const inp_email = document.createElement('input');
inp_email.className = "inp_email";
inp_email.type = "email";
inp_email.name = "email";
inp_email.placeholder = "Enter Your Email";
form.appendChild(inp_email);
// creat title message
const title_message = document.createElement('span');
title_message.className = "title_message";
title_message.innerHTML = "Message";
form.appendChild(title_message);
// creat input message
const inp_message = document.createElement('textarea');
inp_message.type = 'text';
inp_message.name = 'message';
inp_message.placeholder = 'Enter Your Message';
inp_message.className = "inp_message";
form.appendChild(inp_message);
// creat button contact
const button_send_me = document.createElement('button');
button_send_me.className = 'button_send_me';
button_send_me.type = 'submit';
button_send_me.innerHTML = 'SUBMET';
form.appendChild(button_send_me);
// add form to contact
contact.appendChild(form);

//____________________________________________________________________footer___________________________________________________________________

//appel element
const main_footer = document.querySelector('.main_footer');
const footer_about_me = document.querySelector('.footer_about_me');
const footer_social = document.querySelector('.footer_social');
const copyright = document.querySelector('.copyright');
//creat about me footer
const name_footer = document.createElement('h3')
name_footer.className = 'name_footer';
name_footer.innerHTML = MOnName.innerHTML;
footer_about_me.appendChild(name_footer);
//creat content footer
const content_footer = document.createElement('p'); 
content_footer.className = 'content_footer';
content_footer.innerHTML = 'I build fast, responsive, and user-friendly websites with modern technologies.';
footer_about_me.appendChild(content_footer);
//creat title social
const title_social = document.createElement('h3');
title_social.className = 'title_social';
title_social.innerHTML = 'SOCIAL';
footer_social.appendChild(title_social);
//creat icons 
//github
const github = document.createElement('i');
github.className = "github fa-brands fa-github";
footer_social.appendChild(github)
//linkdlin
const linkdlin = document.createElement('i');
linkdlin.className = 'linkdlin fa-brands fa-linkedin-in';
footer_social.appendChild(linkdlin);
//telegram
const telegram = document.createElement('i');
telegram.className = 'telegram fa-brands fa-telegram';
footer_social.appendChild(telegram);
//whatsap
const whatsap = document.createElement('i');
whatsap.className = 'whatsap fa-brands fa-whatsapp';
footer_social.appendChild(whatsap);
//creat copyright 
const copyrightt = document.createElement('p');
copyrightt.className = 'copyrightt';
copyrightt.innerHTML = '© Copyright 2025. Made by' +MOnName.innerHTML;
copyright.appendChild(copyrightt);