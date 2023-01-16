const { REACT_APP_HOST_NAME, REACT_APP_SERVER_PORT } = process.env;

export async function fetchPersons() {
    const response = await fetch(
        `${REACT_APP_HOST_NAME}:${REACT_APP_SERVER_PORT}/person`
    );

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const record = await response.json();

    console.log(record);
    return record;
}