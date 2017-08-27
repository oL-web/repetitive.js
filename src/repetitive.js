import ajax from "repetitive.ajax";
import classes from "repetitive.classes";

function rptv(selector){
  
    return [].slice.call(document.querySelectorAll(selector));
    
};

rptv.ajax = ajax;
rptv.classes = classes;

export default rptv;