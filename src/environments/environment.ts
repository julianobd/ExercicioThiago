export const environment = {
  production: false,
  baseURL: 'http://hcs.dev4.com.br/api/',

  //login

  login: '/api/Login/Login',

  //Avatar
  getAvatar: 'Avatar/ListAvatars/',
  putAvatar: 'Avatar/EditAvatar/',

  //ExpMachines
  getMachines: 'ExpMachines/GetExpMachines/',
  putMachines: 'ExpMachines/EditExpMachine/',

  //Item
  getItem: 'Item/ListServerWithItems/',
  postItem: 'AddItemToServer/',
  delItem: 'Item/RemoveItemFromServer/{userToken}/',
  putItem: 'EditItemFromServer/{userToken}/',

  //Jobs
  getJobs: 'Jobs/GetJobs/',
  postJobs: '​Jobs/AddJob/',
  putJobs: '​Jobs​/EditJob​/',
  delJobs: 'Jobs​/DeleteJob​/',

  //Servers
  getServersList: 'Servers/ListServers/',
  getServer: 'Servers​/GetServer​/',
  postServer: 'Servers​/AddServers​/',
  putServersTable: 'Servers​/EditExpTable​/',
  putServersItems: 'Servers​/EditAvailableItems​/',
  putServersServer: 'Servers​/EditServer​/',

  //Users
  getUser: 'Users/GetUsers/',
  postUser: 'Users​/AddUser​/',
  delUser: 'Users​/DelUser​/',
  putUset: 'Users​/EditUser​/',

};

export class GlobalConstants {
    
  public static token: string = "b025d2a9-d4c2-4f43-ae44-7d7fdec96f52-b92bd7ce-ec93-4b10-a916-8beda4181f3f";
  public static serverId: string = '00c0808b-cb1c-4802-92dd-1500833bc264';
  
  public static permission = 2;
  
  public static selectedServer: string = "";
  public static selectedServerName: string = "";

}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
