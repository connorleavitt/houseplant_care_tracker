import axios from "axios";

const url = "http://localhost:3000/plant-profiles";

export const fetchProfiles = () => axios.get(url);
