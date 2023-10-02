import axios from "axios";

const scrumApi = axios.create({
  baseURL: "http://localhost:8000/api",
});

export async function findAll() {
  try {
    return await scrumApi.get("/estudiantes");
  } catch (error) {
    console.log(error);
  }
}

export async function findOne(id) {
  try {
    return await scrumApi.get(`/estudiantes/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function create(studentData) {
  try {
    return await scrumApi.post("/estudiantes", studentData);
  } catch (error) {
    console.log(error);
  }
}
