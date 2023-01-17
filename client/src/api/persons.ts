const { REACT_APP_HOST_NAME, REACT_APP_SERVER_PORT } = process.env;

export async function fetchPersons() {
    const response = await fetch(
        `${REACT_APP_HOST_NAME}:${REACT_APP_SERVER_PORT}/person`
    );

    if (!response.ok) {
        console.log(`An error has occurred: ${response.statusText}`);
        return;
    }

    const record = await response.json();

    console.log(record);
    return record;
}

export async function fetchGeo() {
    const response = await fetch(
        `${REACT_APP_HOST_NAME}:${REACT_APP_SERVER_PORT}/geo`
    );

    if (!response.ok) {
        console.log(`An error has occurred: ${response.statusText}`);
        return;
    }

    const record = await response.json();

    console.log('--- geo', record);
    return record;
}