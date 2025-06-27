import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        serviceId, // TODO: Replace with your EmailJS service ID
        templateId, // TODO: Replace with your EmailJS template ID
        formRef.current,
        publicKey, // TODO: Replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          toast({
            title: "Failed to send message.",
            description: "Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Information
            </h3>
            <div className="space-y-6 w-full">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/60 border border-border shadow-sm transition md:justify-start justify-center">
                <span className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-muted-foreground">
                    Email
                  </span>
                  <a
                    href="mailto:swapnilkale1411@gmail.com"
                    className="text-base font-semibold text-primary hover:underline break-all"
                  >
                    swapnilkale1411@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/60 border border-border shadow-sm transition md:justify-start justify-center">
                <span className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-muted-foreground">
                    Location
                  </span>
                  <span className="text-base font-semibold text-primary">
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 dark:bg-card/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-border max-w-lg mx-auto flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2 text-primary text-center">
              Send a Message
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              I'd love to hear from you! Fill out the form below and I'll get
              back to you soon.
            </p>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-muted-foreground"
                  placeholder="Your Name"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                  <User size={18} />
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-muted-foreground"
                  placeholder="Your Email"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                  <Mail size={18} />
                </span>
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none placeholder:text-muted-foreground"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center gap-2 transition hover:scale-[1.02] active:scale-95 shadow-md",
                  isSubmitting && "opacity-60 cursor-not-allowed",
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
