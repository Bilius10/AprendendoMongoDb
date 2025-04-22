package com.mongo.db.REPOSITORY;


import com.mongo.db.ENTITY.UsuarioEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends MongoRepository<UsuarioEntity, String> {
}
