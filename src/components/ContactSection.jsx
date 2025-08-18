import React, { useRef, useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, User, Loader2, Terminal, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Constants
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SOCIAL_LINKS = [
  { Icon: Github, text: "github.com/swapsDotDev", href: "https://github.com/swapsDotDev" },
  { Icon: Linkedin, text: "linkedin.com/in/swapnilkale1411", href: "https://linkedin.com/in/swapnilkale1411", color: "text-blue-400 light:text-blue-600" },
  { Icon: Twitter, text: "kale_swapn20206", href: "https://twitter.com/kale_swapn20206", color: "text-sky-400 light:text-sky-600" },
];

const CONTACT_INFO = {
  email: "swapnilkale1411@gmail.com",
  location: "Pune, Maharashtra, India",
  timezone: "IST (UTC+5:30)",
  availability: "Open for opportunities",
};

// Reusable Components
const TerminalWindow = ({ title, children, className }) => (
  <div className={cn(
    "bg-[#0D1117] dark:bg-[#0D1117] light:bg-white rounded-lg shadow-xl border border-[#30363D] dark:border-[#30363D] light:border-slate-300 overflow-hidden",
    className
  )}>
    <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
      </div>
      <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">{title}</span>
    </div>
    {children}
  </div>
);

const ContactCard = ({ Icon, command, text, href, gradient }) => (
  <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 backdrop-blur border border-slate-700 dark:border-slate-700 light:border-slate-300 rounded-lg p-4 sm:p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 light:hover:shadow-blue-600/10">
    <div className="flex items-center gap-4">
      <span className={cn("p-3 rounded-full flex items-center justify-center", gradient)}>
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </span>
      <div className="flex flex-col">
        <span className="font-mono text-xs sm:text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-600">{command}</span>
        {href ? (
          <a href={href} className="text-sm sm:text-base font-semibold text-gray-100 dark:text-gray-100 light:text-gray-900 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors break-all">
            {text}
          </a>
        ) : (
          <span className="text-sm sm:text-base font-semibold text-gray-100 dark:text-gray-100 light:text-gray-900">{text}</span>
        )}
      </div>
    </div>
  </div>
);

const InputField = ({ id, name, type = "text", placeholder, Icon, iconColor, required = true, rows }) => (
  <div className="relative">
    <div className="font-mono text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mb-2">{`--${id}`}</div>
    <div className="relative">
      {rows ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 border border-slate-600 dark:border-slate-600 light:border-slate-300 text-gray-100 dark:text-gray-100 light:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 light:focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-500"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          className={cn(
            "w-full py-3 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 border border-slate-600 dark:border-slate-600 light:border-slate-300 text-gray-100 dark:text-gray-100 light:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 light:focus:ring-blue-600 focus:border-transparent transition-all duration-200 placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-500",
            Icon ? "pl-10 pr-4" : "px-4"
          )}
          placeholder={placeholder}
        />
      )}
      {Icon && (
        <span className={cn("absolute left-3 top-1/2 -translate-y-1/2", iconColor)}>
          <Icon size={18} />
        </span>
      )}
    </div>
  </div>
);

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  // Memoized contact info for JSON display
  const contactJson = useMemo(() => [
    { key: "email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, color: "text-blue-400 light:text-blue-600" },
    { key: "location", value: CONTACT_INFO.location, color: "text-green-300 light:text-green-600" },
    { key: "timezone", value: CONTACT_INFO.timezone, color: "text-yellow-300 light:text-yellow-600" },
    { key: "availability", value: CONTACT_INFO.availability, color: "text-emerald-400 light:text-emerald-600" },
  ], []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast({ title: "Message sent!", description: "Thank you for your message. I'll get back to you soon." });
      formRef.current?.reset();
    } catch (error) {
      toast({ title: "Failed to send message.", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-810 to-slate-805">
      <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] light:bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [background-position:0_0,0_0]"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-500 dark:text-emerald-400 light:text-emerald-600 mb-4">
            <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-mono text-xs sm:text-sm">/contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 opacity-0 animate-fade-in">
            <span className="text-gray-100 dark:text-gray-100 light:text-gray-900">Get In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 dark:from-blue-400 dark:via-purple-500 dark:to-emerald-400 light:from-blue-600 light:via-purple-600 light:to-emerald-600">Touch</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-2xl mx-auto text-base sm:text-lg opacity-0 animate-fade-in-delay-1">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and building something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 lg:space-y-8 opacity-0 animate-fade-in-delay-2">
            <TerminalWindow title="contact-info.sh">
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm space-y-3">
                <div><span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">$ cat contact.json</span></div>
                <div className="pl-2 space-y-2">
                  <div><span className="text-gray-300 dark:text-gray-300 light:text-gray-700">{"{"}</span></div>
                  {contactJson.map(({ key, value, href, color }, index) => (
                    <div key={key} className="pl-4">
                      <span className="text-red-300 dark:text-red-300 light:text-red-600">"{key}"</span>
                      <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">: </span>
                      {href ? (
                        <a href={href} className={cn("hover:underline", color)}>"{value}"</a>
                      ) : (
                        <span className={color}>"{value}"</span>
                      )}
                      {index < contactJson.length - 1 && <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">,</span>}
                    </div>
                  ))}
                  <div><span className="text-gray-300 dark:text-gray-300 light:text-gray-700">{"}"}</span></div>
                </div>
              </div>
            </TerminalWindow>

            <div className="space-y-4">
              <ContactCard
                Icon={Mail}
                command="./send-email"
                text={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
                gradient="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-500 dark:to-purple-500 light:from-blue-600 light:to-purple-600"
              />
              <ContactCard
                Icon={MapPin}
                command="./get-location"
                text={CONTACT_INFO.location}
                gradient="bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-emerald-500 dark:to-blue-500 light:from-emerald-600 light:to-blue-600"
              />
            </div>

            <TerminalWindow title="social-links.js">
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
                <div className="space-y-1">
                  <div><span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">$ ls -la ./social/</span></div>
                  <div className="pl-2 space-y-2 mt-3">
                    {SOCIAL_LINKS.map(({ Icon, text, href, color }, index) => (
                      <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-slate-700/30 dark:hover:bg-slate-700/30 light:hover:bg-slate-100/50 p-2 rounded transition-colors cursor-pointer">
                        <Icon className={cn("h-4 w-4 text-gray-400 dark:text-gray-400", color)} />
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">{text}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>

          <div className="opacity-0 animate-fade-in-delay-3">
            <TerminalWindow title="send-message.sh" className="max-w-lg mx-auto lg:mx-0">
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <div className="font-mono text-xs sm:text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2">$ ./compose-message --interactive</div>
                  <div className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">Initializing secure communication channel...</div>
                </div>
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <InputField id="name" name="user_name" placeholder="Enter your name" Icon={User} iconColor="text-blue-400 dark:text-blue-400 light:text-blue-600" />
                    <InputField id="email" name="user_email" type="email" placeholder="Enter your email" Icon={Mail} iconColor="text-purple-400 dark:text-purple-400 light:text-purple-600" />
                    <InputField id="message" name="message" placeholder="Your message here..." rows={5} Icon={null} />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300",
                      "bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 dark:from-blue-500 dark:via-purple-500 dark:to-emerald-500 light:from-blue-600 light:via-purple-600 light:to-emerald-600",
                      "text-white font-mono text-sm sm:text-base",
                      "hover:shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-purple-500/25 light:hover:shadow-purple-600/25",
                      "transform hover:scale-[1.02] active:scale-95",
                      isSubmitting && "opacity-60 cursor-not-allowed scale-100"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        <span>$ sending...</span>
                      </>
                    ) : (
                      <>
                        <span>$ ./send-message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                  <div className="mt-6 pt-4 border-t border-slate-600 dark:border-slate-600 light:border-slate-300">
                    <div className="font-mono text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
                      <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">✓</span> Encrypted transmission
                      <span className="mx-2">•</span>
                      <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">✓</span> Response within 24hrs
                    </div>
                  </div>
                </form>
              </div>
            </TerminalWindow>
          </div>
        </div>

        <div className="text-center mt-12 lg:mt-16 opacity-0 animate-fade-in-delay-4">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
            <Terminal className="h-4 w-4" />
            <span>Ready to build something amazing together?</span>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
          .animate-fade-in-delay-1 { animation: fade-in 0.8s ease-out 0.2s forwards; }
          .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s forwards; }
          .animate-fade-in-delay-3 { animation: fade-in 0.8s ease-out 0.6s forwards; }
          .animate-fade-in-delay-4 { animation: fade-in 0.8s ease-out 0.8s forwards; }
        `}</style>
      </div>
    </section>
  );
};

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Mail, MapPin, Send, User, Loader2, Terminal, Github, Linkedin, Twitter } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";

// export const ContactSection = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const formRef = useRef();
//   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
//       (result) => {
//         toast({
//           title: "Message sent!",
//           description: "Thank you for your message. I'll get back to you soon.",
//         });
//         setIsSubmitting(false);
//         if (formRef.current) formRef.current.reset();
//       },
//       (error) => {
//         toast({
//           title: "Failed to send message.",
//           description: "Please try again later.",
//           variant: "destructive",
//         });
//         setIsSubmitting(false);
//       },
//     );
//   };

//   return (
//     <section 
//       id="contact" 
//       className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-810 to-slate-805"
//     >
//       {/* Animated background grid */}
//       <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-20">
//         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] 
//                        dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
//                        light:bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.1)_1px,transparent_1px)]
//                        bg-[size:50px_50px] [background-position:0_0,0_0]"></div>
//       </div>

//       <div className="container mx-auto max-w-7xl relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12 lg:mb-16">
//           <div className="flex items-center justify-center gap-2 text-emerald-500 dark:text-emerald-400 light:text-emerald-600 mb-4">
//             <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
//             <span className="font-mono text-xs sm:text-sm">/contact</span>
//           </div>
          
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 opacity-0 animate-fade-in">
//             <span className="text-gray-100 dark:text-gray-100 light:text-gray-900">Get In </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 
//                            dark:from-blue-400 dark:via-purple-500 dark:to-emerald-400
//                            light:from-blue-600 light:via-purple-600 light:to-emerald-600">
//               Touch
//             </span>
//           </h2>
          
//           <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-2xl mx-auto text-base sm:text-lg opacity-0 animate-fade-in-delay-1">
//             Have a project in mind or want to collaborate? Feel free to reach out.
//             I'm always open to discussing new opportunities and building something amazing together.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//           {/* Left side - Contact Info & Terminal */}
//           <div className="space-y-6 lg:space-y-8 opacity-0 animate-fade-in-delay-2">
//             {/* Terminal-style contact info */}
//             <div className="bg-[#0D1117] dark:bg-[#0D1117] light:bg-white 
//                            rounded-lg shadow-2xl border border-[#30363D] dark:border-[#30363D] light:border-slate-300 
//                            overflow-hidden">
//               <div className="flex items-center justify-between px-3 sm:px-4 py-2 
//                              bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 
//                              border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200">
//                 <div className="flex items-center gap-1.5 sm:gap-2">
//                   <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
//                   <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
//                   <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
//                 </div>
//                 <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">
//                   contact-info.sh
//                 </span>
//               </div>
              
//               <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm space-y-3">
//                 <div>
//                   <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">$ cat contact.json</span>
//                 </div>
//                 <div className="pl-2 space-y-2">
//                   <div>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">{"{"}</span>
//                   </div>
//                   <div className="pl-4">
//                     <span className="text-red-300 dark:text-red-300 light:text-red-600">"email"</span>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">: </span>
//                     <a href="mailto:swapnilkale1411@gmail.com" 
//                        className="text-blue-400 dark:text-blue-400 light:text-blue-600 hover:underline">
//                       "swapnilkale1411@gmail.com"
//                     </a>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">,</span>
//                   </div>
//                   <div className="pl-4">
//                     <span className="text-red-300 dark:text-red-300 light:text-red-600">"location"</span>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">: </span>
//                     <span className="text-green-300 dark:text-green-300 light:text-green-600">"Pune, Maharashtra, India"</span>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">,</span>
//                   </div>
//                   <div className="pl-4">
//                     <span className="text-red-300 dark:text-red-300 light:text-red-600">"timezone"</span>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">: </span>
//                     <span className="text-yellow-300 dark:text-yellow-300 light:text-yellow-600">"IST (UTC+5:30)"</span>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">,</span>
//                   </div>
//                   <div className="pl-4">
//                     <span className="text-red-300 dark:text-red-300 light:text-red-600">"availability"</span>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">: </span>
//                     <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">"Open for opportunities"</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">{"}"}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Cards */}
//             <div className="space-y-4">
//               <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 
//                             backdrop-blur border border-slate-700 dark:border-slate-700 light:border-slate-300 
//                             rounded-lg p-4 sm:p-6 hover:scale-[1.02] transition-all duration-300 
//                             hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 light:hover:shadow-blue-600/10">
//                 <div className="flex items-center gap-4">
//                   <span className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
//                                  dark:from-blue-500 dark:to-purple-500 light:from-blue-600 light:to-purple-600 
//                                  flex items-center justify-center">
//                     <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
//                   </span>
//                   <div className="flex flex-col">
//                     <span className="font-mono text-xs sm:text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
//                       ./send-email
//                     </span>
//                     <a
//                       href="mailto:swapnilkale1411@gmail.com"
//                       className="text-sm sm:text-base font-semibold text-gray-100 dark:text-gray-100 light:text-gray-900 
//                                hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors break-all"
//                     >
//                       swapnilkale1411@gmail.com
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 
//                             backdrop-blur border border-slate-700 dark:border-slate-700 light:border-slate-300 
//                             rounded-lg p-4 sm:p-6 hover:scale-[1.02] transition-all duration-300 
//                             hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/10 light:hover:shadow-emerald-600/10">
//                 <div className="flex items-center gap-4">
//                   <span className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 
//                                  dark:from-emerald-500 dark:to-blue-500 light:from-emerald-600 light:to-blue-600 
//                                  flex items-center justify-center">
//                     <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
//                   </span>
//                   <div className="flex flex-col">
//                     <span className="font-mono text-xs sm:text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
//                       ./get-location
//                     </span>
//                     <span className="text-sm sm:text-base font-semibold text-gray-100 dark:text-gray-100 light:text-gray-900">
//                       Pune, Maharashtra, India
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links - Terminal Style */}
//             <div className="bg-[#0D1117] dark:bg-[#0D1117] light:bg-white 
//                            rounded-lg shadow-xl border border-[#30363D] dark:border-[#30363D] light:border-slate-300 
//                            overflow-hidden">
//               <div className="px-3 sm:px-4 py-2 
//                              bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 
//                              border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200">
//                 <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">
//                   social-links.js
//                 </span>
//               </div>
              
//               <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
//                 <div className="space-y-1">
//                   <div>
//                     <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">$ ls -la ./social/</span>
//                   </div>
//                   <div className="pl-2 space-y-2 mt-3">
//                     <div className="flex items-center gap-3 hover:bg-slate-700/30 dark:hover:bg-slate-700/30 light:hover:bg-slate-100/50 
//                                    p-2 rounded transition-colors cursor-pointer">
//                       <Github className="h-4 w-4 text-gray-400 dark:text-gray-400 light:text-gray-600" />
//                       <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">github.com/swapnil</span>
//                     </div>
//                     <div className="flex items-center gap-3 hover:bg-slate-700/30 dark:hover:bg-slate-700/30 light:hover:bg-slate-100/50 
//                                    p-2 rounded transition-colors cursor-pointer">
//                       <Linkedin className="h-4 w-4 text-blue-400 dark:text-blue-400 light:text-blue-600" />
//                       <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">linkedin.com/in/swapnil</span>
//                     </div>
//                     <div className="flex items-center gap-3 hover:bg-slate-700/30 dark:hover:bg-slate-700/30 light:hover:bg-slate-100/50 
//                                    p-2 rounded transition-colors cursor-pointer">
//                       <Twitter className="h-4 w-4 text-sky-400 dark:text-sky-400 light:text-sky-600" />
//                       <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">@swapnil_dev</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Contact Form Terminal */}
//           <div className="opacity-0 animate-fade-in-delay-3">
//             <div className="bg-[#0D1117] dark:bg-[#0D1117] light:bg-white 
//                            rounded-lg shadow-2xl border border-[#30363D] dark:border-[#30363D] light:border-slate-300 
//                            overflow-hidden max-w-lg mx-auto lg:mx-0">
//               <div className="flex items-center justify-between px-3 sm:px-4 py-2 
//                              bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 
//                              border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200">
//                 <div className="flex items-center gap-1.5 sm:gap-2">
//                   <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
//                   <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
//                   <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
//                 </div>
//                 <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">
//                   send-message.sh
//                 </span>
//               </div>
              
//               <div className="p-6 sm:p-8">
//                 <div className="mb-6">
//                   <div className="font-mono text-xs sm:text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2">
//                     $ ./compose-message --interactive
//                   </div>
//                   <div className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
//                     Initializing secure communication channel...
//                   </div>
//                 </div>

//                 <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
//                   <div className="space-y-4">
//                     <div className="relative">
//                       <div className="font-mono text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mb-2">
//                         --name
//                       </div>
//                       <div className="relative">
//                         <input
//                           type="text"
//                           id="name"
//                           name="user_name"
//                           required
//                           className="w-full pl-10 pr-4 py-3 rounded-lg 
//                                    bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 
//                                    border border-slate-600 dark:border-slate-600 light:border-slate-300 
//                                    text-gray-100 dark:text-gray-100 light:text-gray-900
//                                    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 light:focus:ring-blue-600 
//                                    focus:border-transparent transition-all duration-200
//                                    placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-500"
//                           placeholder="Enter your name"
//                         />
//                         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 dark:text-blue-400 light:text-blue-600">
//                           <User size={18} />
//                         </span>
//                       </div>
//                     </div>

//                     <div className="relative">
//                       <div className="font-mono text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mb-2">
//                         --email
//                       </div>
//                       <div className="relative">
//                         <input
//                           type="email"
//                           id="email"
//                           name="user_email"
//                           required
//                           className="w-full pl-10 pr-4 py-3 rounded-lg 
//                                    bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 
//                                    border border-slate-600 dark:border-slate-600 light:border-slate-300 
//                                    text-gray-100 dark:text-gray-100 light:text-gray-900
//                                    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 light:focus:ring-blue-600 
//                                    focus:border-transparent transition-all duration-200
//                                    placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-500"
//                           placeholder="Enter your email"
//                         />
//                         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 dark:text-purple-400 light:text-purple-600">
//                           <Mail size={18} />
//                         </span>
//                       </div>
//                     </div>

//                     <div className="relative">
//                       <div className="font-mono text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mb-2">
//                         --message
//                       </div>
//                       <textarea
//                         id="message"
//                         name="message"
//                         required
//                         rows={5}
//                         className="w-full px-4 py-3 rounded-lg 
//                                  bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-50 
//                                  border border-slate-600 dark:border-slate-600 light:border-slate-300 
//                                  text-gray-100 dark:text-gray-100 light:text-gray-900
//                                  focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 light:focus:ring-blue-600 
//                                  focus:border-transparent transition-all duration-200 resize-none
//                                  placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-500"
//                         placeholder="Your message here..."
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={cn(
//                       "w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300",
//                       "bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 dark:from-blue-500 dark:via-purple-500 dark:to-emerald-500 light:from-blue-600 light:via-purple-600 light:to-emerald-600",
//                       "text-white font-mono text-sm sm:text-base",
//                       "hover:shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-purple-500/25 light:hover:shadow-purple-600/25",
//                       "transform hover:scale-[1.02] active:scale-95",
//                       isSubmitting && "opacity-60 cursor-not-allowed scale-100"
//                     )}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="animate-spin" size={16} />
//                         <span>$ sending...</span>
//                       </>
//                     ) : (
//                       <>
//                         <span>$ ./send-message</span>
//                         <Send size={16} />
//                       </>
//                     )}
//                   </button>
//                 </form>

//                 {/* Terminal footer */}
//                 <div className="mt-6 pt-4 border-t border-slate-600 dark:border-slate-600 light:border-slate-300">
//                   <div className="font-mono text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
//                     <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">✓</span> Encrypted transmission
//                     <span className="mx-2">•</span>
//                     <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">✓</span> Response within 24hrs
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-12 lg:mt-16 opacity-0 animate-fade-in-delay-4">
//           <div className="inline-flex items-center gap-2 font-mono text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
//             <Terminal className="h-4 w-4" />
//             <span>Ready to build something amazing together?</span>
//           </div>
//         </div>
//       </div>

//       {/* Add the same CSS animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
        
//         .animate-fade-in-delay-1 {
//           animation: fade-in 0.8s ease-out 0.2s forwards;
//         }
        
//         .animate-fade-in-delay-2 {
//           animation: fade-in 0.8s ease-out 0.4s forwards;
//         }
        
//         .animate-fade-in-delay-3 {
//           animation: fade-in 0.8s ease-out 0.6s forwards;
//         }
        
//         .animate-fade-in-delay-4 {
//           animation: fade-in 0.8s ease-out 0.8s forwards;
//         }
//       `}</style>
//     </section>
//   );
// };
