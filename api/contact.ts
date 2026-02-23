export default async function handler(req: any, res: any) {
    // Simple guard for non-POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'Missing RESEND_API_KEY' });
        }

        // Dynamic import to avoid top-level crash if module is missing during initialization
        const { Resend } = await import('resend');
        const resend = new Resend(apiKey);

        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'manishkumarkumar385@gmail.com',
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

        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error: any) {
        console.error('API Error:', error);
        return res.status(500).json({
            error: 'Failed to send message',
            details: error.message || 'Unknown runtime error'
        });
    }
}
