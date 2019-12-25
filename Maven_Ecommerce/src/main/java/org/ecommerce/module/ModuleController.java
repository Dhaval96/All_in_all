package org.ecommerce.module;

import java.util.Arrays;
import java.util.List;

import org.ecommerce.common.Codes;
import org.ecommerce.common.StatusCode;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/module")
@CrossOrigin(origins = "http://localhost:4200")
public class ModuleController {

	@Autowired
	ModuleService service;

	@Autowired
	SessionFactory factory;

	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public Object getAll() {

		try {

			List<Module> modules = service.getAll();

			return new StatusCode(1, Codes.success, "This is the test data", modules);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			return e;
		}
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public void save() {

		try {
			Module module = new Module();
			SubModule subModule = new SubModule();

			module.setModuleName("Common Component");
			module.setToggleIcon(false);
			module.setIcon("fa fa-bandcamp");

			subModule.setRouterLink("/panel");
			subModule.setSubModule("PanelComponent");
			subModule.setIcon("fa fa-window-restore");

			module.setSubModules(Arrays.asList(subModule));
			service.save(module);
		} catch (Exception e) {
			// TODO: handle exception
		}

	}

}
