export default [
  {
    title: 'Software Engineer',
    company: 'Citadel',
    companyLink: 'https://www.citadel.com',
    location: 'New York, NY',
    dates: [
      {
        startDate: 'Jun., 2020',
      },
    ],
    notes: `
Enterprise Data Platform, responsible for providing timely and reliable access to fundamental reference datasets at Citadel.
Example projects include:
- Design and lead the implementation of observability stack to enable consistent monitoring of service performance and health.
  - e.g., integration of distrubuted tracing, unified metrics, dashboard, and alerting into several legacy systems.
- Designed and built tooling for organization-wide Kubernetes deployments.
- Lead build-out of firm-wide, Spinnaker-based continuous deployment system for both Kubernetes and legacy filer deployments.
- Modernization of build system for large-scale C++ (migration to Bazel) and Java (multi-project Gradle monorepo builds) services.
- Performance and memory usage optimization for large-scale C++ services, such as identifying memory fragmentation in glibc \`malloc()\`.
    `,
    featured: true,
  },
  {
    title: 'Software Development Engineer',
    company: 'Airbnb',
    companyLink: 'https://www.airbnb.com/',
    location: 'San Francisco, CA',
    dates: [
      {
        startDate: 'May, 2018',
        endDate: 'Jun,, 2020',
        note: 'full-time',
      },
      {
        startDate: 'May, 2017',
        endDate: 'Aug., 2017',
        note: 'intern',
      },
    ],
    notes: `
Cloud Infrastructure, Production Platform. Select projects include:
- Designed and led the build-out of Airbnb's distributed, delayed job scheduling and queueing system on top of AWS SQS and DynamoDB.
  - Read more about this work on Airbnb Engineering Blog: <https://medium.com/p/93ab10f05f99>.
  - Led an intern as intern manager during Summer 2019 for this work.
- Designed and implemented multi-cluster architecture for Airbnb's Kafka clusters,
  including a metadata proxy that multiplexes Kafka requests based on the Kafka TCP protocol.
- Implemented a thrift serializer/deserializer library for
  ruby that's more than 25x faster than the existing binding.
  - Read more about this work on Airbnb Engineering Blog:
    [andf.us/sparsam](https://andf.us/sparsam).
    Find this work open-sourced at:
    [github.com/airbnb/sparsam](https://github.com/airbnb/sparsam).
- Built distributed tracing pipeline for collecting frontend performance metrics.
- Built performance profiling and monitoring tooling for JVM applications running in Kuberenetes/Docker.
    `,
    featured: true,
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'Georgia Institute of Technology',
    companyLink: 'http://www.cse.gatech.edu/',
    location: 'Atlanta, GA',
    dates: [
      {
        startDate: 'Oct. 26, 2015',
        endDate: 'May. 04, 2018',
      },
    ],
    notes: `
Research in the cross-section of data mining and human-computer interaction with professor [Polo Chau](https://poloclub.github.io/polochau/).

- One of the investigators in NIH's [MD2K](https://md2k.org/) (**M**obile **D**ata **to** **K**nowledge) initiative.
  Developed a predictive visualization dashboard for exploring correlations between activity, stress, and smoking relapses.
  [Paper](https://s3.andyfang.me/papers/17-ubicomp-dashboard.pdf).
- MMap: Scaling up scientific computation with memory mapping.
  [Paper](https://s3.andyfang.me/papers/16-mmap-ml-sigmod.pdf).
- ARGO: Billion-scale visualization of network data.
  [Paper](https://s3.andyfang.me/papers/17-carina-www.pdf).
`,
    featured: true,
  },
  {
    title: 'STAR Intern on Software Engineering',
    company: 'Symantec Corporation',
    companyLink: 'https://www.symantec.com/theme/star',
    location: 'Los Angeles, CA',
    dates: [
      {
        startDate: 'May. 16, 2016',
        endDate: 'Aug. 12, 2016',
      },
    ],
    notes: `
Utilizing data mining (with Hadoop and Python) to improve malware detection efficacy.

- Inferring unknown files' reputations with parent file and execution environment features.
- Deployed new rule in Symantec's AV Engine with a false positive rate of only 0.2%. Used in Norton Security and Symantec Endpoint Protection.
- Implemented a decision tree executor for detecting malware using file features that replaced Symantec's existing implementation.
`,
    featured: false,
  },
  {
    title: 'Technical Lead',
    company: 'Lanzhong Inc.',
    companyLink: 'http://www.codevs.cn/',
    location: 'Beijing, China',
    dates: [
      {
        startDate: 'Jan. 2014',
        endDate: 'Aug. 2015',
      },
    ],
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
    dates: [
      {
        startDate: 'Dec. 2014',
        endDate: 'Aug. 2015',
      },
    ],
    notes: `
Full-stack software engineer
- Sole developer of claryfy.com, a web forum for international students built with Django and PostgreSQL
- Built front-end of InitialView's Interview Booking System
- Built front-end of InitialView Interview Player
`,
    featured: false,
  },
];
