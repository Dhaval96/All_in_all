package org.management_system.workers;

import java.util.List;

public interface WorkerDAO {

	public void save(Worker worker) throws Exception;

	public List<Worker> getAll(Integer workId) throws Exception;

	public List<Worker> getWorker(Integer workerId) throws Exception;

	public List<Integer> countWorker(Integer workId) throws Exception;

}
