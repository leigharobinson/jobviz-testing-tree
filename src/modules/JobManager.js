const remoteURL = "http://localhost:8088";

export default {
  getAll() {
    return fetch(`/api/convertcsv.json`).then((result) => result.json());
  },
  // getJob(param) {
  //     return fetch(`${remoteURL}/jobs?title=${param}`).then((result) => result.json());
  // }
};
