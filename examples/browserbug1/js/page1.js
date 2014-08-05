window._last_tm = +new Date();
if (window.console) {
    console.log(0);
}

setTimeout(function(){
    console.log(3, +new Date() - window._last_tm + 's passed', window._html_data);
}, 0);

