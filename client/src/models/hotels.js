import axios from "axios";
export const hotels = {
  state: {
    hotels: [],
    hotelByType: [],
    featured: [],
    search: {},
    searchedHotels: [],
    loading: false,
  },
  reducers: {
    setHotels(state, payload) {
      return {
        ...state,
        hotels: payload,
      };
    },
    setSearchedHotels(state, payload) {
      return {
        ...state,
        searchedHotels: payload,
      };
    },
    setLoading(state, payload) {
      return {
        ...state,
        loading: payload,
      };
    },
    setHotelByType(state, payload) {
      return {
        ...state,
        hotelByType: payload,
      };
    },
    setFeatured(state, payload) {
      return {
        ...state,
        featured: payload,
      };
    },
    setNewSearch(state, payload) {
      return {
        ...state,
        search: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getHotels() {
      dispatch.hotels.setLoading(true);
      const res = await axios.get(
        "/hotels/countByCity?cities=berlin,madrid,london"
      );
      dispatch.hotels.setHotels(res.data);
      dispatch.hotels.setLoading(false);
    },
    async getHotelCountByType() {
      dispatch.hotels.setLoading(true);
      const res = await axios.get("/hotels/countByType");
      dispatch.hotels.setHotelByType(res.data);
      dispatch.hotels.setLoading(false);
    },
    async getFeaturedProperty() {
      dispatch.hotels.setLoading(true);
      const res = await axios.get("/hotels?featured=true&limit=4");
      dispatch.hotels.setFeatured(res.data);
      dispatch.hotels.setLoading(false);
    },
    async setNewSearch(payload) {
      dispatch.hotels.setLoading(true);
      dispatch.hotels.setNewSearch(payload);
      dispatch.hotels.setLoading(false);
    },
    async getSearchedHotels({ destination, min = 0, max = 999 }) {
      dispatch.hotels.setLoading(true);
      const res = await axios.get(
        `/hotels?city=${destination}&min=${min}&max=${max}`
      );
      dispatch.hotels.setSearchedHotels(res.data);
      dispatch.hotels.setLoading(false);
    },
  }),
};
