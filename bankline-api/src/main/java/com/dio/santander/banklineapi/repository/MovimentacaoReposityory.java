package com.dio.santander.banklineapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dio.santander.banklineapi.model.Movimentacao;

public interface MovimentacaoReposityory extends JpaRepository<Movimentacao, Integer> {

	public List<Movimentacao>findByIdConta(Integer idConta);
}
