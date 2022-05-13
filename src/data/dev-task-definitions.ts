export let devTaskDefinitions = [
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
        "id": "f0df5b13-5c83-4b47-8764-2aef426b83d9",
        "_partition": "TaskDefinitions",
        "_etag": "\"0700340b-0000-2300-0000-627df3580000\"",
        "_ts": 1652421464
    },
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
        "id": "e192d314-276b-4262-8a43-bd0f62b70511",
        "_partition": "TaskDefinitions",
        "_etag": "\"06006b99-0000-2300-0000-627cac3a0000\"",
        "type": "methodInvoke",
        "_ts": 1652337722
    },
    {
        "description": "データシート定義自動修正",
        "cronExpression": "0 30 1 * * *",
        "httpRequest": {
            "body": {
                "api": "/api/batch/sheetcontents-v2/itemmodification",
                "method": "PUT",
                "params": ""
            }
        },
        "activated": true,
        "id": "b614c17a-8866-40bf-9813-fca6887428d3",
        "_partition": "TaskDefinitions",
        "_etag": "\"06006c99-0000-2300-0000-627cac3b0000\"",
        "type": "http",
        "_ts": 1652337723
    },
    {
        "description": "時系列処理バッチ",
        "cronExpression": "0 0 2 * * *",
        "httpRequest": {
            "body": {
                "api": "jp.smartcompany.saas.talent.service.timeseries.TimeSeriesTaskService",
                "method": "runTask",
                "params": ""
            }
        },
        "activated": true,
        "id": "b4d162c4-65b0-4a66-bb29-b298534d8135",
        "_partition": "TaskDefinitions",
        "_etag": "\"060067a8-0000-2300-0000-627cce240000\"",
        "type": "methodInvoke",
        "_ts": 1652346404
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
        "id": "729eeb38-8b95-47d3-a38f-0be6299f08e0",
        "_partition": "TaskDefinitions",
        "_etag": "\"0700280b-0000-2300-0000-627df33d0000\"",
        "type": "methodInvoke",
        "_ts": 1652421437
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
        "id": "675cb5b5-5303-4a01-b5a5-9202e6d88513",
        "_partition": "TaskDefinitions",
        "_etag": "\"060069a8-0000-2300-0000-627cce250000\"",
        "type": "methodInvoke",
        "_ts": 1652346405
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
        "id": "4a190a28-3616-4496-866f-0d499777673d",
        "_partition": "TaskDefinitions",
        "_etag": "\"06006aa8-0000-2300-0000-627cce260000\"",
        "type": "methodInvoke",
        "_ts": 1652346406
    },
    {
        "description": "目標一覧の統計情報バッチ",
        "cronExpression": "0 10 1 * * *",
        "httpRequest": {
            "body": {
                "api": "jp.smartcompany.saas.talent.service.objectives.MemberWithObjectiveService",
                "method": "runTask",
                "params": ""
            }
        },
        "activated": true,
        "id": "3ced0744-eecf-406b-8292-4a2625e6039d",
        "_partition": "TaskDefinitions",
        "_etag": "\"06006fa8-0000-2300-0000-627cce2b0000\"",
        "type": "methodInvoke",
        "_ts": 1652346411
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
        "id": "0e32b8ab-2ca3-4c3d-b10c-7549e7952abf",
        "_partition": "TaskDefinitions",
        "_etag": "\"060070a8-0000-2300-0000-627cce2b0000\"",
        "type": "methodInvoke",
        "_ts": 1652346411
    }
];
