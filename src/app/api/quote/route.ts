import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const formSubmitPayload = {
      ...payload,
      _subject: payload._subject || `New Luxury Hamper Quote Inquiry (${payload.Reference_ID || "NEW"})`,
      _cc: "Sweta.hawkdesigning@gmail.com",
      _template: "table",
      _captcha: "false",
    };

    const origin = request.headers.get("origin") || request.headers.get("referer") || "https://kiaras.com";
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: origin.endsWith("/") ? origin : `${origin}/`,
    };

    // 1. Dispatch to primary inbox: anujsachan98@gmail.com (with _cc)
    const resAnuj = await fetch("https://formsubmit.co/ajax/anujsachan98@gmail.com", {
      method: "POST",
      headers,
      body: JSON.stringify(formSubmitPayload),
    });

    const dataAnuj = await resAnuj.json().catch(() => null);

    // 2. Direct dispatch to Sweta.hawkdesigning@gmail.com as a dual safety mechanism
    try {
      await fetch("https://formsubmit.co/ajax/Sweta.hawkdesigning@gmail.com", {
        method: "POST",
        headers,
        body: JSON.stringify(formSubmitPayload),
      });
    } catch (dualErr) {
      console.warn("Direct dual email dispatch warning:", dualErr);
    }

    return NextResponse.json({
      success: true,
      message: "Quote inquiry received and dispatched successfully",
      referenceId: payload.Reference_ID,
      response: dataAnuj,
    });
  } catch (error: unknown) {
    console.error("Quote API submission error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
