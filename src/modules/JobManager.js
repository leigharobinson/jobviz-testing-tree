const remoteURL = "http://localhost:8088";

export default {
    getAll() {
        return fetch(`${remoteURL}/jobs`).then((result) => result.json());
      },
    getLevel(param) {
        return fetch(`${remoteURL}/${param}`)
    }
}