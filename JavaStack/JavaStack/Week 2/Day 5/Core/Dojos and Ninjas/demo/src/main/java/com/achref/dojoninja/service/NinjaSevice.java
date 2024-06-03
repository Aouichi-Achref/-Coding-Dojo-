package com.achref.dojoninja.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.achref.dojoninja.entity.Ninja;
import com.achref.dojoninja.repository.NinjaRepo;

@Service
public class NinjaSevice {
	
	@Autowired
	private NinjaRepo ninjaRepo;
	
	public Ninja createNinja(Ninja ninja) {
		System.out.println(ninja);
		return ninjaRepo.save(ninja);
	}
	
//	//READ ONE 
//	public Ninja findNinjaById(Long id) {
//		Optional<Ninja> oneNinja = ninjaRepo.findById(id);
//		if(oneNinja.isPresent()) {
//			return oneNinja.get();
//		}
//		return null;
//	}
	
	//read all 
	public List<Ninja> allNinja(){
		return ninjaRepo.findAll();
	}
}
