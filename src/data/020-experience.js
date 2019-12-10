export default [
  {
    title: 'Software Development Engineer',
    company: 'Airbnb',
    companyLink: 'https://www.airbnb.com/',
    location: 'San Francisco, CA',
    startDate: 'May. 21, 2018',
    endDate: null,
    notes: `
Cloud Infrastructure, Production Platform. Responsibilities include:
- Built distributed tracing pipeline for collecting frontend performance metrics.
- Built performance profiling and monitoring tooling for JVM applications running in Kuberenetes/Docker.
- Maintains Airbnb's distributed job queueing system built on top of Resque and DynamoDB.
  Read more about this work: <https://medium.com/p/93ab10f05f99>.
  Led an intern as intern manager during Summer 2019 for this work.
- Built multi-cluster tooling for Airbnb's Kafka clusters,
  including a metadata proxy that multiplexes Kafka requests based on the Kafka TCP protocol.
    `,
    featured: true,
  },
  {
    title: 'Software Development Engineer Intern',
    company: 'Airbnb',
    companyLink: 'https://www.airbnb.com/',
    location: 'San Francisco, CA',
    startDate: 'May. 22, 2017',
    endDate: 'Aug. 04, 2017',
    notes: `
- Implemented a thrift serializer/deserializer library for
  ruby that's more than 25x faster than the existing binding.
- Read more about this work on Airbnb Engineering Blog:
  [andf.us/sparsam](https://andf.us/sparsam).
  Find this work open-sourced at:
  [github.com/airbnb/sparsam](https://github.com/airbnb/sparsam).
`,
    featured: true,
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'Georgia Institute of Technology',
    companyLink: 'http://www.cse.gatech.edu/',
    location: 'Atlanta, GA',
    startDate: 'Oct. 26, 2015',
    endDate: 'May. 04, 2018',
    notes: `
Research in data mining with professor [Polo Chau](https://poloclub.github.io/polochau/).

- One of the investigators in NIH's [MD2K](https://md2k.org/) (**M**obile **D**ata **to** **K**nowledge) initiative.
  Developed a predictive visualization dashboard for exploring correlations between activity, stress, and smoking relapses.
- MMap: Scaling up scientific computation with memory mapping
- ARGO: Billion-scale visualization of network data
`,
    featured: true,
  },
  {
    title: 'STAR Intern on Software Engineering',
    company: 'Symantec Corporation',
    companyLink: 'https://www.symantec.com/theme/star',
    location: 'Los Angeles, CA',
    startDate: 'May. 16, 2016',
    endDate: 'Aug. 12, 2016',
    notes: `
Utilizing data mining (with Hadoop and Python) to improve malware detection efficacy.

- Inferring unknown files' reputations with parent file and execution environment features.
- Deployed new rule in Symantec's AV Engine with a false positive rate of only 0.2%. Used in Norton Security and Symantec Endpoint Protection.
- Implemented a decision tree executor for detecting malware using file features that replaced Symantec's existing implementation.
`,
    featured: true,
  },
  {
    title: 'Technical Lead',
    company: 'Lanzhong Inc.',
    companyLink: 'http://www.codevs.cn/',
    location: 'Beijing, China',
    startDate: 'Jan. 2014',
    endDate: 'Aug. 2015',
    notes: `
Technical lead in an online education startup.

- Lead developer of a CMS for online education.
- Built email marketing system sending 100k+ emails per month.
- Maintained and updated internal infrastructure across multiple applications and distributed services including celery and memcached.
`,
    featured: false,
  },
  {
    title: 'Software Engineer',
    company: 'InitialView',
    companyLink: 'http://initialview.com',
    location: 'Beijing, China',
    startDate: 'Dec. 2014',
    endDate: 'Aug. 2015',
    notes: `
Full-stack software engineer
- Sole developer of claryfy.com, a web forum for international students built with Django and PostgreSQL
- Built front-end of InitialView's Interview Booking System
- Built front-end of InitialView Interview Player
`,
    featured: false,
  },
];
