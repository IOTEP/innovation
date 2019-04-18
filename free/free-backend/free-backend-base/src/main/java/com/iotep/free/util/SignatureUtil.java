package com.iotep.free.util;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.MessageDigest;
import java.util.*;

/**
 * Created by yaqiang on 2018/12/26 上午9:49
 */

public class SignatureUtil {
    private Logger logger = LoggerFactory.getLogger(SignatureUtil.class);
    private final static char[] hexArray = "0123456789ABCDEF".toCharArray();

    public static String sign(Map<String, String> requestarams, String secretKey) {
        try {
            HashMap<String, String> signMap = new HashMap<String, String>();
            StringBuilder sb = new StringBuilder();
            List<String> keys = new ArrayList<>(requestarams.size());
            keys.addAll(requestarams.keySet());
            Collections.sort(keys);//字典序
            for (String key : keys) {
                sb.append(key).append("=").append(requestarams.get(key)).append("&");
            }
            sb.append("secretKey=").append(secretKey);
            byte[] md5Digest = getSHA1Digest(sb.toString());
            return bytesToHex(md5Digest);
        } catch (IOException e) {
            throw new RuntimeException("加密签名计算错误", e);
        }

    }

    private static byte[] getSHA1Digest(String data) throws IOException {
        byte[] bytes = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            bytes = md.digest(data.getBytes("UTF-8"));
        } catch (GeneralSecurityException gse) {
            throw new IOException(gse);
        }
        return bytes;
    }


    private static String bytesToHex(byte[] bytes) {
        char[] hexChars = new char[bytes.length * 2];
        for (int j = 0; j < bytes.length; j++) {
            int v = bytes[j] & 0xFF;
            hexChars[j * 2] = hexArray[v >>> 4];
            hexChars[j * 2 + 1] = hexArray[v & 0x0F];
        }
        return new String(hexChars);
    }

    public boolean verifySign(Map<String, String> requestarams, String secret, String requestSign) {
        String sign = "";
        try {
            sign = SignatureUtil.sign(requestarams, secret);
        } catch (Exception e) {
            logger.info("exception", e);
        }
        if (sign != null && sign.equals(requestSign)) {
            return true;
        }

        return false;
    }
}
