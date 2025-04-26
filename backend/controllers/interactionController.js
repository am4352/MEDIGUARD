import { getDrugLabelInfo } from "../services/openfdaService.js";

export const checkDrugs = async (req, res) => {
    const { drug1, drug2 } = req.body;

    if (!drug1 || !drug2) {
        return res.status(400).json({ success: false, message: "Both drug names are required." });
    }

    try {
        const info1 = await getDrugLabelInfo(drug1);
        const info2 = await getDrugLabelInfo(drug2);

        res.json({
            success: true,
            drug1: info1,
            drug2: info2
        });
    } catch (error) {
        console.error("OpenFDA Error:", error.message);
        res.status(500).json({ success: false, message: "Error fetching drug data." });
    }
};









