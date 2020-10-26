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