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
                                textareaCnt:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
                                status: 'not started'
                            },
                            {
                                heading:"Css",
                                textareaCnt:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
                                status:"not started'"
                            },
                            {
                                heading:"Javascrit",
                                textareaCnt:"JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
                                status:"not started'"
                            },
                            {
                                heading:"React js",
                                textareaCnt:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
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
                therory:"Often, web application front ends are built using commonly available frameworks. These frameworks make up the core of your web application's front end, and any security vulnerability within this framework can lead to a compromise of your web application as a whole.Using modern and frequently updated frameworks can help boost your web application's security. These frameworks frequently include built-in authentication handlers and other security features that help standardize the security practises needed for your web application."
            },
            {
                title:"Auditing of 3rd-party libraries in use",
                therory:"3rd-party libraries are in use everywhere. They help speed up coding time and make implementation of new features into your web application that much easier—but any possible vulnerability in these 3rd-party libraries can impact your web application's overall security as well.For example, many web applications rely on 3rd-party libraries for handling billing and customer purchases. Any vulnerability in these billing libraries can cause multiple security issues in your web application, such as the leaking of user information or redirecting users to phishing domains to capture card details.Keeping track of and scanning 3rd-party libraries manually can often be tricky for large web applications, but online vulnerability scanners exist to help this process along, making it straightforward, automated, and ready to alert you whenever a vulnerability is found."
            },
            {
                title:"Avoiding iFrames where possible",
                therory:"While iFrames make your development process easier by allowing you to incorporate/load other pages/frames in your existing view, iFrames usage is often used without appropriate X-Frame-Options. Unfortunately, this allows for clickjacking attacks and the compromise of your web application's integrity.iFrame-based attacks can be used to play videos, open malicious forms (which look legitimate), and trick users into downloading malicious content that can lead to a degraded overall experience of your web application."
            },
            {
                title:"Restricting available Feature Policy",
                therory:"By default, your web application can access or request any feature from your end user's device—while this may be a nice-to-have during the development stage, if left enabled it can lead to attackers exploiting your web application and using these unrestricted feature flags/policies to ask end users' devices to enable certain features that appear legitimately offered by your web application itself.Using the Feature-Policy HTTP header is ideal for preventing such requests from originating from your web application.For example, setting the following Feature-Policy will alert the end users' web browsers to not enable these features, even if requested by your web application:."
            },
            {
                title:"Input Validation",
                therory:"Implement rigorous input validation to prevent malicious data from entering your application. Sanitize user inputs to protect against Cross-Site Scripting (XSS) attacks.",
                reference:"https://www.insecure.in/input-validation-attacks"
            },
            {
                title:"Secure Communication",
                therory:"Always use HTTPS to encrypt data transmitted between the client and server. Ensure that your API endpoints and external resources are also secured with HTTPS",
            },
            {
                title:"Authentication and Authorization",
                therory:"Implement strong user authentication and authorization mechanisms. Ensure that only authorized users can access sensitive parts of your frontend",
            },
            {
                title:"Avoid Hardcoding Secrets",
                therory:"Implement strong user authentication and authorization mechanisms. Ensure that only authorized users can access sensitive parts of your frontend",
            }
        ]
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
        }
    }
})

export default Slice.reducer;
export const{updateName,updateAdminLogin,updateUsersArray,updateuserLogin,updateTimelineArray,updateUserAccessTimeLineArray,updateSecurityPractices} = Slice.actions