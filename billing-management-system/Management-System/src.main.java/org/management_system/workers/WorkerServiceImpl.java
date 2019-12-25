package org.management_system.workers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class WorkerServiceImpl implements WorkerService {

	@Autowired
	WorkerDAO workerDao;

	public void save(Worker worker) throws Exception {
		// TODO Auto-generated method stub

		this.workerDao.save(worker);
	}

	public List<Worker> getAll(Integer workId) throws Exception {
		// TODO Auto-generated method stub
		return this.workerDao.getAll(workId);
	}

	public List<Worker> getWorker(Integer workerId) throws Exception {
		// TODO Auto-generated method stub
		return this.workerDao.getWorker(workerId);
	}

	public List<Integer> countWorker(Integer workId) throws Exception {
		// TODO Auto-generated method stub
		return this.countWorker(workId);
	}
}
