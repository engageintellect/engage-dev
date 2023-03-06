import { Client } from "@notionhq/client";
import { METHODS } from "http";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId: string = process.env.NOTION_DATABASE_ID!;

async function POST(text: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    });
    // console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error);
  }
}

POST("testing page");
