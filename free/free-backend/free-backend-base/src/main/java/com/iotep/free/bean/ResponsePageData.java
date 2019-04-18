package com.iotep.free.bean;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yongwei7 on 2019/3/28.
 */
public class ResponsePageData<T> {
    private List<T> dataList = new ArrayList<>();
    private int page = 1;
    private int size = 10;
    private int total = 0;

    public List<T> getDataList() {
        return dataList;
    }

    public void setDataList(List<T> dataList) {
        this.dataList = dataList;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}
