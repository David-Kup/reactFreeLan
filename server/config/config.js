module.exports = {
  sqlServer: "localhost",
  sqlDb: "OpsCare",
  sqlPort: 1399,
  sqlUser: "Sa",
  sqlPassword: "123",
  sqlTables: {
    USERACCOUNTAPP: "UserAccount_App",
    USERACCOUNTPROJECT: "UserAccount_Project",
    PROJECT: "Project",
    USERACCOUNT: "UserAccount",
  },
  SMTPEmail: "abc@mail.com",
  SMTPPW: "1234567890",
  dbConfig: {
    server: "WICKS",
    database: "VesselCare",
    port: 4096,
    user: "sa",
    password: "123",
    options: {
      encrypt: true,
      enableArithAbort: true,
      useUTC: true,
    },
  },
  wearablesConfig: {
    sqlTables: {
      CREW: "Crew",
      TASK: "Task",
      TASKCREW: "Task_Crew",
      LOCATION: "Location",
      LOCATIONCREW: "Location_Crew",
      AREA: "Area",
    },
    taskStatus: {
      OPEN: "Open",
      START: "Start",
      PAUSE: "Pause",
      RESUME: "Resume",
      COMPLETED: "Completed",
    },
  },
  opscareConfig: {
    dbConfig: {
      server: "10.10.100.10",
      database: "OpsCare",
      port: 1399,
      user: "opscare",
      password: "opscare2020",
      options: {
        encrypt: true,
        enableArithAbort: true,
        useUTC: true,
      },
    },
    sqlTables: {
      USERACCOUNTAPP: "UserAccount_App",
      ACCOUNT: "UserAccount",
      HISTORIANCURRENT: "HistorianCurrentData",
      HISTORIANRAW: "HistorianRawData",
      CRANELIFT: "CraneLiftData",
      INJURY: "vw_KPI_HSE_Injury",
      MANHOUR: "KPI_HSE_TOTALMH",
      NEARMISS: "vw_KPI_HSE_NearMiss",
    },
  },
  fuellngConfig: {
    dbConfig: {
      server: "10.10.100.10",
      database: "FuelLng",
      port: 1399,
      user: "Envision",
      password: SQL2016",
      options: {
        encrypt: true,
        enableArithAbort: true,
        useUTC: true,
      },
    },
    postgresDbConfig: {
      server: "localhost",
      database: "VesselCare",
      port: 8888,
      user: "postgres",
      password: "123",
      schema: "lng",
    },
    postgreSQLTables: {
      KONSBERGRAWDATA: "KonsbergRawData",
    },
    sqlTables: {
      WORKORDERCONFIG: "WorkOrderConfig",
      WORKORDERLOG: "WorkOrderLog",
      KONSBERGDATA: "KonsbergCurrentData",
      BUNKERDELIVERYREPORT: "BunkerDeliveryReport",
      COMBUSTIONTEMPERATURE: "CombustionTemperature",
      ENGINELOG: "EngineLog",
      ENGINELOGENGINE: "EngineLog_Engine",
      ENGINELOGALTERNATOR: "EngineLog_Alternator",
      KPI: "KPI",
      FILE: "[File]",
      FILEFOLDER: "File_Folder",
      FOLDERACCOUNT: "Folder_Account",
      FOLDER: "Folder",
      LOCK: "Lock",
    },
    workOrderStatus: {
      OPEN: "open",
      INPROGRESS: "inprogress",
      COMPLETED: "completed",
    },
    workOrderConfig: [
      {
        id: 1,
        title: "Check Engine Every Day",
        description: "Check engine filters and log engine log every day",
        startDate: "2020-05-08 00:00:00",
        lastCreationDate: null,
        intervalHr: 24,
      },
    ],
  },
  mazureConfig: {
    credentials: {
      tenantID: "5745-fc6d-4c80-80e6-9f697d8343a8",
      clientID: "5c52-ba01-4906-865d-316eb25b3bea",
    },
    metadata: {
      authority: "login.microsoftonline.com",
      discovery: ".well-known/openid-configuration",
      version: "v2.0",
    },
    settings: {
      validateIssuer: true,
      passReqToCallback: false,
      loggingLevel: "info",
      loggingNoPII: true,
    },
  },
};
