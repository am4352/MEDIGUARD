import puppeteer from 'puppeteer';

export const scrapeDrugInteraction = async (drug1, drug2) => {
    const url = `https://www.drugs.com/drug_interactions.html`;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        // Type drug 1 and press enter
        await page.type('#livesearch-interaction-basic', drug1);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(2000); // Wait for suggestions

        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        await page.waitForSelector('#interactions-table');

        // Type drug 2
        await page.click('#livesearch-interaction-basic');
        await page.type('#livesearch-interaction-basic', drug2);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(2000);

        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        // Wait for result table
        await page.waitForSelector('.interactions-reference');

        const interactionData = await page.evaluate(() => {
            const interaction = document.querySelector('.interactions-reference');
            return interaction ? interaction.innerText : 'No interaction info found.';
        });

        await browser.close();
        return interactionData;

    } catch (err) {
        await browser.close();
        throw err;
    }
};





