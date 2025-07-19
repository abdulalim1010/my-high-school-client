import axios from "axios";

const axiousInstance = axios.create({
  baseURL:`http://localhost:3000`
})
const UseAxious = () => {
  return axiousInstance;
};

export default UseAxious;
