import { expect, test } from "@playwright/test";

test("index page has expected h1", async ({ page }) => {
	await page.goto("/");
	await expect(
		page.getByRole("heading", {
			name: "Hit the ground running with Sveltekit, Typescript, Tailwind & Pug.",
		}),
	).toBeVisible();
});

//* This Highlighted
// vs. this not highlighted
