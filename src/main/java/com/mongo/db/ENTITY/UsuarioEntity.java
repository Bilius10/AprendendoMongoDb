package com.mongo.db.ENTITY;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection="usuario")
public class UsuarioEntity {

    @Id
    private String id;
    private String nome;
    private int idade;
}
