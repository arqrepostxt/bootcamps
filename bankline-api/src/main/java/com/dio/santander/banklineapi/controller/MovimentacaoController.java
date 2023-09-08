package com.dio.santander.banklineapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dio.santander.banklineapi.dto.NovaMovimentacao;
import com.dio.santander.banklineapi.model.Movimentacao;

import com.dio.santander.banklineapi.repository.MovimentacaoReposityory;
import com.dio.santander.banklineapi.services.MovimentacaoService;

@RestController
@RequestMapping("/movimentacoes")
public class MovimentacaoController {
	
	@Autowired
	private MovimentacaoReposityory repository;
	
	@Autowired
	private MovimentacaoService service;
		
	// Define requisição GET
	@GetMapping
	public List<Movimentacao> findAll(){
		return repository.findAll();
		
	}
	
	// Funcionalidade para listagem por conta
	@GetMapping("/{idConta}")
	public List<Movimentacao> findAll(@PathVariable("idConta") Integer idConta){
		return repository.findByIdConta(idConta);
	}
	
	// Salva a movimentacao como Nova Movimentacao
	@PostMapping
	public void save(@RequestBody NovaMovimentacao movimentacao) {
		service.save(movimentacao);
	}
	
}
