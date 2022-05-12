import {devTaskDefinitions} from "../data/dev-task-definitions";

export async function GET(url: string) {
    const response = await fetch(url, {
        method: 'GET',
    });
    return response.json(); // parses JSON response into native JavaScript objects

}

export async function PUT(url: string, data: any = {}) {
    new Promise((resolve, reject) => {
        const response = fetch(url, {
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

export function getAyncDefinitions(tasksDefinitions: any, item: any) {
    for (let {description, cronExpression, httpRequest, activated} of devTaskDefinitions) {
        if (item.description.includes(description)) {
            item.cronExpression = cronExpression;
            item.httpRequest = httpRequest;
            item.activated = activated;
            return item;
        }
    }
}

export async function syncTasksDefinitions(host: string) {
    let tasksDefinitions = await GET(`${host}/api/curd/TaskDefinitions?query={"offset":0,"limit":100}`);
    for (let item of tasksDefinitions) {
        await PUT(`${host}/api/curd/TaskDefinitions`, getAyncDefinitions(tasksDefinitions, item));
    }
}
