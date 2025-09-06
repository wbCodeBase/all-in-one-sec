import { NextRequest, NextResponse } from "next/server"
// import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const { name, email, phone, company, message } = await req.json()
  // const { name, email, phone, company, companySize, serviceInterest, message } = await req.json()



  // const transporter = nodemailer.createTransport({
  //   service: "Gmail",
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // })

  // const mailOptions = {
  //   from: `"Website Contact Form" <${process.env.EMAIL_USER}>`, // ✅ Your own verified email
  //   to: process.env.EMAIL_USER,
  //   //   replyTo: email, // ✅ So when you hit reply, it goes to the visitor
  //   subject: "WeOneAi Demo Request Form Submission",
  //   html: `
  //   <p><strong>Name:</strong> ${name}</p>
  //   <p><strong>Email:</strong> ${email}</p>
  //   <p><strong>Phone:</strong> ${phone}</p>
  //   <p><strong>Company:</strong> ${company}</p>
  //   <p><strong>Message:</strong><br>${message}</p>
  // `,
  // }


  try {

    // const ghlResponse = 
    await fetch("https://rest.gohighlevel.com/v1/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IkhsRkoxVzluY21abXkxZENIaUp2IiwidmVyc2lvbiI6MSwiaWF0IjoxNzUwMjQzMTAzMTAxLCJzdWIiOiJ1ZUNmaXJSc3VKY0d4WHpRdnZKayJ9.3DDqNo7Qj8sFt4kKKEi0ANrBTtGKUvYTvY5xkLirFR0`, // keep token in env
      },
      body: JSON.stringify({
        firstName: name,
        email: email,
        phone: phone,
        company: company,
        source: "All-in-one landing page",
        customField: {
          service: message,
        },
      }),
    });

    // const ghlData = await ghlResponse.json();
    // console.log("ghlData", ghlData);


    // await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
