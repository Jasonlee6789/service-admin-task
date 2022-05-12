// // https://service-admin-dev.smartcompany.dev/taskDefinitions/?page=1&pageSize=100
import {syncTasksDefinitions} from "../common/util";

let host = "https://smartcompany-admin-dev.azurewebsites.net";


(async function () {
    await syncTasksDefinitions(host);
})();

