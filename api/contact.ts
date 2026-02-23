import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = request.body;

    // Basic validation
    if (!name || !email || !message) {
        return response.status(400).json({ error: 'Missing required fields' });
    }

    // LOGIC: For now, we just log and return success. 
    // In the next step, we can integrate a service like SendGrid or Resend to send actual emails.
    console.log('Received message:', { name, email, subject, message });

    return response.status(200).json({
        message: 'Message received successfully!',
        receivedData: { name, email, subject }
    });
}
