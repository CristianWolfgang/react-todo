const fetchInfo = (url,setObj) => { 
    fetch(url).
    then(res=>res.ok?res.json():"Error")
    .then(obj=>{
        setObj(obj);
    });
    
};
export default fetchInfo;
