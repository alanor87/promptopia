import connectToDb from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  try {
    const { userId, prompt, tag } = await req.json();
    await connectToDb();
    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
