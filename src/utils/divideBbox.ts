import { type Bbox } from '@src/types/bbox';

export const divideBbox = (bbox: Bbox): Bbox[] => {
    const [minX, minY, maxX, maxY] = bbox;
    const middleX = (minX + maxX) / 2;
    const middleY = (minY + maxY) / 2;

    return [
        [minX, minY, middleX, middleY],
        [middleX, minY, maxX, middleY],
        [minX, middleY, middleX, maxY],
        [middleX, middleY, maxX, maxY],
    ];
};
