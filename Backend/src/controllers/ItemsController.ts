import { Request, Response } from "express";
import knex from "../database/connection";

export default class ItemsController {
  async index(request: Request, response: Response) {
    // index utilizado para listagem
    const items = await knex("items").select("*"); //SELECT * FROM items;

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        name: item.title,

        image_url: `http://192.168.0.102:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}
