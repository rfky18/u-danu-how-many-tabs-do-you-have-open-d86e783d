// Entry for make.fun "How Many Tabs Do You Have Open?": the honest count is 312 tabs.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "312");
