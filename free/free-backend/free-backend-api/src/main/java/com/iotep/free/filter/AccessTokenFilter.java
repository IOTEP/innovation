/*
package com.iotep.free.filter;

import com.alibaba.druid.util.StringUtils;
import com.alibaba.fastjson.JSONObject;
import org.omg.CORBA.portable.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StreamUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

import static com.netflix.zuul.context.RequestContext.getCurrentContext;
import static org.springframework.util.ReflectionUtils.rethrowRuntimeException;

*/
/**
 * 登录拦截器,未登录的用户直接返回未登录数据。
 * <p>
 * 只拦截post方式的请求
 * </p>
 *
 * @author cml
 *
 *//*

public class AccessTokenFilter extends Filter {

    private static final String PARAM_TOKEN = "token";

    @Value("${system.config.accessTokenFilter.ignore}")
    private String ignoreUrl;

    @Autowired
    private AuthApi authApi;

    private ResponseHandler responseHandler;

    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        InputStream in = request.getInputStream();

        String method  = (httpServletRequest.getMethod());
        Map<String, String[]> map = httpServletRequest.getParameterMap();
        ServletRequest requestWrapper = null;
        //map.put("test",new String[]{"test"});


        String dn = request.getServerName();
        Map<String, Object> extraParams = new HashMap<String, Object>();
        extraParams.put("dn", dn);
        //利用原始的request对象创建自己扩展的request对象并添加自定义参数
        RequestParameterWrapper requestParameterWrapper = new RequestParameterWrapper(request);
        requestParameterWrapper.addParameters(extraParams);
        chain.doFilter(requestParameterWrapper, servletResponse);

    }

    @Override
    public Object run() {
        try {

            RequestContext context = RequestContext.getCurrentContext();
            HttpServletRequest request = context.getRequest();
            InputStream in = context.getRequest().getInputStream();

			*/
/*
			RequestContext context = getCurrentContext();

			InputStream in = (InputStream) context.get("requestEntity");
			if (in == null) {
				in = context.getRequest().getInputStream();
			}

			String token = context.getRequest().getParameter(PARAM_TOKEN);

			logger.info("accessToken:" + token);
			logger.info("params:" + context.getRequestQueryParams());
			logger.info("contentLength:" + context.getRequest().getContentLength());
			logger.info("contentType:" + context.getRequest().getContentType());
			*//*


            String body = StreamUtils.copyToString(in, Charset.forName("UTF-8"));
            JSONObject json = JSONObject.fromObject(body);
            json.put("userId", "8");

            String token = json.getString("token");
            logger.info("body:" + body);

            // token 为空不处理
            if (StringUtils.isNotBlank(token)) {
                AuthResult authResult = authApi.parseToken(token);
                // 校验成功
                if (authResult.isSuccess()) {
                    //String body = StreamUtils.copyToString(in, Charset.forName("UTF-8"));
                    logger.info("body:" + body);
                    //body = StringUtils.replace(body, PARAM_TOKEN + "=" + token, PARAM_TOKEN + "=" + authResult.getToken());
                    json.put("token", authResult.getToken());
                    logger.info("转换后的body：" + body);

                    String newBody = json.toString();
                    System.out.println("newBody:" + newBody);
                    // context.set("requestEntity", new
                    // ByteArrayInputStream(body.getBytes("UTF-8")));
                    final byte[] reqBodyBytes = newBody.getBytes();
                    context.setRequest(new HttpServletRequestWrapper(getCurrentContext().getRequest()) {
                        @Override
                        public ServletInputStream getInputStream() throws IOException {
                            return new ServletInputStreamWrapper(reqBodyBytes);
                        }

                        @Override
                        public int getContentLength() {
                            return reqBodyBytes.length;
                        }

                        @Override
                        public long getContentLengthLong() {
                            return reqBodyBytes.length;
                        }
                    });
                    return null;
                }
            }
            if (responseHandler != null) {
                context.getResponse().setCharacterEncoding("UTF-8");
                context.setResponseStatusCode(responseHandler.getResponseCode());
                context.setResponseBody(responseHandler.getResponseBody(null, null));
            }

            context.setSendZuulResponse(false);
        } catch (IOException e) {
            rethrowRuntimeException(e);
        }
        return null;
    }

    @Override
    public boolean shouldFilter() {
        HttpServletRequest req = RequestContext.getCurrentContext().getRequest();
        logger.info("" + ignoreUrl + "," + req.getRequestURI().toString());
        return StringUtils.equalsIgnoreCase(req.getMethod(), "post") && !StringUtils.contains(ignoreUrl, req.getRequestURI().toString());
    }

    public ResponseHandler getResponseHandler() {
        return responseHandler;
    }

    public void setResponseHandler(ResponseHandler responseHandler) {
        this.responseHandler = responseHandler;
    }


    @Override
    public void destroy() { }


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }


}

*/
