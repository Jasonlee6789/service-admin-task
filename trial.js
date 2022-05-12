// https://service-admin-trial.smartcompany.work/taskDefinitions/?page=1&pageSize=100

let host = "https://smartcompany-admin-trial.azurewebsites.net";

let devTaskDefinitions = [{
    "description": "人事評価form定義自動修正 RPC API",
    "cronExpression": "0 35 1 * * *",
    "type": "methodInvoke",
    "httpRequest": {
        "body": {
            "api": "jp.co.nisshinsci.saas.framework.service.tags.Member4SearchService",
            "method": "runTask",
            "params": "{}"
        }
    },
    "activated": true,
    "id": "f0df5b13-5c83-4b47-8764-2aef426b83d9",
    "_partition": "TaskDefinitions",
    "_etag": "\"0500b5a9-0000-2300-0000-627a32ba0000\"",
    "_ts": 1652175546
}, {
    "description": "AI_RawDataバッチ",
    "cronExpression": "0 20 1 * * *",
    "httpRequest": {
        "body": {
            "api": "jp.smartcompany.saas.talent.service.ai.AIRawDataService",
            "method": "runTask",
            "params": "{}"
        }
    },
    "activated": true,
    "id": "e192d314-276b-4262-8a43-bd0f62b70511",
    "_partition": "TaskDefinitions",
    "_etag": "\"0600e422-0000-2300-0000-627b61040000\"",
    "type": "methodInvoke",
    "_ts": 1652252932
}, {
    "description": "データシート定義自動修正",
    "cronExpression": "0 30 1 * * *",
    "httpRequest": {
        "body": {
            "api": "jp.co.nisshinsci.saas.framework.service.form.SheetContentV2Service", "method": "runTask", "params": ""
        }
    },
    "activated": true,
    "id": "b614c17a-8866-40bf-9813-fca6887428d3",
    "_partition": "TaskDefinitions",
    "_etag": "\"0500eaa9-0000-2300-0000-627a332c0000\"",
    "type": "methodInvoke",
    "_ts": 1652175660
}, {
    "description": "時系列処理バッチ",
    "cronExpression": "0 0 2 * * *",
    "httpRequest": {
        "body": {
            "api": "jp.co.nisshinsci.saas.framework.service.timeseries.TimeSeriesTaskService",
            "method": "runTask",
            "params": ""
        }
    },
    "activated": true,
    "id": "b4d162c4-65b0-4a66-bb29-b298534d8135",
    "_partition": "TaskDefinitions",
    "_etag": "\"0500f8a9-0000-2300-0000-627a33500000\"",
    "type": "methodInvoke",
    "_ts": 1652175696
}, {
    "description": "毎日の自動計算とバッチ処理",
    "cronExpression": "0 25 1 * * *",
    "httpRequest": {
        "body": {
            "api": "jp.co.nisshinsci.saas.framework.service.form.SheetContentV2Service",
            "method": "runTask",
            "params": ""
        }
    },
    "activated": true,
    "id": "729eeb38-8b95-47d3-a38f-0be6299f08e0",
    "_partition": "TaskDefinitions",
    "_etag": "\"050022aa-0000-2300-0000-627a33a30000\"",
    "type": "methodInvoke",
    "_ts": 1652175779
}, {
    "description": "Member4Search全量接口",
    "cronExpression": "0 0 1 * * *",
    "httpRequest": {
        "body": {
            "api": "jp.co.nisshinsci.saas.framework.service.tags.Member4SearchService",
            "method": "runTask",
            "params": ""
        }
    },
    "activated": true,
    "id": "675cb5b5-5303-4a01-b5a5-9202e6d88513",
    "_partition": "TaskDefinitions",
    "_etag": "\"050035aa-0000-2300-0000-627a33c20000\"",
    "type": "methodInvoke",
    "_ts": 1652175810
}, {
    "description": "目標の進捗集計バッチ",
    "cronExpression": "0 5 1 * * *",
    "httpRequest": {
        "body": {
            "api": "jp.co.nisshinsci.saas.framework.service.objectives.ProgressSnapshotService",
            "method": "runTask",
            "params": ""
        }
    },
    "activated": true,
    "id": "4a190a28-3616-4496-866f-0d499777673d",
    "_partition": "TaskDefinitions",
    "_etag": "\"050045aa-0000-2300-0000-627a33e40000\"",
    "type": "methodInvoke",
    "_ts": 1652175844
}, {
    "description": "目標一覧の統計情報バッチ",
    "cronExpression": "0 10 1 * * *",
    "httpRequest": {
        "body": {
            "api": "jp.co.nisshinsci.saas.framework.service.objectives.MemberWithObjectiveService",
            "method": "runTask",
            "params": ""
        }
    },
    "activated": true,
    "id": "3ced0744-eecf-406b-8292-4a2625e6039d",
    "_partition": "TaskDefinitions",
    "_etag": "\"050052aa-0000-2300-0000-627a34060000\"",
    "type": "methodInvoke",
    "_ts": 1652175878
}, {
    "description": "OrgCacheRebuildバッチ",
    "cronExpression": "0 15 1 * * *",
    "httpRequest": {
        "body": {
            "api": "jp.co.nisshinsci.saas.framework.service.OrgCacheService", "method": "runTask", "params": ""
        }
    },
    "activated": true,
    "id": "0e32b8ab-2ca3-4c3d-b10c-7549e7952abf",
    "_partition": "TaskDefinitions",
    "_etag": "\"050063aa-0000-2300-0000-627a34280000\"",
    "type": "methodInvoke",
    "_ts": 1652175912
}]

function setUrl(url) {
    return `${host}${url}`;
}

async function GET(url) {
    const response = await fetch(setUrl(url), {
        method: 'GET',
    });
    return response.json(); // parses JSON response into native JavaScript objects

}

async function PUT(url, data) {
    new Promise((resolve, reject) => {
        const response = fetch(setUrl(url), {
            method: 'PUT', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data),
        }).then(response => {
            resolve("ok");
        })
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    })

}

function getAyncDefinitions(tasksDefinitions, item) {
    for (let {description, cronExpression, httpRequest, activated} of devTaskDefinitions) {
        if (item.description.includes(description)) {
            item.cronExpression = cronExpression;
            item.httpRequest = httpRequest;
            item.activated = activated;
            return item;
        }
    }
}

async function syncTasksDefinitions() {
    let tasksDefinitions = await GET(`/api/curd/TaskDefinitions?query={"offset":0,"limit":100}`);
    for (let item of tasksDefinitions) {
        await PUT('/api/curd/TaskDefinitions', getAyncDefinitions(tasksDefinitions, item));
    }
}

(async function () {
    await syncTasksDefinitions();
})();

