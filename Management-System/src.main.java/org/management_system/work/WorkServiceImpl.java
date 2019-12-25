package org.management_system.work;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class WorkServiceImpl implements WorkService {

	@Autowired
	WorkDAO workdao;

	public List<Work> save(Work work) throws Exception {
		// TODO Auto-generated method stub
		return this.workdao.save(work);
	}

	public List<Work> getAll(Integer userId) throws Exception {
		return this.workdao.getAll(userId);
	}

	public Work update(Work updatedData) throws Exception {
		// TODO Auto-generated method stub
		return this.workdao.update(updatedData);
	}

	public List<Work> get(Integer workId) throws Exception {
		// TODO Auto-generated method stub
		return this.workdao.get(workId);
	}

	public List<Map<String, Object>> getDashboarddata(Integer userId) throws Exception {
		// TODO Auto-generated method stub
		return this.workdao.getDashboarddata(userId);
	}
}
