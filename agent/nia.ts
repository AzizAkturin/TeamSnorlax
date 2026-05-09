import { execSync } from "child_process";

const NIA_API_KEY = process.env.NIA_API_KEY!;

function niaEnv() {
  return { ...process.env, NIA_API_KEY };
}

export function searchCodebase(query: string): string {
  try {
    const result = execSync(`nia search "${query}"`, {
      cwd: process.cwd(),
      encoding: "utf-8",
      timeout: 15000,
      env: niaEnv(),
    });
    return result.trim();
  } catch {
    return "";
  }
}

export function getFileContext(filePath: string): string {
  try {
    const result = execSync(`nia context "${filePath}"`, {
      cwd: process.cwd(),
      encoding: "utf-8",
      timeout: 15000,
      env: niaEnv(),
    });
    return result.trim();
  } catch {
    return "";
  }
}

export function buildCodebaseContext(focusAreas: string[]): string {
  const sections: string[] = [];

  for (const area of focusAreas) {
    const result = searchCodebase(area);
    if (result) {
      sections.push(`### Context for "${area}":\n${result}`);
    }
  }

  return sections.join("\n\n");
}
