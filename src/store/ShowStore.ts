import { defineStore } from 'pinia';
import { Show } from "../services/models/Show.ts";

export const useShowStore = defineStore({
    id: 'showStore',
    state: () => ({
        shows: [] as Show[]
    }),
    getters: {
        getShowById: (state) => (id: number) => {
            return state.shows.find(show => show.id === id);
        },
        getShows: (state) => {
            return state.shows;
        }
    },
    actions: {
        addShow(show: Show) {
            this.shows.push(show);
        },
        updateShow(updatedShow: Show) {
            const index = this.shows.findIndex(show => show.id === updatedShow.id);
            if (index !== -1) {
                this.shows[index] = updatedShow;
            }
        },
        deleteShow(id: number) {
            this.shows = this.shows.filter(show => show.id !== id);
        }
    },
    persist: true,
});
