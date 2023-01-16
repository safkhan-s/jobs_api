const { StatusCodes } = require("http-status-codes");

const Job = require("../models/Job");
const { BadRequestError, UnauthentucatedError } = require("../errors");

const getAllJobs = async (req, res, next) => {
  const userId = req.user.userId;
  if (!userId) {
    throw new UnauthentucatedError("Invalid Credentials!");
  }
  const userJobs = await Job.find({ createdBy: userId }).sort("createdAt");

  res
    .status(StatusCodes.OK)
    .json({ status: "success", data: { count: userJobs.length, userJobs } });
};

const getJob = async (req, res, next) => {
  const userId = req.user.userId;
  const jobId = req.params.id;
  if (!userId) {
    throw new UnauthentucatedError("Invalid Credentials!");
  }
  const userJob = await Job.find({ _id: jobId });
  if (!userJob) {
    throw new BadRequestError(`Job not found!id:${jobId}`);
  }
  res.status(StatusCodes.OK).json({ status: "success", data: { userJob } });
};

const createJob = async (req, res, next) => {
  req.body.createdBy = req.user.userId;
  if (!req.user.userId) {
    throw new UnauthentucatedError("Invalid Credentials!");
  }
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ status: "success", data: { job } });
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
