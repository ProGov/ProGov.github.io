export let CONFIG = {
    Settings: {
      CLIENT_ID: 'd2f418ad-3d82-45f2-b2bd-a6fda93f6b33', // https://apps.dev.microsoft.com’
      TENANT: 'BBDZA.onmicrosoft.com',
      TENANT_ID: 'cccbf502-6b91-40d6-be02-5ffa0eb711d6', // found in Azure->Active Directory->Properties Pane, TennantID = Directory ID
      AUTHORITY: 'https://login.microsoftonline.com/BBDZA.onmicrosoft.com/',

      RESPONSE_TYPE: 'id_token token',
      RESPONSE_MODE: 'id_token token',
      STATE: '',
      MS_GRAPH_URI: 'https://graph.microsoft.com/',
      REDIRECT_URI : 'http://localhost:4200/home',
      MSGRAPH_BETA_API: 'https://graph.microsoft.com/beta/',
      MSGRAPH_v1_API: 'https://graph.microsoft.com/v1.0/',
      SCOPES: ['User.Read', 'Calendars.Read', 'Calendars.Read.Shared'],
      ADMIN_CONSENT: true
    }
  };
