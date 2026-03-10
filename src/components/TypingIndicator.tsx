import { Bot } from "lucide-react";

const TypingIndicator = () => (
  <div className="flex items-start gap-3 px-4 py-3">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
      <Bot className="h-4 w-4 text-primary" />
    </div>
    <div className="flex items-center gap-1 pt-2">
      <span className="h-2 w-2 rounded-full bg-primary animate-typing-dot" />
      <span className="h-2 w-2 rounded-full bg-primary animate-typing-dot [animation-delay:0.2s]" />
      <span className="h-2 w-2 rounded-full bg-primary animate-typing-dot [animation-delay:0.4s]" />
    </div>
  </div>
);

export default TypingIndicator;
