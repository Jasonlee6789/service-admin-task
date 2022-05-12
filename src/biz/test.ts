// https://service-admin-test.smartcompany.dev/taskDefinitions/?page=1&pageSize=100

import {syncTasksDefinitions} from "../common/util";

let host = "https://smartcompany-admin-test.azurewebsites.net";

(async function () {
    await syncTasksDefinitions(host);
})();

