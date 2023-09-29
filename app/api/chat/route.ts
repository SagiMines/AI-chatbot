import { NextRequest, NextResponse } from 'next/server';
import PaLM from 'palm-api';
/* 
API Call to PaLM API with the use of the 'palm-api' package 
to get the answers.
*/
export async function POST(request: NextRequest) {
  try {
    if (process.env.PALM_API_KEY) {
      const { query } = await request.json();
      console.log(query);
      let bot = new PaLM(process.env.PALM_API_KEY);
      const answer = await bot.ask(query);
      console.log(answer);
      return NextResponse.json(answer, { status: 200 });
    } else {
      return NextResponse.json(
        { message: 'No API key was provided.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
