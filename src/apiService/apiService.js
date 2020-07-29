const API_URL = "https://api.unsplash.com/search/photos?client_id="; //&page=1&query=office"
const ACCESS_KEY = "YlVLOSOOumnmsVYlh4JStIFOQ5vCTfE87OQIY0rfZzI";
export const HttpService = (query, pageno = 1) =>{
    const url = API_URL + ACCESS_KEY + "&page="+ pageno+"&query="+query;
    const responsedata = fetch(url)
            .then(response => response.json())
            .then(data => data);
    return responsedata;
}