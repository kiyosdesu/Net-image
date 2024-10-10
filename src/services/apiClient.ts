import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: "dfxOKm05iwxDrtQG_87Vg2LWOcMVqPUjlVlJiegCqTs",
  },
});
