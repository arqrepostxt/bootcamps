package com.dio.santander.banklineapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dio.santander.banklineapi.dto.NovoCorrentista;
import com.dio.santander.banklineapi.model.Correntista;
import com.dio.santander.banklineapi.repository.CorrentistaRepository;
import com.dio.santander.banklineapi.services.CorrentistaService;

@RestController
@RequestMapping("/correntistas")
public class CorrentistaController {
	
	// CorrentistaReposityory vai Auxiliar REST a buscar no banco de dados
	
	@Autowired
	private CorrentistaRepository repository;
	
	// CorrentistaService vai --> Salvar Correntista no db com a conta gerada e saldo zerado
	@Autowired
	private CorrentistaService service;
		
	// Define requisição GET
	@GetMapping
	public List<Correntista> findAll(){
		return repository.findAll();
		
	}
	
	// Salva o correntista como NovoCorrentista
	@PostMapping
	public void save(@RequestBody NovoCorrentista correntista) {
		service.save(correntista);
	}
	
}
