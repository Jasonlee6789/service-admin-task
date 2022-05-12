// https://service-admin-demo.smartcompany.dev/taskDefinitions/?page=1&pageSize=100

import {syncTasksDefinitions} from "../common/util";

let host = "https://smartcompany-admin-demo.azurewebsites.net";

(async function () {
    await syncTasksDefinitions(host);
})();
