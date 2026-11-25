# AGENT.md

## Entry text

```
IfYouCanReadThisWeBrokeUp
```

25 characters, exactly. Written to `/output/entry.txt` with no trailing newline.

## Why this text

The name is the breakup note. In 25 characters it carries the whole story:

- Situation: someone is close enough to the router to see the network list.
- Character: the sender, who chose to say it through the one thing everyone nearby can read.
- Event: "We Broke Up", delivered to anyone scanning networks.

## The 32-character gate

Wi-Fi network names (SSIDs) are limited to 32 characters. `main.ts` rejects text that is empty, whitespace-only, or longer than 32 characters. It fails loudly and writes nothing.
