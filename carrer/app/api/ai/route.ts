// app/api/route.js 👈🏽

import { NextResponse } from "next/server";

// To handle a POST request to /api
export async function POST(request: Request) {
  const { interests, skills } = await request.json();
  console.log("Interests:", interests);
  console.log("Skills:", skills);
  try {
    fetch(
      "  https://api.replicate.com/v1/models/meta/meta-llama-3-70b-instruct/predictions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer r8_UivNmLG02uu3tqJrkCc7RAa1vhfMIgl1TXRCv",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: {
            top_k: 50,
            top_p: 0.9,
            prompt: "dancing",
            max_tokens: 512,
            min_tokens: 0,
            temperature: 0.6,
            prompt_template:
              "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a career guidance assistant to help people with career guidance here is what i expect:\nPersonalized career suggestions: A list of suitable career paths based on their interests, skills, and preferences.\nJob descriptions and requirements: Detailed information about specific jobs, including responsibilities, salary ranges, and required skills.\nCareer development resources: Recommendations for courses, training programs, or certifications to enhance their career prospects.\nJob search tips and advice: Guidance on resume building, networking, interviewing, and other job search strategies.\nCareer assessments and quizzes: Interactive tools to help users identify their strengths, weaknesses, and interests.\nIndustry insights and trends: Information about growing industries, job market demands, and required skills.\nEducation and training options: Suggestions for degrees, diplomas, or certifications relevant to their desired career path.\nProfessional development advice: Guidance on building a professional network, creating a personal brand, and advancing in their career.\nInterview preparation: Sample questions, answers, and tips to help users prepare for job interviews.\nEncouragement and motivation: Inspirational messages and quotes to help users stay motivated and focused on their career goals.<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
            presence_penalty: 1.15,
            frequency_penalty: 0.2,
          },
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        try {
          fetch(data.urls.get, {
            method: "GET",
            headers: {
              Authorization: "Bearer r8_UivNmLG02uu3tqJrkCc7RAa1vhfMIgl1TXRCv",
            },
          }).then((res) => res.json()).then((data) => {
            console.log("data", data);
          });
        } catch (error) {}
        console.log("data", data);
      });
  } catch (error) {
    console.log("error", error);
  }

  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
