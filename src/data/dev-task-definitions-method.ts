export let devTaskDefinitions = [
    {
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
        "id": "e1bfe219-f5a2-47a4-b2c1-e9fb30b35e22",
        "_partition": "TaskDefinitions",
        "_etag": "\"a000f0e6-0000-2300-0000-627e19af0000\"",
        "type": "methodInvoke",
        "_ts": 1652431279
    },
    {
        "description": "データシート定義自動修正",
        "cronExpression": "0 30 1 * * *",
        "httpRequest": {
            "body": {
                "api": "jp.smartcompany.saas.talent.service.sheet.SheetContentV2Service",
                "method": "runTask2",
                "params": "{}"
            }
        },
        "activated": true,
        "id": "c2df9c74-3813-4daa-8bb1-1c8861d96699",
        "_partition": "TaskDefinitions",
        "_etag": "\"a000aee9-0000-2300-0000-627e19f90000\"",
        "type": "methodInvoke",
        "_ts": 1652431353
    },
    {
        "description": "時系列処理バッチ",
        "cronExpression": "0 0 2 * * *",
        "httpRequest": {
            "body": {
                "api": "jp.smartcompany.saas.talent.service.timeseries.TimeSeriesTaskService",
                "method": "runTask",
                "params": "{}"
            }
        },
        "activated": true,
        "id": "ae85cd40-4320-43bb-a5af-30f6ae332eac",
        "_partition": "TaskDefinitions",
        "_etag": "\"a00060ee-0000-2300-0000-627e1a710000\"",
        "type": "methodInvoke",
        "_ts": 1652431473
    },
    {
        "description": "OrgCacheRebuildバッチ",
        "cronExpression": "0 15 1 * * *",
        "httpRequest": {
            "body": {
                "api": "jp.co.nisshinsci.saas.framework.service.OrgCacheService",
                "method": "runTask",
                "params": ""
            }
        },
        "activated": true,
        "id": "a0ebb67f-5a3d-45d9-bf5e-72cc6e9b8312",
        "_partition": "TaskDefinitions",
        "_etag": "\"a000f6e6-0000-2300-0000-627e19af0000\"",
        "type": "methodInvoke",
        "_ts": 1652431279
    },
    {
        "description": "目標の進捗集計バッチ",
        "cronExpression": "0 5 1 * * *",
        "httpRequest": {
            "body": {
                "api": "jp.smartcompany.saas.talent.service.objectives.ProgressSnapshotService",
                "method": "runTask",
                "params": ""
            }
        },
        "activated": true,
        "id": "96525429-90e7-482c-a585-253ae9fe0415",
        "_partition": "TaskDefinitions",
        "_etag": "\"a00021fc-0000-2300-0000-627e1bd30000\"",
        "type": "methodInvoke",
        "_ts": 1652431827
    },
    {
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
        "id": "45e1b3b0-cea1-4609-8c9b-0fbe67c04849",
        "_partition": "TaskDefinitions",
        "_etag": "\"a000f2e6-0000-2300-0000-627e19af0000\"",
        "type": "methodInvoke",
        "_ts": 1652431279
    },
    {
        "description": "目標一覧の統計情報バッチ",
        "cronExpression": "0 10 1 * * *",
        "httpRequest": {
            "body": {
                "api": "jp.smartcompany.saas.talent.service.objectives.MemberWithObjectiveService",
                "method": "runTask",
                "params": "{}"
            }
        },
        "activated": true,
        "id": "33b2fcc0-4d49-41b6-adb1-e34c4ba73553",
        "_partition": "TaskDefinitions",
        "_etag": "\"a000f7f8-0000-2300-0000-627e1b820000\"",
        "type": "methodInvoke",
        "_ts": 1652431746
    },
    {
        "description": "毎日の自動計算とバッチ処理",
        "cronExpression": "0 25 1 * * *",
        "httpRequest": {
            "body": {
                "api": "jp.smartcompany.saas.talent.service.sheet.SheetContentV2Service",
                "method": "runTask",
                "params": ""
            }
        },
        "activated": true,
        "id": "2de3b4f7-e714-4d82-81e2-cc7701fcb293",
        "_partition": "TaskDefinitions",
        "_etag": "\"a000f8e6-0000-2300-0000-627e19af0000\"",
        "type": "methodInvoke",
        "_ts": 1652431279
    },
    {
        "description": "人事評価毎日の自動計算とバッチ処理",
        "cronExpression": "0 35 1 * * *",
        "type": "methodInvoke",
        "httpRequest": {
            "body": {
                "api": "jp.smartcompany.saas.talent.service.assessment.AssessmentSheetService",
                "method": "runTask",
                "params": "{}"
            }
        },
        "activated": true,
        "id": "0ec8acb5-061e-4d74-85b6-94fd1d6db39e",
        "_partition": "TaskDefinitions",
        "_etag": "\"a0003cfe-0000-2300-0000-627e1c0e0000\"",
        "_ts": 1652431886
    }
];
