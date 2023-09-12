export const Api = async ({path='', method='GET', data={}}) => {
    
    if(method!=='GET'){
        console.error('only accepts get requests');
        return null;
    }

    let uri = "http://127.0.0.1:5000/"+path;

    if(Object.keys(data).length>0){
        let params = ['?'];

        for(let key in data) {
            params.push(key.concat('=', data[key]));
            console.log(key, key.concat('=', data[key]), params)
        };

        uri = uri.concat(...params)
    };
    console.log('request uri', uri, data, Object.keys(data).length);

    let response = await fetch(uri, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Headers": "*",
        },
    }
    ).then(res => res.json());
    console.log(response)
    
    return response
};