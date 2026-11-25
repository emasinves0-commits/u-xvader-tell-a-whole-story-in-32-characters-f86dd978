# Tell a Whole Story in 32 Characters

[![bounty](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/emasinves0-commits/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/emasinves0-commits/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

## What it is

One Wi-Fi network name, 32 characters or fewer, that tells a whole story.

The entry (25 characters):

```
IfYouCanReadThisWeBrokeUp
```

A breakup delivered through the router and broadcast to anyone scanning for networks.

## How `main.ts` works

- Holds the entry text and the 32-character limit as named constants.
- `validate()` throws if the text is empty, whitespace-only, or longer than 32 characters. Nothing is written in that case.
- `main()` validates, creates `/output` if needed, and writes the text to `/output/entry.txt` with no trailing newline.
- No dependencies, no network, no other file reads.

## Run

```
node main.ts
```

Requires Node 22 or newer with TypeScript type stripping.

## License

MIT
