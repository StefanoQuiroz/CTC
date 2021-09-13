import axios from 'axios';

const getData = async () => {
    try{
        const getDatos = await axios.get("https://ctc-backend-staging.herokuapp.com/api/courses/");
        return getDatos;
    } catch(error){
        console.log("Error", error);
    }
}

export default getData;