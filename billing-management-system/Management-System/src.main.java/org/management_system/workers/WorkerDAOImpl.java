package org.management_system.workers;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class WorkerDAOImpl implements WorkerDAO {

	@Autowired
	SessionFactory factory;

	public void save(Worker worker) throws Exception {
		// TODO Auto-generated method stub

		Session session = factory.getCurrentSession();
		System.out.println(worker.getId());
		if (worker.getId() == null) {
			session.save(worker); // save
		} else {

			session.update(worker);// update;
		}

	}

	public List<Worker> getAll(Integer workId) throws Exception {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();
		return session.createQuery("from Worker where workId= :workId ").setParameter("workId", workId).getResultList();
	}

	public List<Worker> getWorker(Integer workerId) throws Exception {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();
		return session.createQuery("from Worker where id= :workerId ").setParameter("workerId", workerId)
				.getResultList();

	}

	public List<Integer> countWorker(Integer workId) throws Exception {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();
		return session.createQuery("select count(*) from Worker where workId= :workId ").setParameter("workId", workId)
				.getResultList();

	}

}
