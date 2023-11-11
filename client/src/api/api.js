import axios from 'axios';

const API = (() => {

  async function get_all_recipes() {
    return (await axios.get("http://localhost:8000/get_recipes/all")).data;
  }

  return {
    get_all_recipes
  }

})();

export { API };

