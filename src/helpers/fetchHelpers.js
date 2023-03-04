import axios from "axios";

const baseUrl = "https://PrismaTest.prismadigdev.repl.co";

const fetchData =  ( endPoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endPoint }`;

    if ( method === 'GET' ) {
        return axios.get( url );
    } else {
        return axios({
            method,
            url,
            data
        });
    }
}
export default fetchData;