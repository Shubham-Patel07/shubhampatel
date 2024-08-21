import { NextResponse } from "next/server";

export async function POST(req) {
    const { fullname, email, subject, message } = await req.json();

    console.log("Full name", fullname);
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);

    return NextResponse.json({msg: ["Hi from contactService"]})
}
