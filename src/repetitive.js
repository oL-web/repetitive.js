import * as ajax from "repetitive.ajax";
import * as classes from "repetitive.classes";

function rptv(selector){
  
    return [].slice.call(document.querySelectorAll(selector));
    
};

rptv.ajax = ajax.default;
rptv.classes = classes.default;

export default rptv;