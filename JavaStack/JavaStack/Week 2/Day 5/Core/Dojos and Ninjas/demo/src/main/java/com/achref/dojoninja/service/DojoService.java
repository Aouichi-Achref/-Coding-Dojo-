package com.achref.dojoninja.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.achref.dojoninja.entity.Dojo;
import com.achref.dojoninja.repository.DojoRepo;

@Service
public class DojoService {

	@Autowired
	private DojoRepo dojoRepo;
	
	public Dojo createDojo(Dojo dojo) {
		System.out.println(dojo);
		return dojoRepo.save(dojo);
	}
	
	//READ ONE 
	public Dojo findDojoById(Long id) {
		Optional<Dojo> oneDojo = dojoRepo.findById(id);
		if(oneDojo.isPresent()) {
			return oneDojo.get();
		}
		return null;
	}
	
	//read all 
	public List<Dojo> allDojo(){
		return dojoRepo.findAll();
	}
}
