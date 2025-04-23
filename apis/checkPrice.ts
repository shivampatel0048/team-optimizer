import API from "@/lib/config";

export interface CropPrice {
    State: string;
    District: string;
    Market: string;
    Commodity: string;
    Variety: string;
    Grade: string;
    Arrival_Date: string;
    "Min Price": number;
    "Max Price": number;
    "Modal Price": number;
}

/**
 * Get crops by commodity name
 */
export const getCropsByCommodity = async (commodity: string): Promise<CropPrice[]> => {
    try {
        const response = await API.get(`/api/crops/commodity/${commodity}`);
        return response.data;
    } catch (error: any) {
        if (error.response?.data) {
            throw error.response.data;
        }
        throw new Error("Failed to fetch crop data");
    }
};

/**
 * Search crops by state and/or district
 */
export const searchCrops = async (params: {
    state?: string;
    district?: string;
}): Promise<CropPrice[]> => {
    try {
        const response = await API.get('/api/crops/search', { params });
        return response.data;
    } catch (error: any) {
        if (error.response?.data) {
            throw error.response.data;
        }
        throw new Error("Failed to search crops");
    }
};

/**
 * Get average price for a commodity in a specific location
 */
export const getAveragePrice = async (
    commodity: string,
    state?: string,
    district?: string
): Promise<{ average: number; min: number; max: number }> => {
    try {
        const response = await API.get('/api/crops/search', {
            params: { commodity, state, district }
        });

        const prices = response.data as CropPrice[];
        if (!prices.length) {
            throw new Error("No price data found");
        }

        const average = prices.reduce((sum, crop) => sum + crop["Modal Price"], 0) / prices.length;
        const min = Math.min(...prices.map(crop => crop["Min Price"]));
        const max = Math.max(...prices.map(crop => crop["Max Price"]));

        return { average, min, max };
    } catch (error: any) {
        if (error.response?.data) {
            throw error.response.data;
        }
        throw new Error("Failed to get average price");
    }
};
