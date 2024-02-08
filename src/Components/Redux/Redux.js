import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:"admin-dashboard",
    initialState:{
        Admin:[{
            adminUsername:'krishna',
            adminPassword:'123'
        }],
        usersArray:[],
        AdminLogin:"",
        userLogin:[],
        timelineArray:[
            {
                title:'2024 Frontend Roadmap',
                TimeLineCharts:[
                            {
                                heading:"Html",
                                image:"https://www.shutterstock.com/image-photo/html-inscription-against-laptop-code-260nw-1851522412.jpg",
                                textareaCnt:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
                                status: 'not started'
                            },
                            {
                                heading:"Css",
                                image:"https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png",
                                textareaCnt:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
                                status:"not started'"
                            },
                            {
                                heading:"Sass",
                                image:"https://uploads.sitepoint.com/wp-content/uploads/2013/03/1501598563featured-getting-started-sass.jpg",
                                textareaCnt:"Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects",
                                status:"not started'"
                            },
                            {
                                heading:"Bootstrap",
                                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsX5atOR9Defm5JgkzMGWMVw7DNrbFTMOsQ&usqp=CAU",
                                textareaCnt:"Bootstrap is an HTML, CSS and JS library that focuses on simplifying the development of informative web pages (as opposed to web applications). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project.",
                                status:"not started'"
                            },
                            {
                                heading:"Tailwind",
                                image:"https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png",
                                textareaCnt:"Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of 'utility' CSS classes that can be used to style each element by mixing and matching",
                                status:"not started'"
                            },
                            {
                                heading:"Javascrit",
                                image:"https://dev-updates-uploads.s3.ap-south-1.amazonaws.com/1696168910152-Why%20JavaScript%20is%20Popular.jpg",
                                textareaCnt:"JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
                                status:"not started'"
                            },
                            {
                                heading:"TypeScript",
                                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHlajw0HzGzCzM_t6p6itMenwO2CzPZq9L4qshEmDYculDHiK6Z1x59mcpVUCgjusaqs&usqp=CAU",
                                textareaCnt:"TypeScript extends JavaScript and enhances the developer experience. It helps software developers add type safety to their projects and provides features like type aliases, interfaces, abstract classes, encapsulation, inheritance, and function overloading.",
                                status:"not started'"
                            },
                            {
                                heading:"React js",
                                image:"https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
                                textareaCnt:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
                                status:"not started'"
                            },
                            {
                                heading:"Angular js",
                                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DuYsoETlLOZqOpytRClmcHHDF7qnPZVDKdsgEnvLvtqyCiq4zcj1OPfYW-h6nQAymkw&usqp=CAU",
                                textareaCnt:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
                                status:"not started'"
                            },
                            {
                                heading:"Vue js",
                                image:"https://images.prismic.io/northcoders/NzIxNjIyM2ItNDY0NC00MWRhLWEzM2UtM2IyZThkM2JhMWNl_vuejs.jpeg?auto=compress%2Cformat&rect=0%2C0%2C1280%2C720&w=800&fit=max&q=60",
                                textareaCnt:"Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
                                status:"not started'"
                            },
                            {
                                heading:"Redux",
                                image:"https://www.pistalix.in/wp-content/uploads/2018/10/redux_centre.png",
                                textareaCnt:"Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable, making it easier to understand the changes happening in your app. But all of these benefits come with a set of challenges",
                                status:"not started"
                            },
                            {
                                heading:"Redux Toolkit",
                                image:"https://www.freecodecamp.org/news/content/images/2023/03/Freecodecamp-Banner.png",
                                textareaCnt:"Redux Toolkit is a set of tools you can use for state management in React in place of Redux. The Redux team created it. Redux Toolkit offers a standardized approach to building Redux code and comes with libraries and tools that make it simpler to create scalable, maintainable, and effective Redux code",
                                status:"not started'"
                            },
                            {
                                heading:"Redux Saga",
                                image:"https://redux-saga.js.org//img/Redux-Saga-Logo-Portrait.png",
                                textareaCnt:"Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations",
                                status:"not started'"
                            },
                            {
                                heading:"Graph QL",
                                image:"https://graphql.org/img/og-image.png",
                                textareaCnt:"GraphQL is an open-source data query and manipulation language for APIs and a query runtime engine. GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API",
                                status:"not started'"
                            },
                            {
                                heading:"Git",
                                image:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/191948265/original/3dcb6660d0eab6eaba4db3a2963b337da9954cf3/help-you-with-git.png",
                                textareaCnt:"Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development.",
                                status:"not started'"
                            },
                            {
                                heading:"Github",
                                image:"https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
                                textareaCnt:"GitHub allows you to create, store, change, merge, and collaborate on files or code. Any member of a team can access the GitHub repository (think of this as a folder for files) and see the most recent version in real-time. Then, they can make edits or changes that the other collaborators also see",
                                status:"not started'"
                            },
                            {
                                heading:"Next js",
                                image:"https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg",
                                textareaCnt:"Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
                                status:"not started'"
                            },
                            {
                                heading:"Node js",
                                image:"https://blog.cdn.cmarix.com/blog/wp-content/uploads/2023/05/ultimate-guide-to-node-js-streams.webp",
                                textareaCnt:"It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.",
                                status:"not started'"
                            },
                            {
                                heading:"Express js",
                                image:"https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png",
                                textareaCnt:"Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.",
                                status:"not started'"
                            },
                            {
                                heading:"Mongo DB",
                                image:"https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
                                textareaCnt:"MongoDB handles the conversion of JSON and JSON-like documents, such as BSON, into Java objects effortlessly, making the reading and writing of data in MongoDB fast and incredibly efficient when analyzing real-time information across multiple development environments.",
                                status:"not started'"
                            },
                            {
                                heading:"Mongo DB Atlas",
                                image:"https://techcrunch.com/wp-content/uploads/2016/06/2016-06-27_1940.png",
                                textareaCnt:"MongoDB Atlas is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP). MongoDB Atlas is the best way to deploy, run, and scale MongoDB in the cloud.",
                                status:"not started'"
                            },
                            {
                                heading:"Mongoose",
                                image:"https://miro.medium.com/v2/resize:fit:1400/1*Wdqpcm8EeHlbfjza-qOgew.png",
                                textareaCnt:"Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.",
                                status:"not started'"
                            },
                            {
                                heading:"CORS policy errors",
                                image:"https://i.ibb.co/Vv46CBc/ASP-NET-Cors-error-fix.png",
                                textareaCnt:"CORS errors happen when a webpage makes a request to a different domain than the one that served the page, and the server responds with an HTTP error because the “Origin” header in the request is not allowed by the server's CORS configuration.",
                                status:"not started'"
                            },
                            {
                                heading:"Package manager",
                                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNrSGHtpML2l6ak9tMDNKCA_IsFd0toqXaNOVT-uoKYyxfSj88vjZAMZ3hIKwxAb3Ekk&usqp=CAU",
                                textareaCnt:"A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer in a consistent manner.",
                                status:"not started'"
                            },
                            {
                                heading:"Mongoose",
                                image:"https://miro.medium.com/v2/resize:fit:1400/1*Wdqpcm8EeHlbfjza-qOgew.png",
                                textareaCnt:"Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.",
                                status:"not started'"
                            }
                        ],
                    performance:0
            }
        ],
        userAccessTimeLineArray:[],
        securityPractices:[
            {
                title:"Preventing cross-site scripting (XSS) attacks",
                therory:"XSS attacks are one of the largest and most dangerous forms of attack. They're crafted in such a way that they inject code into a web application, which ends up performing malicious actions when accessed by an end user. XSS attacks are drawn to a lack of sanitization in a web application's input and output, which can lead to a variety of attacks.",
                typeOfAttacks:[
                    {
                        attackType:"Clickjacking attacks",
                        toPrevent:"Clickjacking attacks rank as one of the largest types of attacks under the XSS attack umbrella, as they're simply performed by replacing legitimate parts of a web page with similar-looking, yet dangerous, elements. For example, checkout buttons can be replaced with buttons redirecting users to fake banking pages, legitimate download buttons can be replaced with buttons resulting in malware downloads, and more."
                    },
                    {
                        attackType:"Geolocation stealing",
                        toPrevent:"With XSS attacks, an attacker can inject JavaScript libraries, which then execute on the client side—logging the user's IP address, geolocation and other personal details. These can then be used by the attacker to target the end user with personalized scams or phishing."
                    },
                    {
                        attackType:"Cryptomining",
                        toPrevent:"With code injected by an XSS attack, cryptomining can be performed on end users' devices as well. While it may already seem to slow down a single device, hundreds or thousands of users visiting a web application every day means crypto mining scripts running on your web application can unknowingly cause not only slowdowns but also heating issues on users' devices. This sort of effect on your web application can lead to a negative experience on their part.Protection against XSS attacks can be achieved by the proper sanitization of inputs made into your web application, as well as by filtering inputs correctly. For example, limiting mobile numbers to digits only or not allowing special characters in names can yield a substantial benefit by preventing most injection attacks on your web application."
                    }
                ],
                videoForSolveThis:"https://youtu.be/tuUMOvuPk0Y?si=mRMhIjhS0PGl3i9e"
            },
            {
                title:"DoS (denial of service) attacks",
                therory:"DoS attacks and DDoS attacks on web applications are common. They're also difficult to deal with, as they use a swarm of compromised systems to make requests to your web application. DoS attacks, which originate from a single system or small number of them, can often be tackled by simply blocking the end system's IP address. DDoS attacks, on the other hand, are more difficult to block. This is because certain DDoS attacks originate from hundreds or thousands of systems at the same time—meaning they also make multiple thousands or millions of requests to your web application simultaneously—leading to system strain and a serious slowdown of your web application. Employing rate-limiting in your web application can prevent these types of attacks. Look to services like CloudFlare or Imperva, or hardware-based solutions; these can filter such attacks before they reach their intended target.",
                videoForSolveThis:"https://youtu.be/tMvNBkpv9Qw?si=KEOcsx_3XdzWvagb"
            },
            {
                title:"Preventing cross-site request forgery (CSRF)",
                therory:"CSRF attacks are aimed at tricking users into submitting forms which end up performing a different action from the one the user wishes to perform.For example, a user is logged into his banking application and browsing the internet at the same time. The user then comes across a Download button which he clicks on, and instead of actually downloading anything for the user, that fateful click transfers funds from the user's bank account to the attacker.CSRF attacks can be prevented by using a token value similar to an md5sum or sha256sum of random characters, which is generated on every page load and passed to a form via HTTP headers, upon the submission of any form.If the header token value is missing or if there is a token mismatch, the action is not performed and the user remains safe..",
                videoForSolveThis:"https://youtu.be/eHqbh0kyRYk?si=YLN6QLuT0kUWFJoy"
            },
            {
                title:"Using Content Security Policy (CSP)",
                therory:"Using Content Security Policy is an effective form of XSS attack prevention. It calls for an HTTP flag which informs your browser about the sources that can be trusted, and included as iFrames within your web application. Any source or URL not mentioned within the Content Security Policy flag is discarded, and will not be included or rendered within an iFrame on your web application. Enabling CSP in your HTTP headers is a worthwhile method of preventing XSS attacks to a large extent. And when combined with X-Frame-Options, it provides a solid defence against XSS attacks in general.",
                videoForSolveThis:"https://youtu.be/eHqbh0kyRYk?si=YLN6QLuT0kUWFJoy"
            },
            {
                title:"Using modern frameworks",
                therory:"Often, web application front ends are built using commonly available frameworks. These frameworks make up the core of your web application's front end, and any security vulnerability within this framework can lead to a compromise of your web application as a whole.Using modern and frequently updated frameworks can help boost your web application's security. These frameworks frequently include built-in authentication handlers and other security features that help standardize the security practises needed for your web application.",
                reference:"https://frontendmastery.com/posts/frontend-security-primer/"
            },
            {
                title:"Auditing of 3rd-party libraries in use",
                therory:"3rd-party libraries are in use everywhere. They help speed up coding time and make implementation of new features into your web application that much easier—but any possible vulnerability in these 3rd-party libraries can impact your web application's overall security as well.For example, many web applications rely on 3rd-party libraries for handling billing and customer purchases. Any vulnerability in these billing libraries can cause multiple security issues in your web application, such as the leaking of user information or redirecting users to phishing domains to capture card details.Keeping track of and scanning 3rd-party libraries manually can often be tricky for large web applications, but online vulnerability scanners exist to help this process along, making it straightforward, automated, and ready to alert you whenever a vulnerability is found."
            },
            {
                title:"Avoiding iFrames where possible",
                therory:"While iFrames make your development process easier by allowing you to incorporate/load other pages/frames in your existing view, iFrames usage is often used without appropriate X-Frame-Options. Unfortunately, this allows for clickjacking attacks and the compromise of your web application's integrity.iFrame-based attacks can be used to play videos, open malicious forms (which look legitimate), and trick users into downloading malicious content that can lead to a degraded overall experience of your web application.",
                reference:"https://www.reflectiz.com/blog/iframe-security/"
            },
            {
                title:"Restricting available Feature Policy",
                therory:"By default, your web application can access or request any feature from your end user's device—while this may be a nice-to-have during the development stage, if left enabled it can lead to attackers exploiting your web application and using these unrestricted feature flags/policies to ask end users' devices to enable certain features that appear legitimately offered by your web application itself.Using the Feature-Policy HTTP header is ideal for preventing such requests from originating from your web application.For example, setting the following Feature-Policy will alert the end users' web browsers to not enable these features, even if requested by your web application:.",
                reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy"
            },
            {
                title:"Input Validation",
                therory:"Implement rigorous input validation to prevent malicious data from entering your application. Sanitize user inputs to protect against Cross-Site Scripting (XSS) attacks.",
                reference:"https://www.insecure.in/input-validation-attacks"
            },
            {
                title:"Secure Communication",
                therory:"Always use HTTPS to encrypt data transmitted between the client and server. Ensure that your API endpoints and external resources are also secured with HTTPS",
                reference:"https://thenewstack.io/secure-the-web-with-an-api-driven-backend-for-frontend/"
            },
            {
                title:"Authentication and Authorization",
                therory:"Implement strong user authentication and authorization mechanisms. Ensure that only authorized users can access sensitive parts of your frontend",
                reference:"https://zivukushingai.medium.com/everything-you-need-to-know-about-frontend-and-backend-authentication-ultimate-guide-7142a752249c"
            },
            {
                title:"Avoid Hardcoding Secrets",
                therory:"Implement strong user authentication and authorization mechanisms. Ensure that only authorized users can access sensitive parts of your frontend",
                reference:"https://blog.logrocket.com/best-practices-for-managing-and-storing-secrets-in-frontend-development/"
            }
        ],
        message:[{
            name:"Admin",
            message:[],
            count:0
        }]
    },
    reducers:{
        updateAdmin:(state,action)=>{
            state.Admin = action.payload
        },
        updateAdminLogin:(state,action)=>{
            state.AdminLogin = action.payload
        },
        updateUsersArray:(state,action)=>{
            state.usersArray = action.payload
        },
        updateuserLogin:(state,action)=>{
            state.userLogin = action.payload
        },
        updateTimelineArray:(state,action)=>{
            state.timelineArray = action.payload
        },
        updateUserAccessTimeLineArray:(state,action)=>{
            state.userAccessTimeLineArray = action.payload
        },
        updateSecurityPractices:(state,action)=>{
            state.securityPractices = action.payload
        },
        updateMessage:(state,action)=>{
            state.message = action.payload
        }
    }
})

export default Slice.reducer;
export const{updateName,updateAdminLogin,updateUsersArray,updateuserLogin,updateTimelineArray,updateUserAccessTimeLineArray,updateSecurityPractices,updateMessage} = Slice.actions