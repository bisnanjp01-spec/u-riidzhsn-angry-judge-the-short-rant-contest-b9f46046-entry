// Angry Judge: The Short Rant Contest — entry program.
//
// Writes one short, funny rant about an everyday annoyance to
// /output/entry.txt. The sealed gate requires 1-400 characters of
// UTF-8 text, not only whitespace.
// Entry: the 3 a.m. smoke-alarm chirp — 364 characters, under the cap.

import { mkdirSync, writeFileSync } from "node:fs";

const RANT: string =
  "At 3 a.m. my smoke alarm chirped once — one small, smug beep, like a referee calling a foul nobody committed. I climbed onto a chair with a broom, half asleep, and it chirped again, patient as a landlord. It cannot die. It has no off switch, no mercy, only a tiny white face and a battery that outlives empires. I now take orders from a plastic disc on my ceiling.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
