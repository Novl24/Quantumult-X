*/
轻颜相机VIP
https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info|ulike-api3\.faceu\.mobi\/service\/settings\/v2\/ url script-response-body qyxjvip.js

hostname= commerce-api.faceu.mobi,ulike-api3.faceu.mobi,
*/

const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/service/settings/v2/";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.start_time = “1333333333”;
obj.data.end_time = “199999999”;
}
$done({body: JSON.stringify(obj)});
if ($request.url.indexOf(path2) != -1){
 obj.data.enable_vip = “false”;
}
$done({body: JSON.stringify(obj)});