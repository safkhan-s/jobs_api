const getAllJobs = async (req, res, next) => {
  res.send("all jobs");
};

const getJob = async (req, res, next) => {
  res.send("one job");
};

const createJob = async (req, res, next) => {
  res.send("create job");
};

const updateJob = async (req, res, next) => {
  res.send("update job");
};

const deleteJob = async (req, res, next) => {
  res.send("delete job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
