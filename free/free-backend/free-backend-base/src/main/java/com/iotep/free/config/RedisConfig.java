package com.iotep.free.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

/**
 * Created by yongwei7 on 2019/4/30.
 */
@Configuration
//@ConfigurationProperties(prefix = "redis")
public class RedisConfig extends CachingConfigurerSupport {
    @Value("${redis.host}")
    private String host;

    @Value("${redis.port}")
    private int port;

    @Value("${redis.timeout}")
    private int timeout;

    @Value("${redis.database}")
    private int database;

    @Value("${redis.password}")
    private String password;

    @Value("${redis.pool.maxActive}")
    private Integer maxActive;

    @Value("${redis.pool.maxIdle}")
    private Integer maxIdle;

    @Value("${redis.pool.minIdle}")
    private Integer minIdle;

    @Value("${redis.pool.maxWait}")
    private Integer maxWait;

    @Bean(name = "pool")
    public JedisPool jedisPool() {
        JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
        // 最大空闲数
        jedisPoolConfig.setMaxIdle(maxIdle);
        // 连接池的最大数据库连接数
        jedisPoolConfig.setMaxTotal(maxActive);
        // 最大建立连接等待时间
        jedisPoolConfig.setMaxWaitMillis(maxWait);
        jedisPoolConfig.setMinIdle(minIdle);

        JedisPool jedisPool = null;
        if (password == null || "".equals(password)) {
            jedisPool = new JedisPool(jedisPoolConfig, host, port, timeout);
        } else {
            jedisPool = new JedisPool(jedisPoolConfig, host, port, timeout, password);
        }
        return jedisPool;
    }

}
