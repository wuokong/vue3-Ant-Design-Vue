// PHP解密函数
function fisker_decode_php_v2($s){
    $a = str_split($s,2);
    $s = '%' . implode('%',$a);
    return urldecode($s);
}
// 加密函数
function fisker_encode_v2(s) {
    var es = [],
        c = "",
        ec = "";
    s = s.split("");// 转为数组
    for (var i = 0, length = s.length; i < length; i++) {
        c = s[i];
        ec = encodeURIComponent(c);//URL转义
        if (ec == c) {
            ec = c.charCodeAt().toString(16);
            ec = ("00" + ec).slice(-2);
        }
        es.push(ec);
    }
    return es
        .join("")
        .replace(/%/g, "")
        .toUpperCase();
}

export default {
    fisker_decode_php_v2,
    fisker_encode_v2
}