import { scrapeDrugInteraction } from '../services/scrapeServices.js';

export const getDrugInteraction = async (req, res) => {
    const { drug1, drug2 } = req.body;

    if (!drug1 || !drug2) {
        return res.status(400).json({ error: 'Both drug names are required.' });
    }

    try {
        const data = await scrapeDrugInteraction(drug1, drug2);
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Scraping error:", error.message);
        res.status(500).json({ error: 'Failed to fetch interaction data.' });
    }
};








