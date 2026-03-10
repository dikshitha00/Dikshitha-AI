import ReactMarkdown from "react-markdown";
import { Bot, User } from "lucide-react";
import type { Message } from "@/lib/chat";

const ChatMessage = ({ message }: { message: Message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-start gap-3 px-4 py-3 ${isUser ? "" : ""}`}>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          isUser ? "bg-chat-user" : "bg-primary/20"
        }`}
      >
        {isUser ? (
          <User className="h-4 w-4 text-chat-user-foreground" />
        ) : (
          <Bot className="h-4 w-4 text-primary" />
        )}
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="mb-1 text-xs font-medium text-muted-foreground">
          {isUser ? "You" : "Detecters AI"}
        </p>
        {isUser ? (
          <p className="text-sm leading-relaxed text-foreground">{message.content}</p>
        ) : (
          <div className="prose prose-sm prose-invert max-w-none text-chat-ai-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:p-3">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
