package com.iotep.free.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by yongwei7 on 2019/4/25.
 */

@Component
@WebFilter(filterName = "ParamsFilter" , urlPatterns = "/*")
public class ParamsFilter implements Filter{

    @Override
    public void doFilter(ServletRequest arg0, ServletResponse arg1,
                         FilterChain arg2) throws IOException, ServletException {
        ParameterRequestWrapper parmsRequest = new ParameterRequestWrapper(
                (HttpServletRequest) arg0);
        arg2.doFilter(parmsRequest, arg1);
    }

    /**
     * 响应
     *
     * @param response
     * @param i
     *            类型
     * @throws IOException
     */
    /*
    private void toResponse(HttpServletResponse response, int i, HttpServletRequest request) throws IOException {
        HttpServletResponse httpResponse = response;
        httpResponse.setCharacterEncoding("UTF-8");
        httpResponse.setContentType("application/json; charset=utf-8");
        httpResponse.setHeader("Access-Control-Allow-Origin", "*");
        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
        httpResponse.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,DELETE,PATCH,PUT");
        httpResponse.setHeader("Access-Control-Max-Age", "3600");
        httpResponse.setHeader("Access-Control-Allow-Headers",
                "Origin,X-Requested-With,x-requested-with,X-Custom-Header," + "Content-Type,Accept,Authorization");
        String method = request.getMethod();
        if ("OPTIONS".equalsIgnoreCase(method)) {
            logger.info("OPTIONS请求");
            httpResponse.setStatus(HttpServletResponse.SC_ACCEPTED);
        }

        ObjectMapper mapper = new ObjectMapper();
        PrintWriter writer = httpResponse.getWriter();
        // if (i==1)
        // writer.write(mapper.writeValueAsString(ResultEnum.RESTARTLOGIN));
        if (i == 2)
            writer.write(mapper.writeValueAsString(ResultEnum.INVALID_SINGTIMEOUT));
        else if (i == 0)
            writer.write(mapper.writeValueAsString(ResultEnum.INVALID_PERMISSION_DENIED));

        writer.close();

        if (writer != null)
            writer = null;
    }
    */

    /**
     * 检测请求同token信息
     *
     * @param request
     * @return
     */
    /*
    private ResultEnum checkHTTPBasicAuthorize(ServletRequest request) {
        try {
            HttpServletRequest httpRequest = (HttpServletRequest) request;
            String auth = httpRequest.getHeader("Authorization");
            if ((auth != null) && (auth.length() > 7)) {
                String HeadStr = auth.substring(0, 6).toLowerCase();
				/*if (HeadStr.compareTo("basic") == 0) {
					auth = auth.substring(6, auth.length());
					int i = JwtHelper.checkToken(auth, httpRequest);
					if (i == 1) {
						return ResultEnum.OK;
					} else if (i == 2) {
						return ResultEnum.INVALID_SINGTIMEOUT;
					} else if (i == 0) {
						return ResultEnum.INVALID_PERMISSION_DENIED;
					}
				}*/
    /*
                if (HeadStr.compareTo("bearer") == 0) {

                    auth = auth.substring(7, auth.length());
                    int i = JwtHelper.checkToken(auth, httpRequest);
                    if (i == 1) {
                        return ResultEnum.OK;
                    } else if (i == 2) {
                        return ResultEnum.INVALID_SINGTIMEOUT;
                    } else if (i == 0) {
                        return ResultEnum.INVALID_PERMISSION_DENIED;
                    }
                }
            }
            return ResultEnum.INVALID_PERMISSION_DENIED;
        } catch (Exception ex) {
            return ResultEnum.INVALID_PERMISSION_DENIED;
        }

    }
    */


    @Override
    public void init(FilterConfig arg0) throws ServletException {

    }

    @Override
    public void destroy() {

    }
}
