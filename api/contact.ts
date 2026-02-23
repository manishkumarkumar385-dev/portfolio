import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
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

    try {
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'manishkumarkumar385@gmail.com', // Updated to user's likely email based on GitHub
            subject: `New Portfolio Message: ${subject || 'No Subject'}`,
            html: `
        <h2>New Message from your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        console.log('Email sent successfully:', data);

        return response.status(200).json({
            message: 'Message sent successfully!',
            id: data.data?.id
        });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return response.status(500).json({
            error: 'Failed to send message',
            details: error.message || 'Unknown error'
        });
    }
}
