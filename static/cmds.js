const linkedin = "https://www.linkedin.com/in/brian-nguyen-a75744240/";
const github = "https://github.com/briancoco";
const resumeLink = "./assets/resume.pdf";

const help = [
  "<br>",
  '<span class="command">whois</span>          Who is Brian Nguyen?',
  '<span class="command">resume</span>         Display resume',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">email</span>          Do not email me (just joking 0-0)',
  '<span class="command">clear</span>          Clear terminal',
  "<br>",
];

const whois = [
  "<br>",
  "Hey, I'm Brian Nguyen!👋",
  "I'm a software developer and student at Texas A&M University.",
  "In my free time, I like to build web applications like the one you're on now",
  "and expand my knowledge by learning more about the nitty gritty details",
  "that allow the abstractions we use today to function.",
  "If I'm not coding, you can probably catch me at the skatepark trying to learn new tricks",
  "or at the gym, trying to get swole😎.",
  "Whatever it is, I'm always trying to keep busy and better myself so that I can be",
  "the best version of myself each and every day.",
  "<br>",
];

const resume = [
  "<br>",
  `Here's my <a href=${resumeLink}>resume</a> where you can see`,
  "my education, work experience, and personal projects. :)",
  "<br>",
];

const projects = [
  "<br>",
  "<span class=command>RevTube</span>",
  "<br>",
  "Full-stack web application made for Aggie to share what's going on around campus.",
  "More formally, it is a secure video streaming platform allowing for",
  "streaming of content, content uploads, and secure user authentiation utlizing",
  "hashing, salting, and peppering of user data",
  "<img class=project-picture src=./assets/revtube-demo.gif>",
  "<br>",
  "<span class=command>Spotisky</span>",
  "<br>",
  "Inspired by other applications like Spotify Wrapped and Spotify GetReadyWithMusic,",
  "Spotisky is a web applcation that gives users personalized horoscopes based on their top",
  "Spotify data. This application uses Spotify API to authenticate and pull user's top listening data,",
  "and an algorithm to determine user's horoscopes based on metrics such as",
  "danceability, energy, tempo, and loudness.",
  "<img class=project-picture src=./assets/spotisky.png>",
  "<br>",
  "<span class=command>Seam Carving</span>",
  "<br>",
  "Command line interface program for content-aware image resizing utilize the seam carving method",
  "to reduce image disfiguration. Works by using the dual gradient energy function to identify and remove unimportant pixels",
  "to match user's specified dimensions. Utilizes OOP and File IO to read and accurately represent",
  "image's pixels.",
  "<img class=project-picture src=./assets/carving-demo.gif>",
  "<br>",
  "<span class=command>Skribbl Clone</span>",
  "<br>",
  "Full-stack clone of the popular online drawing and guessing game, Skribbl.",
  "Utilizes HTML's Canvas API to integrate drawing board into the UI and WebSockets",
  "to allow for open communication between client and server, allowing drawings and game",
  "data to be conveyed in real-time.",
  "<img class=project-picture src=./assets/skribbl.gif>",
  "<br>"
];

const social = [
  "<br>",
  "Here are my social media accounts!",
  " I'm always looking to connect with ambitious, like-minded people.",
  "<br>",
  `<span class=command>linkedin</span>       <a href=${linkedin}>linkedin/briannguyen</a>`,
  `<span class=command>github</span>         <a href=${github}>github/briancoco</a>`,
  "</br>",
];

const email = [
  "<br>",
  "Here's my email! Please contact me about any professional opportunites :)",
  "<br>",
  "<span class=command>briancoco@tamu.edu</span>",
  "<br>"
];

const banner = [
  "Briancoco (BC) Not A Corporation. All rights reserved.",
  '<span class=command>  ____       _               _   _                              </span>',
  '<span class=command> |  _ \\     (_)             | \\ | |                             </span>',
  '<span class=command> | |_) |_ __ _  __ _ _ __   |  \\| | __ _ _   _ _   _  ___ _ __  </span>',
  "<span class=command> |  _ <| '__| |/ _` | '_ \\  | . ` |/ _` | | | | | | |/ _ \\ '_ \\ </span>",
  "<span class=command> | |_) | |  | | (_| | | | | | |\\  | (_| | |_| | |_| |  __/ | | |</span>",
  '<span class=command> |____/|_|  |_|\\__,_|_| |_| |_| \\_|\\__, |\\__,_|\\__, |\\___|_| |_|</span>',
  "<span class=command>                                    __/ |       __/ |           </span>",
  "<span class=command>                                   |___/       |___/            </span>"
]

const header = [
  "<br>",
  "Welcome to my portfolio web terminal.",
  "For a list of available commands, type <span class=command>'help'</span>",
  "<br>"
  
]