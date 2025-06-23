import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TerminalWindow from "./terminal-window";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Linkedin, MapPin, Github, FileText, Camera, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      setIsSubmitting(true);
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Primary Channel",
      value: "omkarankit2004@gmail.com",
      href: "mailto:omkarankit2004@gmail.com",
    },
    {
      icon: Linkedin,
      label: "Professional Network",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/ohmicguy",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jajpur, Odisha, India",
      href: 'https://www.google.com/maps/place/Jajpur,+Odisha/@20.9083,86.3292,12z',
    },
  ];

  const quickLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ohmic-guy" },
    { icon: FileText, label: "Download Resume", href: "https://drive.google.com/file/d/1xnkmo3QaoLHLvgqRmNtgCpfM3dNoPYvg/view?usp=drive_link"},
    { icon: Camera, label: "Photography Portfolio", href: "https://instagram.com/ohmic.stuffs" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="contact_form.py">
          <div className="font-mono">
            <div className="text-matrix mb-6">$ python contact_form.py --initialize</div>
            <h2 className="text-3xl font-bold mb-8 text-center text-cyber-cyan font-sans">Establish Connection</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 ml-4">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-matrix mb-4">Connection Protocols</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      const content = (
                        <div className="flex items-center space-x-4 p-4 bg-dark-surface rounded border border-dark-border hover-matrix">
                          <Icon className="text-cyber-cyan text-xl" />
                          <div>
                            <span className="block text-text-secondary">{info.label}</span>
                            <span className="text-matrix">{info.value}</span>
                          </div>
                        </div>
                      );

                      return info.href ? (
                        <a key={index} href={info.href} target="_blank" rel="noopener noreferrer">
                          {content}
                        </a>
                      ) : (
                        <div key={index}>{content}</div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="bg-dark-surface p-6 rounded border border-dark-border">
                  <h4 className="text-lg font-bold text-matrix mb-3">Quick Links</h4>
                  <div className="space-y-2">
                    {quickLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <a 
                          key={index}
                          href={link.href}
                          className="block text-cyber-cyan hover:text-matrix transition-colors"
                        >
                          <Icon className="inline-block w-4 h-4 mr-2" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-bold text-matrix mb-4">Send Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-text-secondary">Name:</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your name"
                              className="bg-dark-surface border-dark-border text-matrix focus:border-matrix"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-text-secondary">Email:</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your@email.com"
                              className="bg-dark-surface border-dark-border text-matrix focus:border-matrix"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-text-secondary">Subject:</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Message subject"
                              className="bg-dark-surface border-dark-border text-matrix focus:border-matrix"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-text-secondary">Message:</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={5}
                              placeholder="Your message here..."
                              className="bg-dark-surface border-dark-border text-matrix focus:border-matrix resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full neon-border bg-transparent hover:bg-dark-surface px-6 py-3 rounded hover-matrix transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "./send_message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
