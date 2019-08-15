import commonTracks from "./shared";

const architectureTrack = {
  displayName: "Architecture & Components Management",
  category: "A",
  description: "Develops expertise cloud development & architecture.",
  milestones: [
    {
      summary:
        "Works effectively within established structures, following current best practices",
      signals: [
        "Knows and understands the connections between the components of a specific system and dependencies",
        "Understands which components are being used in the pipeline and for what purpose",
        "Understands the difference between storage choices OLTP vs OLAP"
      ],
      examples: [
        "Understands the difference between Streaming use cases and Batch use cases",
        "Understands AWS firehose and kinesis streams; kafka - can work with streams effectively",
        "Can differentiate on when to use Snowflake vs when to use DocumentDB/Aurora"
      ]
    },
    {
      summary:
        "Develops new instances of existing architecture, or minor improvements to existing architecture",
      signals: [
        "Makes small changes that work towards implementing the long term vision for our infrastructure",
        "Gets certifications for current exisiting used pieces",
        "Triages issues correctly and independently; Writes thorough postmortems for service outages"
      ],
      examples: [
        "Setup a new transform job on our infrastructure",
        "Got AWS Solutions Architect certification",
        "Debugged issues with a transform job and can trace a data issue to the source"
      ]
    },
    {
      summary:
        "Designs standalone systems of moderate complexity, or major new features in existing systems.",
      signals: [
        "Acts as primary maintainer for existing critical systems",
        "Designs moderately complex systems",
        "Chooses the right technologies on the systems"
      ],
      examples: ["Designed a streaming data platform with high availability"]
    },
    {
      summary:
        "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      signals: [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Investigates new technologies that improve our long term scalability"
      ],
      examples: [
        "Designed and Implemented a system that scales abd addresses all analyzation needs for Data Science"
      ]
    },
    {
      summary:
        "Is an industry-leading expert in foundational engineering and/or sets strategic foundational direction for an eng team	",
      signals: [
        "Introduces new industry architecture patterns and designs",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture"
      ],
      examples: []
    }
  ]
};

const sqlTrack = {
  displayName: "Data Storage & SQL",
  category: "A",
  description:
    "Develops expertise in working and interacting with data storages (SQL, noSQL and other database systems).",
  milestones: [
    {
      summary:
        "Queries and understands effectively established databases, following current best practices	",
      signals: [
        "Can write queries to change the data in databases",
        "Knows at least one data storage technology and can fluently interact with it",
        "Understands basic SQL"
      ],
      examples: [
        "Understands and writes queries to interact with dynamodb",
        "Can navigate kibana over elasticsearch and retrieve data from it programatically",
        "Can differentiate between union and outer join"
      ]
    },
    {
      summary:
        "Modifies and adds new features on existing data storages and does improvments to existing schemas 	",
      signals: [
        "Understands data modelling ",
        "Knows the difference between the various data storage types and caches and can explain the differences",
        "Determines data needs from requirements"
      ],
      examples: [
        "Alters the schema of existing tables including adding columns based on best practices",
        "Profile sql queries and identifies slowdowns",
        "Understands and adds indexes and/or normalizes tables where needed on a database"
      ]
    },
    {
      summary:
        "Designs new data storages SQL or NoSQL with moderate complexity to serve new features to existing systems",
      signals: [
        "Completely understands advanced SQL",
        "Introduces new databases and technologies to meet underserved needs",
        "Acts as primary maintainer for existing critical systems"
      ],
      examples: ["Windowing functions, row counts, ..."]
    },
    {
      summary:
        "Designs complex data storages with large scale data and extensive schemas	",
      signals: [
        "Optimized pooling strategy for a database driver",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices"
      ],
      examples: ["Have deep understanding of data stores sorting algorithms"]
    },
    {
      summary:
        "Is a database expert on all the levels, sets the strategic foundational direction for the backend team",
      signals: [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture"
      ],
      examples: []
    }
  ]
};

