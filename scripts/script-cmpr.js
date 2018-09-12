var HTMLParser;var HTMLParserInstalled=true;var HTMLParser_Elements=new Array();(function(){var k=/^<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,c=/^<\/(\w+)[^>]*>/,f=/(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;var e=b("br,col,hr,img");var a=b("blockquote,center,del,div,dl,dt,hr,iframe,ins,li,ol,p,pre,table,tbody,td,tfoot,th,thead,tr,ul");var h=b("a,abbr,acronym,b,big,br,cite,code,del,em,font,h1,h2,h3,h4,h5,h6,i,img,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var");var d=b("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");var j=b("checked,disabled,ismap,noresize,nowrap,readonly,selected");var g=b("script,style");HTMLParser=this.HTMLParser=function(m,u){var p,q,n,r=[],s=m;m=m.replace(/~~OPEN_HTML_BLOCK~~/gm,"~~START_HTML_BLOCK~~");m=m.replace(/~~END_HTML_BLOCK~~/gm,"~~CLOSE_HTML_BLOCK~~");if(m.match(/~~START_HTML_BLOCK~~/gm)){if(!JSINFO.htmlok){m=m.replace(/~~START_HTML_BLOCK~~|~~CLOSE_HTML_BLOCK~~/gm,"")}m=m.replace(/(<p.*?>)*\s*~~START_HTML_BLOCK~~\s*(<\/p>)*([\s\S]+)~~CLOSE_HTML_BLOCK~~\s*(<\/p>)*/gm,function(v,x,z,y,w){y=y.replace(/<\/?div.*?>/gm,"");y=y.replace(/<code>/gm,"");y=y.replace(/<\/code>/gm,"");y=y.replace(/</gm,"&lt;");y=y.replace(/<\//gm,"&gt;");return"~~START_HTML_BLOCK~~\n\n"+y+"\n\n~~CLOSE_HTML_BLOCK~~\n\n"})}m=m.replace(/(<sup\s+class=\"dwfcknote fckgL\d+\"\>fckgL\d+\s*\<\/sup\>)\<\/a\>/gm,function(x,w,v){return("</a>"+w)});r.last=function(){return this[this.length-1]};while(m){q=true;if(!r.last()||!g[r.last()]){if(m.indexOf("<!--")==0){p=m.indexOf("-->");if(p>=0){if(u.comment){u.comment(m.substring(4,p))}m=m.substring(p+3);q=false}}else{if(m.indexOf("</")==0){n=m.match(c);if(n){m=m.substring(n[0].length);n[0].replace(c,o);q=false}}else{if(m.indexOf("<")==0){n=m.match(k);if(n){m=m.substring(n[0].length);n[0].replace(k,l);q=false}}}}if(q){p=m.indexOf("<");var t=p<0?m:m.substring(0,p);m=p<0?"":m.substring(p);if(u.chars){u.chars(t)}}}else{m=m.replace(new RegExp("(.*)</"+r.last()+"[^>]*>"),function(v,w){w=w.replace(/<!--(.*?)-->/g,"$1").replace(/<!\[CDATA\[(.*?)]]>/g,"$1");if(u.chars){u.chars(w)}return""});o("",r.last())}if(m==s){throw"Parse Error: "+m}s=m}o();function l(v,y,z,w){if(a[y]){while(r.last()&&h[r.last()]){o("",r.last())}}if(d[y]&&r.last()==y){o("",y)}w=e[y]||!!w;if(!w){r.push(y)}if(u.start){var x=[];z.replace(f,function(B,A){var C=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:j[A]?A:"";x.push({name:A,value:C,escaped:C.replace(/(^|[^\\])"/g,'$1\\"')})});if(u.start){u.start(y,x,w)}}}function o(v,x){if(!x){var y=0}else{for(var y=r.length-1;y>=0;y--){if(r[y]==x){break}}}if(y>=0){for(var w=r.length-1;w>=y;w--){if(u.end){u.end(r[w])}}r.length=y}}};function b(o){var n={},l=o.split(",");for(var m=0;m<l.length;m++){n[l[m]]=true}return n}})();function HTMLParser_test_result(a){var d="";for(i=0;i<a.length;i++){var c=a.charAt(i);if(a.charCodeAt(i)==10){c="\\n"}if(a.charCodeAt(i)==32){c="SP"}var b=c+" ";d+=b;if(a.charCodeAt(i)==10){d+="\n"}}if(!confirm(d)){return false}return true}function hide_backup_msg(){document.getElementById("backup_msg").style.display="none";return false}function show_backup_msg(a){document.getElementById("backup_msg").style.display="block";document.getElementById("backup_msg_area").innerHTML="Backed up to: "+a;return false}function remove_draft(){}function dwedit_draft_delete(){}function setEdHeight(a){a=parseInt(a);document.cookie="ckgEdht="+a+';expires="";path='+JSINFO.doku_base}function ckgd_setImgPaste(b){var a=JSINFO.ckgEdPaste?JSINFO.ckgEdPaste:"";if(a=="on"){b="off"}else{b="on"}JSINFO.ckgEdPaste=b;document.cookie="ckgEdPaste="+b+';expires="Thu, 18 Dec 2575 12:00:00 UTC";path='+JSINFO.doku_base;alert(LANG.plugins.ckgedit.ckg_paste_restart+" "+LANG.plugins.ckgedit[b])}function GetE(a){return document.getElementById(a)}var dokuBase=location.host+DOKU_BASE;if(window.getSelection!=undefined){var doku_ckg_getSelection=window.getSelection;window.getSelection=function(a){if(!a){a=GetE("wiki__text")}return doku_ckg_getSelection(a)}}function ckgedit_seteditor_priority(a,c,b){var e={Y:"Dokuwiki",N:"CKEditor"};if(typeof a==="undefined"){if(b[0].checked){a=b[0].value}else{if(b[1].checked){a=b[1].value}}}var d="dw_val="+a;d+="&call=cked_selector";d+="&dwp_client="+c;jQuery.post(DOKU_BASE+"lib/exe/ajax.php",d,function(f){if(f=="done"){if(!a){alert(LANG.plugins.ckgedit.dwp_not_sel)}else{alert(LANG.plugins.ckgedit.dwp_updated+e[a])}}else{alert(LANG.plugins.ckgedit.dwp_save_err+f)}},"html")}function ckged_get_unlink_size(b){var a="call=cked_deletedsize";a+="&cked_delid="+b;jQuery.post(DOKU_BASE+"lib/exe/ajax.php",a,function(c){if(c){JSINFO.ckg_del_sz=c}else{}},"html")}function ckged_setmedia(d,a,b){var c="call=cked_upload";c+="&ckedupl_id="+d;if(a){c+="&ckedupl_del=D&delsize="+JSINFO.ckg_del_sz}jQuery.post(DOKU_BASE+"lib/exe/ajax.php",c,function(e){if(e){if(b){b.postMessage(JSINFO.doku_url,JSINFO.doku_url)}console.log(e)}else{}},"html")}jQuery(document).ready(function(){if(JSINFO.hide_captcha_error=="hide"){jQuery("div.error").hide()}});jQuery(document).ready(function(){jQuery("#editor_height").keydown(function(a){if(a.which==13){a.preventDefault()}});$dokuWiki=jQuery(".dokuwiki");jQuery(".editbutton_table button").click(function(){var a=this.form;jQuery("<input />").attr("type","hidden").attr("name","mode").attr("value","dwiki").appendTo(jQuery(a));jQuery("<input />").attr("type","hidden").attr("name","fck_preview_mode").attr("value","nil").appendTo(jQuery(a))});if(typeof(JSINFO.dbl_click_auth!=="undefined")&&JSINFO.dbl_click_auth==""){return}if(!JSINFO.ckg_dbl_click){return}if(jQuery(".editbutton_section",$dokuWiki).length>0){jQuery('[class^="sectionedit"], div[class^="level"]',$dokuWiki).dblclick(function(){var a=jQuery(this).nextAll(".editbutton_section:eq(0)").children("form:eq(0)");jQuery("<input />").attr("type","hidden").attr("name","mode").attr("value","dwiki").appendTo(jQuery(a));jQuery("<input />").attr("type","hidden").attr("name","fck_preview_mode").attr("value","nil").appendTo(jQuery(a));a.submit()})}if(JSINFO.ckg_template.match(/bootstrap/)&&jQuery("div.editButtons").length>0){jQuery("div.editButtons input").each(function(a){if(jQuery(this).hasClass("btn-success")){jQuery(this).removeClass("btn-success")}if(jQuery(this).hasClass("btn-danger")){jQuery(this).removeClass("btn-danger")}})}});function ckg_edit_mediaman_insert(h,c,a,f){var k,d,n,j;var m=a.substring(1).split("&");k="detail";for(var g in m){var b=m[g];if(b.match(/^\d+$/)){d=b}else{if(b.match(/^\w+$/)){k=b}}}switch(f){case"2":j="medialeft";break;case"3":j="mediacenter";break;case"4":j="mediaright";break;default:j="";break}var e=CKEDITOR.instances.wiki__text._.filebrowserFn;var l=DOKU_BASE+"lib/exe/fetch.php?media="+c;CKEDITOR.tools.callFunction(e,l,function(){var o=this.getDialog();if(o.getName()=="image"){if(j!=null){o.getContentElement("info","cmbAlign").setValue(j)}if(k!=null){o.getContentElement("info","cmbLinkType").setValue(k)}if(d!=null){o.getContentElement("info","txtWidth").setValue(d);o.dontResetSize=true}}})}function ckg_edit_mediaman_insertlink(a,e,c,b){var d=CKEDITOR.instances.wiki__text._.filebrowserFn;CKEDITOR.tools.callFunction(d,e,function(){var f=this.getDialog();if(f.getName()=="link"){f.getContentElement("info","media").setValue(e)}})}function getCookie(a){var b=new RegExp(a+"=([^;]+)");var c=b.exec(document.cookie);return(c!=null)?unescape(c[1]):null};