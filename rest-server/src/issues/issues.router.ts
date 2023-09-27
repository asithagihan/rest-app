/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as IssueService from "./issues.service";
import { IBaseIssue, IIssue } from "./issue.interface";

/**
 * Router Definition
 */
export const issuesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET issues/:id

issuesRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const issue: IIssue = await IssueService.find(id);
    if (issue) {
      return res.status(200).send(issue);
    }
    res.status(404).send("issue not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST issues

issuesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const issue: IBaseIssue = req.body;
    const newIssue = await IssueService.create(issue);
    res.status(201).json(newIssue);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT issues/:id

issuesRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const issueUpdate: IIssue = req.body;
    const updatedIssue = await IssueService.update(id, issueUpdate);
    res.status(200).json(updatedIssue);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE issues/:id

issuesRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await IssueService.remove(id);
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
