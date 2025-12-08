import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
    Mail,
    Linkedin,
    Github,
    MapPin,
    Phone,
    Send,
    CheckCircle,
    Loader2,
} from "lucide-react";
import {WaveDivider, OrganicBlob} from "../wave-divider";
import {useInView} from "@/hooks/use-in-view";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    insertContactMessageSchema,
    type InsertContactMessage,
} from "@shared/schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {useToast} from "@/hooks/use-toast";

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: "sidharthsonar1111@gmail.com",
        href: "mailto:sidharthsonar1111@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 8169331062",
        href: "tel:+918169331062",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Connect on LinkedIn",
        href: "https://linkedin.com/in/sidharth-sonar",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "View on GitHub",
        href: "https://github.com/sidharth-sonar",
    },
];

// ⬇️ Replace this with your real Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzrddeb";

export function ContactSection() {
    const {ref, isInView} = useInView({threshold: 0.1});
    const {toast} = useToast();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const form = useForm<InsertContactMessage>({
        resolver: zodResolver(insertContactMessageSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (data: InsertContactMessage) => {
        try {
            setIsSending(true);

            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("subject", data.subject);
            formData.append("message", data.message);

            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            const body = await res.json();

            if (!res.ok || body.ok === false) {
                throw new Error(body.error || "Failed to send message. Please try again later.");
            }

            setIsSubmitted(true);
            form.reset();

            toast({
                title: "Message sent! 🎉",
                description: "Thanks for reaching out — I’ll get back to you soon.",
            });
        } catch (error: any) {
            console.error(error);
            toast({
                title: "Failed to send message",
                description: error?.message || "Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSending(false);
        }
    };


    return (
        <>
            <WaveDivider/>
            <section
                id="contact"
                ref={ref}
                className="relative py-20 md:py-28 bg-card overflow-hidden"
            >
                <OrganicBlob className="text-primary w-72 h-72 -bottom-20 -left-20"/>
                <OrganicBlob className="text-accent w-56 h-56 -top-10 -right-10"/>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`text-center mb-12 ${
                            isInView ? "animate-fade-in-up" : "opacity-0"
                        }`}
                    >
                        <h2
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            data-testid="text-contact-heading"
                        >
                            Let's Connect
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Open to discussing frontend architecture, UI engineering
                            challenges, or new opportunities
                        </p>
                    </div>

                    <div
                        className={`flex items-center justify-center gap-2 mb-10 text-muted-foreground ${
                            isInView ? "animate-fade-in-up stagger-1" : "opacity-0"
                        }`}
                    >
                        <MapPin className="h-4 w-4 shrink-0"/>
                        <span>Navi Mumbai, India</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div
                            className={`${
                                isInView ? "animate-fade-in-up stagger-2" : "opacity-0"
                            }`}
                            style={{animationFillMode: "forwards"}}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    {isSubmitted ? (
                                        <div
                                            className="flex flex-col items-center justify-center py-8 text-center"
                                            data-testid="contact-form-success"
                                        >
                                            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                                                <CheckCircle className="h-8 w-8"/>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                Thank you for reaching out. I'll get back to you soon.
                                            </p>
                                            <Button
                                                variant="outline"
                                                onClick={() => setIsSubmitted(false)}
                                                data-testid="button-send-another"
                                            >
                                                Send Another Message
                                            </Button>
                                        </div>
                                    ) : (
                                        <Form {...form}>
                                            <form
                                                onSubmit={form.handleSubmit(onSubmit)}
                                                className="space-y-4"
                                                data-testid="contact-form"
                                            >
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Name</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Your name"
                                                                    {...field}
                                                                    data-testid="input-contact-name"
                                                                />
                                                            </FormControl>
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Email</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    type="email"
                                                                    placeholder="your.email@example.com"
                                                                    {...field}
                                                                    data-testid="input-contact-email"
                                                                />
                                                            </FormControl>
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="subject"
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Subject</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="What's this about?"
                                                                    {...field}
                                                                    data-testid="input-contact-subject"
                                                                />
                                                            </FormControl>
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="message"
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Message</FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    placeholder="Tell me about your project or opportunity..."
                                                                    className="min-h-[120px] resize-none"
                                                                    {...field}
                                                                    data-testid="input-contact-message"
                                                                />
                                                            </FormControl>
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                                {/* 🟡 Honeypot – catches bots, invisible to humans */}
                                                <input
                                                    type="text"
                                                    name="_gotcha"
                                                    className="hidden"
                                                    tabIndex={-1}
                                                    autoComplete="off"
                                                />

                                                <Button type="submit" className="w-full" disabled={isSending} data-testid="button-submit-contact">
                                                    {isSending ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="mr-2 h-4 w-4" />
                                                            Send Message
                                                        </>
                                                    )}
                                                </Button>
                                            </form>
                                        </Form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-4">
                            {contactLinks.map((contact, index) => (
                                <Card
                                    key={contact.label}
                                    className={`hover-elevate transition-all duration-300 ${
                                        isInView ? "animate-fade-in-up" : "opacity-0"
                                    }`}
                                    style={{
                                        animationDelay: `${(index + 3) * 0.1}s`,
                                        animationFillMode: "forwards",
                                    }}
                                    data-testid={`card-contact-${contact.label.toLowerCase()}`}
                                >
                                    <CardContent className="p-4">
                                        <a
                                            href={contact.href}
                                            target={
                                                contact.href.startsWith("http") ? "_blank" : undefined
                                            }
                                            rel={
                                                contact.href.startsWith("http")
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className="flex items-center gap-4 group"
                                            data-testid={`link-contact-${contact.label.toLowerCase()}`}
                                        >
                                            <div
                                                className="p-3 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <contact.icon className="h-5 w-5"/>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-0.5">
                                                    {contact.label}
                                                </p>
                                                <p className="font-medium group-hover:text-primary transition-colors">
                                                    {contact.value}
                                                </p>
                                            </div>
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}