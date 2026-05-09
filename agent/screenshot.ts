import { chromium } from "playwright";

export async function takeScreenshot(url: string): Promise<Buffer> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  const buffer = await page.screenshot({ fullPage: false });
  await browser.close();
  return buffer;
}
