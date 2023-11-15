import axios from "axios";
import {Show} from "./models/Show.ts";
import {removeHtmlTags} from "../utils/TextUtils.ts";

const apiEndpoint = "https://api.tvmaze.com"

export const searchShows = async (query: string): Promise<Show[]> => {
    const response = await axios.get(`${apiEndpoint}/search/shows?q=${query}`)
    return response.data.map((item: any) => {
        const show = item.show
        return new Show(show.id, show.name, show.image?.medium, show.premiered, show.averageRuntime, show.rating.average, removeHtmlTags(show.summary), show.url)
    })
}
