const API_URL = import.meta.env.VITE_API_URL;
if (!API_URL) {
  console.error("API URL is not defined");
  throw new Error("API URL is not defined");
}
export const USER_API_ENDPOINT = `${API_URL}/api/user`;
export const JOB_API_ENDPOINT = `${API_URL}/api/job`;
export const APPLICATION_API_ENDPOINT = `${API_URL}/api/application`;
export const COMPANY_API_ENDPOINT = `${API_URL}/api/company`;
