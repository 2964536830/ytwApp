const isTest = true
const BASE_API = isTest ? "https://dev.peachwork.com.cn" : "https://api.peachwork.com.cn"
let getUrl = (body) => {
    let b = '';
    for (let bo in body) {
        b += `&${bo}=${body[bo]}`;
    }
    if (b.substr(0, 1) == '&') b = b.substr(1);
    return `${b}`;
};

export const FetchData = data => {
    let {url, body, method = "POST"} = data
    return new Promise((resolve, reject) => {
        url = BASE_API + url
        console.log(getUrl(body))
        fetch(url, {
            body: JSON.stringify(body),
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                console.log(res)
                throw new Error('error')
            })
            .then(res => {
                console.log(res,'请求的data')
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
