package com.jeonghyeon.homework.dto;

import lombok.Data;
import lombok.ToString;

import java.util.List;
import java.util.Map;

@Data
public class RequestDto {
    private int money;
    private List<CoinDto> form;
}
