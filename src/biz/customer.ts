// https://service-admin-customer.smartcompany.work/taskDefinitions/?page=1&pageSize=100

import {syncTasksDefinitions} from "../common/util";

let host = "https://smartcompany-admin-customer.azurewebsites.net";

(async function () {
    await syncTasksDefinitions(host);
})();
