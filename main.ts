// Entry for "Tell a Whole Story in 32 Characters":
// a Wi-Fi network name that is the whole breakup note.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = "IfYouCanReadThisWeBrokeUp";
const MAX_LENGTH = 32;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Throws if the text is empty, whitespace-only, or longer than MAX_LENGTH.
function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("Entry text is empty or whitespace-only.");
  }
  if (text.length > MAX_LENGTH) {
    throw new Error(
      `Entry text is ${text.length} characters; the limit is ${MAX_LENGTH}.`,
    );
  }
}

function main(): void {
  validate(ENTRY_TEXT); // fail before touching the filesystem
  mkdirSync(OUTPUT_DIR, { recursive: true });
  // No trailing newline on purpose: the entry is judged partly on byte size,
  // so every byte counts and the file holds exactly the entry text.
  writeFileSync(OUTPUT_FILE, ENTRY_TEXT);
  console.log(`Wrote ${ENTRY_TEXT.length} characters to ${OUTPUT_FILE}`);
}

main();
