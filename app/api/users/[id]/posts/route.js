import Prompt from "@models/prompt";
import connectToDb from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();

    const {id} = await params;

    const prompts = await Prompt.find({ creator: id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};