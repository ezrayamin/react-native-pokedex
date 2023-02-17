import axios from "axios";

export async function fetchSelectedType(url: string) {
    try {
        const fetch = await axios.get(url)
        const response = await fetch.data;

        return response
    }
    catch (err) {
        return {}
    }
}
