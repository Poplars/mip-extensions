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
        var $element = $(el);
        var html = [];
        switch (adtype) {
            case '58che':
                if(!/micromessenger/.test(UA)){
                    html.push('<script type="text/javascript">');
                    html.push('write_ad("main2014_t1");');
                    html.push('tanx_s = document.createElement("script");');
                    html.push('tanx_s.type = "text/javascript";');
                    html.push('tanx_s.charset = "utf-8";');
                    html.push('tanx_s.src = "//pics.xgo-img.com.cn/oddjs/m/index.js');
                    html.push('tanx_h = document.getElementsByTagName("head")[0];');
                    html.push('if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);');
                    html.push('</script>');
                }
                break;

            case 'google' :
                html.push('<ins class="adsbygoogle"');
                html.push('     style="display:block"');
                html.push('     data-ad-client="ca-pub-2743127670892157"');
                html.push('     data-ad-slot="' + token + '"');
                html.push('     data-ad-format="auto">');
                html.push('</ins>');
                html.push('<script>');
                html.push('(adsbygoogle = window.adsbygoogle || []).push({});');
                html.push('</script>');
                html.push('<script type="text/javascript">');
                html.push('google_s = document.createElement("script");');
                html.push('google_s.type = "text/javascript";');
                html.push('google_s.id = "google-adsense-' + token + '";');
                html.push('google_s.async = true;');
                html.push('google_s.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";');
                html.push('google_h = document.getElementsByTagName("head")[0];');
                html.push('if(google_h)google_h.insertBefore(google_s,google_h.firstChild);');
                html.push('</script>');
                break;
        }
        $element.append(html.join(''));
    };
    return customElement;
});
