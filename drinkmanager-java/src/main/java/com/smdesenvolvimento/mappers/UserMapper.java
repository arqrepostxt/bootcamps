package com.smdesenvolvimento.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import com.smdesenvolvimento.dto.SignUpDto;
import com.smdesenvolvimento.dto.UserDto;
import com.smdesenvolvimento.model.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}