const foundationsTrack = {
  displayName: "Coding/Scripting & Development skills",
  category: "A",
  description:
    "Develops expertise in server side engineering and creating libraries, using technologies such as NodeJS, Javascript, Java, Python, and Scala.",
  milestones: [
    {
      summary:
        "Works effectively with guidance to deliver high-quality software",
      signals: [
        "Writes and maintains unit tests for changes",
        "Pull requests are well formed, readable, and contain steps for testing the feature",
        "Follows established patterns and naming conventions"
      ],
      examples: [
        "Updates direct and adjacent unit tests when developing features",
        "Follows the established GitHub PR template format",
        "Variables are sensibly named and err on the side of readability"
      ]
    },
    {
      summary:
        "Works effectively with established patterns and design decisions and makes suggestions on potential improvements",
      signals: [
        "Contributes to Technical Design Document discussions",
        "Identifies refactoring opportunities and safely applies refactored changes to isolated systems ",
        "Builds features and upgrades while not compromising test coverage"
      ],
      examples: [
        "Contributes thoughts and suggestions for a pipeline change",
        "Refactored to Modal views with similar functionallity to be a single component",
        "Ships Pull Requests with new tests that aren't brittle"
      ]
    },
    {
      summary:
        "Consistently delivers high quality code, promotes improvement suggestions, and enables other team-members to deliver quality software",
      signals: [
        "Designs and leads moderately complex systems through discussions, TDDs, and impact analysis.",
        "Provides descriptive and actional feedback in code review with logical reasoning around suggestions for change",
        "Actively works with a PO/PM to address technical challenges and reduce technical debt during project planning"
      ],
      examples: [
        "Develops a well formed TDD for a new data report/analysis with thoughts on database schema changes, technical challenges, and missing enablers",
        "Understands the difference between nitpicks and crucial feedback. Actively gaurds against low quality code through providing examples on what can be done better",
        "Works with POs to evaluate the ROI on migrating an event to v3 versus updating an old event"
      ]
    },
    {
      summary:
        "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      signals: [
        "Designs complex systems that use a full gamut of front-end, back-end, and DevOps solutions",
        "Designs systems and infrastructure that gracefully fails over",
        "Introduces/creates new frameworks or enablers"
      ],
      examples: [
        "Implemented a rate limiting solution using AWS Lambda, client, and server changes.",
        "Implemented a queue system with good error reporting and exponential backoff",
        "Events capturing library"
      ]
    },
    {
      summary:
        "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      signals: [
        "Designs and archtitects distributed computing solutions at scale",
        "Applies expert level knowledge of systems at Prodigy to stratigize with leadership",
        "Implemented a fundamental change to the way developers work across all projects"
      ],
      examples: [
        "Develops a distributed platform for headless Lambda services",
        "Coordinates long-term technical strategical thinking with Product Leads  to make informed product decisions",
        "Introduced new tooling for complex data aggregation "
      ]
    }
  ]
};

const dataWarehouseTrack = {
  displayName: "Data warehousing & Big Data tools	",
  category: "A",
  description:
    "Develops expertise in data warehouse (Snowflake, BigQuery, etc.) and in Big Data Tools (Apache Spark, Kafka, Hive, PIG, etc.)",
  milestones: [
    {
      summary:
        "Works effectively within established big data tools and warehouses, following current best practices",
      signals: [
        "Understands basic data structures and columar vs relational datastore usecase",
        "Can work with the current big data tools in a novice manner"
      ],
      examples: [
        "Can differentiate between OLTP vs OLAP",
        "Edit a Spark or Airflow Job"
      ]
    },
    {
      summary:
        "Develops new instances of existing big data tools, or minor improvements to existing tools",
      signals: [
        "Gets certification for current existing used pieces",
        "Replicates a component of the current pipeline",
        "Makes the current tools better"
      ],
      examples: [
        "Get Spark certified",
        "Writes a new Spark job",
        "Creating a library for making adding of jobs easier"
      ]
    },
    {
      summary: "Level 3 ¯_(ツ)_/¯",
      signals: [],
      examples: []
    },
    {
      summary: "Level 4 ¯_(ツ)_/¯",
      signals: [],
      examples: []
    },
    {
      summary:
        "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      signals: [
        "Introduces new industry architecture patterns and designs",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture"
      ],
      examples: []
    }
  ]
};

const dataEngineerTracks = {
  "1": architectureTrack,
  "2": sqlTrack,
  "3": foundationsTrack,
  "4": dataWarehouseTrack
};

export default {
  ...dataEngineerTracks,
  ...commonTracks
};
