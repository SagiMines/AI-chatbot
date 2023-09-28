import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

/* 
API Call to 'https://api.pawan.krd/v1' ChatGPT alternative 
AI api to get the answers.
*/
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = 'https://api.pawan.krd/v1/chat/completions';
    const headers = {
      Authorization: `Bearer ${process.env.CHATBOT_API_KEY}`,
      'Content-type': 'application/json',
    };
    const ApiResponse = await axios.post(url, body, { headers });
    return NextResponse.json(ApiResponse.data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
