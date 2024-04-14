const KASPI_CATEGORIES_TO_MCC: Record<number, number[]> = {
    27: [5411],
    29: [5541],
    30: [4722],
    26: [5812],
    12: [5732],
    2: [5621],
    1: [5611],
    3: [5661],
    4: [5641],
    5: [5941],
    6: [5948],
    7: [5944],
    8: [5977],
    9: [5719],
    10: [7230, 5912],
    25: [5533],
    28: [7999],
};

export const kaspiCategoriesToMcc = (category: number) => {
    return KASPI_CATEGORIES_TO_MCC[category];
}

const HALYK_CATEGORIES_TO_MCC: Record<string, number[]> = {
    "953": [7538, 7531],
    "957": [5941],
    "959": [5411],
    "961": [5641],
    "962": [5812, 5814],
    "970": [8021],
    "972": [5211, 5231, 5251],
    "974": [8211, 8351],
    "981": [8062, 8099],
    "982": [5912],
    "983": [5065, 5199],
    "990": [5732, 7622],
    "996": [4900],
    "1004": [5712, 5719, 5722],
    "1010": [7230],
    "1011": [5735, 5942, 5111],
    "1013": [5611, 5621, 5641, 5661],
    "1015": [5977]
};

export const halykCategoriesToMcc = (category: string) => {
    return HALYK_CATEGORIES_TO_MCC[category];
}
