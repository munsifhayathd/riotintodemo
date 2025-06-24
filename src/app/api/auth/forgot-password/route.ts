import { db } from "@/lib/db";
import { forgotPasswordSchema } from "@/lib/validations/auth";
import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = forgotPasswordSchema.parse(body);

    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Return success even if user doesn't exist for security
      return NextResponse.json(
        { message: "If an account exists, you will receive a reset email" },
        { status: 200 }
      );
    }

    // Generate reset token
    const resetToken = randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

    await db.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExp: resetTokenExpiry,
      },
    });

    // Here you would normally send an email with the reset link
    // For demo purposes, we'll just return the token
    return NextResponse.json(
      { message: "Reset instructions sent", resetToken },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
} 