package com.mongo.db.SERVICE;

import com.mongo.db.ENTITY.UsuarioEntity;
import com.mongo.db.REPOSITORY.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepositoy;

    public UsuarioEntity save(UsuarioEntity usuarioEntity){

        return usuarioRepositoy.save(usuarioEntity);
    }

    public Optional<UsuarioEntity> pegueUm(String id){
        return usuarioRepositoy.findById(id);
    }

    public List<UsuarioEntity> pegueVarios(){
        return usuarioRepositoy.findAll();
    }

    public Optional<UsuarioEntity> delete(String id){

        Optional<UsuarioEntity> usuario = pegueUm(id);

        if(usuario.isEmpty()){
            return Optional.empty();
        }

        usuarioRepositoy.deleteById(id);
        return usuario;
    }

    public Optional<UsuarioEntity> atualizar(UsuarioEntity usuarioEntity){

        Optional<UsuarioEntity> usuario = pegueUm(usuarioEntity.getId());

        if(usuario.isEmpty()){
            return Optional.empty();
        }

        return Optional.of(usuarioRepositoy.save(usuarioEntity));
    }


}
