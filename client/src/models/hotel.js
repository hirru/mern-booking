import axios from "axios";
export const hotel = {
  state: {
    hotel: [],
    loading: false,
  },
  reducers: {
    setHotel(state, payload) {
      return {
        ...state,
        hotel: payload,
      };
    },
    setLoading(state, payload) {
      return {
        ...state,
        loading: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getHotel(hotelId) {
      dispatch.hotel.setLoading(true);
      const res = await axios.get(`/hotels/find/${hotelId}`);
      dispatch.hotel.setHotel(res.data);
      dispatch.hotel.setLoading(false);
    },
  }),
};
