/**
* 58车mip改造 第三方联盟广告插件
* @file 插入联盟广告
* @author yang.shuqiang@58che.com
* @version 1.0.0
*/
define(function (require) {
    var $ = require('zepto');
    var UA = navigator.userAgent.toLowerCase();
    var customElement = require('customElement').create();
    customElement.prototype.createdCallback = function () {
        var el = this.element;
        var adtype = el.getAttribute('type');
        var token = el.getAttribute('token');
        var adFile = el.getAttribute('src');
        var $element = $(el);
        var html = [];
        switch (adtype) {
            case '58che':
                if(!/micromessenger/.test(UA)){
                    html.push('<script type="text/javascript">');
                    html.push('write_ad("'+token+'");');
                    html.push('tanx_s = document.createElement("script");');
                    html.push('tanx_s.type = "text/javascript";');
                    html.push('tanx_s.charset = "utf-8";');
                    html.push('tanx_s.src = "'+adFile+'"');
                    html.push('tanx_h = document.getElementsByTagName("head")[0];');
                    html.push('if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);');
                    html.push('</script>');
                }
                break;

            case 'baidu' :
                break;
        }
        $element.append(html.join(''));
    };
    return customElement;
});
