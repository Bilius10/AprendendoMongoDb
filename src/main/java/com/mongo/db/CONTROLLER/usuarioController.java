package com.mongo.db.CONTROLLER;

import com.mongo.db.ENTITY.UsuarioEntity;
import com.mongo.db.SERVICE.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RestController
@RequestMapping("/usuario")
public class usuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<UsuarioEntity>> pegueUm(@RequestParam String id){

        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.pegueUm(id));
    }

    @GetMapping
    public ResponseEntity<List<UsuarioEntity>> pegueVarios(){

        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.pegueVarios());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<UsuarioEntity>> delete(@RequestParam String id){
        
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.delete(id));
    }

    @PostMapping
    public ResponseEntity<UsuarioEntity> save(@RequestBody UsuarioEntity usuarioEntity){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.save(usuarioEntity));
    }


}
