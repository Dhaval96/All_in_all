package org.ecommerce.module;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModuleServiceImpl implements ModuleService {

	@Autowired
	ModuleRepository moduleRepository;

	public void save(Module module) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Dhaval");
		moduleRepository.save(module);
	}

	public List<Module> getAll() throws Exception {
		// TODO Auto-generated method stub
		return moduleRepository.getAll();
	}

}
