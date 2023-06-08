/*let para = document.getElementById('para');
para.addEventListener('click', function run () {
    alert('MouseInside')
});
function hide() {
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display != 'none') {
        para.style.display = 'none';
    }
    else {
        para.style.display = 'block';
    }
    
}*/
/*function getnewquotes() {
     let randnum = Math.floor(Math.random()*10);



fetch('https://type.fit/api/quotes')
.then( (apidata) => {
    return apidata.json();
})
.then( (actualdata) => {
    const myquote = (actualdata[randnum].text);
    document.getElementById('quote').innerHTML = myquote;
    const myauthor =  (actualdata[randnum].author);
    document.getElementById('author').innerHTML = myauthor;
})
.catch((error) => {
    console.log(` The ERROR: ${error}`);
});

}*/
let btn = document.getElementById('btn');
btn.addEventListener('click', function getnewquotes() {
    let randnum = Math.floor(Math.random()*10);



fetch('https://type.fit/api/quotes')
.then( (apidata) => {
   return apidata.json();
})
.then( (actualdata) => {
   const myquote = (actualdata[randnum].text);
   document.getElementById('quote').innerHTML = myquote;
   const myauthor =  (actualdata[randnum].author);
   document.getElementById('author').innerHTML = myauthor;
})
.catch((error) => {
   console.log(` The ERROR: ${error}`);
});

});


//let randnum = Math.floor(Math.random()*10);



//fetch('https://type.fit/api/quotes')
//.then( (apidata) => {
    //return apidata.json();
//})
//.then( (actualdata) => {
    //const myquote = (actualdata[randnum].text);
    //document.getElementById('quote').innerHTML = myquote;
    //const myauthor =  (actualdata[randnum].author);
    //document.getElementById('author').innerHTML = myauthor;
//})
//.catch((error) => {
    //console.log(` The ERROR: ${error}`);
//});