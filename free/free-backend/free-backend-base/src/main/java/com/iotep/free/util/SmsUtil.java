package com.iotep.free.util;

import com.alibaba.druid.util.StringUtils;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;

import java.util.Map;
import java.util.Random;

/**
 * Created by yongwei7 on 2019/4/29.
 */
public class SmsUtil {
    //static final String accessKeyId = "LTAIyrDJIbvsln";
    //static final String accessKeySecret = "hnSMoKj4dhGZd6WVmXN3G3Iv2wc";
    static final String accessKeyId = "LTAISqSzQo1pDbaS";
    static final String accessKeySecret = "j9DGjNiG1PtfvVYot5DMKlG8bg6SaI";

    public static int sendSmsCode(String phoneNumber, String code) {
        DefaultProfile profile = DefaultProfile.getProfile("default", accessKeyId, accessKeySecret);
        IAcsClient client = new DefaultAcsClient(profile);
        int succ = -1;

        CommonRequest request = new CommonRequest();
        //request.setProtocol(ProtocolType.HTTPS);
        request.setMethod(MethodType.POST);
        request.setDomain("dysmsapi.aliyuncs.com");
        request.setVersion("2017-05-25");
        request.setAction("SendSms");

        request.putQueryParameter("PhoneNumbers", phoneNumber);
        //request.putQueryParameter("SignName", "免费raffle");
        request.putQueryParameter("SignName", "IT技术");
        //request.putQueryParameter("TemplateCode", "SMS_164505026");
        request.putQueryParameter("TemplateCode", "SMS_1448457651943");
        request.putQueryParameter("TemplateParam","{\"code\":"+code+"}");

        try {
            CommonResponse response = client.getCommonResponse(request);
            if(response != null && !StringUtils.isEmpty(response.getData())){
                JSONObject jsonObject = JSON.parseObject(response.getData());
                String isOk = jsonObject.getString("Code");
                System.out.println(isOk);
                if(isOk.equals("OK")){
                    succ = 0;
                }
            }
            System.out.println(response.getData());
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
        }

        return succ;
    }

    /**
     * Map 转 json 字符串的简单实现.
     *
     * @param map the map
     *
     * @return the json string
     */
    static String toJsonStr(final Map<String, String> map) {
        if (null == map || map.isEmpty()) {
            return null;
        }

        final StringBuilder sb = new StringBuilder();
        sb.append('{');
        for (final Map.Entry<String, String> entry : map.entrySet()) {
            sb.append('"')
                    .append(entry.getKey().replace("\"", "\\\""))
                    .append('"')
                    .append(':')
                    .append('"')
                    .append(entry.getValue().replace("\"", "\\\""))
                    .append('"')
                    .append(',');
        }
        sb.deleteCharAt(sb.length() - 1);
        sb.append('}');
        return sb.toString();
    }

    //获取随机验证码
    public static String getCode(){
        //开始生成随机数字 -- 验证码
        StringBuffer buffer = new StringBuffer();
        Random random = new Random(); //随机数字
        for(int i =0;i<6 ;i++) {
            //生成一个6位数的随机数
            buffer.append(random.nextInt(10));//范围0到10，不包括10 ；0-9
        }
        return buffer.toString();
    }
}
