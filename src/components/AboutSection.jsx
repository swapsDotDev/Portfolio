import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Developer. Innovator. Problem Solver.
            </h3>

            <p className="text-muted-foreground">
              I'm Swapnil Kale — a passionate software developer and MCA student
              with hands-on experience in building impactful web and mobile apps
              using <strong>ReactJS</strong>, <strong>Python</strong>, <strong>Flutter</strong>, and <strong>FastAPI</strong>.
              I love leveraging technology to solve real-world problems, especially those related to sustainability and efficiency.
            </p>

            <p className="text-muted-foreground">
              My journey includes crafting HR management systems, satellite-image-based afforestation tools,
              and intuitive platforms that blend functionality with user-focused design. I'm a fast learner, 
              a collaborative teammate, and always up for a challenge that makes me grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1IeHfWw3YyUd-bNt4hUB9JG32tFijcqym/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Proficient in building robust and scalable web & mobile applications using React, Flutter, Python, and FastAPI.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User-Centric Design</h4>
                  <p className="text-muted-foreground">
                    I design intuitive and inclusive interfaces that prioritize user needs and accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Implementation</h4>
                  <p className="text-muted-foreground">
                    Experienced in managing full project lifecycles—from ideation to deployment—following agile principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// import { Briefcase, Code, User } from "lucide-react";

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 px-4 relative">
//       {" "}
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           About <span className="text-primary"> Me</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold">
//               Passionate Web Developer & Tech Creator
//             </h3>

//             <p className="text-muted-foreground">
//               With over 5 years of experience in web development, I specialize
//               in creating responsive, accessible, and performant web
//               applications using modern technologies.
//             </p>

//             <p className="text-muted-foreground">
//               I'm passionate about creating elegant solutions to complex
//               problems, and I'm constantly learning new technologies and
//               techniques to stay at the forefront of the ever-evolving web
//               landscape.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//               <a href="#contact" className="cosmic-button">
//                 {" "}
//                 Get In Touch
//               </a>

//               <a
//                 href=""
//                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Code className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg"> Web Development</h4>
//                   <p className="text-muted-foreground">
//                     Creating responsive websites and web applications with
//                     modern frameworks.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <User className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">UI/UX Design</h4>
//                   <p className="text-muted-foreground">
//                     Designing intuitive user interfaces and seamless user
//                     experiences.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Briefcase className="h-6 w-6 text-primary" />
//                 </div>

//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">Project Management</h4>
//                   <p className="text-muted-foreground">
//                     Leading projects from conception to completion with agile
//                     methodologies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
