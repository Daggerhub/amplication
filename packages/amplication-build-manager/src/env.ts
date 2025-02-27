/* eslint-disable */
export class Env {
  static readonly PORT = "PORT";

  static readonly CODE_GENERATION_REQUEST_TOPIC =
    "CODE_GENERATION_REQUEST_TOPIC";
  static readonly CODE_GENERATION_SUCCESS_TOPIC =
    "CODE_GENERATION_SUCCESS_TOPIC";
  static readonly CODE_GENERATION_FAILURE_TOPIC =
    "CODE_GENERATION_FAILURE_TOPIC";

  static readonly CREATE_PR_REQUEST_TOPIC = "CREATE_PR_REQUEST_TOPIC";
  static readonly CREATE_PR_SUCCESS_TOPIC = "CREATE_PR_SUCCESS_TOPIC";
  static readonly CREATE_PR_FAILURE_TOPIC = "CREATE_PR_FAILURE_TOPIC";

  static readonly DSG_LOG_TOPIC = "DSG_LOG_TOPIC";

  static readonly DSG_RUNNER_URL = "DSG_RUNNER_URL";

  static readonly BUILD_ARTIFACTS_BASE_FOLDER = "BUILD_ARTIFACTS_BASE_FOLDER";
  static readonly BUILD_ARTIFACTS_CODE_FOLDER = "BUILD_ARTIFACTS_CODE_FOLDER";

  static readonly DSG_JOBS_BASE_FOLDER = "DSG_JOBS_BASE_FOLDER";
  static readonly DSG_JOBS_CODE_FOLDER = "DSG_JOBS_CODE_FOLDER";
  static readonly DSG_JOBS_RESOURCE_DATA_FILE = "DSG_JOBS_RESOURCE_DATA_FILE";
}
