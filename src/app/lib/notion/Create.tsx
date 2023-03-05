import { Client } from "@notionhq/client";
import { METHODS } from "http";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId: string = process.env.NOTION_DATABASE_ID!;

export default function Create() {
  async function CREATE(text: string): Promise<void> {
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
      console.log(response.object);
      console.log("Success! Entry added.");
    } catch (error) {
      console.error(error);
    }
  }

  CREATE("this is a function");

  return (
    <div>
      <div>hello world</div>
      <button className="bg-red-500 p-5">click me</button>
    </div>
  );
}
