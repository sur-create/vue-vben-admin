import{f as o}from"./antd-4273b3e7.js";function n(s,e="已成功复制到剪切板!"){navigator.clipboard.writeText(s).then(function(){e&&o.success(e)},function(t){o.error("复制失败!"+t.message)})}export{n as c};
