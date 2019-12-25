package org.management_system.work;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class WorkDAOImpl implements WorkDAO {

	@Autowired
	SessionFactory sf;

	public List<Work> save(Work work) throws Exception {
		// TODO Auto-generated method stub

		Session session = sf.getCurrentSession();
		Integer userId = Integer.parseInt(session.save(work).toString());

		return getAll(userId);

	}

	public List<Work> getAll(Integer userId) throws Exception {
		// TODO Auto-generated method stub
		Session session = sf.getCurrentSession();
		return session.createQuery("from Work where isCompleted = 0 and userId =:userId", Work.class)
				.setParameter("userId", userId).getResultList();
	}

	public Work update(Work updatedData) throws Exception {
		// TODO Auto-generated method stub
		Session session = sf.getCurrentSession();
		Work work = (Work) session.merge(updatedData);
		System.out.println(work);
		return work;
	}

	public List<Work> get(Integer workId) throws Exception {
		// TODO Auto-generated method stub
		Session session = sf.getCurrentSession();

		return session.createQuery("from Work where id=:id").setParameter("id", workId).getResultList();

	}

	public List<Map<String, Object>> getDashboarddata(Integer userId) throws Exception {
		// TODO Auto-generated method stub

		Session session = sf.getCurrentSession();

		Query<Work> query = session.createQuery("from Work where isCompleted = 1 and userId =:userId", Work.class);

		List<Work> works = query.setParameter("userId", userId).getResultList();
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		for (Work work : works) {
			List<Integer> workerId = session.createQuery("select id from Worker  where workId =:workId")
					.setParameter("workId", work.getId()).getResultList();

			Map<String, Object> map = new IdentityHashMap<String, Object>();
			map.put("work", work);
			map.put("workers", workerId.size());
			result.add(map);

		}

		return result;

	}
}
