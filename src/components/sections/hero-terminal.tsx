"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeSnippet {
  filename: string;
  code: string;
  badgeTitle: string;
  badgeDetail: string;
  activeBarIndex: number;
}

const SNIPPETS: CodeSnippet[] = [
  {
    filename: "build.ts",
    code: `const logix = await build({
  product: "your-platform",
  stack: ["Next.js", "Node", "AWS"],
  weeks: 14,
});`,
    badgeTitle: "Deployed to production",
    badgeDetail: "14 weeks · on schedule",
    activeBarIndex: 5,
  },
  {
    filename: "agent.ts",
    code: `const agent = await LogixAI.deploy({
  pipeline: "rag-workflows",
  latency: "120ms",
  accuracy: "99.4%",
});`,
    badgeTitle: "AI Agent operational",
    badgeDetail: "120ms latency · verified",
    activeBarIndex: 3,
  },
  {
    filename: "mobile.ts",
    code: `const app = await launchMobile({
  ecosystem: ["iOS", "Android"],
  framework: "React Native",
  rating: 4.9,
});`,
    badgeTitle: "App Store approved",
    badgeDetail: "iOS & Android · 4.9★",
    activeBarIndex: 5,
  },
  {
    filename: "infra.ts",
    code: `export default defineInfra({
  cluster: "multi-region-k8s",
  autoscaling: { min: 2, max: 80 },
  uptime: "99.99%",
});`,
    badgeTitle: "Cluster autoscaled",
    badgeDetail: "99.99% uptime · zero downtime",
    activeBarIndex: 4,
  },
];

const barHeights = [28, 40, 55, 48, 72, 100];

type TokenType =
  | "keyword"
  | "string"
  | "number"
  | "boolean"
  | "function"
  | "property"
  | "comment"
  | "punctuation"
  | "plain";

interface Token {
  type: TokenType;
  text: string;
}

function tokenizeCode(code: string): Token[] {
  const tokens: Token[] = [];
  let remaining = code;

  while (remaining.length > 0) {
    // 1. Comments
    const commentMatch = remaining.match(/^\/\/[^\n]*/);
    if (commentMatch) {
      tokens.push({ type: "comment", text: commentMatch[0] });
      remaining = remaining.slice(commentMatch[0].length);
      continue;
    }

    // 2. Strings (handles complete or partial strings while typing)
    const stringMatch = remaining.match(/^("(?:[^"\\]|\\.)*"?|'(?:[^'\\]|\\.)*'?|`(?:[^`\\]|\\.)*`?)/);
    if (stringMatch) {
      tokens.push({ type: "string", text: stringMatch[0] });
      remaining = remaining.slice(stringMatch[0].length);
      continue;
    }

    // 3. Keywords
    const keywordMatch = remaining.match(
      /^(const|let|var|await|async|import|from|export|default|function|return|new|class|extends|if|else|typeof)\b/,
    );
    if (keywordMatch) {
      tokens.push({ type: "keyword", text: keywordMatch[0] });
      remaining = remaining.slice(keywordMatch[0].length);
      continue;
    }

    // 4. Booleans / Null
    const boolMatch = remaining.match(/^(true|false|null|undefined)\b/);
    if (boolMatch) {
      tokens.push({ type: "boolean", text: boolMatch[0] });
      remaining = remaining.slice(boolMatch[0].length);
      continue;
    }

    // 5. Numbers & percentages
    const numMatch = remaining.match(/^\d+(?:\.\d+)?%?\b/);
    if (numMatch) {
      tokens.push({ type: "number", text: numMatch[0] });
      remaining = remaining.slice(numMatch[0].length);
      continue;
    }

    // 6. Object Property (identifier followed by optional spaces and colon)
    const propMatch = remaining.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*:)/);
    if (propMatch) {
      tokens.push({ type: "property", text: propMatch[0] });
      remaining = remaining.slice(propMatch[0].length);
      continue;
    }

    // 7. Function Call / Constructor (identifier followed by optional spaces and parenthesis)
    const fnMatch = remaining.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()/);
    if (fnMatch) {
      tokens.push({ type: "function", text: fnMatch[0] });
      remaining = remaining.slice(fnMatch[0].length);
      continue;
    }

    // 8. Punctuation & Operators
    const punctMatch = remaining.match(/^[{}\[\]().,:;=+\-*<>!&|]/);
    if (punctMatch) {
      tokens.push({ type: "punctuation", text: punctMatch[0] });
      remaining = remaining.slice(punctMatch[0].length);
      continue;
    }

    // 9. Whitespace
    const spaceMatch = remaining.match(/^\s+/);
    if (spaceMatch) {
      tokens.push({ type: "plain", text: spaceMatch[0] });
      remaining = remaining.slice(spaceMatch[0].length);
      continue;
    }

    // 10. Identifier
    const identMatch = remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
    if (identMatch) {
      tokens.push({ type: "plain", text: identMatch[0] });
      remaining = remaining.slice(identMatch[0].length);
      continue;
    }

    // Fallback single character
    tokens.push({ type: "plain", text: remaining[0] });
    remaining = remaining.slice(1);
  }

  return tokens;
}

