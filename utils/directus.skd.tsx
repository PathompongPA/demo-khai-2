import { createDirectus, readItems, rest } from "@directus/sdk";

async function getData(field: string, option: any) {
    const API_URL = process.env.API_URL || ""
    const directus = createDirectus(API_URL).with(rest());
    return directus.request(
        readItems(field, option)
    );
}

export { getData }