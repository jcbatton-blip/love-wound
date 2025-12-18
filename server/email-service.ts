/**
 * Email service for sending automated emails
 * Uses Gmail via MCP CLI for sending
 */

import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}

/**
 * Send an email using Gmail MCP CLI
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const emailPayload = {
      messages: [
        {
          to: [options.to],
          subject: options.subject,
          content: options.body
        }
      ]
    };

    // Write payload to temp file
    const tempFile = `/tmp/email-${Date.now()}.json`;
    await execAsync(`echo '${JSON.stringify(emailPayload).replace(/'/g, "'\\''")}' > ${tempFile}`);

    // Send via MCP CLI
    const { stdout, stderr } = await execAsync(
      `manus-mcp-cli tool call gmail_send_messages --server gmail --input "$(cat ${tempFile})"`,
      { timeout: 30000 }
    );

    // Clean up temp file
    await execAsync(`rm -f ${tempFile}`);

    console.log("Email sent successfully:", {
      to: options.to,
      subject: options.subject
    });

    return true;
  } catch (error: any) {
    console.error("Failed to send email:", error.message);
    return false;
  }
}
