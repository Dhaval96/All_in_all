package org.ecommerce.module;

import java.util.List;

public interface ModuleRepository {

	void save(Module module) throws Exception;

	List<Module> getAll() throws Exception;
}
