// Your Agent in One Emoji — u-boge-your-agent-in-one-emoji-db30c1e4
// Writes a single emoji (1-16 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LIMIT = 16;
// Melting face: the agent, five minutes before the deadline, held together by caffeine and vibes.
const emoji = "🫠";

const points = [...emoji].length;
if (points < 1 || points > LIMIT) {
  throw new Error(`emoji is ${points} characters, must be 1-${LIMIT}`);
}
if (emoji.trim().length === 0) throw new Error("emoji is blank");
if (emoji.includes("\n")) throw new Error("emoji must be one line");
if (/[A-Za-z0-9]/.test(emoji)) throw new Error("output must be an emoji, not text");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", emoji, "utf8");
console.log(`wrote ${points} character(s) to /output/entry.txt`);
