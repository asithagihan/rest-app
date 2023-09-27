// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { IBaseIssue, IIssue } from "./issue.interface";
import { Issue } from "../entity/issue";
import { dataSource } from "../app-data-source";
const itemRepository = dataSource.getRepository(Issue);

/**
 * Service Methods
 */

export const find = async (id: number): Promise<IIssue> => {
  const item = await itemRepository.findOneBy({
    id,
  });
  return item;
};

export const create = async (newItem: IBaseIssue): Promise<IIssue> => {
  console.log("create : ", newItem);
  const item = await itemRepository.save(newItem);

  return item;
};

export const update = async (
  id: number,
  itemUpdate: IBaseIssue
): Promise<IIssue | null> => {
  console.log("update : ", itemUpdate);
  const item = await itemRepository.save({
    id,
    ...itemUpdate,
  });

  if (!item) {
    return null;
  }

  return item;
};

export const remove = async (id: number): Promise<null | void> => {
  console.log("delete", id);
  const result = await itemRepository.delete(id);
  console.log(result);
  if (!result) {
    return null;
  }
};
