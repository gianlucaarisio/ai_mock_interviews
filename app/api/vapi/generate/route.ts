import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getRandomInterviewCover } from "@/lib/utils";
import { db } from "@/firebase/admin";

export async function GET() {
  return Response.json({ success: true, data: "GRAZIE" }, { status: 200 });
}

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepara delle domande per un colloquio.
        Il ruolo lavorativo è ${role}.
        L'esperienza lavorativa è ${level}.
        Le tecnologie usate in questo lavoro sono: ${techstack}.
        Le domanda dovranno essere del tipo comportamentale o tecniche: ${type}.
        La quantità di domande è: ${amount}.
        Perfavore restituisci solo le domande, senza altro testo aggiuntivo.
        Le domanda saranno lette da un assistente vocale AI quindi non usare "/" o "*" o qualunque altro carattere speciale che potrebbe interrompere la letturamdell'assistente vocale.
        Ritorna le domande formattate così:
        ["Question 1", "Question 2", "Question 3"]
        
        Grazie! <3 
    `,
    });

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);

    return Response.json({ success: false, error }, { status: 500 });
  }
}
