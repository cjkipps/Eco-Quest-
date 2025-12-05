import { ArrowLeft, ChevronDown, Mail, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";

const HelpFAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I start a quest?",
      answer: "Browse the Quests page, tap on any quest card to see details, then tap 'Start Quest' to begin. Follow the on-screen instructions to complete your nature adventure!"
    },
    {
      question: "How does the camera identify species?",
      answer: "Our AI-powered camera analyzes photos you take and matches them against a database of plants, birds, insects, and other wildlife. Simply open the camera, take a clear photo, and get instant identification results."
    },
    {
      question: "What are badges and how do I earn them?",
      answer: "Badges are rewards for completing quests and reaching milestones. Each quest completion earns you a unique badge. Collect them all by exploring different types of nature activities!"
    },
    {
      question: "Can I share my discoveries with friends?",
      answer: "Yes! After completing a quest, you can share your discovery to the Community feed. Your friends can like and comment on your posts. You can also add friends and send them direct messages."
    },
    {
      question: "How do I add friends?",
      answer: "Go to your Profile, tap on 'Friends', then use the 'Add Friend' button to search for other nature enthusiasts. You can also accept friend requests from others."
    },
    {
      question: "Is my location data private?",
      answer: "Yes, your privacy is important to us. You can control location sharing in Settings > Privacy & Security. You can choose to hide your location from discoveries at any time."
    },
    {
      question: "How do I change my notification settings?",
      answer: "Go to Settings > Notifications to customize which alerts you receive. You can toggle notifications for new friend requests, quest reminders, and community activity."
    },
    {
      question: "What happens if I lose my progress?",
      answer: "Your progress is automatically saved to your account. As long as you're logged in, your quests, badges, and photos are secure. If you experience any issues, contact our support team."
    },
  ];

  const handleContactSupport = () => {
    toast({
      title: "Support Request",
      description: "Our team will get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-muted rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Help & FAQ</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* FAQ Section */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Frequently Asked Questions
          </h2>
          <Card className="border-0 shadow-card overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="px-4 py-4 text-left hover:no-underline hover:bg-muted/50">
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Still Need Help?
          </h2>
          <Card className="border-0 shadow-card p-6 space-y-4">
            <p className="text-muted-foreground text-center">
              Our support team is here to help you with any questions or issues.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="h-14 flex-col gap-1"
                onClick={handleContactSupport}
              >
                <Mail className="w-5 h-5" />
                <span className="text-xs">Email Us</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-14 flex-col gap-1"
                onClick={handleContactSupport}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="text-xs">Live Chat</span>
              </Button>
            </div>
          </Card>
        </div>

        {/* App Info */}
        <Card className="border-0 shadow-card p-6 text-center">
          <p className="text-lg font-semibold text-foreground mb-1">Wild Discovery Path</p>
          <p className="text-sm text-muted-foreground mb-4">Version 1.0.0</p>
          <div className="flex justify-center gap-4 text-sm text-primary">
            <button className="hover:underline">Terms of Service</button>
            <button className="hover:underline">Privacy Policy</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HelpFAQ;
