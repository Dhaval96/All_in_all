package org.management_system.work;

import java.util.List;
import java.util.Map;

public interface WorkService {

	public List<Work> save(Work work) throws Exception;

	public List<Work> getAll(Integer userId) throws Exception;

	public Work update(Work updatedData) throws Exception;

	public List<Work> get(Integer workId) throws Exception;

	public List<Map<String, Object>> getDashboarddata(Integer userId) throws Exception;
}
