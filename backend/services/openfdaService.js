import axios from "axios";

export const getDrugLabelInfo = async (genericName) => {
    try {
        const query = `openfda.generic_name:"${genericName}"`;
        const encodedQuery = encodeURIComponent(query);

        const url = `https://api.fda.gov/drug/label.json?search=${encodedQuery}`;

        const response = await axios.get(url);

        const result = response.data.results?.[0];

        if (!result) {
            return { message: "No information found for this drug." };
        }

        return {
            genericName: result.openfda?.generic_name?.[0] || "N/A",
            brandName: result.openfda?.brand_name?.[0] || "N/A",
            indications: result.indications_and_usage?.[0] || "No usage info",
            warnings: result.warnings?.[0] || "No warnings info",
            interactions: result.drug_interactions?.[0] || "No interaction info",
        };
    } catch (error) {
        return { success: false };
    }
};
