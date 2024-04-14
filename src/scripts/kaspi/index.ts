import { CITIES } from "@src/app/constants/cities";
import { divideBbox } from "@src/utils/divideBbox";
import { type Response, featureSchema } from "./schemas";
import fetch from "node-fetch";
import { type Bbox } from "@src/types/bbox";

const headers = new Headers({
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Host': 'kaspi.kz',
    'Sec-Fetch-Dest': 'script',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Ch-Ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"macOS"',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'Cookie': 'sessionStarted=true; current-action-name=Index; user-device-type=mobile; kaspi-payment-region=18; maps_closest=null; maps_city=2; locale=ru-RU; ks.tg=54; locale=ru-RU; __tld__=null; maps_city_set_date=1713102651727'
});

const fetchPart = async (bbox: Bbox) => {
    const response = await fetch(`https://kaspi.kz/maps/red-partners/map.jsonp?is_modal=true&bbox=${bbox.join(',')}&zoom=16&callback=test`, {
        method: 'GET',
        headers,
    });

    const raw = await response.text();

    const unwrapped = JSON.parse(raw.replace('test(', '').replace(');', '')) as Response;

    const json = featureSchema.array().safeParse(unwrapped.data.features.filter(({ type }) => type === 'Feature'));

    if (!json.success) {
        throw new Error('Invalid response');
    }

    return json.data.filter(({ properties }) => properties.is_gold && properties.has_qr_terminal);
}

export const fetchKaspiPartners = async (city: keyof typeof CITIES) => {
    const { bbox } = CITIES[city];

    const bboxes = divideBbox(bbox);

    const items = (await Promise.all(bboxes.map(fetchPart))).flat();

    return items;
}