function getTokenClass(type: TokenType): string {
  switch (type) {
    case "keyword":
      return "text-[#c084fc] font-semibold"; // purple-400
    case "string":
      return "text-[#22d3b0]"; // brand mint / teal
    case "number":
      return "text-[#fbbf24]"; // amber-400
    case "boolean":
      return "text-[#f43f5e]"; // rose-500
    case "function":
      return "text-[#60a5fa]"; // blue-400
    case "property":
      return "text-[#38bdf8]"; // sky-400
    case "comment":
      return "text-[#94a3b8] italic"; // slate-400
    case "punctuation":
      return "text-white/60";
    case "plain":
    default:
      return "text-white/90";
  }
}

export function HeroTerminal() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentSnippet = SNIPPETS[snippetIndex];
  const fullText = currentSnippet.code;

  useEffect(() => {
    // If user is hovering to inspect code, pause typing/deleting
    if (isHovered) return;

    // Case 1: Finished typing full text, pause before backspacing
    if (!isDeleting && charCount === fullText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2300);
      return () => clearTimeout(timeout);
    }

    // Case 2: Finished deleting back to 0, pause briefly before next snippet
    if (isDeleting && charCount === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setSnippetIndex((prev) => (prev + 1) % SNIPPETS.length);
      }, 350);
      return () => clearTimeout(timeout);
    }

    // Case 3: Backspacing (deleting character by character)
    if (isDeleting) {
      const timeout = setTimeout(() => {
        setCharCount((prev) => Math.max(0, prev - 1));
      }, 16);
      return () => clearTimeout(timeout);
    }

    // Case 4: Typing forward
    const nextChar = fullText[charCount];
    const delay = nextChar === "\n" ? 80 : nextChar === "{" || nextChar === "," ? 65 : 28;

    const timeout = setTimeout(() => {
      setCharCount((prev) => Math.min(fullText.length, prev + 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [charCount, isDeleting, snippetIndex, isHovered, fullText]);

  const visibleText = fullText.slice(0, charCount);
  const tokens = tokenizeCode(visibleText);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl bg-[#0b1f3a] dark:bg-[#091222] p-4 sm:p-5 shadow-2xl border border-white/10 select-none group"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f56]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-mono text-[10px] text-white/40 tracking-wider">
          {currentSnippet.filename}
        </span>
      </div>

      {/* Code Display with Typewriter, Backspace & Syntax Highlighting */}
      <pre
        className="mt-4 font-mono text-[11px] sm:text-xs leading-5 sm:leading-6 overflow-x-auto min-h-[110px] sm:min-h-[130px]"
        tabIndex={0}
        aria-label="Code terminal snippet"
      >
        <code>
          {tokens.map((token, idx) => (
            <span key={idx} className={getTokenClass(token.type)}>
              {token.text}
            </span>
          ))}
          {/* Animated Blinking Cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="inline-block w-[2px] h-[13px] sm:h-[15px] bg-brand ml-0.5 translate-y-[2px] shadow-[0_0_8px_rgba(34,211,176,0.9)]"
            aria-hidden
          />
        </code>
      </pre>

      {/* Metric Visual Bars */}
      <div className="mt-5 sm:mt-6 flex h-36 sm:h-48 items-end gap-2 sm:gap-3 px-1 sm:px-2 pb-12 sm:pb-0">
        {barHeights.map((h, i) => {
          const isHighlighted = i === currentSnippet.activeBarIndex;
          return (
            <motion.div
              key={i}
              initial={{ height: "0%" }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className={
                isHighlighted
                  ? "w-full rounded-t bg-brand shadow-[0_0_20px_rgba(31,200,170,0.5)] transition-all duration-500"
                  : "w-full rounded-t bg-white/15 transition-all duration-500"
              }
            />
          );
        })}
      </div>

      {/* Dynamic Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-6 sm:left-6 flex items-center gap-2.5 sm:gap-3 rounded-lg bg-white/10 px-3 py-2 sm:px-4 sm:py-3 text-white backdrop-blur border border-white/10 shadow-lg"
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-primary">
          ✓
        </span>
        <div className="text-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSnippet.badgeTitle}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <strong className="block font-semibold">{currentSnippet.badgeTitle}</strong>
              <span className="text-white/60 text-[11px] sm:text-xs">
                {currentSnippet.badgeDetail}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

