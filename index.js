let endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1"

function getRandom(){
    let random_str = Math.random().toString(5).substring(2,5) + Math.random().toString(10).substring(2,5);
    return random_str()
}

function geturl(){
    let url = document.getElementById("urlinput").value;
    let proto_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!proto_ok){
        let newURL = "http://" + url;
        return newURL;
    }else{
        return url;
    }
}

function genHash(){
    if(window.location.hash == ""){
        window.location.hash = getrandom();
    }
}

function shorturl(){
    let longurl = geturl();
    genHash();
    send_request(longurl);
}

function send_request(url){
    this.url = url;
    $.ajax({
        'url':endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
    })
}

let hashh = window.location.hash.substr(1)
if(window.location.hash != ""){
    $.getJSON(endpoint + '/' + hashh, function(data){
        data = data["result"];
        if(data != null){
            window.location.href = data;
            
        }
    })
}
